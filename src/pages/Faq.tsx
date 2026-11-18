import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Accordion } from '../components/Accordion'
import { ButtonLink, Eyebrow } from '../components/ui'
import { FAQ } from '../data/faq'
import { SITE } from '../data/site'

export default function Faq() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase()
    if (!n) return FAQ
    return FAQ.map((c) => ({ ...c, items: c.items.filter((i) => `${i.q} ${i.a}`.toLowerCase().includes(n)) })).filter((c) => c.items.length)
  }, [q])
  const count = filtered.reduce((s, c) => s + c.items.length, 0)

  return (
    <>
      <Seo
        title="FAQ"
        description="Answers to common questions about PureDent products, ingredients, fluoride-free oral care, children’s brushing, usage and where to buy."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.flatMap((c) => c.items).map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
        }}
      />
      <section className="bg-ice pt-32 pb-14 sm:pt-40 lg:pb-20">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="red">Frequently Asked Questions</Eyebrow>
            <h1 className="display-1 mt-6 text-navy">How can we help?</h1>
          </div>
          <form role="search" onSubmit={(e) => e.preventDefault()} className="relative lg:col-span-5">
            <label htmlFor="faq-search" className="sr-only">
              Search questions
            </label>
            <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-slate" aria-hidden />
            <input
              id="faq-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search e.g. “children”, “xylitol”"
              className="w-full rounded-[3px] border border-line bg-white py-4 pr-4 pl-12 text-base outline-none focus:border-ocean focus:ring-2 focus:ring-ocean/15"
            />
            <p className="sr-only" aria-live="polite">
              {count} matching questions
            </p>
          </form>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <nav aria-label="FAQ categories" className="hidden lg:col-span-3 lg:block">
            <ul className="sticky top-28 space-y-1 border-l border-line">
              {filtered.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[15px] text-slate hover:border-brand-red hover:text-navy">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-16 lg:col-span-8 lg:col-start-5">
            {filtered.length === 0 && (
              <div className="py-10">
                <p className="font-display text-xl font-bold text-navy">No questions match “{q}”.</p>
                <p className="mt-2 text-slate">Try another word, or ask our team directly.</p>
              </div>
            )}
            {filtered.map((c) => (
              <section key={c.id + q} id={c.id} className="scroll-mt-28" aria-labelledby={`h-${c.id}`}>
                <h2 id={`h-${c.id}`} className="mb-4 font-display text-xs font-bold tracking-[0.2em] text-ocean uppercase">
                  {c.title}
                </h2>
                <Accordion items={c.items} defaultOpen={q ? 0 : -1} />
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold">Still have a question?</h2>
            <p className="mt-2 text-white/70">
              Our customer care team is available {SITE.hours}.
            </p>
          </div>
          <ButtonLink to="/contact" variant="red">
            Contact Us
          </ButtonLink>
        </div>
      </section>
    </>
  )
}
