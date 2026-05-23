/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@stacks/connect",
    "@stacks/transactions",
    "@stacks/network",
    "@stacks/common"
  ],
  
  // Konfigurasi alias khusus untuk Turbopack
  experimental: {
    turbopack: {
      resolveAlias: {
        fs: 'false',
        net: 'false',
        tls: 'false',
        crypto: 'false',
        stream: 'false',
        buffer: 'buffer',
      },
    },
  },

  // Konfigurasi fallback untuk Webpack (jika Vercel tidak menggunakan Turbopack saat production build)
  webpack: (config, { webpack }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
    };
    
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
      })
    );
    
    return config;
  },
};

export default nextConfig;
