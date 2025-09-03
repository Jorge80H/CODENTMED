/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  i18n,
  images: {
    domains: ['static.wixstatic.com', 'supabase.co'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  experimental: {
    optimizeCss: true,
  },
  // Configuración para Netlify
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig