import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink, PageHero, Reveal } from '../components/ui'
import { IMG } from '../lib/img'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="PureDent’s story, vision and mission: a values-led oral-care brand launched in Africa, raising the standard for fluoride-free protection for families worldwide."
        image={IMG.coupleProduct}
      />
      <PageHero
        eyebrow="About PureDent"
        title={
          <>
            A higher standard for <span className="text-ocean">fluoride-free</span> oral care.
          </>
        }
        lede="PureDent sets out to raise the standard for fluoride-free solutions through continuous innovation and uncompromising quality — for individuals and families everywhere."
        image={IMG.coupleProduct}
        imageAlt="A smiling couple holding a toothbrush and a PureDent Complete Care tube"
      />

      {/* Our Story — editorial long-form with pull quote */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="font-display text-sm font-bold text-brand-red">01</p>
            <h2 className="display-3 mt-3 text-navy">Our Story</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="font-display text-2xl leading-snug font-semibold text-navy sm:text-[1.9rem]">
              PureDent was born as part of a modern Smile Revolution — a movement that challenges conventional oral care by proving that natural,
              thoughtfully formulated products can deliver serious performance.
            </p>
            <div className="prose-pd mt-10">
              <p>
                Launched in Africa and designed with a global perspective, PureDent blends nature-inspired ingredients with scientific insight. The
                result is a range of fluoride-free toothpastes and gels for adults, households and young children.
              </p>
              <p>
                We believe oral care should feel confident, not fearful — informed by science, explained honestly, and made for the way modern families
                actually live.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal className="container-x mt-16 lg:mt-24">
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-[21/9]">
            <Img src={IMG.storyProducts} alt="PureDent Kids, Complete Care 10 and Advanced 3X cartons stacked on a wooden table beside a globe" sizes="100vw" className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* Vision & Mission — split navy */}
      <section className="grid bg-navy text-white lg:grid-cols-2">
        <Reveal className="border-b border-white/10 px-5 py-20 sm:px-12 lg:border-r lg:border-b-0 lg:px-16 lg:py-28 xl:px-24">
          <p className="font-display text-sm font-bold text-sky">02 — Our Vision</p>
          <p className="mt-8 font-display text-3xl leading-tight font-bold sm:text-4xl">
            To become a global leader in pure, powerful, proven oral care.
          </p>
          <p className="mt-6 leading-relaxed text-white/70">
            Setting a higher standard for fluoride-free solutions through continuous innovation and uncompromising quality.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="px-5 py-20 sm:px-12 lg:px-16 lg:py-28 xl:px-24">
          <p className="font-display text-sm font-bold text-sky">03 — Our Mission</p>
          <p className="mt-8 font-display text-3xl leading-tight font-bold sm:text-4xl">
            To revolutionise oral care through our Advanced Natural Defence System.
          </p>
          <p className="mt-6 leading-relaxed text-white/70">
            Breakthrough formulations that protect, strengthen and support optimal oral health — with lasting freshness and confidence for families
            worldwide.
          </p>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden">
              <Img src={IMG.lab} alt="A PureDent scientist examining a plant sample in the laboratory" sizes="(min-width:1024px) 40vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="font-display text-sm font-bold text-brand-red">04</p>
              <h2 className="display-3 mt-3 text-navy">Our Brand Philosophy</h2>
              <p className="lede mt-6">Science guides every formulation decision. Nature inspires the ingredients. Honesty shapes how we talk about both.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-10 divide-y divide-line border-y border-line">
                {[
                  ['Science-first', 'Evidence-aligned ingredients chosen to support the mouth’s natural defence mechanisms.'],
                  ['Nature-inspired', 'Bio-active minerals, Xylitol and botanical oils, carefully combined.'],
                  ['Honest education', 'Clear guidance on oral health — never fear-based marketing.'],
                ].map(([t, d]) => (
                  <div key={t} className="grid gap-2 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
                    <dt className="font-display font-bold text-navy">{t}</dt>
                    <dd className="leading-relaxed text-slate">{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Commitment to families */}
      <section className="bg-ice">
        <div className="grid lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] lg:order-1 lg:aspect-auto">
            <Img src={IMG.familyLounge} alt="A family of four lying on a rug in a bright living room, smiling" sizes="(min-width:1024px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <Reveal className="order-1 px-5 py-20 sm:px-12 lg:order-2 lg:px-16 lg:py-28 xl:px-24">
            <p className="font-display text-sm font-bold text-brand-red">05</p>
            <h2 className="display-3 mt-3 text-navy">Our Commitment to Families</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Every smile in the house matters. That is why PureDent offers a premium formulation for adults, an all-round gel the whole household can share,
              and a gentle, fluoride-free gel created specifically for children aged 3–6.
            </p>
            <p className="mt-5 leading-relaxed text-slate">Our aim is simple: all-day oral wellness for families, from the first brush to the last.</p>
            <div className="mt-10">
              <ButtonLink to="/products" variant="navy">
                See the range
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Promise + Accessible premium */}
      <section className="bg-white py-20 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-sm font-bold text-brand-red">06</p>
            <h2 className="display-3 mt-3 text-navy">Our Promise</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Pure, effective oral care that protects long-term oral health — backed by careful ingredient selection, thoughtful formulation and rigorous
              quality control.
            </p>
            <blockquote className="mt-10 border-l-2 border-brand-red pl-6 font-display text-xl leading-snug font-semibold text-navy">
              “PureDent does not just clean teeth — it protects what matters.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="font-display text-sm font-bold text-brand-red">07</p>
            <h2 className="display-3 mt-3 text-navy">Accessible Premium Oral Care</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              PureDent bridges the gap between mass-market chemical products and expensive niche natural alternatives.
            </p>
            <ol className="mt-10 border-t border-line">
              {[
                ['Accessible Premium', 'High-tier quality at a mid-tier price.'],
                ['Values-Led Brand', 'Honest education and responsible claims.'],
                ['Family Focused', 'Formulations for every age at home.'],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-6 border-b border-line py-6">
                  <span className="font-display text-3xl font-extrabold text-sky">{i + 1}</span>
                  <div>
                    <p className="font-display text-lg font-bold text-navy">{t}</p>
                    <p className="mt-1 text-slate">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">See the science behind the promise.</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/science" variant="red">
              Discover Our Science
            </ButtonLink>
            <ButtonLink to="/smile-revolution" variant="outline-light">
              The Smile Revolution
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}

