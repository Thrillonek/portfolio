import type { NextConfig } from 'next';

const nextConfig = {
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
	output: 'export',
};

module.exports = nextConfig;
