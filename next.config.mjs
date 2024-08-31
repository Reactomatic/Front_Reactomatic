/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      // Ignore TypeScript errors in production builds
      ignoreBuildErrors: true,
    },
    eslint: {
      // Ignore ESLint errors in production builds
      ignoreDuringBuilds: true,
    },
    images: {
        domains: ['assets.aceternity.com']
    },
  };
  
  export default nextConfig;
