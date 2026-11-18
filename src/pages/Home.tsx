import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, Gem, Users, Droplets, ArrowRight, Check } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink, Eyebrow, Reveal, TextLink } from '../components/ui'
import { IMG } from '../lib/img'
import { PRODUCTS } from '../data/products'
import { INGREDIENTS, ANDS } from '../data/science'
import { SITE } from '../data/site'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Home() {
  return (
    <>
      <Seo
        title="PureDent"
        description={SITE.description}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'PureDent',
          url: SITE.url,
          email: SITE.email,
          slogan: SITE.tagline,
          sameAs: ['https://www.instagram.com/puredent_official/', 'https://x.com/puredentng', 'https://www.tiktok.com/@puredent.official'],
        }}
      />
      <Hero />
      <Benefits />
      <BrandIntro />
      <ProductShowcase />
      <ScienceSection />
      <FluorideFree />
      <FamilyLifestyle />
      <SmileRevolution />
      <FinalCta />
    </>
  )
}

/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="grain relative isolate overflow-hidden bg-navy text-white">
      {/* light & water environment */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_45%,#087EAE_0%,#075A91_28%,#102C50_62%,#0B2140_100%)]" />
        <div className="water-lines absolute inset-0 opacity-70" />
        <div className="absolute top-[18%] right-[8%] h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,rgba(234,246,252,0.35)_0%,rgba(139,203,234,0.12)_40%,transparent_70%)] blur-2xl" />
        <svg className="absolute bottom-0 left-0 w-full text-white/[0.06]" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 120 C 240 60 480 180 720 120 S 1200 60 1440 120 V200 H0Z" />
          <path fill="currentColor" d="M0 150 C 300 110 520 200 820 150 S 1240 110 1440 150 V200 H0Z" />
        </svg>
      </div>

      <div className="container-x grid min-h-[100svh] items-center gap-8 pt-28 pb-16 lg:grid-cols-12 lg:pt-24 lg:pb-10">
        <div className="relative z-10 lg:col-span-6 xl:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-3 border border-white/15 bg-white/5 py-2.5 pr-4 pl-3.5 font-display text-[11px] font-bold tracking-[0.22em] backdrop-blur-sm"
          >
            <span className="size-2 bg-brand-red" aria-hidden />
            ADVANCED FLUORIDE-FREE ORAL CARE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="display-1 mt-8"
          >
            Pure Protection.
            <span className="block text-sky">Confident Smiles.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="mt-7 max-w-[34rem] text-lg leading-relaxed text-white/75"
          >
            Discover a smarter approach to everyday oral care with PureDent's advanced fluoride-free formulations, designed to support stronger
            enamel, lasting freshness and confident smiles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink to="/products" variant="red">
              Explore Our Products
            </ButtonLink>
            <ButtonLink to="/science" variant="outline-light">
              Discover Our Science
            </ButtonLink>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 hidden max-w-lg grid-cols-3 border-t border-white/15 pt-6 sm:grid"
          >
            {['Hydroxyapatite', 'Xylitol', 'Essential Oils'].map((x, i) => (
              <div key={x} className={i ? 'border-l border-white/15 pl-5' : ''}>
                <dt className="text-[11px] tracking-[0.18em] text-sky uppercase">0{i + 1}</dt>
                <dd className="mt-1 font-display text-[15px] font-bold">{x}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* product composition */}
        <div className="relative lg:col-span-6 xl:col-span-6">
          <div className="relative mx-auto aspect-[1/1] w-full max-w-[620px]">
            <div aria-hidden className="absolute inset-x-[10%] bottom-[6%] h-[12%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(11,33,64,0.65),transparent)]" />
            <div aria-hidden className="absolute inset-x-[18%] bottom-[4%] h-[3px] bg-gradient-to-r from-transparent via-sky/70 to-transparent" />
            <HeroTube src={IMG.tubeComplete} alt="PureDent Complete Care 10 tube" className="absolute bottom-[8%] left-[2%] w-[34%] -rotate-[9deg]" delay={0.45} priority />
            <HeroTube src={IMG.tubeKids} alt="PureDent Kids Xylitol Gentle Protect Gel tube" className="absolute right-[2%] bottom-[8%] w-[32%] rotate-[9deg]" delay={0.55} priority />
            <HeroTube
              src={IMG.tubeAdvanced}
              alt="PureDent Advanced 3X toothpaste tube"
              className="absolute bottom-[5%] left-1/2 z-10 w-[42%] -translate-x-1/2"
              delay={0.3}
              priority
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
              className="absolute top-[12%] right-0 z-20 hidden border-l-2 border-brand-red bg-white py-3 pr-5 pl-4 text-navy shadow-2xl sm:block"
            >
              <p className="text-[10px] font-semibold tracking-[0.18em] text-slate uppercase">Infused with</p>
              <p className="font-display text-sm font-extrabold">Hydroxyapatite</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroTube({ src, alt, className, delay, priority }: { src: string; alt: string; className: string; delay: number; priority?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: EASE, delay }} className={className}>
      <Img
        src={src}
        alt={alt}
        priority={priority}
        widths={[384, 640, 828]}
        sizes="(min-width:1024px) 260px, 40vw"
        className="h-auto w-full drop-shadow-[0_40px_40px_rgba(5,20,40,0.55)]"
        width={640}
        height={1536}
      />
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
const BENEFITS = [
  { icon: Droplets, title: 'Fluoride-Free Formulations', text: 'Every PureDent product is fluoride-free, built around carefully selected alternatives.' },
  { icon: ShieldCheck, title: 'Advanced Oral Protection', text: 'The Advanced Natural Defence System helps shield teeth from daily bacterial challenge.' },
  { icon: Gem, title: 'Enamel Support', text: 'Bio-active Hydroxyapatite is designed to support enamel integrity from within.' },
  { icon: Users, title: 'Family-Focused Care', text: 'Dedicated formulations for adults, shared households and children aged 3–6.' },
]

function Benefits() {
  return (
    <section aria-label="PureDent benefits" className="border-b border-line bg-white">
      <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((b, i) => (
          <Reveal
            key={b.title}
            delay={i * 0.08}
            className={`py-10 sm:px-8 lg:py-14 ${i ? 'border-t border-line sm:border-t-0' : ''} ${i % 2 ? 'sm:border-l' : ''} ${i > 1 ? 'sm:border-t lg:border-t-0' : ''} ${i ? 'lg:border-l' : ''} border-line first:sm:pl-0`}
          >
            <b.icon className="size-7 text-ocean" strokeWidth={1.4} aria-hidden />
            <h3 className="mt-5 font-display text-lg font-bold text-navy">{b.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-slate">{b.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
function BrandIntro() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
            <Img src={IMG.coupleProduct} alt="A smiling couple in a bright bathroom holding a PureDent Complete Care tube and a toothbrush" sizes="(min-width:1024px) 45vw, 100vw" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -right-4 -bottom-10 hidden w-[52%] border-[6px] border-white shadow-2xl sm:block lg:-right-14">
            <Img src={IMG.storyProducts} alt="Three PureDent cartons stacked beside a globe" sizes="320px" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:pl-6">
          <Reveal>
            <Eyebrow tone="red">About PureDent</Eyebrow>
            <h2 className="display-2 mt-6 text-navy">Advanced Oral Care. Naturally Perfected.</h2>
            <p className="lede mt-7">
              PureDent is part of a modern Smile Revolution — proving that thoughtfully formulated, fluoride-free oral care can deliver serious performance.
            </p>
            <p className="mt-5 leading-relaxed text-slate">
              Launched in Africa and designed with a global perspective, we blend nature-inspired ingredients with scientific insight to create oral care that
              protects what matters: healthy teeth, fresh breath and the confidence to smile freely.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {[
                ['Science-Led Protection', 'Every formulation decision is guided by science.'],
                ['Pure, Thoughtful Formulation', 'Fluoride-free, built on bio-active ingredients.'],
                ['Made for Modern Families', 'Care for every age and every smile at home.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-5 py-5">
                  <Check className="mt-1 size-5 shrink-0 text-brand-red" aria-hidden />
                  <div>
                    <p className="font-display font-bold text-navy">{t}</p>
                    <p className="mt-1 text-[15px] text-slate">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink to="/about" variant="navy">
                Discover PureDent
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
function ProductShowcase() {
  const [advanced, complete, kids] = PRODUCTS
  return (
    <section className="bg-ice py-20 lg:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow tone="red">Our Products</Eyebrow>
            <h2 className="display-2 mt-6 text-navy">One Brand. Three Powerful Solutions.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="lede">Premium protection, everyday confidence and gentle care for growing smiles — each formulated fluoride-free.</p>
          </Reveal>
        </div>

        {/* Feature: Advanced 3X */}
        <Reveal className="mt-14 grid overflow-hidden bg-white lg:mt-20 lg:grid-cols-12">
          <div className="relative aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:min-h-[560px]">
            <Img src={advanced.gallery[0].src} alt={advanced.gallery[0].alt} sizes="(min-width:1024px) 58vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute top-6 left-6 bg-brand-red px-3 py-1.5 font-display text-[11px] font-bold tracking-[0.18em] text-white uppercase">
              {advanced.positioning}
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-5 lg:p-14">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">01 — {advanced.subtitle}</p>
            <h3 className="display-3 mt-4 text-navy">{advanced.name}</h3>
            <p className="mt-5 leading-relaxed text-slate">{advanced.description}</p>
            <FeatureList items={advanced.highlights} />
            <div className="mt-10">
              <ButtonLink to={`/products/${advanced.slug}`} variant="red">
                View Product
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          {/* Complete Care — navy panel */}
          <Reveal className="relative flex flex-col overflow-hidden bg-navy text-white sm:flex-row lg:col-span-7">
            <div className="water-lines absolute inset-0 opacity-60" aria-hidden />
            <div className="relative flex items-end justify-center px-8 pt-10 sm:w-[42%] sm:pt-14">
              <Img src={complete.tube} alt="PureDent Complete Care 10 tube" widths={[384, 640]} sizes="240px" className="h-auto w-[52%] max-w-[200px] drop-shadow-[0_30px_30px_rgba(0,0,0,0.45)] sm:w-[80%]" />
            </div>
            <div className="relative flex flex-1 flex-col justify-center p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-sky uppercase">02 — {complete.positioning}</p>
              <h3 className="display-3 mt-4">{complete.name}</h3>
              <p className="mt-4 leading-relaxed text-white/70">{complete.description}</p>
              <FeatureList items={complete.highlights} light />
              <div className="mt-8">
                <ButtonLink to={`/products/${complete.slug}`} variant="white">
                  View Product
                </ButtonLink>
              </div>
            </div>
          </Reveal>
          {/* Kids — light panel */}
          <Reveal delay={0.1} className="flex flex-col bg-white lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Img src={kids.gallery[0].src} alt={kids.gallery[0].alt} sizes="(min-width:1024px) 40vw, 100vw" className="h-full w-full object-cover" />
              <span className="absolute top-5 left-5 bg-white px-3 py-1.5 font-display text-[11px] font-bold tracking-[0.15em] text-navy uppercase">
                {kids.ageGuidance}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">03 — Kids</p>
              <h3 className="display-3 mt-4 text-navy">{kids.name}</h3>
              <p className="mt-3 font-display font-semibold text-brand-red">{kids.positioning}</p>
              <p className="mt-3 leading-relaxed text-slate">{kids.description}</p>
              <div className="mt-auto pt-8">
                <ButtonLink to={`/products/${kids.slug}`} variant="outline-dark">
                  View Product
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FeatureList({ items, light }: { items: string[]; light?: boolean }) {
  return (
    <ul className={`mt-7 space-y-3 border-t pt-6 ${light ? 'border-white/15' : 'border-line'}`}>
      {items.map((h) => (
        <li key={h} className={`flex items-center gap-3 text-[15px] font-medium ${light ? 'text-white/90' : 'text-ink'}`}>
          <span className={`size-1.5 shrink-0 ${light ? 'bg-sky' : 'bg-brand-red'}`} aria-hidden />
          {h}
        </li>
      ))}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
function ScienceSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow tone="red">Our Science</Eyebrow>
              <h2 className="display-2 mt-6 text-navy">Science Behind Every Confident Smile.</h2>
              <p className="lede mt-7">
                At the heart of every formulation is PureDent’s <strong className="font-semibold text-navy">{ANDS.name}</strong> — a science-informed framework
                that brings three ingredient families together.
              </p>
              <div className="mt-10 aspect-[4/3] overflow-hidden">
                <Img src={IMG.mouthDefence} alt="Illustration of teeth each protected by a translucent PureDent shield against bacteria" sizes="(min-width:1024px) 38vw, 100vw" className="h-full w-full object-cover" />
              </div>
              <div className="mt-10">
                <ButtonLink to="/science" variant="ocean">
                  Explore Our Science
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
        <ol className="lg:col-span-7">
          {INGREDIENTS.map((ing, i) => (
            <Reveal as="li" key={ing.id} delay={i * 0.05} className="grid gap-6 border-t border-line py-12 first:border-t-0 first:pt-0 sm:grid-cols-[120px_1fr] lg:py-14">
              <span className="font-display text-6xl leading-none font-extrabold text-sky lg:text-7xl">{ing.index}</span>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">{ing.kind}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-navy sm:text-3xl">{ing.name}</h3>
                <p className="mt-4 leading-relaxed text-slate">{ing.summary}</p>
                <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {ing.roles.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-[15px] text-ink">
                      <Check className="mt-0.5 size-4 shrink-0 text-ocean" aria-hidden />
                      {r}
                    </li>
                  ))}
                </ul>
                <Link to={`/science#${ing.id}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-red">
                  How {ing.name.split(' ')[0].toLowerCase() === 'therapeutic' ? 'essential oils work' : `${ing.name.toLowerCase()} works`}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
function FluorideFree() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Img src={IMG.lab} alt="A PureDent scientist in a lab coat and safety glasses examining a plant sample" sizes="(min-width:1024px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy-deep/40" aria-hidden />
        </div>
        <div className="px-5 py-20 sm:px-12 lg:px-16 lg:py-28 xl:px-24">
          <Reveal>
            <Eyebrow tone="sky">Why Fluoride-Free?</Eyebrow>
            <h2 className="display-2 mt-6">A considered alternative, explained honestly.</h2>
            <p className="mt-7 text-lg leading-relaxed text-white/75">
              Fluoride has been used in oral care for decades and is widely recommended for cavity prevention. Many families today are also looking for
              alternatives. PureDent offers one — built around Hydroxyapatite, Xylitol and essential oils.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
              {[
                ['We respect the science', 'We never claim fluoride is harmful for everyone.'],
                ['We offer a choice', 'A fluoride-free routine for those who prefer one.'],
                ['We value your dentist', 'Professional advice always comes first.'],
              ].map(([t, d]) => (
                <div key={t} className="bg-navy-deep p-5 sm:pt-0 sm:pl-0 sm:first:pl-0 [&:not(:first-child)]:sm:pl-5">
                  <dt className="font-display text-[15px] font-bold">{t}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/60">{d}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <ButtonLink to="/why-fluoride-free" variant="outline-light">
                Learn Why Fluoride-Free
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
function FamilyLifestyle() {
  const [advanced, complete, kids] = PRODUCTS
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Eyebrow tone="red">For Every Smile at Home</Eyebrow>
            <h2 className="display-2 mt-6 text-navy">Healthy Smiles Begin With Everyday Choices.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 lg:pt-14">
            <p className="lede">
              Morning rush or bedtime wind-down, the routine is where protection happens. PureDent develops oral care for adults, families and children — so
              everyone in your home has a formulation made for them.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-12 sm:grid-rows-[auto_auto] lg:mt-20">
          <Reveal className="relative aspect-[16/10] overflow-hidden sm:col-span-8 sm:row-span-2 sm:aspect-auto sm:min-h-[520px]">
            <Img src={IMG.familyProducts} alt="A father, mother and son each holding out a different PureDent product" sizes="(min-width:640px) 66vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden sm:col-span-4 sm:aspect-auto">
            <Img src={IMG.coupleBrushing} alt="A couple laughing while brushing their teeth in front of a mirror" sizes="(min-width:640px) 33vw, 100vw" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden sm:col-span-4 sm:aspect-auto">
            <Img src={IMG.parentChild} alt="A smiling mother hugged by her young daughter holding a toothbrush" sizes="(min-width:640px) 33vw, 100vw" className="h-full w-full object-cover" />
          </Reveal>
        </div>

        <ul className="mt-14 grid border-t border-line sm:grid-cols-3">
          {[
            { who: 'For adults', p: advanced },
            { who: 'For the whole household', p: complete },
            { who: 'For children aged 3–6', p: kids },
          ].map(({ who, p }, i) => (
            <li key={p.slug} className={`py-8 sm:px-8 ${i ? 'border-t border-line sm:border-t-0 sm:border-l' : 'sm:pl-0'}`}>
              <p className="text-xs font-semibold tracking-[0.2em] text-slate uppercase">{who}</p>
              <Link to={`/products/${p.slug}`} className="group mt-3 flex items-center justify-between gap-4">
                <span className="font-display text-xl font-bold text-navy transition-colors group-hover:text-brand-red">{p.name}</span>
                <ArrowRight className="size-5 shrink-0 text-navy transition-transform group-hover:translate-x-1 group-hover:text-brand-red" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
function SmileRevolution() {
  return (
    <section className="bg-ice">
      <div className="relative">
        <Img src={IMG.revolutionBanner} alt="A group of young people smiling together, framed by a blue to teal PureDent gradient" sizes="100vw" className="aspect-[16/9] w-full object-cover sm:aspect-[21/8]" />
      </div>
      <div className="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <Reveal className="lg:col-span-5">
          <Eyebrow tone="red">The Smile Revolution</Eyebrow>
          <h2 className="display-2 mt-6 text-navy">Join the Smile Revolution.</h2>
          <p className="lede mt-6">
            Our commitment to changing how people think about oral health — moving from fear-based care to confident, informed protection.
          </p>
          <div className="mt-10">
            <ButtonLink to="/smile-revolution#join" variant="red">
              Join the Movement
            </ButtonLink>
          </div>
        </Reveal>
        <ol className="grid gap-px self-end bg-line sm:grid-cols-3 lg:col-span-7">
          {[
            ['Modern Science', 'Formulations guided by evidence-aligned ingredients.'],
            ['Honest Education', 'Clear, practical oral-care knowledge. No marketing fluff.'],
            ['Family First', 'Protection designed around the people you love.'],
          ].map(([t, d], i) => (
            <Reveal as="li" key={t} delay={i * 0.08} className="bg-ice p-6 sm:p-7">
              <span className="font-display text-sm font-bold text-brand-red">0{i + 1}</span>
              <h3 className="mt-6 font-display text-xl font-bold text-navy">{t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
function FinalCta() {
  return (
    <section className="grain relative overflow-hidden bg-navy text-white">
      <div className="water-lines absolute inset-0" aria-hidden />
      <div className="absolute -right-40 -bottom-40 size-[560px] rounded-full bg-[radial-gradient(circle,rgba(8,126,174,0.45),transparent_70%)]" aria-hidden />
      <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-7">
          <h2 className="display-1 !text-[2.4rem] sm:!text-6xl">
            Your Smile Deserves <span className="text-sky">Pure Protection.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/75">Discover a new standard of everyday oral care with PureDent.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/products" variant="red">
              Explore PureDent Products
            </ButtonLink>
            <ButtonLink to="/where-to-buy" variant="outline-light">
              Where to Buy
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="flex items-end justify-center gap-2 lg:col-span-5 lg:justify-end">
          {PRODUCTS.map((p, i) => (
            <Img
              key={p.slug}
              src={p.tube}
              alt={p.name}
              widths={[384]}
              sizes="160px"
              className={`h-auto w-[28%] max-w-[150px] drop-shadow-[0_30px_25px_rgba(0,0,0,0.45)] ${i === 1 ? '-mb-2 w-[32%]' : ''}`}
            />
          ))}
        </Reveal>
      </div>
      <div className="container-x relative border-t border-white/10 py-6">
        <TextLink to="/contact" light>
          Questions? Talk to our team
        </TextLink>
      </div>
    </section>
  )
}
