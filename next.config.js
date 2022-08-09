/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    GOOGLE_ANALYTICS_WEB: process.env.GOOGLE_ANALYTICS_WEB,
  },
  // webpack: (config, { isServer }) => {
  //   if (isServer) {
  //     // eslint-disable-next-line global-require
  //     require('./scripts/generate-sitemap');
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
