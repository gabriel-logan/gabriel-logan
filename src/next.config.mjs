/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "../docs",
  assetPrefix: "/gabriel-logan",
  basePath: "/gabriel-logan",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
