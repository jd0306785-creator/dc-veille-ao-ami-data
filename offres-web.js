// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-10-28',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
  {
    id: 'sen_promoged_bambilor_cet_route_acces_2026',
    titre: "Conception et construction du Centre d'Enfouissement Technique (CET) de Bambilor et de sa route d'accès (lot unique, Projet PROMOGED, réf. SN-PROMOGED-541271-CW-RFB)",
    client: "Unité de Coordination de la Gestion des déchets solides (UCG) — Ministère de l'Environnement et de la Transition Écologique",
    type: 'AO',
    secteur: "Génie civil / VRD — conception-construction d'un ouvrage d'enfouissement technique et de sa voirie d'accès",
    pays: 'Sénégal (Bambilor, Rufisque)',
    tier: 'A',
    quickWin: false,
    quickWinNote: "Lot unique mais marché en conception-construction avec exigences techniques spécialisées (étanchéité/géomembrane, gestion de déchets) hors cœur de métier standard DC — pertinent surtout en groupement avec un spécialiste déchets",
    source: 'PROMOGED / Banque Mondiale — relayé par AllBusiness Africa',
    lien: 'https://allbusiness.africa/tenders/conception-et-construction-du-centre-denfouissement-technique-de-bambilor-et-de-sa-route-dacces',
    deadline: '2026-11-03'
  }
];
