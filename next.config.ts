import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        hostname: 'ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.radiustheme.com',
      },
      {
        protocol: 'https',
        hostname: 'emanatedental.in',
      },
    ],
    qualities: [70, 75, 90],
  },
  reactStrictMode: true,

};

export default nextConfig;
