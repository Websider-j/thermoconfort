const fs = require('fs');
const path = require('path');

const DEPARTEMENTS = ['78', '92', '95'];

async function fetchCommunes(dept) {
  const url = `https://geo.api.gouv.fr/communes?codeDepartement=${dept}&fields=nom,code,codesPostaux,surface,population,centre,contour&format=json&geometry=centre`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for dept ${dept}`);
  return res.json();
}

function slugify(str) {
  return str
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getTypeUrbain(population, surface) {
  if (population > 50000) return 'urbain_dense';
  if (population > 20000) return 'urbain';
  if (population > 5000) return 'periurbain';
  return 'rural';
}

async function main() {
  const allCommunes = [];
  
  for (const dept of DEPARTEMENTS) {
    console.log(`Fetching dept ${dept}...`);
    const raw = await fetchCommunes(dept);
    
    const communes = raw.map(c => {
      const pop = c.population || 0;
      const surf = c.surface || 0;
      const densite = surf > 0 ? Math.round((pop / surf) * 100) / 100 : 0;
      
      return {
        nom: c.nom,
        slug: slugify(c.nom),
        codeInsee: c.code,
        codePostal: c.codesPostaux?.[0] || '',
        departement: dept,
        population: pop,
        superficie: Math.round(surf),
        densite,
        typeUrbain: getTypeUrbain(pop, surf),
        latitude: c.centre?.coordinates?.[1] || 0,
        longitude: c.centre?.coordinates?.[0] || 0,
      };
    }).sort((a, b) => b.population - a.population);
    
    // Write per dept
    const outPath = path.join(__dirname, '..', 'src', 'data', 'communes', `${dept}-${slugify(dept === '78' ? 'yvelines' : dept === '92' ? 'hauts-de-seine' : 'val-doise')}.json`);
    fs.writeFileSync(outPath, JSON.stringify(communes, null, 2));
    console.log(`  -> ${communes.length} communes written to ${outPath}`);
    
    allCommunes.push(...communes);
  }
  
  // Write all communes index
  const indexPath = path.join(__dirname, '..', 'src', 'data', 'communes', 'all.json');
  fs.writeFileSync(indexPath, JSON.stringify(allCommunes, null, 2));
  console.log(`\nTotal: ${allCommunes.length} communes across ${DEPARTEMENTS.length} departments.`);
}

main().catch(console.error);
