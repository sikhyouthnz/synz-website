type LoaderArgs = {
  src: string
  width: number
  quality?: number
}

/**
 * Routes next/image through Netlify's Image CDN instead of Next's own optimiser.
 *
 * The bundled optimiser (`/_ipx/...`) fails on this host — its sharp binary
 * can't find libvips — and returns 500 for every image. The Image CDN is a
 * platform endpoint with no such dependency, and it content-negotiates the
 * response format, so browsers that accept WebP or AVIF get it automatically.
 *
 * Local development has no Image CDN, so images are served straight from
 * /public there.
 */
export default function netlifyImageLoader({ src, width, quality }: LoaderArgs): string {
  if (process.env.NODE_ENV === 'development') return src

  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality ?? 75),
  })

  return `/.netlify/images?${params.toString()}`
}
