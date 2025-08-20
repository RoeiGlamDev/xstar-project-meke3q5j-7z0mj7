import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    // Customize webpack configuration if needed
    return config;
  },
  env: {
    // Add any environment variables here
    FASHIONTV_API_URL: process.env.FASHIONTV_API_URL,
  },
};

export default nextConfig;