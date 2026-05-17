import type { NextConfig } from 'next';

const nextConfig = {
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	output: 'export',
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
