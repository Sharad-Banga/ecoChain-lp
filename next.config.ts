import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
}

export default nextConfig