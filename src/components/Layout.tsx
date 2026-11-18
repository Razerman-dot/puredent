import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, MotionConfig } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

function PageFallback() {
  return <div className="min-h-[70vh] bg-white" aria-busy="true" aria-label="Loading page" />
}

export function Layout() {
  const { pathname } = useLocation()
  return (
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<PageFallback />}>
          <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }}>
            <Outlet />
          </motion.div>
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  )
}
