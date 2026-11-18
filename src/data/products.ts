import { IMG } from '../lib/img'

// Every statement here mirrors PureDent's own product pages on puredent.co.
// Where the official site contradicts itself (e.g. Advanced 3X pack size,
// hour-based protection claims) the detail is omitted until confirmed.

export type ProductTheme = 'advanced' | 'complete' | 'kids'

export interface Product {
  slug: string
  theme: ProductTheme
  name: string
  shortName: string
  subtitle: string
  positioning: string
  tagline: string
  description: string
  highlights: string[]
  ingredients: { name: string; text: string }[]
  benefits: string[]
  benefitsTitle: string
  idealFor: string[]
  usage: string[]
  price?: string
  size?: string
  ageGuidance?: string
  tube: string
  gallery: { src: string; alt: string; fit: 'contain' | 'cover' }[]
  faqs: { q: string; a: string }[]
}

const USAGE_COMMON = [
  'Brush twice daily, morning and night, as directed on the pack.',
  'Read the full ingredient list and directions on the packaging before use.',
]

export const PRODUCTS: Product[] = [
  {
    slug: 'puredent-advanced-3x',
    theme: 'advanced',
    name: 'PureDent Advanced 3X',
    shortName: 'Advanced 3X',
    subtitle: 'Total Bio-Defence Toothpaste',
    positioning: 'Premium Protection',
    tagline: 'Our most advanced fluoride-free formulation.',
    description:
      'Premium fluoride-free oral care designed to support enamel strength, deep cleansing and long-lasting freshness.',
    highlights: ['Enamel-supporting Hydroxyapatite', 'Triple-Action Essential Oils', 'Long-lasting daily protection'],
    ingredients: [
      { name: 'Nano-Hydroxyapatite', text: 'Supports enamel integrity by delivering bio-compatible minerals to tooth surfaces.' },
      { name: 'Clove Oil', text: 'Traditionally recognised for its cleansing and soothing properties.' },
      { name: 'Tea Tree Oil', text: 'Known for supporting oral freshness and microbial balance.' },
    ],
    benefitsTitle: 'Why choose Advanced 3X',
    benefits: ['Fluoride-free', 'Enamel-supporting formula', 'Long-lasting freshness', 'Premium clinical aesthetic'],
    idealFor: [
      'Urban professionals who want lasting freshness through a busy day',
      'Health-conscious consumers',
      'Families looking for premium daily protection',
    ],
    usage: USAGE_COMMON,
    price: '₦3,500',
    tube: IMG.tubeAdvanced,
    gallery: [
      { src: IMG.splashAdvanced, alt: 'PureDent Advanced 3X tube surrounded by a water splash, clove buds and mineral crystals', fit: 'cover' },
      { src: IMG.tubeAdvanced, alt: 'PureDent Advanced 3X toothpaste tube, white with red PureDent lettering', fit: 'contain' },
      { src: IMG.packAdvanced, alt: 'PureDent Advanced 3X carton and tube, Advanced Total Bio-Defence', fit: 'cover' },
    ],
    faqs: [
      {
        q: 'What makes Advanced 3X different from Complete Care 10?',
        a: 'Advanced 3X is PureDent’s premium formulation, built around Nano-Hydroxyapatite with Clove and Tea Tree oils for enamel support. Complete Care 10 is the everyday all-round option, built around Zinc and Xylitol with ten daily benefits.',
      },
      { q: 'Does Advanced 3X contain fluoride?', a: 'No. Every PureDent formulation is fluoride-free.' },
      {
        q: 'Is it suitable for children?',
        a: 'Advanced 3X is formulated for adults and the wider family. For children aged 3–6, PureDent offers the Kids Xylitol Gentle Protect Gel, made specifically for growing teeth.',
      },
      {
        q: 'Can I use it if I have sensitive teeth or dental work?',
        a: 'PureDent describes its formulations as low-abrasive and suitable for everyday use. If you have ongoing sensitivity or recent dental treatment, ask your dentist which routine suits you.',
      },
    ],
  },
  {
    slug: 'puredent-complete-care-10',
    theme: 'complete',
    name: 'PureDent Complete Care 10',
    shortName: 'Complete Care 10',
    subtitle: 'Bio-Fresh & Strong',
    positioning: 'Everyday Confidence',
    tagline: '10 ways to protect. All-day fresh.',
    description: 'All-round oral care with 10-in-1 protection and long-lasting freshness for the whole family.',
    highlights: ['10-Function Daily Protection', 'Zinc + Xylitol Formula', 'Long-lasting freshness'],
    ingredients: [
      { name: 'Zinc Gluconate', text: 'Known for supporting oral freshness and plaque control.' },
      { name: 'Bio-Active Xylitol', text: 'Helps maintain a balanced oral environment and supports cavity defence.' },
      { name: 'Superior Mint Formula', text: 'A refreshing mint blend for a clean, fresh feeling after every brush.' },
    ],
    benefitsTitle: 'Ten daily benefits in one gel',
    benefits: [
      'Enamel strengthening',
      'Cavity defence',
      'Plaque defence',
      'Toothache & decay',
      'Oral microbiome balance',
      'Tartar reduction',
      'Fresh breath',
      'Gum health support',
      'Sensitivity relief',
      'Whitening',
    ],
    idealFor: [
      'Busy families who share one tube',
      'Value-conscious shoppers',
      'Anyone looking for everyday all-round protection',
    ],
    usage: USAGE_COMMON,
    price: '₦1,500',
    size: '130g',
    tube: IMG.tubeComplete,
    gallery: [
      { src: IMG.splashComplete, alt: 'PureDent Complete Care 10 blue gel tube with a water splash and mineral crystals', fit: 'cover' },
      { src: IMG.tubeComplete, alt: 'PureDent Complete Care 10 toothpaste tube in deep blue with Zinc', fit: 'contain' },
      { src: IMG.packComplete, alt: 'PureDent Complete Care 10 carton and tube, Bio Fresh & Strong', fit: 'cover' },
    ],
    faqs: [
      {
        q: 'What are the ten benefits?',
        a: 'Enamel strengthening, cavity defence, plaque defence, toothache & decay, oral microbiome balance, tartar reduction, fresh breath, gum health support, sensitivity relief and whitening.',
      },
      { q: 'Is Complete Care 10 a gel?', a: 'Yes. Complete Care 10 is a fresh-feeling gel, designed for everyday family use.' },
      { q: 'Does it contain fluoride or sugar?', a: 'It is fluoride-free, and PureDent formulations use Xylitol rather than sugar.' },
      {
        q: 'Can the whole family use it?',
        a: 'Complete Care 10 is designed for shared household use. For young children aged 3–6, PureDent recommends its dedicated Kids gel.',
      },
    ],
  },
  {
    slug: 'puredent-kids',
    theme: 'kids',
    name: 'PureDent Kids – Xylitol Gel',
    shortName: 'Kids Xylitol Gel',
    subtitle: 'Xylitol Gentle Protect Gel',
    positioning: 'Gentle Protection for Growing Smiles',
    tagline: 'Big smiles start with gentle protection.',
    description: 'Gentle, cavity-fighting care specially formulated for growing teeth, for children aged 3–6.',
    highlights: ['Fluoride-Free Anti-Cavity Protection', 'Bio-Active Xylitol Formula', 'Kid-approved mild mint & fruity taste'],
    ingredients: [
      { name: 'Bio-Active Xylitol', text: 'A naturally derived ingredient that helps disrupt the growth of harmful bacteria.' },
      { name: 'Mild Mint & Fruity Blend', text: 'A gentle flavour profile created especially for young children.' },
    ],
    benefitsTitle: 'Made for little mouths',
    benefits: [
      'Gentle cleaning for delicate enamel',
      'Supports cavity prevention',
      'Easy-to-use gel texture',
      'Mild, pleasant taste',
      'Encourages positive brushing habits',
      'Age-appropriate formulation',
      'Balanced protection for growing teeth',
      'Bright, fun packaging kids love',
    ],
    idealFor: ['Children aged 3–6', 'Parents building a calm, positive brushing routine'],
    usage: [
      ...USAGE_COMMON,
      'Brush with your child and supervise until they can brush well on their own — a habit dental professionals widely recommend.',
    ],
    price: '₦1,200',
    size: '65g',
    ageGuidance: 'Ages 3–6',
    tube: IMG.tubeKids,
    gallery: [
      { src: IMG.splashKids, alt: 'PureDent Kids Xylitol Gentle Protect Gel tube with a water splash and molecule shapes', fit: 'cover' },
      { src: IMG.tubeKids, alt: 'PureDent Kids Xylitol Gentle Protect Gel tube with playful character artwork', fit: 'contain' },
      { src: IMG.packKids, alt: 'PureDent Kids carton and tube for ages 3 to 6', fit: 'cover' },
    ],
    faqs: [
      { q: 'What age is the Kids gel for?', a: 'PureDent Kids Xylitol Gentle Protect Gel is designed for children aged 3–6.' },
      { q: 'What does it taste like?', a: 'A mild mint and fruity blend created especially for young children.' },
      { q: 'Does it contain fluoride?', a: 'No. Like every PureDent product, the Kids gel is fluoride-free and built around Bio-Active Xylitol.' },
      {
        q: 'Should I still take my child to the dentist?',
        a: 'Yes. A good toothpaste supports daily care, but regular dental check-ups remain essential for every child.',
      },
    ],
  },
]

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug)

export const PRICE_NOTE = 'Recommended retail price as listed on puredent.co. Prices may vary by retailer.'
