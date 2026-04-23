export interface Commune {
  nom: string;
  slug: string;
  codeInsee: string;
  codePostal: string;
  departement: string;
  population: number;
  superficie: number;
  densite: number;
  typeUrbain: string;
  latitude: number;
  longitude: number;
}

export interface ServiceData {
  slug: string;
  label: string;
  labelSingulier: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
}

export interface VilleVoisine {
  nom: string;
  slug: string;
  distanceKm: number;
}

export interface LocalPageData {
  commune: Commune;
  service: ServiceData;
  voisines: VilleVoisine[];
  distanceDepuisSiege: number;
  tempsIntervention: number;
}

export interface Testimonial {
  text: string;
  author: string;
  ville: string;
  service: string;
  rating: number;
}
