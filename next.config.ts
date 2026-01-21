import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    domains: ["i.scdn.co"], // allow images from Spotify
    unoptimized: true, // Required for static export
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
