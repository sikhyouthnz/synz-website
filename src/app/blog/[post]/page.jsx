import Link from 'next/link'

export default function Page({ params }) {
  const markdownContext = require('../../../../content/blog/' + params.post + '.md')
  const Content = markdownContext.react
  const { title, date, author } = markdownContext.attributes

  // Inline colour helpers used inside the Gurbani quotations
  const Orange = ({ children }) => <span style={{ color: '#CE5A0C' }}>{children}</span>
  const Green = ({ children }) => <span style={{ color: '#097969' }}>{children}</span>

  return (
    <article className="shell py-16 sm:py-24">
      <Link
        href="/blog"
        className="group inline-flex items-center gap-2 text-sm text-ink-mute transition-colors hover:text-ink"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden>
          &larr;
        </span>
        All posts
      </Link>

      <header className="mx-auto mt-12 max-w-prose text-center">
        <p className="text-sm text-ink-mute">
          {formatDate(date)}
          {author ? ` · ${author}` : ''}
        </p>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tighter text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mx-auto mt-10 h-px w-16 bg-saffron-400" />
      </header>

      <div
        className="prose prose-lg mx-auto mt-14 max-w-prose
          prose-headings:font-display prose-headings:tracking-tight prose-headings:font-normal
          prose-p:text-ink-soft prose-p:leading-relaxed
          prose-li:text-ink-soft
          prose-strong:text-ink
          prose-a:text-saffron-700 prose-a:underline-offset-4
          prose-img:rounded-xl prose-img:border prose-img:border-line prose-img:shadow-soft
          prose-blockquote:border-l-saffron-400 prose-blockquote:not-italic prose-blockquote:text-ink"
      >
        <Content Orange={Orange} Green={Green} />
      </div>
    </article>
  )
}

const formatDate = (value) => {
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })
}
