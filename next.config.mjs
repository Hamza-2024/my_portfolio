/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable output file tracing since we're using static export
  experimental: {
    outputFileTracingRoot: process.cwd(),
  },
};

export default nextConfig;
