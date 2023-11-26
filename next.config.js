/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
}


const repo = 'agency-template'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig

