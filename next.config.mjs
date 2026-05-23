/** @type {import('next').NextConfig} */
const nextConfig = {
  // Memaksa Next.js/Turbopack untuk mengompilasi ulang package Web3 ini
  transpilePackages: [
    "@stacks/connect",
    "@stacks/transactions",
    "@stacks/network",
    "@stacks/common"
  ],
  
  // Memberikan fallback jika build engine mencoba mencari modul bawaan Node.js
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
