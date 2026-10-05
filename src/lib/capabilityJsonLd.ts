import type { CollectionEntry } from 'astro:content';
import { SITE } from '@/lib/site';

/** Service, breadcrumb and FAQ structured data for a capability page. */
export function capabilityJsonLd(d: CollectionEntry<'capabilities'>['data'], path: string) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: d.title,
      description: d.metaDescription,
      provider: { '@type': 'ProfessionalService', name: SITE.name, url: SITE.url },
      areaServed: ['North America', 'Europe', 'Middle East'],
      url: SITE.url + path,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
        { '@type': 'ListItem', position: 2, name: d.familyLabel, item: SITE.url + d.familyPath },
        { '@type': 'ListItem', position: 3, name: d.title, item: SITE.url + path },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: d.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];
}
