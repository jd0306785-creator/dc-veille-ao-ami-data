// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-11-04',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
  {
    id: 'mrt_sen_soged_omvs_digue_keurmacene_diama_2026',
    titre: "Travaux de réparation et de consolidation du tronçon Keurmacène–Diama de la digue rive droite du fleuve Sénégal (AOI n°001/SOGED/OMVS/2026)",
    client: "SOGED — Société de Gestion et d'Exploitation du barrage de Diama (sous tutelle OMVS)",
    type: 'AO',
    secteur: 'Génie civil / VRD — réparation et consolidation d\'un ouvrage de digue fluviale',
    pays: 'Mauritanie / Sénégal (zone frontalière, barrage de Diama)',
    tier: 'A',
    quickWin: false,
    quickWinNote: "Travaux de réparation/consolidation (a priori plus courts qu'un ouvrage neuf) mais durée d'exécution, nombre de lots et modalités de paiement non précisés dans l'avis consulté — à vérifier dans le DAO avant engagement",
    source: 'SOGED / OMVS — avis relayé par lesoleil.sn',
    lien: 'https://lesoleil.sn/offre-demploi/avis-dappel-doffres-intrenational-n_001_-soged-omvs-2026/',
    deadline: '2026-11-18'
  }
];
