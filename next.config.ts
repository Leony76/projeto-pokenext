import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.traction.one",
      "raw.githubusercontent.com"
    ]
  }
};

export default nextConfig;
