export interface FaqItem {
  q: string
  a: string
}
export interface FaqCategory {
  id: string
  title: string
  items: FaqItem[]
}

// Answers restate what PureDent publishes, phrased conservatively.
export const FAQ: FaqCategory[] = [
  {
    id: 'about',
    title: 'About PureDent',
    items: [
      {
        q: 'What is PureDent?',
        a: 'PureDent is a science-led, fluoride-free oral-care brand offering daily protection for adults and children. Its formulations are built around Hydroxyapatite, Xylitol and Therapeutic Essential Oils.',
      },
      {
        q: 'Where does PureDent come from?',
        a: 'PureDent was launched in Africa and is designed with a global perspective. Products are currently available across Nigeria.',
      },
      {
        q: 'How is PureDent manufactured?',
        a: 'PureDent states that its products are made under strict international quality and hygiene standards in a GMP-certified environment, and that it complies with NAFDAC requirements.',
      },
      {
        q: 'What is the Smile Revolution?',
        a: 'The Smile Revolution is PureDent’s commitment to changing how people think about oral health — moving from fear-based care to confident, informed protection.',
      },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    items: [
      {
        q: 'Which products does PureDent offer?',
        a: 'Three: PureDent Advanced 3X (premium protection), PureDent Complete Care 10 (everyday 10-in-1 care) and PureDent Kids Xylitol Gentle Protect Gel (for ages 3–6).',
      },
      {
        q: 'How do I choose between Advanced 3X and Complete Care 10?',
        a: 'Choose Advanced 3X for PureDent’s premium Hydroxyapatite formulation focused on enamel support. Choose Complete Care 10 for an everyday Zinc + Xylitol gel with ten daily benefits that the whole household can share.',
      },
      { q: 'Are PureDent products sugar-free?', a: 'Yes. PureDent uses Xylitol for a mild, naturally sweet taste without sugar.' },
    ],
  },
  {
    id: 'ingredients',
    title: 'Ingredients',
    items: [
      {
        q: 'What is Hydroxyapatite?',
        a: 'A biomimetic mineral that makes up over 90% of natural tooth enamel. It helps remineralise, repair and strengthen teeth at the surface level.',
      },
      {
        q: 'Why does PureDent use Xylitol?',
        a: 'Xylitol is naturally derived and helps disrupt the growth of harmful oral bacteria while supporting a balanced pH in the mouth. It also provides a mild sweetness without sugar.',
      },
      {
        q: 'Which essential oils are used?',
        a: 'Advanced 3X features Clove Oil and Tea Tree Oil, traditionally recognised for their cleansing, soothing and freshening character. Always check the pack for the full ingredient list of each product.',
      },
    ],
  },
  {
    id: 'fluoride-free',
    title: 'Fluoride-Free Oral Care',
    items: [
      {
        q: 'Why is PureDent fluoride-free?',
        a: 'At PureDent, we believe protection should never come with compromise. Instead of relying on fluoride, we use advanced, clinically studied alternatives — Hydroxyapatite, Xylitol and Therapeutic Actives — that support enamel strength and oral health without unnecessary exposure.',
      },
      {
        q: 'Why are people re-evaluating fluoride?',
        a: 'Growing global awareness has led many consumers and health professionals to re-evaluate fluoride’s long-term, everyday use — especially for children and families — including concerns about total exposure from water, food and toothpaste. PureDent uses clinically studied alternatives that support enamel strength without unnecessary exposure.',
      },
      {
        q: 'Can I switch from a fluoride toothpaste to PureDent?',
        a: 'Yes. PureDent is formulated for daily, long-term use by adults and children, so the whole family can switch with confidence. Keep up your regular dental check-ups as part of a complete routine.',
      },
    ],
  },
  {
    id: 'children',
    title: 'Children’s Oral Care',
    items: [
      { q: 'Which PureDent product is for children?', a: 'PureDent Kids Xylitol Gentle Protect Gel, designed for children aged 3–6.' },
      {
        q: 'How can I help my child enjoy brushing?',
        a: 'Brush together, keep it to a consistent time morning and night, and let your child choose their toothbrush. The Kids gel’s mild mint and fruity taste is designed to make brushing easier to love.',
      },
      {
        q: 'Should young children brush on their own?',
        a: 'Dental professionals generally recommend that parents supervise and help with brushing until children can do it thoroughly on their own.',
      },
    ],
  },
  {
    id: 'usage',
    title: 'Usage and Storage',
    items: [
      { q: 'How often should I use PureDent?', a: 'Twice daily, as directed on the pack. PureDent is suitable for long-term daily use.' },
      {
        q: 'Can I use PureDent with braces, crowns or fillings?',
        a: 'PureDent states that its formulations are suitable for use with braces and common dental work such as crowns, fillings, veneers and implants. Follow any specific advice from your orthodontist or dentist.',
      },
      {
        q: 'How should I store my toothpaste?',
        a: 'Close the cap after use and keep the tube in a cool, dry place out of direct sunlight. Follow any storage guidance printed on the packaging.',
      },
    ],
  },
  {
    id: 'purchasing',
    title: 'Purchasing',
    items: [
      {
        q: 'Where can I buy PureDent?',
        a: 'Online through Jumia Nigeria and Konga, and in supermarkets and stores across Nigeria. Visit our Where to Buy page for details.',
      },
      {
        q: 'I am outside Nigeria. Can I buy PureDent?',
        a: 'Send us a purchasing enquiry from the Where to Buy page and our team will let you know about availability in your country.',
      },
      {
        q: 'I am a retailer or distributor. How can I stock PureDent?',
        a: 'Use the purchasing enquiry form and choose “Wholesale / distribution”. PureDent offers trade support including retail visibility, sampling and point-of-sale materials.',
      },
    ],
  },
]
