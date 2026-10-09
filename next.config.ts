import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  // Emit about/index.html etc. so both /about and /about/ resolve on GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
