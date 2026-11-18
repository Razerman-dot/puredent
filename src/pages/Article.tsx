import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Stethoscope } from 'lucide-react'
import { Seo } from '../components/Seo'
import { Img } from '../components/Img'
import { ButtonLink } from '../components/ui'
import { ARTICLES } from '../data/articles'
import { SITE } from '../data/site'
import { ArticleCard, Meta } from './Hub'
import NotFound from './NotFound'

export default function ArticlePage() {
  const { slug } = useParams()
  const a = ARTICLES.find((x) => x.slug === slug)
  if (!a) return <NotFound />
  const related = [...ARTICLES.filter((x) => x.slug !== a.slug && x.category === a.category), ...ARTICLES.filter((x) => x.slug !== a.slug && x.category !== a.category)].slice(0, 3)

  return (
    <>
      <Seo
        title={a.title}
        description={a.excerpt}
        image={a.image}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: a.title,
          datePublished: a.date,
          author: { '@type': 'Organization', name: 'PureDent Editorial Team' },
          publisher: { '@type': 'Organization', name: 'PureDent', url: SITE.url },
        }}
      />
      <article>
        <header className="bg-white pt-28 sm:pt-36">
          <div className="container-x max-w-4xl">
            <Link to="/oral-health-hub" className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-navy">
              <ArrowLeft className="size-4" aria-hidden /> Oral Health Hub
            </Link>
            <div className="mt-8">
              <Meta a={a} />
            </div>
            <h1 className="display-2 mt-5 text-navy">{a.title}</h1>
            <p className="lede mt-6">{a.excerpt}</p>
            <p className="mt-6 text-sm text-slate">By the PureDent Editorial Team</p>
          </div>
          <div className="container-x mt-12 max-w-6xl">
            <div className="aspect-[16/9] overflow-hidden">
              <Img src={a.image} alt={a.imageAlt} priority sizes="(min-width:1280px) 1150px, 100vw" className="h-full w-full object-cover" />
            </div>
          </div>
        </header>
        <div className="container-x max-w-3xl py-16 lg:py-20">
          <div className="prose-pd">
            {a.body.map((b, i) =>
              b.type === 'p' ? (
                <p key={i} className={i === 0 ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.9] first-letter:font-extrabold first-letter:text-navy' : ''}>
                  {b.text}
                </p>
              ) : b.type === 'h2' ? (
                <h2 key={i}>{b.text}</h2>
              ) : (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              ),
            )}
          </div>
          <aside className="mt-12 flex gap-4 border-l-2 border-ocean bg-ice p-6">
            <Stethoscope className="mt-0.5 size-5 shrink-0 text-ocean" aria-hidden />
            <p className="text-[15px] leading-relaxed text-navy">
              This article is general education and is not a substitute for professional advice. Please speak to your dentist about your own oral health.
            </p>
          </aside>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/products" variant="red">
              Explore PureDent Products
            </ButtonLink>
            <ButtonLink to="/science" variant="outline-dark">
              Our Science
            </ButtonLink>
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-mist py-16 lg:py-24">
        <div className="container-x">
          <h2 className="display-3 text-navy">Related articles</h2>
          <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <ArticleCard a={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
