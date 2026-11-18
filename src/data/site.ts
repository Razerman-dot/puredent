// Facts below are taken from https://puredent.co (reviewed 18 Nov 2026).
// Anything not published there is deliberately left out.

export const SITE = {
  name: 'PureDent',
  url: 'https://www.puredent.co',
  tagline: 'Pure Protection. Confident Smiles.',
  description:
    'PureDent creates science-led, fluoride-free oral care for individuals and families, formulated around Hydroxyapatite, Xylitol and Therapeutic Essential Oils.',
  email: 'customercare@puredent.co',
  hours: 'Monday – Friday, 09:00 – 17:00 (WAT)',
  primaryMarket: 'Nigeria',
} as const

export const SOCIAL = [
  { name: 'Instagram', handle: '@puredent_official', href: 'https://www.instagram.com/puredent_official/' },
  { name: 'Facebook', handle: 'PureDent', href: 'https://www.facebook.com/share/1chstv5pMv/?mibextid=wwXIfr' },
  { name: 'X', handle: '@puredentng', href: 'https://x.com/puredentng' },
  { name: 'TikTok', handle: '@puredent.official', href: 'https://www.tiktok.com/@puredent.official' },
] as const

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Science', to: '/science' },
  { label: 'Our Products', to: '/products' },
  { label: 'Why Fluoride-Free', to: '/why-fluoride-free' },
  { label: 'Oral Health Hub', to: '/oral-health-hub' },
  { label: 'Where to Buy', to: '/where-to-buy' },
  { label: 'Contact Us', to: '/contact' },
] as const
