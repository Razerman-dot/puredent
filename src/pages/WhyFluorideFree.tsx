import type { ReactNode } from 'react'
import { Stethoscope } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink, PageHero, Reveal } from '../components/ui'
import { EnamelSurface } from '../components/Diagrams'
import { IMG } from '../lib/img'

const CHAPTERS = [
  { id: 'understanding-fluoride', title: 'Understanding fluoride' },
  { id: 'different-path', title: 'Why PureDent chose a different path' },
  { id: 'what-we-use', title: 'What we use instead' },
  { id: 'safe-everyday', title: 'Safe for everyday use' },
  { id: 'everyday', title: 'Everyday oral-care habits' },
]

export default function WhyFluorideFree() {
  return (
    <>
      <Seo
        title="Why Fluoride-Free?"
        description="All you may know about fluoride may not be correct. Discover why PureDent chose a different path, with Hydroxyapatite, Xylitol and Therapeutic Actives."
        image={IMG.scientist}
      />
      <PageHero
        eyebrow="Why Fluoride-Free? · The New Standard"
        title="All you may know about fluoride may not be correct."
        lede="Growing global awareness has led many consumers and health professionals to re-evaluate fluoride’s long-term, everyday use — especially for children and families. Here is why PureDent chose a different path."
        image={IMG.scientist}
        imageAlt="A PureDent scientist researching in a laboratory"
      />

      <div className="bg-white">
        <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          {/* chapter nav */}
          <aside className="lg:col-span-3">
            <nav aria-label="Chapters" className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">In this guide</p>
              <ol className="mt-5 space-y-3 border-l border-line">
                {CHAPTERS.map((c, i) => (
                  <li key={c.id}>
                    <a href={`#${c.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-[15px] text-slate hover:border-brand-red hover:text-navy">
                      <span className="mr-2 font-display text-xs font-bold text-ocean">0{i + 1}</span>
                      {c.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="prose-pd lg:col-span-8 lg:col-start-5">
            <Chapter n={1} id="understanding-fluoride" title="Understanding fluoride">
              <p>
                Fluoride has been used in oral care for decades to help prevent cavities. However, growing global awareness has led many consumers and
                health professionals to re-evaluate its long-term, everyday use — especially for children and families.
              </p>
              <figure className="my-10 grid items-center gap-6 sm:grid-cols-[220px_1fr]">
                <Img src={IMG.understandingFluoride} alt="Illustration of a fluoride ion, labelled F minus" sizes="220px" widths={[384, 640]} className="aspect-square w-full max-w-[220px] object-cover" />
                <figcaption className="text-[15px] leading-relaxed text-slate">
                  Fluoride reaches us from many sources at once — water, food and toothpaste. That is why so many families are now asking how much
                  everyday exposure they really need.
                </figcaption>
              </figure>
            </Chapter>

            <Chapter n={2} id="different-path" title="Why PureDent chose a different path">
              <p>
                At PureDent, we believe protection should never come with compromise. Instead of relying on fluoride, we use advanced, clinically studied
                alternatives that support enamel strength and oral health, <strong>without unnecessary exposure</strong>.
              </p>
              <blockquote className="my-8 border-l-2 border-brand-red pl-6 font-display text-xl leading-snug font-semibold text-navy">
                “We did not remove fluoride to follow a trend. We replaced it with something smarter.”
              </blockquote>
            </Chapter>

            <Chapter n={3} id="what-we-use" title="What we use instead">
              <h3>Hydroxyapatite</h3>
              <p>
                A biomimetic mineral that makes up over 90% of natural tooth enamel. It helps remineralise, repair and strengthen teeth at the surface
                level.
              </p>
              <figure className="not-prose my-8 grid items-center gap-8 bg-ice p-6 sm:grid-cols-2 sm:p-8">
                <EnamelSurface className="w-full" />
                <figcaption className="text-[15px] leading-relaxed text-slate">
                  <strong className="font-display text-navy">Repair at the surface.</strong> Hydroxyapatite settles into tiny surface gaps, restoring a
                  smoother, more resilient enamel surface.
                </figcaption>
              </figure>
              <h3>Xylitol</h3>
              <p>A natural cavity-fighting agent that reduces harmful bacteria and supports a healthier oral environment.</p>
              <h3>Therapeutic Actives</h3>
              <p>Carefully selected ingredients that freshen breath, support gum health and protect the mouth — gently and effectively.</p>
              <Img src={IMG.openTube} alt="An open PureDent tube beside a molecular model and a toothbrush" sizes="(min-width:1024px) 640px, 100vw" className="mt-8 aspect-[16/10] w-full object-cover" />
            </Chapter>

            <Chapter n={4} id="safe-everyday" title="Safe for everyday use">
              <p>PureDent is formulated for:</p>
              <ul>
                <li>Daily, long-term use</li>
                <li>Adults and children</li>
                <li>Families seeking modern, science-backed oral care</li>
              </ul>
            </Chapter>

            <Chapter n={5} id="everyday" title="Everyday oral-care habits">
              <p>Make every brush count with a few simple habits:</p>
              <Img src={IMG.differentDirection} alt="A model tooth surrounded by toothbrushes, a floss pick and dental floss on a blue background" sizes="(min-width:1024px) 640px, 100vw" className="mb-8 aspect-[16/9] w-full object-cover" />
              <ul>
                <li>Brush for about two minutes, twice a day — especially before bed.</li>
                <li>Clean between your teeth daily with floss or interdental brushes.</li>
                <li>Limit how often you have sugary snacks and drinks.</li>
                <li>Brush alongside young children and help them build the habit.</li>
                <li>Keep up regular dental check-ups.</li>
              </ul>
              <Callout>Pair PureDent with regular dental check-ups for complete, confident oral care.</Callout>
            </Chapter>
          </article>
        </div>
      </div>

      <section className="bg-ice">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Img src={IMG.coupleBrushing} alt="A couple brushing their teeth and laughing together" sizes="(min-width:1024px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover object-top" />
          </div>
          <Reveal className="px-5 py-20 sm:px-12 lg:px-16 lg:py-28">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Make the switch</p>
            <h2 className="display-3 mt-4 text-navy">Protection without compromise, for the whole family.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Advanced fluoride-free care for adults, shared households and children aged 3–6 — built around Hydroxyapatite, Xylitol and Therapeutic
              Actives.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/products" variant="red">
                Explore Products
              </ButtonLink>
              <ButtonLink to="/science" variant="outline-dark">
                Our Science
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Chapter({ n, id, title, children }: { n: number; id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-10 first:border-t-0 first:pt-0 [&+section]:mt-14">
      <p className="!mb-2 font-display text-sm font-bold text-brand-red">0{n}</p>
      <h2 className="!mt-0">{title}</h2>
      {children}
    </section>
  )
}

function Callout({ children }: { children: ReactNode }) {
  const Icon = Stethoscope
  return (
    <aside className="my-8 flex gap-4 border-l-2 border-ocean bg-ice p-5 sm:p-6">
      <Icon className="mt-0.5 size-5 shrink-0 text-ocean" aria-hidden />
      <p className="!mb-0 text-[15px] leading-relaxed text-navy">{children}</p>
    </aside>
  )
}
