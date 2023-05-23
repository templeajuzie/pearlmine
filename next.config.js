/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  // Uncomment the code below if you want to disable image optimization
  // image: {
  //   unoptimized: true,
  // },
  // Uncomment the code below if you want to enable SWC minification
  // swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
