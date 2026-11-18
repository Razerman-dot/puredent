import { useForm, required, email, minLen } from './useForm'
import { TextField, TextArea, SelectField, Honeypot, SubmitButton, FormFeedback } from './Fields'

const CONTACT_CATEGORIES = [
  'General enquiry',
  'Product question',
  'Ingredients & science',
  'Purchasing & availability',
  'Wholesale / distribution',
  'Media & partnerships',
  'Feedback',
]

export function ContactForm({ defaultCategory = '' }: { defaultCategory?: string }) {
  const f = useForm(
    'contact_enquiries',
    { full_name: '', email: '', category: defaultCategory, subject: '', message: '' },
    {
      full_name: required('full name'),
      email,
      category: (v) => (v ? undefined : 'Please choose an enquiry category.'),
      subject: required('subject'),
      message: minLen(10, 'message'),
    },
  )

  if (f.status === 'sent' || f.status === 'offline')
    return (
      <FormFeedback
        status={f.status}
        successTitle="Thank you — your message has been sent"
        successText="Our customer care team will reply by email, Monday to Friday, 09:00–17:00 WAT."
        mailSubject={`[${f.values.category}] ${f.values.subject}`}
        mailBody={`${f.values.message}\n\n— ${f.values.full_name} (${f.values.email})`}
        onReset={f.reset}
      />
    )

  return (
    <form onSubmit={f.onSubmit} noValidate className="relative space-y-6">
      <Honeypot {...f.honeypot} />
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField label="Full name" required autoComplete="name" {...f.field('full_name')} />
        <TextField label="Email address" type="email" required autoComplete="email" {...f.field('email')} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField label="Enquiry category" required options={CONTACT_CATEGORIES} {...f.field('category')} />
        <TextField label="Subject" required {...f.field('subject')} />
      </div>
      <TextArea label="Message" required rows={6} placeholder="How can we support you?" {...f.field('message')} />
      <FormFeedback status={f.status} message={f.message} successTitle="" successText="" mailSubject="" mailBody="" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-relaxed text-slate">
          We use your details only to respond to this enquiry. For medical concerns, please consult a dental professional.
        </p>
        <SubmitButton status={f.status}>Send message</SubmitButton>
      </div>
    </form>
  )
}
