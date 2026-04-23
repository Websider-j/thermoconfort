// Générateur pseudo-aléatoire déterministe basé sur le seed (nom de ville + service)
function seededRandom(seed: string): () => number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash + seed.charCodeAt(i)) | 0;
  }
  return () => {
    hash = (hash * 16807 + 0) % 2147483647;
    return (hash - 1) / 2147483646;
  };
}

export function pickVariant<T>(variants: T[], seed: string): T {
  const rng = seededRandom(seed);
  const idx = Math.floor(rng() * variants.length);
  return variants[idx];
}

export function pickVariants<T>(variants: T[], count: number, seed: string): T[] {
  const rng = seededRandom(seed);
  const shuffled = [...variants].sort(() => rng() - 0.5);
  return shuffled.slice(0, count);
}
