/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        hostname: `${process.env.NEXT_PUBLIC_OSS_BUCKET}.oss-${process.env.NEXT_PUBLIC_OSS_LOCATION}.aliyuncs.com`,
      },
    ],
  },
  // webpack(config) {
  //   // console.log(config)
  //   config.optimization.sideEffects = true;
  //   config.optimization.usedExports = true;
  //   return config
  // }
  // output: 'standalone',
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)

// module.exports = nextConfig
