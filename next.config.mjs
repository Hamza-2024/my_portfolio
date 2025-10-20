/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  swcMinify: true,
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  }
};

export default nextConfig;
