// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-11-17',
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
  },
  {
    id: 'mrt_bid_technopole_darnaim_cfp_almina_2026',
    titre: "Travaux de construction d'un technopôle à Dar Naïm et d'un centre de formation professionnelle à Al Mina (2 lots) — AOI/PM n° 01/CPMP/DPEF/PAFPEJ/2026",
    client: "Direction des Projets Éducation-Formation (DPEF) — Projet PAFPEJ, financement Banque Islamique de Développement (BID)",
    type: 'AO',
    secteur: "Bâtiment — construction neuve de bâtiments de formation professionnelle et d'un technopôle (gros œuvre, second œuvre)",
    pays: 'Mauritanie (Nouakchott — Dar Naïm, Al Mina)',
    tier: 'A',
    quickWin: false,
    quickWinNote: "Deux lots séparés (Dar Naïm 24 mois, Al Mina 18 mois) — durée d'exécution plutôt longue pour un quick-win ; possibilité de ne soumissionner qu'à un seul lot ; avance de démarrage et modalités de décompte non précisées dans l'avis — à vérifier dans le DAO",
    source: 'Banque Islamique de Développement (isdb.org) — avis de procurement projet',
    lien: 'https://www.isdb.org/project-procurement/fr/node/4329',
    deadline: '2026-12-22'
  },
  {
    id: 'ci_savethechildren_prequalification_construction_rehab_2026',
    titre: "Appel à manifestation d'intérêt — préqualification d'entreprises pour travaux de construction et de réhabilitation (réf. ITT-CON-CIV-2026-003)",
    client: "Save the Children International — Côte d'Ivoire (financement AICS, Coopération italienne)",
    type: 'AMI',
    secteur: "Bâtiment — construction et réhabilitation (nature exacte des lots non précisée dans l'avis de préqualification)",
    pays: "Côte d'Ivoire",
    tier: 'A',
    quickWin: false,
    quickWinNote: "Stade de préqualification uniquement (pas encore le marché de travaux) — durée, lots et modalités de paiement inconnus à ce stade ; à resuivre lors de la publication de l'AO de travaux qui suivra",
    source: 'Save the Children International — avis relayé par business.abidjan.net',
    lien: 'https://business.abidjan.net/communique/9048-appel-doffres-pre-qualification-pour-travaux-de-construction-et-de-rehabilitation',
    deadline: '2026-11-30'
  }
];
