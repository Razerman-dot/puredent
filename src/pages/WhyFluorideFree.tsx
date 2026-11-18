import type { ReactNode } from 'react'
import { Info, Stethoscope } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink, PageHero, Reveal } from '../components/ui'
import { EnamelSurface } from '../components/Diagrams'
import { IMG } from '../lib/img'

const CHAPTERS = [
  { id: 'what-is-fluoride', title: 'What fluoride is' },
  { id: 'conventional-role', title: 'Its role in conventional oral care' },
  { id: 'why-alternatives', title: 'Why some people explore alternatives' },
  { id: 'philosophy', title: 'PureDent’s formulation philosophy' },
  { id: 'hydroxyapatite', title: 'Hydroxyapatite and enamel support' },
  { id: 'xylitol', title: 'The role of xylitol' },
  { id: 'everyday', title: 'Everyday oral-care practices' },
]

export default function WhyFluorideFree() {
  return (
    <>
      <Seo
        title="Why Fluoride-Free?"
        description="A balanced guide to fluoride, why some families choose fluoride-free toothpaste, and how PureDent uses Hydroxyapatite and Xylitol instead."
        image={IMG.scientist}
      />
      <PageHero
        eyebrow="Why Fluoride-Free?"
        title="An informed choice, clearly explained."
        lede="Fluoride has a long, well-established place in oral care. Fluoride-free toothpaste is an alternative some people prefer. Here is what each means — and how PureDent approaches it."
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
            <Chapter n={1} id="what-is-fluoride" title="What fluoride is">
              <p>
                Fluoride is a naturally occurring mineral found in soil, water and many foods. In oral care it is used in toothpastes, mouthwashes and, in
                some countries, community water supplies.
              </p>
              <figure className="my-10 grid items-center gap-6 sm:grid-cols-[220px_1fr]">
                <Img src={IMG.understandingFluoride} alt="Illustration of a fluoride ion, labelled F minus" sizes="220px" widths={[384, 640]} className="aspect-square w-full max-w-[220px] object-cover" />
                <figcaption className="text-[15px] leading-relaxed text-slate">
                  In toothpaste, fluoride is present as fluoride ions, usually from compounds such as sodium fluoride or sodium monofluorophosphate.
                </figcaption>
              </figure>
            </Chapter>

            <Chapter n={2} id="conventional-role" title="Its role in conventional oral care">
              <p>
                Fluoride has been used in oral care for decades to help prevent cavities, and it is widely recommended by dental and public-health
                authorities. It works by helping enamel resist acid and supporting the remineralisation of early weak spots.
              </p>
              <Callout icon="info">
                PureDent does not claim that fluoride is harmful for everyone, or that fluoride-free toothpaste is medically superior for everyone. Different
                people have different needs.
              </Callout>
            </Chapter>

            <Chapter n={3} id="why-alternatives" title="Why some people explore fluoride-free alternatives">
              <p>Growing global awareness has led many families to look at the ingredients in their daily routine more closely. Common reasons include:</p>
              <ul>
                <li>Parents of young children who may swallow toothpaste while learning to brush.</li>
                <li>People who want to understand and manage their total fluoride intake from water, food and toothpaste.</li>
                <li>Consumers who prefer formulations built on alternative, bio-active ingredients.</li>
              </ul>
              <p>These are personal choices. A dentist can help you weigh them against your own oral-health history.</p>
            </Chapter>

            <Chapter n={4} id="philosophy" title="PureDent’s formulation philosophy">
              <p>
                PureDent did not remove fluoride to follow a trend — it set out to build a thoughtful alternative. Instead of relying on fluoride, PureDent
                formulations draw on its Advanced Natural Defence System: <strong>Hydroxyapatite</strong>, <strong>Xylitol</strong> and{' '}
                <strong>Therapeutic Essential Oils</strong>, chosen for daily, long-term use by adults and children alike.
              </p>
            </Chapter>

            <Chapter n={5} id="hydroxyapatite" title="Hydroxyapatite and enamel support">
              <p>
                Hydroxyapatite is the mineral that makes up most of natural tooth enamel. It is biomimetic — it resembles the material teeth are already
                built from. PureDent uses a bio-compatible form to help deliver minerals to tooth surfaces, fill microscopic imperfections and support
                enamel integrity.
              </p>
              <figure className="not-prose my-10 grid items-center gap-8 bg-ice p-6 sm:grid-cols-2 sm:p-8">
                <EnamelSurface className="w-full" />
                <figcaption className="text-[15px] leading-relaxed text-slate">
                  <strong className="font-display text-navy">How it’s designed to work.</strong> Minerals in the formulation are intended to settle into
                  tiny surface gaps, supporting a smoother, more resilient enamel surface over time.
                </figcaption>
              </figure>
            </Chapter>

            <Chapter n={6} id="xylitol" title="The role of xylitol">
              <p>
                Xylitol is a naturally derived sweetener. The bacteria associated with tooth decay cannot use it the way they use sugar, so it helps
                disrupt their growth and supports a more balanced pH in the mouth. It also gives PureDent a pleasant, mild sweetness — without sugar.
              </p>
            </Chapter>

            <Chapter n={7} id="everyday" title="Everyday oral-care practices">
              <p>Whatever toothpaste you choose, the fundamentals matter most:</p>
              <Img src={IMG.differentDirection} alt="A model tooth surrounded by toothbrushes, a floss pick and dental floss on a blue background" sizes="(min-width:1024px) 640px, 100vw" className="mb-8 aspect-[16/9] w-full object-cover" />
              <ul>
                <li>Brush for about two minutes, twice a day — especially before bed.</li>
                <li>Clean between your teeth daily with floss or interdental brushes.</li>
                <li>Limit how often you have sugary snacks and drinks.</li>
                <li>Supervise young children’s brushing.</li>
                <li>Visit your dentist regularly.</li>
              </ul>
              <Callout icon="dentist">
                Talk to your dentist before changing your oral-care routine — particularly if you have a history of cavities, enamel concerns, or are
                choosing products for young children.
              </Callout>
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
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Safe for everyday use</p>
            <h2 className="display-3 mt-4 text-navy">Made for daily, long-term family routines.</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {['Daily long-term use', 'Adults and children', 'Families seeking modern, science-led oral care'].map((x) => (
                <li key={x} className="py-4 font-display text-lg font-semibold text-navy">
                  {x}
                </li>
              ))}
            </ul>
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

function Callout({ icon, children }: { icon: 'info' | 'dentist'; children: ReactNode }) {
  const Icon = icon === 'info' ? Info : Stethoscope
  return (
    <aside className="my-8 flex gap-4 border-l-2 border-ocean bg-ice p-5 sm:p-6">
      <Icon className="mt-0.5 size-5 shrink-0 text-ocean" aria-hidden />
      <p className="!mb-0 text-[15px] leading-relaxed text-navy">{children}</p>
    </aside>
  )
}
