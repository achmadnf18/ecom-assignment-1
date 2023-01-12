const nextPWA = require('next-pwa');

const runtimeCaching = require('./next-pwa.cache');

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    BASE_API: process.env.BASE_API,
  },
  compiler: {
    emotion: true,
  },
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = withPWA(nextConfig);
