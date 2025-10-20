/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
