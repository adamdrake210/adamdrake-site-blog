/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_ANALYTICS_WEB: process.env.GOOGLE_ANALYTICS_WEB
  }
}

module.exports = nextConfig


