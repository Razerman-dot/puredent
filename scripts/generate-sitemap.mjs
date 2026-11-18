// Generates public/sitemap.xml from the route list and data slugs.
// Runs automatically before `npm run build`.
import { readFileSync, writeFileSync } from 'node:fs'

const ORIGIN = 'https://www.puredent.co'
const slugs = (file, re) => [...readFileSync(new URL(file, import.meta.url), 'utf8').matchAll(re)].map((m) => m[1])

const products = slugs('../src/data/products.ts', /slug: '([^']+)'/g)
const articles = slugs('../src/data/articles.ts', /slug: '([^']+)'/g)

const routes = [
  '/', '/about', '/science', '/products', '/why-fluoride-free', '/oral-health-hub', '/where-to-buy',
  '/faq', '/contact', '/smile-revolution', '/privacy-policy', '/terms',
  ...products.map((s) => `/products/${s}`),
  ...articles.map((s) => `/oral-health-hub/${s}`),
]
const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${ORIGIN}${r === '/' ? '' : r}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml: ${routes.length} URLs`)
