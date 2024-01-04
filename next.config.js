/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'dist',
  images: {
    domains: 
      ['files.stripe.com']
  },

  experimental: {
    images: {
      allowFutureImage: true
    }
  }
}

module.exports = nextConfig
