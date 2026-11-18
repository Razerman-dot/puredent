import { useState, type KeyboardEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Check, ArrowRight } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { Accordion } from '../components/Accordion'
import { ButtonLink, Reveal } from '../components/ui'
import { getProduct, PRODUCTS, PRICE_NOTE, type Product } from '../data/products'
import { SITE } from '../data/site'
import NotFound from './NotFound'

/** Per-product visual identity within the shared brand system. */
const THEME = {
  advanced: {
    hero: 'bg-white',
    stage: 'bg-gradient-to-br from-ice via-white to-ice',
    accent: 'text-brand-red',
    bar: 'bg-brand-red',
    dark: false,
  },
  complete: {
    hero: 'bg-navy text-white',
    stage: 'bg-gradient-to-br from-corporate via-navy to-navy-deep',
    accent: 'text-sky',
    bar: 'bg-sky',
    dark: true,
  },
  kids: {
    hero: 'bg-ice',
    stage: 'bg-gradient-to-br from-white via-ice to-sky/40',
    accent: 'text-ocean',
    bar: 'bg-ocean',
    dark: false,
  },
} as const

export default function ProductDetail() {
  const { slug = '' } = useParams()
  const product = getProduct(slug)
  if (!product) return <NotFound />
  return <ProductView key={product.slug} p={product} />
}

function ProductView({ p }: { p: Product }) {
  const t = THEME[p.theme]
  const related = PRODUCTS.filter((x) => x.slug !== p.slug)

  return (
    <>
      <Seo
        title={p.name}
        description={`${p.name} — ${p.description}`}
        image={p.gallery[0].src}
        type="product"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: p.name,
          description: p.description,
          brand: { '@type': 'Brand', name: 'PureDent' },
          url: `${SITE.url}/products/${p.slug}`,
        }}
      />

      {/* Hero */}
      <section className={`${t.hero} relative overflow-hidden`}>
        {t.dark && <div className="water-lines absolute inset-0 opacity-60" aria-hidden />}
        <div className="container-x relative pt-28 sm:pt-32">
          <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-[13px] ${t.dark ? 'text-white/60' : 'text-slate'}`}>
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="size-3.5" aria-hidden />
            <Link to="/products" className="hover:underline">
              Products
            </Link>
            <ChevronRight className="size-3.5" aria-hidden />
            <span aria-current="page" className={t.dark ? 'text-white' : 'text-navy'}>
              {p.shortName}
            </span>
          </nav>
        </div>
        <div className="container-x relative grid gap-12 pt-8 pb-20 lg:grid-cols-12 lg:gap-16 lg:pb-28">
          <div className="lg:col-span-7">
            <Gallery p={p} stage={t.stage} />
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <Reveal>
              <p className={`flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase ${t.accent}`}>
                <span className={`h-px w-8 ${t.bar}`} aria-hidden />
                {p.positioning}
              </p>
              <h1 className={`display-2 mt-5 ${t.dark ? '' : 'text-navy'}`}>{p.name}</h1>
              <p className={`mt-3 font-display text-xl font-semibold ${t.accent}`}>{p.subtitle}</p>
              <p className={`mt-6 text-lg leading-relaxed ${t.dark ? 'text-white/75' : 'text-slate'}`}>{p.description}</p>

              <ul className={`mt-8 divide-y border-y ${t.dark ? 'divide-white/10 border-white/15' : 'divide-line border-line'}`}>
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 py-3.5 font-medium">
                    <Check className={`size-4 shrink-0 ${t.accent}`} aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>

              {p.price && (
                <div className="mt-8">
                  <p className="flex flex-wrap items-baseline gap-x-3">
                    <span className={`font-display text-3xl font-extrabold ${t.dark ? '' : 'text-navy'}`}>{p.price}</span>
                    {p.size && <span className={t.dark ? 'text-white/70' : 'text-slate'}>{p.size}</span>}
                    {p.ageGuidance && (
                      <span className={`px-2 py-1 font-display text-xs font-bold tracking-wider uppercase ${t.dark ? 'bg-white/10' : 'bg-white text-navy'}`}>
                        {p.ageGuidance}
                      </span>
                    )}
                  </p>
                  <p className={`mt-1 text-xs ${t.dark ? 'text-white/50' : 'text-slate'}`}>{PRICE_NOTE}</p>
                </div>
              )}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink to="/where-to-buy" variant="red">
                  Where to Buy
                </ButtonLink>
                <ButtonLink to="/contact" variant={t.dark ? 'outline-light' : 'outline-dark'}>
                  Ask a Question
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">Key ingredients</p>
            <h2 className="display-3 mt-4 text-navy">What’s inside.</h2>
            <p className="mt-5 text-slate">
              Highlights from the formulation. See the packaging for the complete ingredient list.
            </p>
            <Link to="/science" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-red">
              Explore our science <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <ol className="lg:col-span-7 lg:col-start-6">
            {p.ingredients.map((ing, i) => (
              <Reveal as="li" key={ing.name} delay={i * 0.06} className="grid gap-4 border-t border-line py-8 sm:grid-cols-[64px_1fr]">
                <span className="font-display text-3xl font-extrabold text-sky">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy">{ing.name}</h3>
                  <p className="mt-2 leading-relaxed text-slate">{ing.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Benefits */}
      <section className={`py-20 lg:py-28 ${p.theme === 'complete' ? 'bg-navy text-white' : 'bg-ice'}`}>
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${p.theme === 'complete' ? 'text-sky' : 'text-ocean'}`}>Benefits</p>
            <h2 className={`display-3 mt-4 ${p.theme === 'complete' ? '' : 'text-navy'}`}>{p.benefitsTitle}</h2>
          </Reveal>
          <ol
            className={`mt-12 grid gap-px sm:grid-cols-2 ${p.benefits.length > 6 ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} ${
              p.theme === 'complete' ? 'bg-white/10' : 'bg-line'
            }`}
          >
            {p.benefits.map((b, i) => (
              <Reveal
                as="li"
                key={b}
                delay={(i % 5) * 0.04}
                className={`flex min-h-[132px] flex-col justify-between gap-6 p-6 ${p.theme === 'complete' ? 'bg-navy' : 'bg-ice'}`}
              >
                <span className={`font-display text-sm font-bold ${p.theme === 'complete' ? 'text-sky' : 'text-brand-red'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-lg leading-snug font-bold">{b}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Ideal for + Usage */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="display-3 text-navy">Ideal for</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {p.idealFor.map((x) => (
                <li key={x} className="flex gap-4 py-4 text-lg text-ink">
                  <Check className="mt-1 size-5 shrink-0 text-ocean" aria-hidden />
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-3 text-navy">How to use</h2>
            <ol className="mt-8 space-y-5">
              {p.usage.map((u, i) => (
                <li key={u} className="flex gap-5">
                  <span className="flex size-9 shrink-0 items-center justify-center bg-navy font-display text-sm font-bold text-white">{i + 1}</span>
                  <p className="pt-1.5 leading-relaxed text-slate">{u}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="display-3 text-navy">Questions about {p.shortName}</h2>
            <Link to="/faq" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand-red">
              View all FAQs <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <div className="lg:col-span-8">
            <Accordion items={p.faqs} defaultOpen={0} />
          </div>
        </div>
      </section>

      {/* Where to buy band */}
      <section className="grain relative overflow-hidden bg-navy text-white">
        <div className="water-lines absolute inset-0" aria-hidden />
        <div className="container-x relative flex flex-col items-start justify-between gap-8 py-16 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Find {p.shortName} near you.</h2>
            <p className="mt-3 text-white/70">Available online and in stores across Nigeria.</p>
          </div>
          <ButtonLink to="/where-to-buy" variant="red">
            Where to Buy
          </ButtonLink>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <h2 className="display-3 text-navy">Complete the routine</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} to={`/products/${r.slug}`} className="group grid grid-cols-[40%_1fr] items-center gap-6 bg-ice p-6 transition-colors hover:bg-sky/30 sm:p-8">
                <div className="flex aspect-[3/4] items-center justify-center">
                  <Img src={r.tube} alt={`${r.name} tube`} widths={[384]} sizes="200px" className="h-full w-auto object-contain transition-transform duration-500 group-hover:-translate-y-2" />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-ocean uppercase">{r.positioning}</p>
                  <h3 className="mt-3 font-display text-xl font-bold text-navy sm:text-2xl">{r.name}</h3>
                  <p className="mt-3 hidden text-[15px] text-slate sm:block">{r.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-brand-red">
                    View product <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Gallery({ p, stage }: { p: Product; stage: string }) {
  const [active, setActive] = useState(0)
  const img = p.gallery[active]
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') setActive((a) => (a + 1) % p.gallery.length)
    if (e.key === 'ArrowLeft') setActive((a) => (a - 1 + p.gallery.length) % p.gallery.length)
  }
  return (
    <div>
      <div className={`relative aspect-[4/3] overflow-hidden ${stage}`} aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Img
              src={img.src}
              alt={img.alt}
              priority={active === 0}
              sizes="(min-width:1024px) 58vw, 100vw"
              className={img.fit === 'cover' ? 'h-full w-full object-cover' : 'h-[88%] w-auto object-contain drop-shadow-[0_30px_30px_rgba(16,44,80,0.3)]'}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div role="tablist" aria-label={`${p.name} images`} onKeyDown={onKey} className="mt-3 grid grid-cols-3 gap-3">
        {p.gallery.map((g, i) => (
          <button
            key={g.src}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-label={`Show image ${i + 1}: ${g.alt}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative aspect-[4/3] overflow-hidden bg-white transition-all ${
              i === active ? 'ring-2 ring-brand-red ring-offset-2' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <Img src={g.src} alt="" widths={[384]} sizes="160px" className={g.fit === 'cover' ? 'h-full w-full object-cover' : 'mx-auto h-full w-auto object-contain p-2'} />
          </button>
        ))}
      </div>
    </div>
  )
}
