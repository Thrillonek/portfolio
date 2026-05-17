import type { NextConfig } from 'next';

const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	base: '/portfolio/',
};

module.exports = nextConfig;
