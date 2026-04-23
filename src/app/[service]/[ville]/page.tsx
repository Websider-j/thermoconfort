import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Commune } from '@/types';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import {
  buildPageData,
  generateIntro,
  generateContext,
  generateIntervention,
  generateVoisins,
  generateLogement,
  generateFaqs,
  generateMetaTitle,
  generateMetaDescription,
  selectTestimonials,
} from '@/lib/content-engine';
import LocalLandingPage from '@/components/pages/LocalLandingPage';

import communes78 from '@/data/communes/78-yvelines.json';
import communes92 from '@/data/communes/92-hauts-de-seine.json';
import communes95 from '@/data/communes/95-val-doise.json';

const allCommunes: Commune[] = [...communes78, ...communes92, ...communes95];

const allSlugs = new Set(allCommunes.map(c => c.slug));
const serviceSlugs = services.map(s => s.slug);

export async function generateStaticParams() {
  // Pre-generate top 30 communes per department (90 total) × 4 services = 360 pages
  const topPerDept: Record<string, Commune[]> = {
    '78': allCommunes.filter(c => c.departement === '78').slice(0, 30),
    '92': allCommunes.filter(c => c.departement === '92').slice(0, 30),
    '95': allCommunes.filter(c => c.departement === '95').slice(0, 30),
  };
  
  const topCommunes = [...topPerDept['78'], ...topPerDept['92'], ...topPerDept['95']];
  
  const params: { service: string; ville: string }[] = [];
  for (const service of serviceSlugs) {
    for (const commune of topCommunes) {
      params.push({ service, ville: commune.slug });
    }
  }
  
  return params;
}

export const revalidate = 86400;
export const dynamicParams = true;

interface Props {
  params: Promise<{ service: string; ville: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, ville: villeSlug } = await params;
  
  const commune = allCommunes.find(c => c.slug === villeSlug);
  const service = services.find(s => s.slug === serviceSlug);
  
  if (!commune || !service) {
    return { title: 'Page non trouvée | ThermoConfort' };
  }
  
  const data = buildPageData(commune, service, allCommunes);
  
  return {
    title: generateMetaTitle(data),
    description: generateMetaDescription(data),
    openGraph: {
      title: generateMetaTitle(data),
      description: generateMetaDescription(data),
      type: 'website',
      locale: 'fr_FR',
    },
    alternates: {
      canonical: `https://www.thermoconfort.fr/${serviceSlug}/${villeSlug}`,
    },
  };
}

export default async function LocalPage({ params }: Props) {
  const { service: serviceSlug, ville: villeSlug } = await params;
  
  if (!villeSlug || !serviceSlug) {
    notFound();
  }
  
  const commune = allCommunes.find(c => c.slug === villeSlug);
  const service = services.find(s => s.slug === serviceSlug);
  
  if (!commune || !service) {
    notFound();
  }
  
  const data = buildPageData(commune, service, allCommunes);
  const seed = `${commune.slug}-${service.slug}`;
  
  const content = {
    intro: generateIntro(data, seed) || '',
    context: generateContext(data, seed + '-ctx') || '',
    intervention: generateIntervention(data, seed + '-int') || '',
    voisins: generateVoisins(data, seed + '-voi') || '',
    logement: generateLogement(data, seed + '-log') || '',
    faqs: generateFaqs(data, seed) || [],
    selectedTestimonials: selectTestimonials(testimonials, data, seed) || [],
  };
  
  return (
    <LocalLandingPage 
      data={data} 
      content={content} 
      allServices={services}
    />
  );
}
