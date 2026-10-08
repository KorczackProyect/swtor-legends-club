// Cada lista aporta una parte del mensaje; no guardamos misiones completas.
const destinations = ['Korriban', 'Tython', 'Coruscant', 'Dromund Kaas', 'Alderaan'];
const objectives = [
  'recuperar un holocrón',
  'rescatar a un explorador',
  'investigar una señal misteriosa',
  'proteger un archivo antiguo',
  'localizar un artefacto perdido'
];
const conditions = [
  'sin alertar a las patrullas',
  'antes del amanecer',
  'sin utilizar la Fuerza',
  'con ayuda de un droide',
  'manteniendo tu identidad en secreto'
];

function pickRandom(items) {
  // Math.random() devuelve un número entre 0 (incluido) y 1 (excluido).
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function generateMission() {
  // Hacemos una selección independiente para cada componente.
  const destination = pickRandom(destinations);
  const objective = pickRandom(objectives);
  const condition = pickRandom(conditions);
  return `Tu misión en ${destination} es ${objective} ${condition}.`;
}

// Node dispone de module y require; el navegador no necesita estas variables.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { destinations, objectives, conditions, pickRandom, generateMission };
  // Imprimir solo al ejecutar "node script.js", no al importar el archivo.
  if (require.main === module) {
    console.log(generateMission());
  }
}
