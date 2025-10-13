import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  allowedDevOrigins: [
    "local-origin.dev",
    "*.local-origin.dev",
    "*",
    "http://localhost:3000",
  ],
};

export default nextConfig;
