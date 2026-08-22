// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-08-22',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
  {
    id: 'web_bceao_yamoussoukro_sol_resine',
    titre: "Reprise partielle du revêtement au sol (résine) et marquage au sol — Centre de Traitement Fiduciaire BCEAO",
    client: 'BCEAO',
    type: 'AO',
    secteur: 'Bâtiment / finitions',
    pays: "Côte d'Ivoire (Yamoussoukro)",
    tier: 'A',
    source: 'BCEAO — portail marchés',
    lien: 'https://www.bceao.int/fr/appels-offres/selection-dune-prestataire-pour-la-reprise-partielle-du-revetement-au-sol-endommage',
    deadline: '2026-08-24'
  },
  {
    id: 'web_bceao_parakou_benin_forage',
    titre: "Travaux de réalisation d'un puits de forage — Agence Auxiliaire BCEAO Parakou",
    client: 'BCEAO',
    type: 'AO',
    secteur: 'Travaux spécialisés (forage)',
    pays: 'Bénin (Parakou)',
    tier: 'A',
    source: 'BCEAO — portail marchés',
    lien: 'https://www.bceao.int/fr/appels-offres/travaux-de-realisation-dun-puits-de-forage-lagence-auxiliaire-de-la-bceao-parakou',
    deadline: '2026-08-24'
  }
];
