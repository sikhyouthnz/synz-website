'use client'

import Link from 'next/link'

export default function Blog() {
  const posts = getBlogPosts()

  return (
    <div className="shell py-16 sm:py-24">
      <header className="max-w-2xl">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tighter text-balance sm:text-6xl lg:text-7xl">
          Words from our sangat
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pretty text-ink-soft">
          Reflections, presentations and stories written by the young people who make SYNZ what it
          is.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="py-32 text-center text-ink-mute">Blogs coming soon.</p>
      ) : (
        <ul className="mt-20 border-t border-line">
          {posts.map((post) => (
            <li key={post.filename}>
              <Link
                href={`/blog/${post.filename}`}
                className="group grid gap-3 border-b border-line py-8 transition-colors hover:bg-white sm:grid-cols-[10rem_1fr] sm:gap-8 sm:px-4 sm:py-10"
              >
                <time
                  dateTime={post.attributes.date}
                  className="text-sm text-ink-mute sm:pt-2.5"
                >
                  {formatDate(post.attributes.date)}
                </time>

                <div>
                  <h2 className="font-display text-3xl leading-tight tracking-tight transition-colors group-hover:text-saffron-600 sm:text-4xl">
                    {post.attributes.title}
                  </h2>
                  {post.attributes.summary && (
                    <p className="mt-3 max-w-prose text-pretty leading-relaxed text-ink-soft">
                      {post.attributes.summary}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink-mute transition-colors group-hover:text-ink">
                    Read
                    <span
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    >
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const formatDate = (value) => {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })
}

const getBlogPosts = () => {
  try {
    const markdownContext = require.context('../../../content/blog', false, /^\.\/.*\.md$/)
    return markdownContext
      .keys()
      .map((filename) => {
        const blogData = markdownContext(filename)
        blogData.filename = filename.slice(2, -3)
        return blogData
      })
      .sort((a, b) => new Date(b.attributes.date) - new Date(a.attributes.date))
  } catch (e) {
    return []
  }
}
