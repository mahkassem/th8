/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// env variables
nextConfig.env = {
  API_URL: process.env.API_URL,
}

module.exports = nextConfig
