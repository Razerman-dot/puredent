import { useEffect } from 'react'
import { useForm, required, email } from './useForm'
import { TextField, TextArea, SelectField, Honeypot, SubmitButton, FormFeedback } from './Fields'
import { PRODUCTS } from '../../data/products'

const TYPES = ['Buying for myself / my family', 'Retail store stocking', 'Wholesale / distribution', 'Pharmacy or clinic', 'Other']
const COUNTRIES = ['Nigeria', 'Benin Republic', 'Ghana', 'Togo', 'Cameroon', 'Other country']

export function PurchaseEnquiryForm({ country = '' }: { country?: string }) {
  const f = useForm(
    'purchase_enquiries',
    { full_name: '', email: '', phone: '', country, city: '', enquiry_type: '', products: '', message: '' },
    {
      full_name: required('full name'),
      email,
      country: (v) => (v ? undefined : 'Please choose your country.'),
      city: required('city or town'),
      enquiry_type: (v) => (v ? undefined : 'Please tell us what kind of enquiry this is.'),
      phone: (v) => (!v || /^[+\d][\d\s()-]{6,}$/.test(v.trim()) ? undefined : 'Please enter a valid phone number, including country code.'),
    },
  )

  // keep the country select in sync with the page-level selector
  const { onChange } = f.field('country')
  useEffect(() => {
    if (country) onChange({ target: { name: 'country', value: country } } as never)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country])

  if (f.status === 'sent' || f.status === 'offline')
    return (
      <FormFeedback
        status={f.status}
        successTitle="Enquiry received"
        successText="Thank you. Our team will contact you about availability in your area."
        mailSubject={`Purchasing enquiry — ${f.values.country}`}
        mailBody={Object.entries(f.values)
          .map(([k, v]) => `${k.replace('_', ' ')}: ${v}`)
          .join('\n')}
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
        <SelectField label="Country" required options={COUNTRIES} {...f.field('country')} />
        <TextField label="City / town" required autoComplete="address-level2" {...f.field('city')} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <SelectField label="Enquiry type" required options={TYPES} {...f.field('enquiry_type')} />
        <TextField label="Phone" type="tel" autoComplete="tel" hint="Include your country code, e.g. +229" {...f.field('phone')} />
      </div>
      <SelectField label="Product of interest" options={[...PRODUCTS.map((p) => p.name), 'All products']} {...f.field('products')} />
      <TextArea label="Anything else we should know?" rows={4} {...f.field('message')} />
      <FormFeedback status={f.status} message={f.message} successTitle="" successText="" mailSubject="" mailBody="" />
      <SubmitButton status={f.status}>Send purchasing enquiry</SubmitButton>
    </form>
  )
}
