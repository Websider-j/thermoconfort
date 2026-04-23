import { Commune, ServiceData, LocalPageData, Testimonial } from '@/types';
import { findVoisines, getTempsIntervention } from '@/lib/geo';
import {
  introTemplates,
  contextTemplates,
  interventionTemplates,
  voisinTemplates,
  logementTemplates,
  faqTemplates,
} from '@/data/content-variations';
import { pickVariant, pickVariants } from '@/lib/random';

const SIEGE = { lat: 48.8899, lon: 2.1586 }; // Chatou approx

function formatNumber(n: number): string {
  return new Intl.NumberFormat('fr-FR').format(n);
}

function typeDescription(typeUrbain: string): string {
  const map: Record<string, string> = {
    urbain_dense: 'fortement urbanisée',
    urbain: 'urbaine dynamique',
    periurbain: 'périurbaine résidentielle',
    rural: 'rural préservé',
  };
  return map[typeUrbain] || 'diversifiée';
}

function typeQuartier(typeUrbain: string): string {
  const map: Record<string, string> = {
    urbain_dense: "d'immeubles collectifs",
    urbain: 'résidentiels',
    periurbain: 'pavillonnaires',
    rural: 'éloignés',
  };
  return map[typeUrbain] || 'résidentiels';
}

function typeLogement(typeUrbain: string): string {
  const map: Record<string, string> = {
    urbain_dense: 'collectifs',
    urbain: 'mixtes',
    periurbain: 'individuels',
    rural: 'individuels',
  };
  return map[typeUrbain] || 'variés';
}

function deptName(code: string): string {
  const map: Record<string, string> = {
    '78': 'Yvelines',
    '92': 'Hauts-de-Seine',
    '95': 'Val-d\'Oise',
  };
  return map[code] || code;
}

function dansLaVille(nom: string): string {
  const startsWithVowel = /^[aeiouyAEIOUYàáâãäåèéêëìíîïòóôõöùúûü]/i.test(nom);
  return startsWithVowel ? `dans ${nom}` : `à ${nom}`;
}

export function buildPageData(
  commune: Commune,
  service: ServiceData,
  allCommunes: Commune[]
): LocalPageData {
  const voisines = findVoisines(commune, allCommunes, 3);
  const distanceDepuisSiege = Math.round(
    Math.sqrt(
      Math.pow(commune.latitude - SIEGE.lat, 2) +
        Math.pow(commune.longitude - SIEGE.lon, 2)
    ) * 111
  ); // Approximation rapide en km
  const tempsIntervention = getTempsIntervention(distanceDepuisSiege);

  return {
    commune,
    service,
    voisines,
    distanceDepuisSiege,
    tempsIntervention,
  };
}

export function generateIntro(data: LocalPageData, seed: string): string {
  if (!data?.service || !data?.commune) return '';
  const vars = {
    service: data.service.labelSingulier || 'artisan',
    ville: data.commune.nom || '',
    cp: data.commune.codePostal || '',
    entreprise: 'ThermoConfort',
    dans_la_ville: dansLaVille(data.commune.nom || ''),
    departement: deptName(data.commune.departement || ''),
    population: formatNumber(data.commune.population || 0),
    distance: String(data.distanceDepuisSiege || 0),
    densite: String(data.commune.densite || 0),
    type_logement: typeLogement(data.commune.typeUrbain || ''),
  };

  const template = pickVariant(introTemplates, seed);
  if (!template) return '';
  return replaceVars(template, vars);
}

export function generateContext(data: LocalPageData, seed: string): string {
  if (!data?.commune) return '';
  const vars = {
    population: formatNumber(data.commune.population || 0),
    superficie: String(data.commune.superficie || 0),
    ville: data.commune.nom || '',
    departement: deptName(data.commune.departement || ''),
    densite: String(data.commune.densite || 0),
    type_description: typeDescription(data.commune.typeUrbain || ''),
  };

  const template = pickVariant(contextTemplates, seed + '-ctx');
  if (!template) return '';
  return replaceVars(template, vars);
}

export function generateIntervention(data: LocalPageData, seed: string): string {
  if (!data?.commune) return '';
  const vars = {
    distance: String(data.distanceDepuisSiege || 0),
    ville: data.commune.nom || '',
    temps: String(data.tempsIntervention || 0),
  };

  const template = pickVariant(interventionTemplates, seed + '-int');
  if (!template) return '';
  return replaceVars(template, vars);
}

export function generateVoisins(data: LocalPageData, seed: string): string {
  if (!data?.voisines || data.voisines.length === 0 || !data?.commune) return '';
  const vars: Record<string, string> = {
    ville: data.commune.nom || '',
  };
  data.voisines.forEach((v, i) => {
    vars[`voisin${i + 1}`] = v.nom || '';
  });

  const template = pickVariant(voisinTemplates, seed + '-voi');
  if (!template) return '';
  return replaceVars(template, vars);
}

export function generateLogement(data: LocalPageData, seed: string): string {
  if (!data?.commune || !data?.service) return '';
  const templates = logementTemplates[data.commune.typeUrbain] || logementTemplates.urbain;
  const vars = {
    densite: String(data.commune.densite || 0),
    ville: data.commune.nom || '',
    service: data.service.labelSingulier || 'artisan',
    type_logement: typeLogement(data.commune.typeUrbain || ''),
    type_description: typeDescription(data.commune.typeUrbain || ''),
  };

  const template = pickVariant(templates, seed + '-log');
  if (!template) return '';
  return replaceVars(template, vars);
}

export function generateFaqs(data: LocalPageData, seed: string): { q: string; a: string }[] {
  if (!data?.commune || !data?.service) return [];
  const vars = {
    service: data.service.labelSingulier || 'artisan',
    ville: data.commune.nom || '',
    cp: data.commune.codePostal || '',
    distance: String(data.distanceDepuisSiege || 0),
    temps: String(data.tempsIntervention || 0),
    type_quartier: typeQuartier(data.commune.typeUrbain || ''),
  };

  return faqTemplates.map((faq) => ({
    q: faq.q ? replaceVars(faq.q, vars) : '',
    a: faq.a ? replaceVars(faq.a, vars) : '',
  }));
}

function replaceVars(template: string, vars: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp(`{{${key}}}`, 'g'), value);
  }
  return result;
}

export function generateMetaTitle(data: LocalPageData): string {
  if (!data.service?.metaTitle) return 'ThermoConfort — Artisan en Île-de-France';
  return data.service.metaTitle
    .replace(/{{service}}/g, data.service.labelSingulier || 'artisan')
    .replace(/{{ville}}/g, data.commune?.nom || '')
    .replace(/{{cp}}/g, data.commune?.codePostal || '');
}

export function generateMetaDescription(data: LocalPageData): string {
  if (!data.service?.metaDescription) return 'Intervention rapide en plomberie, chauffage et climatisation en Île-de-France. Certifié Qualigaz.';
  return data.service.metaDescription
    .replace(/{{service}}/g, data.service.labelSingulier || 'artisan')
    .replace(/{{ville}}/g, data.commune?.nom || '')
    .replace(/{{cp}}/g, data.commune?.codePostal || '');
}

export function selectTestimonials(
  allTestimonials: Testimonial[],
  data: LocalPageData,
  seed: string
): Testimonial[] {
  // Filter by service first, then by proximity (same dept preferred)
  const serviceMatch = allTestimonials.filter(t => 
    t.service === data.service.slug || t.service === 'general'
  );
  
  const deptMatch = serviceMatch.filter(t => 
    t.ville.toLowerCase().includes(data.commune.nom.toLowerCase()) ||
    data.voisines.some(v => t.ville.toLowerCase().includes(v.nom.toLowerCase()))
  );

  const pool = deptMatch.length >= 2 ? deptMatch : serviceMatch;
  return pickVariants(pool, 3, seed + '-testi');
}
