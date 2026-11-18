import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink, Eyebrow, Reveal } from '../components/ui'
import { CommunityForm } from '../components/forms/CommunityForm'
import { IMG } from '../lib/img'

const PROMISES = [
  ['Modern Science', 'Formulations guided by evidence-aligned ingredients and a science-first methodology.'],
  ['Honest Education', 'Clear, practical oral-care knowledge for every family. No marketing fluff.'],
  ['Family First', 'Protection designed around the people you love, from age three upwards.'],
]

const ROADMAP = [
  ['Education Initiatives', 'Accessible oral-health learning for families.'],
  ['School Outreach', 'Building healthy brushing habits early.'],
  ['Professional Collaboration', 'Working alongside oral-care professionals.'],
  ['Digital Resources', 'Practical guides and tools through the Oral Health Hub.'],
]

export default function SmileRevolution() {
  return (
    <>
      <Seo
        title="Join the Smile Revolution"
        description="The Smile Revolution is PureDent’s commitment to moving oral health from fear-based care to confident, informed protection. Join the movement."
        image={IMG.revolutionBanner}
      />
      <section className="grain relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_80%_20%,#087EAE_0%,#102C50_60%)]" aria-hidden />
        <div className="water-lines absolute inset-0" aria-hidden />
        <div className="container-x relative pt-32 pb-0 sm:pt-40">
          <Reveal className="max-w-3xl">
            <Eyebrow tone="sky">The Smile Revolution</Eyebrow>
            <h1 className="display-1 mt-6">
              From fear-based care to <span className="text-sky">confident protection.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
              The Smile Revolution is PureDent’s commitment to changing how people think about oral health — and making confident, informed protection possible
              everywhere.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="#join" variant="red">
                Join the Movement
              </ButtonLink>
              <ButtonLink to="/products" variant="outline-light">
                Explore Products
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="relative mt-16">
          <Img src={IMG.revolutionBanner} alt="A group of young people smiling together, framed by a blue to teal PureDent gradient" priority sizes="100vw" className="aspect-[16/9] w-full object-cover sm:aspect-[21/8]" />
        </Reveal>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Our promises</p>
            <h2 className="display-2 mt-4 text-navy">What the movement stands for.</h2>
          </Reveal>
          <ol className="mt-14 grid border-t-2 border-navy md:grid-cols-3">
            {PROMISES.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.08} className={`py-10 md:px-8 ${i ? 'border-t border-line md:border-t-0 md:border-l' : 'md:pl-0'}`}>
                <span className="font-display text-5xl font-extrabold text-sky">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy">{t}</h3>
                <p className="mt-3 leading-relaxed text-slate">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ice">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <Img src={IMG.parentChild} alt="A smiling mother hugged by her daughter, who is holding a toothbrush" sizes="(min-width:1024px) 50vw, 100vw" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <Reveal className="px-5 py-20 sm:px-12 lg:px-16 lg:py-28">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Parents’ peace of mind</p>
            <h2 className="display-3 mt-4 text-navy">Gentle, fluoride-free care for little ones.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate">
              PureDent Kids Xylitol Gentle Protect Gel is made for children aged 3–6, with a mild taste and gentle texture that help turn brushing into a happy
              habit.
            </p>
            <div className="mt-10">
              <ButtonLink to="/products/puredent-kids" variant="navy">
                Discover PureDent Kids
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Roadmap</p>
            <h2 className="display-3 mt-4 text-navy">Community & impact.</h2>
            <p className="mt-4 text-slate">Areas PureDent plans to grow the Smile Revolution into next.</p>
          </Reveal>
          <ul className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-8">
            {ROADMAP.map(([t, d]) => (
              <li key={t} className="bg-white p-7">
                <h3 className="font-display text-lg font-bold text-navy">{t}</h3>
                <p className="mt-2 text-[15px] text-slate">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="join" className="grain relative scroll-mt-20 overflow-hidden bg-navy text-white">
        <div className="water-lines absolute inset-0" aria-hidden />
        <div className="container-x relative grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <Eyebrow tone="sky">Join the Movement</Eyebrow>
            <h2 className="display-2 mt-6">Be part of the Smile Revolution.</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Get honest oral-care education, community news and first word on PureDent initiatives in your area.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <CommunityForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
