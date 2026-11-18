import { Seo } from '../components/Seo'
import { ButtonLink, Eyebrow } from '../components/ui'
import { SITE } from '../data/site'

// Legal text must come from PureDent. Until it is supplied, these pages point
// to the current official versions rather than inventing terms.
const COPY = {
  privacy: {
    title: 'Privacy Policy',
    official: 'https://www.puredent.co/en-NG/privacy-policy',
    intro:
      'PureDent’s official privacy policy explains how personal information submitted through this website — such as contact, enquiry and newsletter details — is collected, used and protected.',
  },
  terms: {
    title: 'Terms and Conditions',
    official: 'https://www.puredent.co/en-NG/terms-of-service',
    intro: 'PureDent’s official terms set out the conditions for using this website and its content.',
  },
} as const

export default function Legal({ kind }: { kind: keyof typeof COPY }) {
  const c = COPY[kind]
  return (
    <>
      <Seo title={c.title} description={`${c.title} for the PureDent website.`} />
      <section className="bg-white pt-32 pb-24 sm:pt-40">
        <div className="container-x max-w-3xl">
          <Eyebrow tone="red">Legal</Eyebrow>
          <h1 className="display-2 mt-6 text-navy">{c.title}</h1>
          <p className="lede mt-6">{c.intro}</p>
          <p className="mt-6 leading-relaxed text-slate">
            Please read the current official version. For questions, contact{' '}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-navy underline underline-offset-4">
              {SITE.email}
            </a>
            .
          </p>
          <div className="mt-10">
            <ButtonLink to={c.official} external variant="navy">
              Read the official {c.title}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
