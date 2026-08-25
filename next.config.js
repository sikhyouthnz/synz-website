/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // The host's own optimiser (/_ipx) 500s because its sharp binary can't
        // find libvips. Route through Netlify's Image CDN instead — see the
        // loader for details.
        loader: 'custom',
        loaderFile: './src/app/lib/netlifyImageLoader.ts',
    },
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg
    }
}

module.exports = nextConfig
