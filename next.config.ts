import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` so it can be hosted on GitHub Pages.
  output: "export",
  // Repo is served at https://jarylozh.github.io/portfolio/, so assets and
  // links must be prefixed with the repo name.
  basePath: "/portfolio",
  // GitHub Pages has no image optimization server; serve images as-is.
  images: { unoptimized: true },
  // Emit `/route/index.html` so Pages resolves clean URLs without a server.
  trailingSlash: true,
};

export default nextConfig;
