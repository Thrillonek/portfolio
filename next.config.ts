import type { NextConfig } from 'next';

const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	basePath: '/portfolio',
	assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
