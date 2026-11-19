# PureDent — website

React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide · React Router 7 · Supabase.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, generate sitemap, build to dist/
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Homepage (hero, benefits, brand intro, products, science, fluoride-free, family, Smile Revolution, final CTA) |
| `/about` | Story, vision, mission, philosophy, families, promise, accessible premium |
| `/science` | Advanced Natural Defence System, enamel primer, Hydroxyapatite / Xylitol / Essential Oils, ingredient comparison |
| `/products`, `/products/:slug` | Catalogue + three product detail pages (gallery, ingredients, benefits, usage, FAQ, related) |
| `/why-fluoride-free` | Balanced educational guide |
| `/oral-health-hub`, `/oral-health-hub/:slug` | Journal with featured article, category filter, search, article pages |
| `/where-to-buy` | Country selector, online retailers, verified stores, purchasing enquiry form |
| `/faq` | Searchable, categorised accordions (+ FAQPage JSON-LD) |
| `/contact` | Validated contact form |
| `/smile-revolution` | Campaign page with "Join the Movement" form |
| `/privacy-policy`, `/terms` | Link to the official legal text |

## Content sources & accuracy

All product, science, contact and retailer facts come from **puredent.co** (reviewed 18 Nov 2026). Data lives in `src/data/`.
Images and logos are PureDent's own, served through the official site's image optimiser (`src/lib/img.ts`). Before launch, copy them to your own CDN and change `ASSET_ORIGIN`.

Deliberately **left out** because the official site contradicts itself or gives no source — please confirm with the brand:

1. **Advanced 3X pack size** — listed as both 100g and 130g. Price (₦3,500) is shown; size is not.
2. **Hour-based claims** — "24-hour", "12-hour" and "2-hour" all appear for the same product.
3. **Hydroxyapatite-in-enamel figure** — the site uses "over 90%" (from the official Why Fluoride-Free page); the official FAQ says 97%.
4. **Essential oils** — the science page says Clove + Tea Tree; the FAQ says Clove + Peppermint + Spearmint. The site shows Clove + Tea Tree (product page wording).
5. **Fluoride messaging** follows PureDent's own Why Fluoride-Free copy ("re-evaluate its long-term, everyday use", "clinically studied alternatives… without unnecessary exposure"). Stronger claims ("as effective as fluoride", "no risk of fluorosis") are not used. Keep supporting documentation on file for regulatory review.
6. **Kids flavour** — "Strawberry & Mint" vs "Mild Mint & Fruity"; the product-page wording is used.
7. **Phone number / street address** — none published.
8. **Benin Republic retailers** — none published, so Benin and other markets get an enquiry form.
9. **Store list** — only the 5 stores visible on the official page are listed; the full 52-store directory is linked.

The six Oral Health Hub articles are **launch drafts** with general oral-care education only (no statistics). Have them reviewed by PureDent's clinical team before publishing.

## Supabase

1. Create a project and run `supabase/schema.sql`.
2. Copy `.env.example` to `.env.local` and fill in the URL and **anon** key.

RLS lets anonymous visitors only *insert* enquiries and sign-ups and *read* published posts and verified stockists. Never put the service-role key in a `VITE_` variable.
Until Supabase is configured, the forms still validate and then offer a pre-filled email to `customercare@puredent.co`. They never pretend to have sent anything.

## Deployment

SPA fallbacks are included for Vercel (`vercel.json`) and Netlify (`public/_redirects`). `robots.txt` and `sitemap.xml` (generated on build) are in `public/`.
For richer social previews on every route, deploy with prerendering or SSR (for example, React Router framework mode). Per-page `<title>`, description, canonical, Open Graph and JSON-LD are already rendered by `src/components/Seo.tsx`.

## Not provided

- **The promotional advertisement** referenced in the brief was not attached. The palette follows the hex values in the brief, and the visual direction follows the official packaging and campaign imagery.
- **Favicon** — `public/favicon.svg` is a simple monogram. Replace it with the official brand favicon if one exists.
