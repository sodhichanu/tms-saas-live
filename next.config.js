const isProd = process.env.NODE_ENV === 'production';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd && repo ? `/${repo}` : '',
  assetPrefix: isProd && repo ? `/${repo}/` : '',
};

module.exports = nextConfig;
