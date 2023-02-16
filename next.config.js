/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOMBRE: process.env.NOMBRE,
    CALLE: process.env.CALLE,
    PAIS: process.env.PAIS
  }
}

module.exports = nextConfig
