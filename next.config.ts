import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost', 'your-strapi-domain.com'], // Add localhost and any other image domains you use
  },
};

export default nextConfig;
