import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { Minus, Plus, MessageCircle, Copy, Check, AlertCircle } from 'lucide-react'
import { TextField, TextArea, SelectField, Honeypot, SubmitButton } from './Fields'
import { PRODUCTS } from '../../data/products'
import { SITE } from '../../data/site'
import { CurrencyToggle, formatPrice, useCurrency } from '../../lib/currency'
import { buildOrderMessage, orderTotal, whatsappUrl } from '../../lib/order'

const COUNTRIES = ['Nigeria', 'Benin Republic', 'Other country']
const MAX_QTY = 100

type Values = {
  full_name: string
  phone: string
  country: string
  city: string
  address: string
  product: string
  quantity: string
  instructions: string
}
type Errors = Partial<Record<keyof Values, string>>

function validate(v: Values): Errors {
  const e: Errors = {}
  if (!v.full_name.trim()) e.full_name = 'Please enter your full name.'
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.'
  else if (!/^\+?[\d\s()-]{7,20}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number, including country code, e.g. +234 or +229.'
  if (!v.country) e.country = 'Please choose your country.'
  if (!v.city.trim()) e.city = 'Please enter your city or town.'
  if (v.address.trim().length < 6) e.address = 'Please enter your full delivery address.'
  if (!v.product) e.product = 'Please choose a product.'
  const q = Number(v.quantity)
  if (!Number.isInteger(q) || q < 1 || q > MAX_QTY) e.quantity = `Please enter a quantity between 1 and ${MAX_QTY}.`
  return e
}

type Status = 'idle' | 'opened' | 'blocked'

export function OrderForm({ initialProduct = '', country = '' }: { initialProduct?: string; country?: string }) {
  const { currency } = useCurrency()
  const [values, setValues] = useState<Values>({
    full_name: '',
    phone: '',
    country,
    city: '',
    address: '',
    product: initialProduct,
    quantity: '1',
    instructions: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  // keep in sync with the page's country tabs and product links
  useEffect(() => {
    if (country) setValues((v) => ({ ...v, country }))
  }, [country])
  useEffect(() => {
    if (initialProduct) setValues((v) => ({ ...v, product: initialProduct }))
  }, [initialProduct])

  const product = PRODUCTS.find((p) => p.slug === values.product)
  const qty = Number(values.quantity)
  const qtyValid = Number.isInteger(qty) && qty >= 1 && qty <= MAX_QTY
  const unitPrice = product ? product.prices[currency] : 0
  const total = product && qtyValid ? orderTotal(unitPrice, qty) : 0

  // A changed form invalidates a previously prepared message
  const signature = useMemo(() => JSON.stringify([values, currency]), [values, currency])
  useEffect(() => {
    setStatus('idle')
    setCopied(false)
  }, [signature])

  const set = (name: keyof Values, value: string) => {
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) setErrors((er) => ({ ...er, [name]: validate(next)[name] }))
  }
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => set(e.target.name as keyof Values, e.target.value)
  const onBlur = (e: { target: { name: string } }) => {
    const name = e.target.name as keyof Values
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((er) => ({ ...er, [name]: validate(values)[name] }))
  }
  const field = (name: keyof Values) => ({ name, value: values[name], onChange, onBlur, error: errors[name] })
  const step = (d: number) => {
    const n = Math.min(MAX_QTY, Math.max(1, (qtyValid ? qty : 1) + d))
    set('quantity', String(n))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])))
    const first = Object.keys(errs)[0]
    if (first) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    if (honeypot || !product) return
    const text = buildOrderMessage({
      name: values.full_name.trim(),
      phone: values.phone.trim(),
      country: values.country,
      city: values.city.trim(),
      address: values.address.trim(),
      product: product.name,
      quantity: qty,
      unitPrice,
      currency,
      instructions: values.instructions,
    })
    setMessage(text)
    // Opened synchronously inside the click so pop-up blockers allow it.
    let win: Window | null = null
    try {
      win = window.open(whatsappUrl(text), '_blank')
      if (win) win.opener = null
    } catch {
      win = null
    }
    setStatus(win ? 'opened' : 'blocked')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-6">
      <Honeypot value={honeypot} onChange={setHoneypot} />

      {/* Order details */}
      <fieldset className="space-y-6">
        <legend className="mb-4 font-display text-xs font-bold tracking-[0.2em] text-ocean uppercase">Your order</legend>
        <SelectField
          label="Toothpaste"
          required
          options={PRODUCTS.map((p) => ({ value: p.slug, label: `${p.name} — ${formatPrice(p.prices[currency], currency)}` }))}
          {...field('product')}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="f-quantity" className="mb-2 block text-sm font-semibold text-navy">
              Quantity<span className="text-brand-red"> *</span>
            </label>
            <div className={`flex border ${errors.quantity ? 'border-brand-red' : 'border-line'} bg-white`}>
              <button type="button" onClick={() => step(-1)} aria-label="Decrease quantity" className="flex w-12 items-center justify-center text-navy hover:bg-ice">
                <Minus className="size-4" aria-hidden />
              </button>
              <input
                id="f-quantity"
                name="quantity"
                type="number"
                inputMode="numeric"
                min={1}
                max={MAX_QTY}
                value={values.quantity}
                onChange={onChange}
                onBlur={onBlur}
                aria-invalid={!!errors.quantity}
                aria-describedby={errors.quantity ? 'f-quantity-err' : undefined}
                className="w-full min-w-0 border-x border-line py-3.5 text-center text-[15px] font-semibold text-ink outline-none [appearance:textfield] focus:bg-ice [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button type="button" onClick={() => step(1)} aria-label="Increase quantity" className="flex w-12 items-center justify-center text-navy hover:bg-ice">
                <Plus className="size-4" aria-hidden />
              </button>
            </div>
            {errors.quantity && (
              <p id="f-quantity-err" className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-brand-red">
                <AlertCircle className="size-3.5" aria-hidden />
                {errors.quantity}
              </p>
            )}
          </div>
          <div>
            <p id="currency-label" className="mb-2 block text-sm font-semibold text-navy">
              Currency<span className="text-brand-red"> *</span>
            </p>
            <CurrencyToggle className="w-full [&>button]:flex-1 [&>button]:py-3.5" />
          </div>
        </div>

        {/* Summary */}
        <dl className="divide-y divide-line border-y border-line bg-ice/60 px-5 text-[15px]" aria-live="polite">
          <div className="flex justify-between gap-4 py-3">
            <dt className="text-slate">Unit price</dt>
            <dd className="font-semibold text-ink">{product ? formatPrice(unitPrice, currency) : '—'}</dd>
          </div>
          <div className="flex justify-between gap-4 py-3">
            <dt className="text-slate">Quantity</dt>
            <dd className="font-semibold text-ink">{qtyValid ? qty : '—'}</dd>
          </div>
          <div className="flex items-baseline justify-between gap-4 py-4">
            <dt className="font-display font-bold text-navy">Total ({currency})</dt>
            <dd className="font-display text-2xl font-extrabold text-navy">{total ? formatPrice(total, currency) : '—'}</dd>
          </div>
        </dl>
      </fieldset>

      {/* Customer details */}
      <fieldset className="space-y-6 pt-4">
        <legend className="mb-4 font-display text-xs font-bold tracking-[0.2em] text-ocean uppercase">Delivery details</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField label="Full name" required autoComplete="name" {...field('full_name')} />
          <TextField label="Phone number" type="tel" required autoComplete="tel" hint="Include your country code, e.g. +234 or +229" {...field('phone')} />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <SelectField label="Country" required options={COUNTRIES} {...field('country')} />
          <TextField label="City / town" required autoComplete="address-level2" {...field('city')} />
        </div>
        <TextArea label="Delivery address" required rows={3} placeholder="House number, street, area, landmark" {...field('address')} />
        <TextArea label="Additional instructions" rows={3} placeholder="Delivery times, landmarks, anything else we should know" {...field('instructions')} />
      </fieldset>

      <div role="status" aria-live="polite">
        {status === 'opened' && (
          <div className="flex gap-4 border-l-2 border-ocean bg-ice p-5">
            <MessageCircle className="size-6 shrink-0 text-ocean" aria-hidden />
            <div>
              <p className="font-display font-bold text-navy">Your order message is ready in WhatsApp</p>
              <p className="mt-1 text-sm text-slate">
                Your order is <strong className="text-ink">not placed yet</strong> — please press <strong className="text-ink">Send</strong> in WhatsApp so
                our team receives it. Your details stay filled in here.
              </p>
              <OrderFallback message={message} copied={copied} onCopy={copy} />
            </div>
          </div>
        )}
        {status === 'blocked' && (
          <div className="flex gap-4 border-l-2 border-brand-red bg-brand-red/5 p-5">
            <AlertCircle className="size-6 shrink-0 text-brand-red" aria-hidden />
            <div>
              <p className="font-display font-bold text-navy">WhatsApp didn’t open</p>
              <p className="mt-1 text-sm text-slate">Nothing has been sent. Your details are saved in the form — try one of these options:</p>
              <OrderFallback message={message} copied={copied} onCopy={copy} intro={false} />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-slate">
          Submitting opens WhatsApp with your order ready to send to the PureDent team. Your order is placed once you press Send.
        </p>
        <SubmitButton status="idle">Place order</SubmitButton>
      </div>
    </form>
  )
}

function OrderFallback({ message, copied, onCopy, intro = true }: { message: string; copied: boolean; onCopy: () => void; intro?: boolean }) {
  return (
    <div className="mt-3 space-y-2 text-sm">
      {intro && <p className="text-slate">WhatsApp didn’t open, or you don’t have it installed?</p>}
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="font-semibold text-ocean underline underline-offset-4">
          Open WhatsApp again
        </a>
        <button type="button" onClick={onCopy} className="inline-flex items-center gap-1.5 font-semibold text-ocean underline underline-offset-4">
          {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
          {copied ? 'Order copied' : 'Copy order message'}
        </button>
        <a
          href={`mailto:${SITE.email}?subject=${encodeURIComponent('PureDent order')}&body=${encodeURIComponent(message)}`}
          className="font-semibold text-ocean underline underline-offset-4"
        >
          Email the order instead
        </a>
      </div>
    </div>
  )
}
