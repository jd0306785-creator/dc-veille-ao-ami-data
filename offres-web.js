// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-08-30',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
  {
    id: 'bceao_voirie_lome_2026',
    titre: "Travaux de réhabilitation (aménagement, assainissement, bitumage) de la voirie intérieure de l'Agence Principale de la BCEAO à Lomé (T00/SAPS/0011/2026)",
    client: 'BCEAO',
    type: 'AO',
    secteur: 'VRD / génie civil',
    pays: 'Togo (Lomé)',
    tier: 'A',
    quickWin: true,
    quickWinNote: "Voirie interne d'un seul site institutionnel, lot unique, exécution vraisemblablement courte, BCEAO pratique généralement avance de démarrage et décomptes réguliers",
    source: 'BCEAO — portail marchés',
    lien: 'https://www.bceao.int/fr/appels-offres/appels-offres-marches-publics-achats',
    deadline: '2026-09-11'
  }
];
