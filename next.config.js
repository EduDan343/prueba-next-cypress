/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOMBRE: process.env.NOMBRE,
    CALLE: process.env.CALLE,
    PAIS: process.env.PAIS || ${{ vars.PAIS }}
  }
}

module.exports = nextConfig
