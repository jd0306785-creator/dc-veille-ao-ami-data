// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-11-22',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
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
