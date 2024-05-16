import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko', 'en'],
        localeDetection: false,
    },
    images: {
        domains: ['images.unsplash.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};
/** @type {import('rehype-pretty-code').Options} */
const options = {
    // See Options section below.
    theme: 'one-dark-pro'
};
const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, options]],
    }
})

export default withMDX(nextConfig);
