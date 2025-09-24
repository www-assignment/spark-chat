/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack for build to avoid issues
  experimental: {
    turbo: undefined
  },
  // Reduce build time by excluding unnecessary optimizations
  images: {
    unoptimized: true
  },
  // Enable standalone output for faster builds
  output: 'standalone'
}

module.exports = nextConfig