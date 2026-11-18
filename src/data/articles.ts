import { IMG } from '../lib/img'

// Launch articles for the Oral Health Hub. They contain general oral-care
// education only (no statistics or study claims) and should be reviewed by
// PureDent's clinical team before publishing. In production these rows live
// in the Supabase `posts` table — see supabase/schema.sql.

export type Block = { type: 'p'; text: string } | { type: 'h2'; text: string } | { type: 'ul'; items: string[] }

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string // ISO
  image: string
  imageAlt: string
  featured?: boolean
  body: Block[]
}

export const CATEGORIES = [
  'Oral Hygiene',
  'Enamel Care',
  'Kids’ Dental Health',
  'Ingredients',
  'Innovation',
  'Family Routines',
] as const

export const ARTICLES: Article[] = [
  {
    slug: 'a-better-brushing-routine',
    title: 'The two-minute routine: how to brush well, every single time',
    excerpt:
      'Most of us brush every day, but few of us were ever taught how. A calm, simple routine makes every brush count.',
    category: 'Oral Hygiene',
    date: '2026-11-12',
    image: IMG.coupleBrushing,
    imageAlt: 'A couple laughing while brushing their teeth together in a bright bathroom',
    featured: true,
    body: [
      { type: 'p', text: 'Brushing is one of the few health habits most people already do daily. The difference between a quick scrub and a genuinely effective routine is rarely the toothpaste alone — it is technique, timing and consistency.' },
      { type: 'h2', text: 'Give it two full minutes' },
      { type: 'p', text: 'Dental professionals commonly recommend brushing for about two minutes, twice a day. Two minutes feels longer than you expect, so divide your mouth into four sections — upper right, upper left, lower right, lower left — and spend roughly thirty seconds on each.' },
      { type: 'h2', text: 'Technique matters more than pressure' },
      { type: 'ul', items: ['Hold the brush at a gentle angle towards the gumline.', 'Use small, soft circular movements rather than hard sawing strokes.', 'Brush the outer, inner and chewing surfaces of every tooth.', 'Finish with your tongue, where odour-causing bacteria collect.'] },
      { type: 'p', text: 'Brushing harder does not clean better. Heavy pressure can irritate gums and wear surfaces over time, which is why a soft-bristled brush is usually the better choice.' },
      { type: 'h2', text: 'Morning and night, without exception' },
      { type: 'p', text: 'Night-time brushing is especially important: saliva flow slows while you sleep, so the mouth has less natural protection. Make the evening brush the last thing you do before bed.' },
      { type: 'h2', text: 'Beyond the brush' },
      { type: 'p', text: 'Cleaning between your teeth with floss or interdental brushes reaches areas a toothbrush cannot. Replace your brush every three months or sooner if the bristles splay, and keep up regular dental check-ups so small issues are caught early.' },
    ],
  },
  {
    slug: 'understanding-tooth-enamel',
    title: 'Understanding enamel: the remarkable surface that protects your smile',
    excerpt: 'Enamel is the hardest substance in the human body — and it cannot grow back. Here is how to look after it.',
    category: 'Enamel Care',
    date: '2026-11-05',
    image: IMG.mouthDefence,
    imageAlt: 'Illustration of a row of teeth, each protected by a translucent PureDent shield',
    body: [
      { type: 'p', text: 'Enamel is the thin, translucent outer layer of each tooth. It is mostly mineral — chiefly a crystal called hydroxyapatite — and it protects the softer dentine and the living pulp beneath.' },
      { type: 'h2', text: 'A surface that is always changing' },
      { type: 'p', text: 'Every time you eat or drink something sugary or acidic, bacteria and acids draw minerals out of the enamel surface. Between meals, saliva helps return minerals to it. Healthy enamel depends on that balance tipping towards repair more often than towards loss.' },
      { type: 'h2', text: 'Everyday habits that protect enamel' },
      { type: 'ul', items: ['Limit how often you snack on sugary or acidic foods and drinks.', 'Drink water after meals to help rinse the mouth.', 'Wait a little while after acidic drinks before brushing.', 'Use a soft brush and gentle technique.', 'Choose a toothpaste formulated to support enamel.'] },
      { type: 'h2', text: 'Where hydroxyapatite comes in' },
      { type: 'p', text: 'Because enamel is built largely from hydroxyapatite, some toothpastes now include a bio-compatible form of the same mineral. PureDent Advanced 3X is formulated with Nano-Hydroxyapatite to help deliver minerals to tooth surfaces and support enamel integrity.' },
      { type: 'p', text: 'If you notice sensitivity, changes in colour, or rough patches on your teeth, see a dentist. Early enamel changes are far easier to manage when caught early.' },
    ],
  },
  {
    slug: 'first-teeth-healthy-habits',
    title: 'Little teeth, big habits: building a happy brushing routine for children',
    excerpt: 'The habits children form between three and six often stay with them for life. Make brushing something they look forward to.',
    category: 'Kids’ Dental Health',
    date: '2026-10-29',
    image: IMG.parentChild,
    imageAlt: 'A smiling mother being hugged by her young daughter, who is holding a toothbrush',
    body: [
      { type: 'p', text: 'Baby teeth matter. They hold space for adult teeth, help children chew and speak, and shape how a child feels about caring for their mouth. The routine you build now becomes their routine later.' },
      { type: 'h2', text: 'Make it predictable' },
      { type: 'p', text: 'Children thrive on routine. Brush at the same points every day — after breakfast and just before bed — so it becomes as natural as putting on pyjamas.' },
      { type: 'h2', text: 'Make it shared' },
      { type: 'ul', items: ['Brush together so your child can copy you.', 'Let them choose their own soft, child-sized brush.', 'Use a song or a timer to fill the two minutes.', 'Praise the effort, not just the result.'] },
      { type: 'h2', text: 'Stay involved' },
      { type: 'p', text: 'Young children do not yet have the coordination to brush every surface thoroughly. Dental professionals generally recommend that parents help and supervise until a child can brush well on their own.' },
      { type: 'h2', text: 'Choose a toothpaste made for them' },
      { type: 'p', text: 'PureDent Kids Xylitol Gentle Protect Gel is designed for ages 3–6, with a mild mint and fruity taste and a gentle gel texture. And alongside a good routine at home, take your child for regular dental check-ups from an early age.' },
    ],
  },
  {
    slug: 'reading-a-toothpaste-label',
    title: 'What’s in your toothpaste? A plain-language guide to the label',
    excerpt: 'Abrasives, humectants, actives, flavours — a quick guide to what each ingredient group does, and what PureDent uses.',
    category: 'Ingredients',
    date: '2026-10-21',
    image: IMG.openTube,
    imageAlt: 'An open PureDent tube beside a molecular model and a toothbrush',
    body: [
      { type: 'p', text: 'Toothpaste labels can look like chemistry homework. Most formulas, though, are built from a handful of ingredient groups, each with a clear job.' },
      { type: 'h2', text: 'The main ingredient groups' },
      { type: 'ul', items: ['Cleaning agents — gentle polishing particles that help lift plaque and surface stains.', 'Humectants — keep the paste or gel smooth and stop it drying out.', 'Binders — give the formula its texture.', 'Flavours and sweeteners — make brushing pleasant.', 'Active ingredients — the components chosen for a specific oral-care purpose.'] },
      { type: 'h2', text: 'PureDent’s actives' },
      { type: 'p', text: 'PureDent builds its formulations around three active groups, which it calls its Advanced Natural Defence System: Hydroxyapatite for enamel support, Xylitol for a balanced oral environment and sweetness without sugar, and Therapeutic Essential Oils such as Clove and Tea Tree for freshness and gum comfort.' },
      { type: 'h2', text: 'Reading labels with confidence' },
      { type: 'p', text: 'Always check the full ingredient list on the pack, especially if you have allergies or sensitivities. If you are unsure whether a product suits you, your dentist or pharmacist can help you choose.' },
    ],
  },
  {
    slug: 'modern-oral-care-innovation',
    title: 'From chalk to biomimetic minerals: how toothpaste got smarter',
    excerpt: 'Oral care has changed enormously. Biomimetic ingredients — designed to resemble the body’s own materials — are one of the most interesting shifts.',
    category: 'Innovation',
    date: '2026-10-14',
    image: IMG.lab,
    imageAlt: 'A PureDent scientist in protective glasses examining a plant sample in a laboratory',
    body: [
      { type: 'p', text: 'People have cleaned their teeth for thousands of years, using everything from chewing sticks to powders. Modern toothpaste is a far more refined product — and formulation science keeps moving.' },
      { type: 'h2', text: 'The idea of biomimicry' },
      { type: 'p', text: 'Biomimetic design means borrowing from nature’s own materials. In oral care, the most notable example is hydroxyapatite: the mineral that enamel is mostly made of. Rather than adding something foreign to the tooth surface, the idea is to supply minerals that closely resemble what is already there.' },
      { type: 'h2', text: 'Botanicals, re-examined' },
      { type: 'p', text: 'Ingredients like clove have long been part of traditional oral care across many cultures. Modern formulators are revisiting these botanicals and combining them with carefully engineered ingredients.' },
      { type: 'h2', text: 'PureDent’s approach' },
      { type: 'p', text: 'PureDent describes its process as science-first: choosing evidence-aligned ingredients and supporting the mouth’s natural defence mechanisms. The result is its Advanced Natural Defence System, combining Hydroxyapatite, Xylitol and Therapeutic Essential Oils.' },
    ],
  },
  {
    slug: 'family-oral-care-routine',
    title: 'One household, many smiles: a simple oral-care plan for the whole family',
    excerpt: 'Busy mornings, different ages, one bathroom. A few small systems make healthy smiles easier for everyone.',
    category: 'Family Routines',
    date: '2026-10-07',
    image: IMG.familyLounge,
    imageAlt: 'A family of four lying on a soft rug in a bright living room, all smiling',
    body: [
      { type: 'p', text: 'Healthy smiles rarely come from big gestures. They come from small, repeatable choices made every morning and evening — and those are easier when the whole family shares the plan.' },
      { type: 'h2', text: 'Set the rhythm' },
      { type: 'ul', items: ['Brush after breakfast and before bed — the same time every day.', 'Keep each person’s brush clearly labelled and upright to air-dry.', 'Put a two-minute timer in the bathroom.', 'Make water the default drink between meals.'] },
      { type: 'h2', text: 'Match products to people' },
      { type: 'p', text: 'Different ages have different needs. In a PureDent household, that might mean Complete Care 10 as the shared everyday gel, Advanced 3X for adults who want premium enamel support, and the Kids Xylitol Gel for children aged 3–6.' },
      { type: 'h2', text: 'Make check-ups a family event' },
      { type: 'p', text: 'Book dental appointments together where possible. Children who see their parents visiting the dentist calmly tend to feel more relaxed about it themselves.' },
    ],
  },
]

export function readingTime(a: Article) {
  const words = a.body
    .map((b) => (b.type === 'ul' ? b.items.join(' ') : b.text))
    .join(' ')
    .split(/\s+/).length + a.excerpt.split(/\s+/).length
  return Math.max(2, Math.round(words / 220))
}

export const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
