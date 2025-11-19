import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  // Add all your static routes here
  const staticRoutes = [
    '',
    '/about',
    '/work',
    '/work/tour-production',
    '/work/seo-sprint',
    '/work/systems-overhaul',
    '/services',
    '/services/logistics',
    '/services/web-seo-sprint',
    '/services/ppc-campaigns',
    '/services/systems-sprint',
    '/plan',
    '/contact',
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
