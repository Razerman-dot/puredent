import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Science = lazy(() => import('./pages/Science'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const WhyFluorideFree = lazy(() => import('./pages/WhyFluorideFree'))
const Hub = lazy(() => import('./pages/Hub'))
const Article = lazy(() => import('./pages/Article'))
const WhereToBuy = lazy(() => import('./pages/WhereToBuy'))
const Faq = lazy(() => import('./pages/Faq'))
const Contact = lazy(() => import('./pages/Contact'))
const SmileRevolution = lazy(() => import('./pages/SmileRevolution'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/science', element: <Science /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:slug', element: <ProductDetail /> },
      { path: '/why-fluoride-free', element: <WhyFluorideFree /> },
      { path: '/oral-health-hub', element: <Hub /> },
      { path: '/oral-health-hub/:slug', element: <Article /> },
      { path: '/where-to-buy', element: <WhereToBuy /> },
      { path: '/faq', element: <Faq /> },
      { path: '/contact', element: <Contact /> },
      { path: '/smile-revolution', element: <SmileRevolution /> },
      { path: '/privacy-policy', element: <Legal kind="privacy" /> },
      { path: '/terms', element: <Legal kind="terms" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
