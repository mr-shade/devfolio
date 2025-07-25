import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'res.cloudinary.com',
      'dev-to-uploads.s3.amazonaws.com',
      'dev.to',
      'source.unsplash.com',
      'picsum.photos',
      'media.dev.to',
      'i.pravatar.cc',
      'via.placeholder.com',
    ],
  },
};

export default nextConfig;
