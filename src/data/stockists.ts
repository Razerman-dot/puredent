// Verified from https://www.puredent.co/en-NG/where-to-buy (18 Nov 2026).
// The official directory lists 52 Nigerian stores; the five shown publicly
// on the first page are reproduced here. Load the full list from Supabase
// (table `stockists`) once the brand supplies it.

export interface Market {
  code: string
  name: string
  status: 'available' | 'enquire'
  note: string
}

export const MARKETS: Market[] = [
  {
    code: 'NG',
    name: 'Nigeria',
    status: 'available',
    note: 'Available online and in supermarkets and stores across Nigeria.',
  },
  {
    code: 'BJ',
    name: 'Benin Republic',
    status: 'enquire',
    note: 'Retail details for Benin Republic are not yet published. Send an enquiry and our team will advise on availability.',
  },
  {
    code: 'OTHER',
    name: 'Other markets',
    status: 'enquire',
    note: 'Tell us where you are and our team will advise on availability, distribution and shipping.',
  },
]

export const ONLINE_RETAILERS = [
  {
    name: 'Jumia Nigeria',
    label: 'Official PureDent Brand Store',
    href: 'https://www.jumia.com.ng/catalog/?q=puredent',
  },
  {
    name: 'Konga',
    label: 'Premium health merchant',
    href: 'https://www.konga.com/search?search=puredent',
  },
]

export const STORES = [
  { name: 'Blenco Supermarket', area: 'Akowojo', lga: 'Alimosho', state: 'Lagos State' },
  { name: 'Buymore Supermarket', area: 'Ikeja', lga: 'Ikeja', state: 'Lagos State' },
  { name: 'Code Silver Nig. Ltd.', area: 'Ajah', lga: 'Eti-Osa', state: 'Lagos State' },
  { name: 'De Emperor Superstore', area: 'Alagbado', lga: 'Alimosho', state: 'Lagos State' },
  { name: 'Jendol Supermarket', area: 'Abule Egba', lga: 'Alimosho', state: 'Lagos State' },
]

export const FULL_DIRECTORY_URL = 'https://www.puredent.co/en-NG/where-to-buy'
