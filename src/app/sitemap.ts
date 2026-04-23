import { MetadataRoute } from 'next';
import { Commune } from '@/types';
import { services } from '@/data/services';

const allCommunes: Commune[] = [
  ...require('@/data/communes/78-yvelines.json'),
  ...require('@/data/communes/92-hauts-de-seine.json'),
  ...require('@/data/communes/95-val-doise.json'),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thermoconfort.fr';
  
  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
  
  // All service + ville combinations
  for (const service of services) {
    for (const commune of allCommunes) {
      routes.push({
        url: `${baseUrl}/${service.slug}/${commune.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: commune.population > 20000 ? 0.8 : 0.6,
      });
    }
  }
  
  return routes;
}
