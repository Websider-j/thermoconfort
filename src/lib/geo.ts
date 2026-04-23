import { Commune, VilleVoisine } from '@/types';

export function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export function findVoisines(commune: Commune, allCommunes: Commune[], maxResults: number = 4): VilleVoisine[] {
  const others = allCommunes.filter(c => c.codeInsee !== commune.codeInsee && c.departement === commune.departement);
  
  const withDistances = others.map(c => ({
    nom: c.nom,
    slug: c.slug,
    distanceKm: haversine(commune.latitude, commune.longitude, c.latitude, c.longitude),
  }));
  
  return withDistances
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, maxResults);
}

export function getTempsIntervention(distanceKm: number): number {
  // Estimation : 15 min base + 2 min par km
  return Math.round(15 + distanceKm * 2);
}
