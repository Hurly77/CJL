/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  extends: ["plugin:@next/next/recommended"],
  images: {
    domains: ["localhost", "mgqajzspdkingrdcdwwl.supabase.co"],
  },
};

export default nextConfig;
