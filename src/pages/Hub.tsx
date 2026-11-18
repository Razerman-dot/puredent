import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, ArrowRight, X } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { Eyebrow, Reveal } from '../components/ui'
import { NewsletterForm } from '../components/forms/NewsletterForm'
import { ARTICLES, CATEGORIES, readingTime, formatDate, type Article } from '../data/articles'
import { IMG } from '../lib/img'

export default function Hub() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') ?? ''
  const q = params.get('q') ?? ''

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0]
  const filtering = !!(category || q)
  const results = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return ARTICLES.filter((a) => (!category || a.category === category))
      .filter((a) => !needle || [a.title, a.excerpt, a.category].join(' ').toLowerCase().includes(needle))
      .filter((a) => filtering || a.slug !== featured.slug)
  }, [category, q, filtering, featured.slug])

  return (
    <>
      <Seo
        title="Oral Health Hub"
        description="Practical, honest oral-health education from PureDent: brushing technique, enamel care, children’s dental health, toothpaste ingredients and family routines."
        image={IMG.coupleBrushing}
      />

      <section className="bg-white pt-32 sm:pt-40">
        <div className="container-x">
          <div className="grid gap-8 border-b-2 border-navy pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow tone="red">Oral Health Hub</Eyebrow>
              <h1 className="display-1 mt-6 text-navy">The Journal.</h1>
            </div>
            <p className="lede lg:col-span-5">Clear, practical oral-care knowledge for every age — no marketing fluff.</p>
          </div>

          {/* filters */}
          <div className="flex flex-col gap-5 border-b border-line py-6 lg:flex-row lg:items-center lg:justify-between">
            <div role="group" aria-label="Filter by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
              <FilterChip active={!category} onClick={() => update('category', '')}>
                All
              </FilterChip>
              {CATEGORIES.map((c) => (
                <FilterChip key={c} active={category === c} onClick={() => update('category', c)}>
                  {c}
                </FilterChip>
              ))}
            </div>
            <form role="search" onSubmit={(e) => e.preventDefault()} className="relative w-full lg:w-72">
              <label htmlFor="hub-search" className="sr-only">
                Search articles
              </label>
              <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate" aria-hidden />
              <input
                id="hub-search"
                type="search"
                value={q}
                onChange={(e) => update('q', e.target.value)}
                placeholder="Search articles"
                className="w-full rounded-[3px] border border-line py-3 pr-4 pl-10 text-[15px] outline-none focus:border-ocean"
              />
            </form>
          </div>
        </div>
      </section>

      {!filtering && (
        <section className="bg-white pt-12">
          <div className="container-x">
            <Link to={`/oral-health-hub/${featured.slug}`} className="group grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="relative aspect-[16/10] overflow-hidden lg:col-span-7">
                <Img src={featured.image} alt={featured.imageAlt} priority sizes="(min-width:1024px) 58vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <span className="absolute top-5 left-5 bg-brand-red px-3 py-1.5 font-display text-[11px] font-bold tracking-[0.18em] text-white uppercase">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center lg:col-span-5">
                <Meta a={featured} />
                <h2 className="display-3 mt-4 text-navy transition-colors group-hover:text-ocean">{featured.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-slate">{featured.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-navy group-hover:text-brand-red">
                  Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-white py-14 lg:py-20">
        <div className="container-x">
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <h2 className="font-display text-lg font-bold text-navy">{filtering ? 'Results' : 'Latest articles'}</h2>
            <p className="text-sm text-slate" aria-live="polite">
              {results.length} {results.length === 1 ? 'article' : 'articles'}
            </p>
          </div>
          {results.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-display text-xl font-bold text-navy">No articles match your search.</p>
              <button
                type="button"
                onClick={() => setParams({}, { replace: true })}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ocean underline underline-offset-4"
              >
                <X className="size-4" aria-hidden /> Clear filters
              </button>
            </div>
          ) : (
            <ul className="grid gap-x-8 gap-y-14 pt-10 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((a, i) => (
                <Reveal as="li" key={a.slug} delay={(i % 3) * 0.06}>
                  <ArticleCard a={a} />
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="bg-ice py-16 lg:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 className="display-3 text-navy">Oral-care insights, once a month.</h2>
            <p className="mt-3 text-slate">Practical tips, product news and new articles from the Hub.</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`shrink-0 border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
        active ? 'border-navy bg-navy text-white' : 'border-line text-slate hover:border-navy hover:text-navy'
      }`}
    >
      {children}
    </button>
  )
}

export function Meta({ a }: { a: Article }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-slate">
      <span className="font-semibold tracking-wide text-ocean uppercase">{a.category}</span>
      <span aria-hidden>·</span>
      <time dateTime={a.date}>{formatDate(a.date)}</time>
      <span aria-hidden>·</span>
      <span>{readingTime(a)} min read</span>
    </p>
  )
}

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link to={`/oral-health-hub/${a.slug}`} className="group block">
      <div className="aspect-[4/3] overflow-hidden bg-mist">
        <Img src={a.image} alt={a.imageAlt} sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="mt-5">
        <Meta a={a} />
        <h3 className="mt-3 font-display text-xl leading-snug font-bold text-navy transition-colors group-hover:text-ocean">{a.title}</h3>
        <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-slate">{a.excerpt}</p>
      </div>
    </Link>
  )
}
