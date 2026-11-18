import type { ChangeEvent, ReactNode } from 'react'
import { CheckCircle2, AlertCircle, Mail, Loader2 } from 'lucide-react'
import type { Status } from './useForm'
import { SITE } from '../../data/site'

type Base = {
  label: string
  name: string
  value: string
  error?: string
  hint?: string
  required?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onBlur: (e: { target: { name: string } }) => void
  tone?: 'light' | 'dark'
}

const inputCls = (error?: string, tone: 'light' | 'dark' = 'light') =>
  `w-full rounded-[3px] border px-4 py-3.5 text-[15px] transition-colors outline-none ${
    tone === 'dark'
      ? 'border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-sky'
      : 'border-line bg-white text-ink placeholder:text-slate/50 focus:border-ocean focus:ring-2 focus:ring-ocean/15'
  } ${error ? '!border-brand-red' : ''}`

function Wrap({ label, name, error, hint, required, children, tone = 'light' }: Omit<Base, 'value' | 'onChange' | 'onBlur'> & { children: ReactNode }) {
  return (
    <div>
      <label htmlFor={`f-${name}`} className={`mb-2 block text-sm font-semibold ${tone === 'dark' ? 'text-white' : 'text-navy'}`}>
        {label}
        {required ? <span className="text-brand-red"> *</span> : <span className="font-normal text-slate/70"> (optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`f-${name}-hint`} className="mt-1.5 text-xs text-slate">
          {hint}
        </p>
      )}
      {error && (
        <p id={`f-${name}-err`} className="mt-1.5 flex items-center gap-1.5 text-[13px] font-medium text-brand-red">
          <AlertCircle className="size-3.5" aria-hidden />
          {error}
        </p>
      )}
    </div>
  )
}

const describedBy = (name: string, error?: string, hint?: string) => (error ? `f-${name}-err` : hint ? `f-${name}-hint` : undefined)

export function TextField({ type = 'text', autoComplete, placeholder, ...p }: Base & { type?: string; autoComplete?: string; placeholder?: string }) {
  return (
    <Wrap {...p}>
      <input
        id={`f-${p.name}`}
        name={p.name}
        type={type}
        value={p.value}
        onChange={p.onChange}
        onBlur={p.onBlur}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!p.error}
        aria-required={p.required}
        aria-describedby={describedBy(p.name, p.error, p.hint)}
        className={inputCls(p.error, p.tone)}
      />
    </Wrap>
  )
}

export function TextArea(p: Base & { rows?: number; placeholder?: string }) {
  return (
    <Wrap {...p}>
      <textarea
        id={`f-${p.name}`}
        name={p.name}
        rows={p.rows ?? 5}
        value={p.value}
        onChange={p.onChange}
        onBlur={p.onBlur}
        placeholder={p.placeholder}
        aria-invalid={!!p.error}
        aria-required={p.required}
        aria-describedby={describedBy(p.name, p.error, p.hint)}
        className={`${inputCls(p.error, p.tone)} resize-y`}
      />
    </Wrap>
  )
}

export function SelectField({ options, ...p }: Base & { options: string[] }) {
  return (
    <Wrap {...p}>
      <select
        id={`f-${p.name}`}
        name={p.name}
        value={p.value}
        onChange={p.onChange}
        onBlur={p.onBlur}
        aria-invalid={!!p.error}
        aria-required={p.required}
        aria-describedby={describedBy(p.name, p.error, p.hint)}
        className={`${inputCls(p.error, p.tone)} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23102C50' stroke-width='1.5'/%3E%3C/svg%3E")] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Wrap>
  )
}

/** Hidden field that humans never fill. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} name="company_website" />
      </label>
    </div>
  )
}

export function SubmitButton({ status, children }: { status: Status; children: ReactNode }) {
  const busy = status === 'submitting'
  return (
    <button
      type="submit"
      disabled={busy}
      className="inline-flex items-center justify-center gap-3 rounded-[3px] bg-brand-red px-7 py-4 font-display text-[15px] font-bold text-white transition-colors hover:bg-brand-red-dark disabled:cursor-wait disabled:opacity-70"
    >
      {busy && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {busy ? 'Sending…' : children}
    </button>
  )
}

/** Live-region feedback for submit outcomes. */
export function FormFeedback({
  status,
  message,
  successTitle,
  successText,
  mailSubject,
  mailBody,
  onReset,
  tone = 'light',
}: {
  status: Status
  message?: string
  successTitle: string
  successText: string
  mailSubject: string
  mailBody: string
  onReset?: () => void
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'
  return (
    <div role="status" aria-live="polite">
      {status === 'sent' && (
        <div className={`flex gap-4 border-l-2 border-ocean p-5 ${dark ? 'bg-white/5 text-white' : 'bg-ice'}`}>
          <CheckCircle2 className="size-6 shrink-0 text-ocean" aria-hidden />
          <div>
            <p className={`font-display font-bold ${dark ? '' : 'text-navy'}`}>{successTitle}</p>
            <p className={`mt-1 text-sm ${dark ? 'text-white/70' : 'text-slate'}`}>{successText}</p>
            {onReset && (
              <button type="button" onClick={onReset} className="mt-3 text-sm font-semibold text-ocean underline underline-offset-4">
                Send another
              </button>
            )}
          </div>
        </div>
      )}
      {status === 'offline' && (
        <div className={`flex gap-4 border-l-2 border-sky p-5 ${dark ? 'bg-white/5 text-white' : 'bg-ice'}`}>
          <Mail className="size-6 shrink-0 text-ocean" aria-hidden />
          <div>
            <p className={`font-display font-bold ${dark ? '' : 'text-navy'}`}>Almost there — please send by email</p>
            <p className={`mt-1 text-sm ${dark ? 'text-white/70' : 'text-slate'}`}>
              Our online inbox is not connected yet, so nothing has been sent. Your details are ready to go in an email to our team.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ocean underline underline-offset-4"
            >
              Open email to {SITE.email}
            </a>
          </div>
        </div>
      )}
      {status === 'error' && (
        <div className="flex gap-4 border-l-2 border-brand-red bg-brand-red/5 p-5">
          <AlertCircle className="size-6 shrink-0 text-brand-red" aria-hidden />
          <div>
            <p className={`font-display font-bold ${dark ? 'text-white' : 'text-navy'}`}>Message not sent</p>
            <p className={`mt-1 text-sm ${dark ? 'text-white/70' : 'text-slate'}`}>
              {message} You can also email us at{' '}
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
