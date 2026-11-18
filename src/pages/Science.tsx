import { Check, Minus } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink, Eyebrow, Reveal } from '../components/ui'
import { ToothCrossSection, EnamelSurface } from '../components/Diagrams'
import { IMG } from '../lib/img'
import { INGREDIENTS, ANDS } from '../data/science'
import { PRODUCTS } from '../data/products'

const INGREDIENT_IMAGES: Record<string, { src: string; alt: string }> = {
  hydroxyapatite: { src: IMG.openTube, alt: 'An open PureDent Advanced tube beside a molecular model, a toothbrush and a model tooth' },
  xylitol: { src: IMG.splashKids, alt: 'Kids Xylitol Gel tube with molecular structures in a water splash' },
  'essential-oils': { src: IMG.fluorideAlternative, alt: 'PureDent Advanced 3X tube in a water splash with clove buds and oil droplets' },
}

export default function Science() {
  return (
    <>
      <Seo
        title="Our Science"
        description="Inside PureDent’s Advanced Natural Defence System: how Hydroxyapatite, Xylitol and Therapeutic Essential Oils work together in fluoride-free oral care."
        image={IMG.lab}
      />

      {/* Hero — white & ice, clinical */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-ice">
        <div className="container-x grid items-center gap-12 pt-32 pb-16 sm:pt-40 lg:grid-cols-12 lg:pb-24">
          <Reveal className="lg:col-span-6">
            <Eyebrow tone="red">Our Science</Eyebrow>
            <h1 className="display-1 mt-6 text-navy">
              Science-Led <span className="text-ocean">Oral Care.</span>
            </h1>
            <p className="lede mt-7 max-w-xl">
              At PureDent, science guides every formulation decision. Our science-first methodology uses evidence-aligned ingredients designed to support the
              mouth’s natural defence mechanisms.
            </p>
            <nav aria-label="On this page" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              {INGREDIENTS.map((i) => (
                <a key={i.id} href={`#${i.id}`} className="border-b border-navy/20 pb-1 text-navy hover:border-brand-red hover:text-brand-red">
                  {i.index} {i.name}
                </a>
              ))}
            </nav>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Img src={IMG.lab} alt="A PureDent scientist in safety glasses examining a plant sample in a bright laboratory" priority sizes="(min-width:1024px) 50vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ANDS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">The framework</p>
            <h2 className="display-2 mt-4 text-navy">{ANDS.name}</h2>
            <p className="lede mt-6">{ANDS.definition}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <div className="relative">
              {/* three-ring system diagram */}
              <svg viewBox="0 0 400 300" className="w-full" role="img" aria-labelledby="ands-t ands-d">
                <title id="ands-t">Advanced Natural Defence System</title>
                <desc id="ands-d">Three overlapping circles labelled Hydroxyapatite, Xylitol and Essential Oils, overlapping at the centre labelled ANDS.</desc>
                <g fill="none" strokeWidth="1.5">
                  <circle cx="160" cy="120" r="88" stroke="#087EAE" fill="#EAF6FC" fillOpacity="0.7" />
                  <circle cx="240" cy="120" r="88" stroke="#075A91" fill="#8BCBEA" fillOpacity="0.25" />
                  <circle cx="200" cy="185" r="88" stroke="#102C50" fill="#8BCBEA" fillOpacity="0.15" />
                </g>
                <g fontFamily="Manrope, sans-serif" fontWeight="700" fill="#102C50" fontSize="14" textAnchor="middle">
                  <text x="120" y="100">Hydroxyapatite</text>
                  <text x="285" y="100">Xylitol</text>
                  <text x="200" y="250">Essential Oils</text>
                </g>
                <circle cx="200" cy="145" r="22" fill="#D62832" />
                <text x="200" y="150" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="12" fill="#fff">
                  ANDS
                </text>
              </svg>
              <ol className="mt-8 border-t border-line">
                {ANDS.goals.map((g, i) => (
                  <li key={g} className="flex items-baseline gap-5 border-b border-line py-4">
                    <span className="font-display text-sm font-bold text-brand-red">0{i + 1}</span>
                    <span className="font-display text-lg font-semibold text-navy">{g}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Enamel primer */}
      <section className="bg-ice py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <div className="bg-white p-6 sm:p-10">
              <ToothCrossSection className="mx-auto w-full max-w-[380px]" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">A quick primer</p>
            <h2 className="display-3 mt-4 text-navy">Your enamel, explained.</h2>
            <div className="prose-pd mt-6">
              <p>
                Enamel is the hard, translucent outer layer of every tooth. It is built mostly from a mineral called <strong>hydroxyapatite</strong>, and it
                protects the softer dentine and the living pulp beneath.
              </p>
              <p>
                Throughout the day, acids from food and bacteria draw minerals out of the enamel surface, while saliva helps return them. Healthy enamel
                depends on that balance — which is exactly where PureDent’s ingredients are designed to help.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ingredient deep dives */}
      {INGREDIENTS.map((ing, idx) => (
        <section key={ing.id} id={ing.id} className={`scroll-mt-24 py-20 lg:py-28 ${idx % 2 ? 'bg-mist' : 'bg-white'}`}>
          <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className={`lg:col-span-6 ${idx % 2 ? 'lg:order-2 lg:col-start-7' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Img src={INGREDIENT_IMAGES[ing.id].src} alt={INGREDIENT_IMAGES[ing.id].alt} sizes="(min-width:1024px) 50vw, 100vw" className="h-full w-full object-cover" />
                <span className="absolute top-0 left-0 bg-navy px-4 py-3 font-display text-2xl font-extrabold text-white">{ing.index}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1} className={`lg:col-span-5 ${idx % 2 ? 'lg:order-1' : 'lg:col-start-8'}`}>
              <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">{ing.kind}</p>
              <h2 className="display-2 mt-4 text-navy">{ing.name}</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate">{ing.detail}</p>
              <h3 className="mt-10 text-xs font-semibold tracking-[0.2em] text-slate uppercase">Its intended role</h3>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {ing.roles.map((r) => (
                  <li key={r} className="flex items-center gap-3 py-3.5 font-medium text-ink">
                    <Check className="size-4 shrink-0 text-ocean" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
              {ing.id === 'hydroxyapatite' && (
                <figure className="mt-10 bg-white p-5">
                  <EnamelSurface className="w-full" />
                </figure>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      {/* Comparison */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Ingredient comparison</p>
            <h2 className="display-3 mt-4 text-navy">Which ingredients lead in each product?</h2>
            <p className="mt-4 text-slate">
              The key ingredients highlighted on each product page. Every formulation contains more than this — always check the pack for the full
              ingredient list.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Key ingredients highlighted by product</caption>
              <thead>
                <tr className="border-b-2 border-navy">
                  <th scope="col" className="py-4 pr-4 text-xs font-semibold tracking-[0.15em] text-slate uppercase">
                    Key ingredient
                  </th>
                  {PRODUCTS.map((p) => (
                    <th key={p.slug} scope="col" className="px-4 py-4 font-display text-[15px] font-bold text-navy">
                      {p.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Nano-Hydroxyapatite', match: ['Nano-Hydroxyapatite'] },
                  { label: 'Bio-Active Xylitol', match: ['Bio-Active Xylitol'] },
                  { label: 'Clove Oil', match: ['Clove Oil'] },
                  { label: 'Tea Tree Oil', match: ['Tea Tree Oil'] },
                  { label: 'Zinc Gluconate', match: ['Zinc Gluconate'] },
                  { label: 'Fluoride-free', match: ['*'] },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-line">
                    <th scope="row" className="py-4 pr-4 font-medium text-ink">
                      {row.label}
                    </th>
                    {PRODUCTS.map((p) => {
                      const has = row.match[0] === '*' || p.ingredients.some((i) => row.match.includes(i.name))
                      return (
                        <td key={p.slug} className="px-4 py-4">
                          {has ? (
                            <Check className="size-5 text-ocean" aria-label="Yes" />
                          ) : (
                            <Minus className="size-5 text-line" aria-label="Not highlighted" />
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* Responsible science note + CTA */}
      <section className="bg-navy py-20 text-white lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="display-3">Science you can understand.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/70">
              We describe what our ingredients are designed to do, in plain language. A good toothpaste supports — but never replaces — regular check-ups and
              advice from your dentist.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:items-center lg:justify-end">
            <ButtonLink to="/products" variant="red">
              Explore Products
            </ButtonLink>
            <ButtonLink to="/why-fluoride-free" variant="outline-light">
              Why Fluoride-Free?
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  )
}
