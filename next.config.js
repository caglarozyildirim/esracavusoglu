/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.longevilab.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig