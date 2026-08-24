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
      { source: "/your-dashboard", destination: "/dashboard", permanent: true },
      { source: "/salon", destination: "/retail/salon", permanent: true },
      { source: "/barber", destination: "/retail/barber", permanent: true },
      { source: "/privacy", destination: "/legal/privacy", permanent: true },
      { source: "/terms", destination: "/legal/terms", permanent: true },
    ];
  },
};

export default nextConfig;
