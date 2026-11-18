import { useForm, required, email } from './useForm'
import { TextField, SelectField, Honeypot, SubmitButton, FormFeedback } from './Fields'

const ROLES = ['Parent or caregiver', 'Oral-care enthusiast', 'Dental professional', 'Educator / school', 'Retailer', 'Other']

export function CommunityForm() {
  const f = useForm(
    'community_signups',
    { full_name: '', email: '', country: '', role: '' },
    { full_name: required('name'), email, country: required('country') },
  )
  if (f.status === 'sent' || f.status === 'offline')
    return (
      <FormFeedback
        tone="dark"
        status={f.status}
        successTitle="Welcome to the Smile Revolution"
        successText="You’ll hear from us with honest oral-care education and community news."
        mailSubject="Join the Smile Revolution"
        mailBody={`Name: ${f.values.full_name}\nEmail: ${f.values.email}\nCountry: ${f.values.country}\nI am: ${f.values.role}`}
      />
    )
  return (
    <form onSubmit={f.onSubmit} noValidate className="relative space-y-5">
      <Honeypot {...f.honeypot} />
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField tone="dark" label="Name" required autoComplete="name" {...f.field('full_name')} />
        <TextField tone="dark" label="Email" type="email" required autoComplete="email" {...f.field('email')} />
        <TextField tone="dark" label="Country" required autoComplete="country-name" {...f.field('country')} />
        <SelectField tone="dark" label="I am a…" options={ROLES} {...f.field('role')} />
      </div>
      <FormFeedback tone="dark" status={f.status} message={f.message} successTitle="" successText="" mailSubject="" mailBody="" />
      <SubmitButton status={f.status}>Join the Movement</SubmitButton>
    </form>
  )
}
