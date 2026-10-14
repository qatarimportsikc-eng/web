/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // The site renders <img loading="lazy"> through the SmartImage component
    // so remote stock/placeholder images work without a build-time fetch.
    unoptimized: true,
  },
};

export default nextConfig;
