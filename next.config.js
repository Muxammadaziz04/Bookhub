/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  env: {
    COOKIE_TIME: 30 * 24 * 60 * 60,
  },
  rules: {
    // Other rules
    "@next/next/no-img-element": "off"
  }
}

module.exports = nextConfig