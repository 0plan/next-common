import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
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
    remarkPlugins: [remarkFrontmatter,remarkMdxFrontmatter],
    rehypePlugins: [],
})

export default withMDX(nextConfig);
