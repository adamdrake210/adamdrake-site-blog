/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  // Public, build-time env vars.
  // https://nextjs.org/docs#build-time-configuration
  env: {
    GOOGLE_ANALYTICS_WEB: process.env.GOOGLE_ANALYTICS_WEB,
  },
};
