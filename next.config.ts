import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` so it can be hosted on GitHub Pages.
  output: "export",
  // Repo `jarylozh.github.io` is a user page served at the root, so no
  // basePath is needed.
  // GitHub Pages has no image optimization server; serve images as-is.
  images: { unoptimized: true },
  // Emit `/route/index.html` so Pages resolves clean URLs without a server.
  trailingSlash: true,
};

export default nextConfig;
