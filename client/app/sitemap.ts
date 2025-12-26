import type { MetadataRoute } from 'next';

import siteConfig from '@/constants/site-config';

const staticRoutes = [
	'/',
	'/about',
	'/contact',
	'/privacy',
	'/project',
	'/reports',
	'/resources',
	'/team',
	'/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();

	return staticRoutes.map((route) => ({
		url: new URL(route, siteConfig.siteUrl).toString(),
		lastModified,
	}));
}
