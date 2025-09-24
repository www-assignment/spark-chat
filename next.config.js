/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sparkchat-platform' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sparkchat-platform/' : '',
}

module.exports = nextConfig