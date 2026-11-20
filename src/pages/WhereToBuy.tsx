import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MapPin, ShoppingBag, ArrowUpRight, Mail, Clock } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink, Eyebrow, Reveal } from '../components/ui'
import { OrderForm } from '../components/forms/OrderForm'
import { CurrencyToggle, formatPrice, useCurrency } from '../lib/currency'
import { MARKETS, ONLINE_RETAILERS, STORES, FULL_DIRECTORY_URL } from '../data/stockists'
import { PRODUCTS, PRICE_NOTE } from '../data/products'
import { SITE } from '../data/site'
import { IMG } from '../lib/img'

export default function WhereToBuy() {
  const [code, setCode] = useState('NG')
  const market = MARKETS.find((m) => m.code === code)!
  const [params] = useSearchParams()
  const { currency, setCurrency } = useCurrency()
  const chooseMarket = (c: string) => {
    setCode(c)
    if (c === 'NG') setCurrency('NGN')
    if (c === 'BJ') setCurrency('XOF')
  }

  return (
    <>
      <Seo
        title="Where to Buy"
        description="Buy PureDent online from Jumia and Konga or in stores across Nigeria. Order online in Naira or CFA for Nigeria and Benin Republic."
        image={IMG.shelves}
      />

      <section className="relative overflow-hidden bg-navy text-white">
        <Img src={IMG.shelves} alt="" priority sizes="100vw" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" aria-hidden />
        <div className="container-x relative pt-32 pb-16 sm:pt-40 lg:pb-24">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="sky">Where to Buy</Eyebrow>
            <h1 className="display-1 mt-6">Find PureDent.</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">Choose your country to see where PureDent is available.</p>
          </Reveal>

          <div role="tablist" aria-label="Choose your country" className="mt-10 flex flex-wrap gap-2">
            {MARKETS.map((m) => (
              <button
                key={m.code}
                role="tab"
                type="button"
                id={`tab-${m.code}`}
                aria-selected={m.code === code}
                aria-controls="market-panel"
                onClick={() => chooseMarket(m.code)}
                className={`flex items-center gap-3 border px-5 py-3 font-display text-sm font-bold transition-colors ${
                  m.code === code ? 'border-white bg-white text-navy' : 'border-white/25 text-white hover:border-white'
                }`}
              >
                <MapPin className="size-4" aria-hidden />
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div id="market-panel" role="tabpanel" aria-labelledby={`tab-${code}`}>
        <section className="border-b border-line bg-ice">
          <div className="container-x flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display font-bold text-navy">
              {market.name}
              <span className={`ml-3 px-2 py-1 text-[11px] tracking-wider uppercase ${market.status === 'available' ? 'bg-ocean text-white' : 'bg-white text-slate'}`}>
                {market.status === 'available' ? 'Available now' : 'Order online'}
              </span>
            </p>
            <p className="text-[15px] text-slate">{market.note}</p>
          </div>
        </section>

        {market.status === 'available' && (
          <>
            {/* Online */}
            <section className="bg-white py-16 lg:py-24">
              <div className="container-x grid gap-12 lg:grid-cols-12">
                <Reveal className="lg:col-span-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Shop online</p>
                  <h2 className="display-3 mt-4 text-navy">Delivered to your door.</h2>
                  <p className="mt-4 text-slate">Order from PureDent’s online retail partners in Nigeria.</p>
                </Reveal>
                <div className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-8">
                  {ONLINE_RETAILERS.map((r) => (
                    <a
                      key={r.name}
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-[200px] flex-col justify-between bg-white p-8 transition-colors hover:bg-ice"
                    >
                      <ShoppingBag className="size-6 text-ocean" strokeWidth={1.5} aria-hidden />
                      <div>
                        <p className="text-xs font-semibold tracking-[0.15em] text-slate uppercase">{r.label}</p>
                        <p className="mt-2 flex items-center justify-between font-display text-2xl font-bold text-navy">
                          {r.name}
                          <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                        </p>
                        <span className="sr-only">(opens in a new tab)</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Stores */}
            <section className="bg-mist py-16 lg:py-24">
              <div className="container-x grid gap-12 lg:grid-cols-12">
                <Reveal className="lg:col-span-4">
                  <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">In store</p>
                  <h2 className="display-3 mt-4 text-navy">Supermarkets & stores.</h2>
                  <p className="mt-4 text-slate">A selection of verified stockists in Lagos State. PureDent’s full directory lists stores across Nigeria.</p>
                  <div className="mt-8">
                    <ButtonLink to={FULL_DIRECTORY_URL} external variant="outline-dark">
                      Full store directory
                    </ButtonLink>
                  </div>
                </Reveal>
                <ul className="divide-y divide-line border-y border-line lg:col-span-8">
                  {STORES.map((s) => (
                    <li key={s.name} className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                      <div>
                        <p className="font-display text-lg font-bold text-navy">{s.name}</p>
                        <p className="text-[15px] text-slate">
                          {s.area}, {s.lga} · {s.state}
                        </p>
                      </div>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s.name} ${s.area} ${s.state} Nigeria`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-navy"
                      >
                        Get directions <ArrowUpRight className="size-4" aria-hidden />
                        <span className="sr-only">to {s.name} (opens Google Maps)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Product availability */}
            <section className="bg-white py-16 lg:py-24">
              <div className="container-x">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="display-3 text-navy">Available products</h2>
                  <CurrencyToggle />
                </div>
                <ul className="mt-10 grid gap-px bg-line sm:grid-cols-3">
                  {PRODUCTS.map((p) => (
                    <li key={p.slug} className="flex items-center gap-5 bg-white p-6">
                      <Img src={p.tube} alt="" widths={[384]} sizes="64px" className="h-28 w-auto" />
                      <div>
                        <p className="font-display font-bold text-navy">{p.shortName}</p>
                        <p className="mt-1 text-sm text-slate">
                          {formatPrice(p.prices[currency], currency)}
                          {p.size ? ` · ${p.size}` : ''}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate">{PRICE_NOTE}</p>
              </div>
            </section>
          </>
        )}
      </div>

      {/* Order */}
      <section id="order" className="scroll-mt-20 bg-ice py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Order online</p>
            <h2 className="display-3 mt-4 text-navy">Place your order.</h2>
            <p className="mt-4 text-slate">
              Choose your toothpaste, quantity and currency, then add your delivery details. When you submit, WhatsApp opens with your order ready
              to send to the PureDent team.
            </p>
            <p className="mt-4 text-[15px] text-slate">
              Retailer or distributor?{' '}
              <Link to="/contact" className="font-semibold text-navy underline underline-offset-4 hover:text-brand-red">
                Contact our team
              </Link>
              .
            </p>
            <ul className="mt-8 space-y-3 text-[15px] text-slate">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 text-ocean" aria-hidden />
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-navy">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 text-ocean" aria-hidden />
                {SITE.hours}
              </li>
            </ul>
          </Reveal>
          <div className="bg-white p-6 sm:p-10 lg:col-span-8">
            <OrderForm country={market.code === 'OTHER' ? '' : market.name} initialProduct={params.get('product') ?? ''} />
          </div>
        </div>
      </section>
    </>
  )
}
