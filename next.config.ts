import type { NextConfig } from 'next';

const nextConfig = {
	sassOptions: {
		silenceDeprecations: ['legacy-js-api'],
	},
};

module.exports = nextConfig;
