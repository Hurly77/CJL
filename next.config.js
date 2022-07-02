// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  extends: ["plugin:@next/next/recommended"],
  images: {
    domains: ["localhost", "mgqajzspdkingrdcdwwl.supabase.co"],
  },
  eslint: {
    dirs: ["pages", "components", "lib"],
  },
  typescript: {},
};

module.exports = nextConfig;
