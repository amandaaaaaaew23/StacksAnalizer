/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@stacks/connect",
    "@stacks/transactions",
    "@stacks/network",
    "@stacks/common"
  ]
};

export default nextConfig;
