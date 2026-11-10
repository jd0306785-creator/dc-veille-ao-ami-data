// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-11-10',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
  {
    id: 'sen_mpem_dage059_demolition_construction_locaux_peches_dakar_2026',
    titre: "Travaux de démolition et de construction des locaux abritant le Service régional des pêches de Dakar (Avis n° 2026-MPEM-T_DAGE_059)",
    client: "Ministère des Pêches et de l'Économie maritime (MPEM) — Direction de l'Administration générale et de l'Équipement (DAGE)",
    type: 'AO',
    secteur: "Bâtiment — démolition et reconstruction d'un bâtiment administratif",
    pays: 'Sénégal',
    tier: 'C',
    quickWin: false,
    quickWinNote: "Petit bâtiment administratif, a priori chantier court et à lot unique, mais financement sur le Budget consolidé d'investissement 2026 de l'État (budget national direct, tier C) — risque de retard sur les décomptes à anticiper (retards de paiement signalés en 2026 sur les marchés BTP financés sur budget national) ; durée d'exécution, nombre de lots exact et avance de démarrage non précisés dans l'avis consulté — à vérifier dans le DAO avant engagement",
    source: "Ministère des Pêches et de l'Économie maritime — avis relayé par lesoleil.sn",
    lien: 'https://lesoleil.sn/offre-demploi/avis-dappel-doffres-ouvert-cas-sans-pre‐qualification-n-2026-mpem-t_dage_059/',
    deadline: '2026-11-20'
  },
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
