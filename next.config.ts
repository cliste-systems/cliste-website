import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "svgl.app",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/salon", destination: "/retail/salon", permanent: true },
      { source: "/barber", destination: "/retail/barber", permanent: true },
    ];
  },
};

export default nextConfig;
