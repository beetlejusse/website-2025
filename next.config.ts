import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com", "images.unsplash.com"], // Add allowed external domains here
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
