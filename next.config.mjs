/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Limit file tracing to project directory to prevent stack overflow
  experimental: {
    outputFileTracingRoot: undefined,
  },
  // Exclude parent directories from file tracing
  outputFileTracing: true,
};

export default nextConfig;
