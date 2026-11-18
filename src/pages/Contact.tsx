import { Mail, Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { Eyebrow, Reveal } from '../components/ui'
import { SocialIcons } from '../components/SocialIcons'
import { ContactForm } from '../components/forms/ContactForm'
import { SITE } from '../data/site'

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us" description="Contact PureDent customer care about products, ingredients, purchasing, wholesale or partnerships." />
      <section className="bg-white pt-32 pb-20 sm:pt-40 lg:pb-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="red">Contact Us</Eyebrow>
            <h1 className="display-1 mt-6 text-navy">We’re here to help.</h1>
            <p className="lede mt-6">Questions about a product, an ingredient, or where to buy? Send us a message and our customer care team will respond by email.</p>

            <dl className="mt-12 divide-y divide-line border-y border-line">
              <div className="flex gap-5 py-6">
                <Mail className="mt-1 size-5 shrink-0 text-ocean" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${SITE.email}`} className="font-display text-lg font-bold break-all text-navy hover:text-brand-red">
                      {SITE.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-5 py-6">
                <Clock className="mt-1 size-5 shrink-0 text-ocean" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">Support hours</dt>
                  <dd className="mt-1 font-display text-lg font-bold text-navy">{SITE.hours}</dd>
                </div>
              </div>
              <div className="flex gap-5 py-6">
                <MapPin className="mt-1 size-5 shrink-0 text-ocean" aria-hidden />
                <div>
                  <dt className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">Buying PureDent</dt>
                  <dd className="mt-1 text-slate">
                    See retailers and send purchasing enquiries on our{' '}
                    <Link to="/where-to-buy" className="font-semibold text-navy underline underline-offset-4 hover:text-brand-red">
                      Where to Buy
                    </Link>{' '}
                    page.
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">Follow PureDent</p>
              <SocialIcons className="mt-4 text-navy" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border-t-4 border-navy bg-mist p-6 sm:p-10 lg:p-12">
              <h2 className="font-display text-2xl font-bold text-navy">Send a message</h2>
              <p className="mt-2 mb-8 text-[15px] text-slate">Fields marked * are required.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
