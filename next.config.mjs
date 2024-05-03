import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

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
const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    }
})

export default withMDX(nextConfig);
