import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink, Eyebrow, Reveal, TextLink } from '../components/ui'
import { IMG } from '../lib/img'
import { PRODUCTS, PRICE_NOTE } from '../data/products'

const PANEL: Record<string, string> = {
  advanced: 'bg-white',
  complete: 'bg-navy text-white',
  kids: 'bg-ice',
}

export default function Products() {
  return (
    <>
      <Seo
        title="Our Products"
        description="Explore PureDent Advanced 3X, Complete Care 10 and Kids Xylitol Gel — fluoride-free oral care for adults, families and children aged 3–6."
        image={IMG.familyProducts}
      />

      <section className="relative overflow-hidden bg-mist">
        <div className="container-x grid items-end gap-10 pt-32 sm:pt-40 lg:grid-cols-12">
          <Reveal className="pb-12 lg:col-span-5 lg:pb-24">
            <Eyebrow tone="red">Our Products</Eyebrow>
            <h1 className="display-1 mt-6 text-navy">The PureDent range.</h1>
            <p className="lede mt-6">Three fluoride-free formulations. One standard of care — for every smile in your home.</p>
            <nav aria-label="Products" className="mt-10 flex flex-col gap-3">
              {PRODUCTS.map((p, i) => (
                <a key={p.slug} href={`#${p.slug}`} className="group flex items-baseline gap-4 border-b border-line pb-3 font-display font-bold text-navy hover:text-brand-red">
                  <span className="text-xs text-slate">0{i + 1}</span>
                  {p.name}
                </a>
              ))}
            </nav>
          </Reveal>
          <Reveal delay={0.1} className="relative lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden">
              <Img src={IMG.familyProducts} alt="A father, mother and son each holding a different PureDent product carton" priority sizes="(min-width:1024px) 58vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {PRODUCTS.map((p, i) => {
        const dark = p.theme === 'complete'
        return (
          <section key={p.slug} id={p.slug} className={`scroll-mt-20 ${PANEL[p.theme]}`}>
            <div className="container-x grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
              <Reveal className={`relative lg:col-span-6 ${i % 2 ? 'lg:order-2 lg:col-start-7' : ''}`}>
                <div className={`relative flex aspect-square items-center justify-center overflow-hidden ${dark ? 'bg-white/5' : p.theme === 'kids' ? 'bg-white' : 'bg-ice'}`}>
                  <div aria-hidden className={`absolute inset-x-[15%] bottom-[10%] h-8 rounded-[50%] blur-xl ${dark ? 'bg-black/40' : 'bg-navy/15'}`} />
                  <Img src={p.tube} alt={`${p.name} tube`} widths={[384, 640, 828]} sizes="(min-width:1024px) 22vw, 45vw" className="relative h-[86%] w-auto object-contain" />
                </div>
              </Reveal>
              <Reveal delay={0.1} className={`lg:col-span-5 ${i % 2 ? 'lg:order-1' : 'lg:col-start-8'}`}>
                <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${dark ? 'text-sky' : 'text-ocean'}`}>
                  0{i + 1} — {p.positioning}
                </p>
                <h2 className={`display-2 mt-4 ${dark ? '' : 'text-navy'}`}>{p.name}</h2>
                <p className={`mt-3 font-display text-lg font-semibold ${dark ? 'text-sky' : 'text-brand-red'}`}>{p.subtitle}</p>
                <p className={`mt-6 text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-slate'}`}>{p.description}</p>
                <ul className={`mt-8 divide-y border-y ${dark ? 'divide-white/10 border-white/10' : 'divide-line border-line'}`}>
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 py-3.5 font-medium">
                      <span className={`size-1.5 ${dark ? 'bg-sky' : 'bg-brand-red'}`} aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
                {p.price && (
                  <p className={`mt-6 text-sm ${dark ? 'text-white/60' : 'text-slate'}`}>
                    <span className={`font-display text-xl font-bold ${dark ? 'text-white' : 'text-navy'}`}>{p.price}</span>
                    {p.size && <span> · {p.size}</span>}
                    {p.ageGuidance && <span> · {p.ageGuidance}</span>}
                    <span className="mt-1 block text-xs">{PRICE_NOTE}</span>
                  </p>
                )}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink to={`/products/${p.slug}`} variant={dark ? 'white' : 'red'}>
                    View Product
                  </ButtonLink>
                  <ButtonLink to="/where-to-buy" variant={dark ? 'outline-light' : 'outline-dark'}>
                    Where to Buy
                  </ButtonLink>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      {/* Compare */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <Eyebrow tone="red">Compare</Eyebrow>
              <h2 className="display-3 mt-5 text-navy">Find the right formulation.</h2>
            </div>
            <p className="text-slate lg:col-span-5 lg:col-start-8">Not sure which to choose? Our team is happy to help.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">Comparison of PureDent products</caption>
              <thead>
                <tr className="border-b-2 border-navy">
                  <td className="w-[18%]" />
                  {PRODUCTS.map((p) => (
                    <th key={p.slug} scope="col" className="px-4 pb-4 align-bottom font-display text-lg font-bold text-navy">
                      {p.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-[15px]">
                {[
                  ['Best for', (p: (typeof PRODUCTS)[number]) => p.idealFor[0]],
                  ['Positioning', (p: (typeof PRODUCTS)[number]) => p.positioning],
                  ['Format', (p: (typeof PRODUCTS)[number]) => p.subtitle],
                  ['Key ingredients', (p: (typeof PRODUCTS)[number]) => p.ingredients.map((i) => i.name).join(', ')],
                  ['Fluoride', () => 'Fluoride-free'],
                ].map(([label, fn]) => (
                  <tr key={label as string} className="border-b border-line align-top">
                    <th scope="row" className="py-5 pr-4 text-xs font-semibold tracking-[0.15em] text-slate uppercase">
                      {label as string}
                    </th>
                    {PRODUCTS.map((p) => (
                      <td key={p.slug} className="px-4 py-5 text-ink">
                        {(fn as (p: (typeof PRODUCTS)[number]) => string)(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <div className="mt-10">
            <TextLink to="/contact">Talk to our team</TextLink>
          </div>
        </div>
      </section>
    </>
  )
}
