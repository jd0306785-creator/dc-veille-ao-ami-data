// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-08-09',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
  {
    id: 'web_bceao_dakar_revetement_murs',
    titre: "Fourniture et pose de revêtement sur les murs des bureaux de la Direction — Agence Principale BCEAO",
    client: 'BCEAO',
    type: 'AO',
    secteur: 'Bâtiment / finitions',
    pays: 'Sénégal (Dakar)',
    tier: 'A',
    source: 'BCEAO — portail marchés',
    lien: 'https://www.bceao.int/fr/appels-offres/appel-concurrence-pour-la-fourniture-et-la-pose-de-revetement-sur-les-murs-des',
    deadline: ''
  },
  {
    id: 'web_bceao_baguida_togo_enrochement',
    titre: "Travaux de protection côtière d'urgence par revêtement en enrochements — Centre Aéré BCEAO Baguida",
    client: 'BCEAO',
    type: 'AO',
    secteur: 'Génie civil / travaux maritimes',
    pays: 'Togo (Baguida)',
    tier: 'A',
    source: 'BCEAO — portail marchés',
    lien: 'https://www.bceao.int/fr/appels-offres/travaux-de-protection-cotiere-durgence-par-revetement-en-enrochements-au-centre-aere',
    deadline: '2026-08-21'
  },
  {
    id: 'web_taazour_ecoles_postes_sante',
    titre: 'Construction de 761 salles de classe et 27 postes de santé (54 lots) — Hodh Charghi / Hodh El Gharbi',
    client: 'Délégation Générale TAAZOUR',
    type: 'AO',
    secteur: 'Bâtiment / éducation-santé',
    pays: 'Mauritanie',
    tier: 'B',
    source: 'TAAZOUR — portail marchés',
    lien: 'https://taazour.mr/wp-content/uploads/2025/08/BAT3.pdf',
    deadline: ''
  },
  {
    id: 'web_agetip_esplanade',
    titre: 'Aménagement esplanade',
    client: 'AGETIP',
    type: 'AO',
    secteur: 'Génie civil / VRD',
    pays: 'Sénégal',
    tier: 'B',
    source: 'SenOffre',
    lien: 'https://senoffre.com',
    deadline: ''
  },
  {
    id: 'web_cour_supreme_salle',
    titre: 'Salle polyvalente — Cour Suprême',
    client: 'Cour Suprême / État',
    type: 'AO',
    secteur: 'Bâtiment',
    pays: 'Sénégal',
    tier: 'C',
    source: 'SenOffre',
    lien: 'https://senoffre.com',
    deadline: ''
  },
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
  },
  {
    id: 'bceao_voirie_lome_2026',
    titre: "Travaux de réhabilitation (aménagement, assainissement, bitumage) de la voirie intérieure de l'Agence Principale de la BCEAO à Lomé",
    client: 'BCEAO',
    type: 'AO',
    secteur: 'VRD / génie civil',
    pays: 'Togo (Lomé)',
    tier: 'A',
    source: 'BCEAO — portail marchés',
    lien: 'https://www.bceao.int/fr/appels-offres/travaux-de-rehabilitation-de-la-voirie-interieure-de-lagence-principale-de-la-bceao',
    deadline: '2026-09-11'
  }
];
