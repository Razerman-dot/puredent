import { useLocation } from 'react-router-dom'
import { SITE } from '../data/site'
import { optimised, IMG } from '../lib/img'

interface Props {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article' | 'product'
  jsonLd?: Record<string, unknown>
}

/** React 19 hoists <title>, <meta> and <link> into <head> automatically. */
export function Seo({ title, description, image = IMG.familyProducts, type = 'website', jsonLd }: Props) {
  const { pathname } = useLocation()
  const fullTitle = title === SITE.name ? `${SITE.name} | Advanced Fluoride-Free Oral Care` : `${title} | ${SITE.name}`
  const url = `${SITE.url}${pathname === '/' ? '' : pathname}`
  const img = optimised(image, 1200)
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type === 'product' ? 'product' : type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_NG" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </>
  )
}
