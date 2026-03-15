/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/guhan-s-portfolio",
  assetPrefix: "/guhan-s-portfolio/",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
