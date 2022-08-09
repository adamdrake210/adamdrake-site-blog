/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      // eslint-disable-next-line global-require
      require('./scripts/generate-sitemap');
    }

    return config;
  },
};

module.exports = nextConfig;

module.exports = {
  // Public, build-time env vars.
  // https://nextjs.org/docs#build-time-configuration
  env: {
    GOOGLE_ANALYTICS_WEB: process.env.GOOGLE_ANALYTICS_WEB,
  },
};
