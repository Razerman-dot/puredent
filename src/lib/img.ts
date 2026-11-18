/**
 * Official PureDent imagery is served from the brand's own site through its
 * image optimiser, which returns resized AVIF/WebP. For production, copy the
 * originals to your own CDN and change ASSET_ORIGIN (and, if the CDN has no
 * resizer, make `optimised` return `${ASSET_ORIGIN}${path}`).
 */
export const ASSET_ORIGIN = 'https://www.puredent.co'

const ALLOWED_WIDTHS = [384, 640, 750, 828, 1080, 1200, 1920] as const

export function optimised(path: string, width = 1200, quality = 75) {
  const w = ALLOWED_WIDTHS.find((a) => a >= width) ?? 1920
  return `${ASSET_ORIGIN}/_next/image?url=${encodeURIComponent(path)}&w=${w}&q=${quality}`
}

export function srcSet(path: string, widths: readonly number[] = [640, 828, 1200, 1920]) {
  return widths.map((w) => `${optimised(path, w)} ${w}w`).join(', ')
}

export const IMG = {
  logoBlue: '/shared/puredent-blue.svg',
  logoWhite: '/shared/puredent-white.svg',
  tubeAdvanced: '/home/product-tube-advanced.png',
  tubeComplete: '/home/product-tube-complete-care.png',
  tubeKids: '/home/product-tube-kids.png',
  packAdvanced: '/home/card-advanced.jpg',
  packComplete: '/home/card-complete.jpg',
  packKids: '/home/card-kids.jpg',
  splashAdvanced: '/products/advanced-3x.png',
  splashComplete: '/products/complete-care-10.png',
  splashKids: '/products/kids-gel.png',
  emblem3x: '/products/puredent-3x-emblem.png',
  emblemComplete: '/products/complete-protection-emblem.png',
  heroModel: '/home/hero-model.png',
  familyShield: '/home/family-shield.png',
  coupleProduct: '/about/hero-couple.png',
  storyProducts: '/about/story-products.png',
  familyLounge: '/about/families.png',
  familyProducts: '/products/hero-family.jpg',
  lab: '/science/hero-lab.png',
  mouthDefence: '/science/methodology-mouth.png',
  fluorideAlternative: '/science/fluoride-alternative.png',
  scientist: '/why-fluoride-free/Puredent-Flouride-Free-Scientist Hero.jpg',
  understandingFluoride: '/why-fluoride-free/understanding-fluoride.jpg',
  differentDirection: '/why-fluoride-free/different-direction.jpg',
  openTube: '/why-fluoride-free/what-we-use-instead.png',
  coupleBrushing: '/why-fluoride-free/safe-for-use.jpg',
  revolutionBanner: '/smile-revolution/Puredent-SMILE-REVOLUTION-Banner 3.jpg',
  parentChild: '/smile-revolution/parents-peace.png',
  whyItMatters: '/smile-revolution/why-it-matters.png',
  joinRevolution: '/smile-revolution/join-the-revolution.png',
  shelves: '/where-to-buy/where-to-buy.png',
  faqVisual: '/faq/faq.png',
  contactVisual: '/contact/contact.png',
} as const
