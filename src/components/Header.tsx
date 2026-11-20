import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV, SITE } from '../data/site'
import { Logo, ButtonLink } from './ui'
import { SocialIcons } from './SocialIcons'

/** Routes whose hero is dark navy, so the header starts transparent with light text. */
const DARK_HERO = ['/', '/smile-revolution', '/products/puredent-complete-care-10']

export function Header() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>('a, button')
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const overDark = DARK_HERO.includes(pathname) && !scrolled && !open
  const solid = !overDark

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand ${
        solid ? 'border-b border-line/70 bg-white/92 backdrop-blur-md' : 'border-b border-white/10 bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-20 xl:gap-4 2xl:gap-6">
        <div className="flex shrink-0 items-center gap-2.5">
          <Link to="/" aria-label="PureDent home" className="shrink-0">
            <Logo tone={overDark ? 'white' : 'blue'} className="h-7 w-auto sm:h-8 xl:h-7 2xl:h-8" />
          </Link>
          <BeninFlag />
        </div>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5 2xl:gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative px-2 py-2 text-[13px] font-medium whitespace-nowrap transition-colors after:absolute after:inset-x-2 2xl:px-2.5 2xl:text-[13.5px] 2xl:after:inset-x-2.5 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-brand-red after:transition-transform after:duration-300 ${
                      isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                    } ${overDark ? 'text-white/85 hover:text-white' : 'text-ink/80 hover:text-navy'} ${isActive ? (overDark ? 'text-white' : 'text-navy') : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink to="/products" variant="red" className="!hidden !px-5 !py-2.5 !text-[13.5px] sm:!inline-flex xl:!px-4 2xl:!px-5">
            Explore Products
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className={`flex size-11 items-center justify-center rounded-[3px] border xl:hidden ${
              overDark ? 'border-white/30 text-white' : 'border-navy/15 text-navy'
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
    </header>

      {/* Rendered outside <header>: its backdrop-filter would otherwise trap this fixed panel. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-navy text-white lg:top-20 xl:hidden"
          >
            <nav aria-label="Mobile" className="container-x flex min-h-full flex-col justify-between py-8">
              <ol className="divide-y divide-white/10 border-y border-white/10">
                {NAV.map((item, i) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `flex items-baseline gap-5 py-4 font-display text-2xl font-bold transition-colors sm:text-3xl ${
                          isActive ? 'text-white' : 'text-white/70 hover:text-white'
                        }`
                      }
                    >
                      <span className="w-6 font-sans text-xs font-medium text-sky">{String(i + 1).padStart(2, '0')}</span>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink to="/faq" className="flex items-baseline gap-5 py-4 font-display text-2xl font-bold text-white/70 hover:text-white sm:text-3xl">
                    <span className="w-6 font-sans text-xs font-medium text-sky">09</span>FAQ
                  </NavLink>
                </li>
              </ol>
              <div className="mt-10 space-y-6">
                <ButtonLink to="/products" variant="red" className="w-full sm:w-auto">
                  Explore Products
                </ButtonLink>
                <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
                  <a href={`mailto:${SITE.email}`} className="hover:text-white">
                    {SITE.email}
                  </a>
                  <SocialIcons />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/** Benin Republic national flag — drawn as SVG because Windows doesn't render flag emoji. */
function BeninFlag() {
  return (
    <svg viewBox="0 0 30 20" role="img" aria-label="Benin Republic flag" className="h-[14px] w-[21px] shrink-0 rounded-[2px] shadow-[0_0_0_1px_rgba(16,44,80,0.15)] sm:h-4 sm:w-6">
      <title>Benin Republic</title>
      <rect width="30" height="20" fill="#E8112D" />
      <rect width="30" height="10" fill="#FCD116" />
      <rect width="12" height="20" fill="#008751" />
    </svg>
  )
}
