import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const capabilities = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/capabilities' }),
  schema: z.object({
    family: z.enum(['security-solutions', 'technology', 'cybersecurity', 'nuclear-security', 'high-performance']),
    familyLabel: z.string(),
    familyPath: z.string(),
    order: z.number(),
    title: z.string(),
    shortTitle: z.string().optional(),
    metaDescription: z.string(),
    eyebrow: z.string(),
    heroDek: z.string(),
    contextHeading: z.string(),
    contextParagraphs: z.array(z.string()).min(1),
    methodologyHeading: z.string().default('Methodology'),
    methodology: z.array(z.object({ label: z.string(), body: z.string() })).min(3),
    coreCapabilities: z.array(z.string()).min(3),
    industries: z.array(z.string()).optional(),
    related: z.array(z.object({ label: z.string(), href: z.string() })).min(3),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(2),
    ctaHeading: z.string(),
    imageCaption: z.string(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    readMinutes: z.number(),
    metaDescription: z.string(),
    dek: z.string(),
    body: z.array(z.object({ heading: z.string().optional(), paragraphs: z.array(z.string()) })),
    relatedCapability: z.object({ label: z.string(), href: z.string() }).optional(),
    publishDate: z.string(),
  }),
});

export const collections = { capabilities, insights };
