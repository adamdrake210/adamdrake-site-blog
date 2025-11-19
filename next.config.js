/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'covers.openlibrary.org' },
      { protocol: 'https', hostname: 'miro.medium.com' },
    ],
  },
  env: {
    GOOGLE_ANALYTICS_WEB: process.env.GOOGLE_ANALYTICS_WEB,
  },
  allowedDevOrigins: ['http://127.0.0.1:3000'],
};

module.exports = nextConfig;
