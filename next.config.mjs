/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@stacks/connect",
    "@stacks/transactions",
    "@stacks/network",
    "@stacks/common"
  ],
  
  // Tambahkan baris ini agar Next.js 16 / Turbopack tidak error
  turbopack: {},

  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      buffer: false,
    };
    return config;
  },
};

export default nextConfig;
