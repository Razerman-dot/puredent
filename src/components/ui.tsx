import { Link } from 'react-router-dom'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { optimised, IMG } from '../lib/img'
import { Img as PdImage } from './Img'

/* ---------- Logo (official artwork) ---------- */
export function Logo({ tone = 'blue', className = 'h-7 w-auto' }: { tone?: 'blue' | 'white'; className?: string }) {
  return (
    <img
      src={optimised(tone === 'blue' ? IMG.logoBlue : IMG.logoWhite, 384)}
      alt="PureDent"
      width={140}
      height={36}
      className={className}
      decoding="async"
    />
  )
}

/* ---------- Buttons ---------- */
type Variant = 'red' | 'ocean' | 'navy' | 'outline-light' | 'outline-dark' | 'white'
const VARIANTS: Record<Variant, string> = {
  red: 'bg-brand-red text-white hover:bg-brand-red-dark shadow-[0_10px_30px_-12px_rgba(214,40,50,0.7)]',
  ocean: 'bg-ocean text-white hover:bg-corporate',
  navy: 'bg-navy text-white hover:bg-navy-deep',
  white: 'bg-white text-navy hover:bg-ice',
  'outline-light': 'border border-white/40 text-white hover:border-white hover:bg-white/10',
  'outline-dark': 'border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-white',
}
const BTN =
  'group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[3px] px-6 py-3.5 font-display text-[15px] font-bold tracking-[0.01em] transition-all duration-300 ease-brand'

export function ButtonLink({
  to,
  children,
  variant = 'red',
  className = '',
  external,
}: {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
}) {
  const inner = (
    <>
      <span>{children}</span>
      {external ? (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      ) : (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      )}
    </>
  )
  if (external)
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={`${BTN} ${VARIANTS[variant]} ${className}`}>
        {inner}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    )
  return (
    <Link to={to} className={`${BTN} ${VARIANTS[variant]} ${className}`}>
      {inner}
    </Link>
  )
}

export function TextLink({ to, children, light }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 border-b pb-1 font-display text-sm font-bold tracking-wide transition-colors ${
        light ? 'border-white/30 text-white hover:border-white' : 'border-navy/20 text-navy hover:border-brand-red hover:text-brand-red'
      }`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
    </Link>
  )
}

/* ---------- Motion ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
  ...rest
}: HTMLMotionProps<'div'> & { delay?: number; y?: number; as?: 'div' | 'li' | 'article' }) {
  const M = (as === 'li' ? motion.li : as === 'article' ? motion.article : motion.div) as typeof motion.div
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </M>
  )
}

/* ---------- Section label ---------- */
export function Eyebrow({ children, tone = 'ocean' }: { children: ReactNode; tone?: 'ocean' | 'red' | 'sky' | 'white' }) {
  const c = { ocean: 'text-ocean', red: 'text-brand-red', sky: 'text-sky', white: 'text-white/80' }[tone]
  return <p className={`eyebrow ${c}`}>{children}</p>
}

/* ---------- Inner page hero ---------- */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt = '',
  tone = 'ice',
  children,
}: {
  eyebrow: string
  title: ReactNode
  lede: ReactNode
  image?: string
  imageAlt?: string
  tone?: 'ice' | 'navy' | 'white'
  children?: ReactNode
}) {
  const bg = { ice: 'bg-ice', navy: 'bg-navy text-white', white: 'bg-white' }[tone]
  const dark = tone === 'navy'
  return (
    <section className={`relative overflow-hidden ${bg} ${dark ? 'water-lines' : ''}`}>
      <div className="container-x grid items-end gap-10 pt-32 pb-14 sm:pt-40 lg:grid-cols-12 lg:gap-16 lg:pb-20">
        <div className={image ? 'lg:col-span-6' : 'lg:col-span-9'}>
          <Reveal>
            <Eyebrow tone={dark ? 'sky' : 'red'}>{eyebrow}</Eyebrow>
            <h1 className={`display-2 mt-6 ${dark ? 'text-white' : 'text-navy'}`}>{title}</h1>
            <div className={`mt-6 max-w-xl text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-slate'}`}>{lede}</div>
            {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
          </Reveal>
        </div>
        {image && (
          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <PdImage src={image} alt={imageAlt} priority sizes="(min-width:1024px) 50vw, 100vw" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
