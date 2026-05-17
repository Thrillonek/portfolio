import type { NextConfig } from 'next';

const nextConfig = {
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	output: 'export',
	basePath: '/portfolio',
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
