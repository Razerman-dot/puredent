import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Mail, Clock } from 'lucide-react'
import { SITE } from '../data/site'
import { PRODUCTS } from '../data/products'
import { Logo } from './ui'
import { SocialIcons } from './SocialIcons'
import { NewsletterForm } from './forms/NewsletterForm'

const COMPANY = [
  { label: 'About PureDent', to: '/about' },
  { label: 'Our Science', to: '/science' },
  { label: 'Why Fluoride-Free', to: '/why-fluoride-free' },
  { label: 'Smile Revolution', to: '/smile-revolution' },
  { label: 'Oral Health Hub', to: '/oral-health-hub' },
]
const HELP = [
  { label: 'Where to Buy', to: '/where-to-buy' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="container-x grid gap-12 border-b border-white/10 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="white" className="h-9 w-auto" />
          <p className="mt-6 max-w-sm leading-relaxed text-white/65">
            Science-led, fluoride-free oral care for individuals and families. Launched in Africa, designed with a global perspective.
          </p>
          <SocialIcons className="mt-8 text-white" />
        </div>

        <FooterCol title="Products" className="lg:col-span-2">
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <Link to={`/products/${p.slug}`} className="hover:text-white">
                {p.shortName}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/products" className="hover:text-white">
              All products
            </Link>
          </li>
        </FooterCol>
        <FooterCol title="Company" className="lg:col-span-2">
          {COMPANY.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterCol>
        <div className="lg:col-span-4">
          <FooterCol title="Support">
            {HELP.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="flex items-start gap-3 pt-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-sky" aria-hidden />
              {SITE.hours}
            </li>
          </FooterCol>
          <div className="mt-10">
            <p className="font-display text-sm font-bold">Oral-care insights, monthly</p>
            <NewsletterForm tone="dark" />
          </div>
        </div>
      </div>
      <div className="container-x flex flex-col gap-4 py-7 text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} PureDent. All rights reserved.</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

function FooterCol({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <h2 className="font-display text-xs font-bold tracking-[0.2em] text-sky uppercase">{title}</h2>
      <ul className="mt-5 space-y-3 text-[15px] text-white/70">{children}</ul>
    </div>
  )
}
