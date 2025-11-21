import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { isFeatureEnabled } from '@/lib/features';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
  ];

  // Only add enabled feature pages
  if (isFeatureEnabled('about')) {
    routes.push({
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    });
  }

  if (isFeatureEnabled('offerings')) {
    routes.push({
      url: `${baseUrl}/offerings`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    });
  }

  if (isFeatureEnabled('events')) {
    routes.push({
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    });
  }

  if (isFeatureEnabled('community')) {
    routes.push({
      url: `${baseUrl}/community`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    });
  }

  if (isFeatureEnabled('fullContact')) {
    routes.push({
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    });
  }

  return routes;
}
