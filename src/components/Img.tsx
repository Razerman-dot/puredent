import { useState, type ImgHTMLAttributes } from 'react'
import { optimised, srcSet } from '../lib/img'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  /** Path on the PureDent asset origin, e.g. /home/card-advanced.jpg */
  src: string
  alt: string
  /** Mark above-the-fold images so they load eagerly with high priority. */
  priority?: boolean
  widths?: number[]
}

export function Img({ src, alt, priority, widths, sizes = '100vw', className = '', width, height, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  if (failed) {
    // Neutral placeholder — never synthesise packaging or branding.
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-mist text-xs tracking-widest text-slate/60 uppercase ${className}`}
      >
        Image unavailable
      </div>
    )
  }

  return (
    <img
      src={optimised(src, 1200)}
      srcSet={srcSet(src, widths)}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`transition-opacity duration-700 ease-brand ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      {...rest}
    />
  )
}
