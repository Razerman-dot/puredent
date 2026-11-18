import { Seo } from '../components/Seo'
import { ButtonLink } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you were looking for could not be found." />
      <meta name="robots" content="noindex" />
      <section className="flex min-h-[80vh] items-center bg-ice pt-24">
        <div className="container-x">
          <p className="font-display text-sm font-bold tracking-[0.2em] text-brand-red">404</p>
          <h1 className="display-2 mt-4 max-w-2xl text-navy">We couldn’t find that page.</h1>
          <p className="lede mt-5 max-w-xl">It may have moved. Try one of these instead.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/" variant="red">
              Back to Home
            </ButtonLink>
            <ButtonLink to="/products" variant="outline-dark">
              Our Products
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
