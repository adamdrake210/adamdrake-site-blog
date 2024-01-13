/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'covers.openlibrary.org']
  },
  env: {
    GOOGLE_ANALYTICS_WEB: process.env.GOOGLE_ANALYTICS_WEB
  }
}

module.exports = nextConfig
