import { ArrowRight } from 'lucide-react'
import { useForm, email } from './useForm'
import { FormFeedback, Honeypot } from './Fields'

export function NewsletterForm({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const f = useForm('newsletter_subscribers', { email: '' }, { email })
  const e = f.field('email')
  const dark = tone === 'dark'
  if (f.status === 'sent' || f.status === 'offline')
    return (
      <div className="mt-4">
        <FormFeedback
          tone={tone}
          status={f.status}
          successTitle="You’re subscribed"
          successText="Thank you. Expect practical oral-care guidance from PureDent once a month."
          mailSubject="Newsletter subscription"
          mailBody={`Please subscribe ${f.values.email} to the PureDent newsletter.`}
        />
      </div>
    )
  return (
    <form onSubmit={f.onSubmit} noValidate className="relative mt-4">
      <Honeypot {...f.honeypot} />
      <label htmlFor={`nl-${tone}`} className="sr-only">
        Email address
      </label>
      <div className={`flex border ${dark ? 'border-white/20 focus-within:border-sky' : 'border-line focus-within:border-ocean'} ${e.error ? '!border-brand-red' : ''}`}>
        <input
          id={`nl-${tone}`}
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          {...{ name: e.name, value: e.value, onChange: e.onChange, onBlur: e.onBlur }}
          aria-invalid={!!e.error}
          aria-describedby={e.error ? `nl-${tone}-err` : undefined}
          className={`min-w-0 flex-1 bg-transparent px-4 py-3 text-[15px] outline-none ${dark ? 'text-white placeholder:text-white/40' : 'text-ink'}`}
        />
        <button
          type="submit"
          disabled={f.status === 'submitting'}
          aria-label="Subscribe"
          className="flex w-12 shrink-0 items-center justify-center bg-brand-red text-white transition-colors hover:bg-brand-red-dark"
        >
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>
      {e.error && (
        <p id={`nl-${tone}-err`} className="mt-2 text-[13px] text-brand-red">
          {e.error}
        </p>
      )}
      {f.status === 'error' && <FormFeedback tone={tone} status={f.status} message={f.message} successTitle="" successText="" mailSubject="" mailBody="" />}
    </form>
  )
}
