// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-11-19',
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
