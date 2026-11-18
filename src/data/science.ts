// Wording follows PureDent's science page. Roles are described as what each
// ingredient is *designed* or *known* to do — no study data is implied.

export interface Ingredient {
  id: string
  index: string
  name: string
  kind: string
  summary: string
  detail: string
  roles: string[]
  foundIn: string[]
}

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'hydroxyapatite',
    index: '01',
    name: 'Hydroxyapatite',
    kind: 'Bio-active mineral',
    summary: 'A bio-active mineral naturally found in teeth, used by PureDent as its fluoride alternative.',
    detail:
      'Tooth enamel is made largely of a mineral called hydroxyapatite. PureDent includes a bio-compatible form of this same mineral so that brushing delivers minerals that resemble what enamel is already built from — supporting the surface rather than simply coating it.',
    roles: ['Help strengthen enamel from within', 'Help fill microscopic surface imperfections', 'Support long-term enamel resilience'],
    foundIn: ['Advanced 3X'],
  },
  {
    id: 'xylitol',
    index: '02',
    name: 'Xylitol',
    kind: 'Naturally derived sweetener',
    summary: 'A naturally derived ingredient that helps disrupt the growth of harmful bacteria.',
    detail:
      'Xylitol tastes sweet, but the bacteria associated with tooth decay cannot use it the way they use sugar. That is why PureDent uses Bio-Active Xylitol both for a pleasant taste without sugar and to support a balanced oral environment.',
    roles: ['Help reduce harmful oral bacteria', 'Help neutralise acidity in the mouth', 'Support the mouth’s natural remineralisation'],
    foundIn: ['Complete Care 10', 'Kids Xylitol Gel'],
  },
  {
    id: 'essential-oils',
    index: '03',
    name: 'Therapeutic Essential Oils',
    kind: 'Botanical actives',
    summary: 'Clove and Tea Tree oils, recognised for their antimicrobial and soothing properties.',
    detail:
      'Plant oils have a long history in oral care. PureDent selects Clove and Tea Tree oils for their traditional cleansing and soothing character, pairing botanical heritage with modern formulation.',
    roles: ['Help maintain a clean oral environment', 'Support gum comfort', 'Contribute to long-lasting freshness'],
    foundIn: ['Advanced 3X'],
  },
]

export const ANDS = {
  name: 'Advanced Natural Defence System',
  short: 'ANDS',
  definition:
    'PureDent’s proprietary, science-informed formulation framework, bringing together Xylitol, Therapeutic Essential Oils and Bio-Active Hydroxyapatite.',
  goals: [
    'Help shield teeth from daily bacterial challenge',
    'Strengthen enamel integrity',
    'Support natural repair and long-term oral balance',
  ],
}
