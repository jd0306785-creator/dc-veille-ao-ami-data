// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-10-24',
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
  },
  {
    id: 'unicef_togo_9salles_classe_epp_savanes_2026',
    titre: "Travaux de construction de neuf (9) salles de classe, d'un bureau et d'un magasin dans une école primaire (EPP) — région des Savanes (réf. LRFPS-2026-9206501)",
    client: 'UNICEF Togo',
    type: 'AO',
    secteur: 'Bâtiment — construction scolaire primaire (gros œuvre, second œuvre)',
    pays: 'Togo (région Savanes)',
    tier: 'A',
    quickWin: true,
    quickWinNote: "Site unique, bâtiment scolaire simple de courte durée, cœur de métier bâtiment de DC ; point de vigilance : présence opérationnelle au Togo à confirmer",
    source: 'UNGM (United Nations Global Marketplace)',
    lien: 'https://www.ungm.org/Public/Notice/317129',
    deadline: '2026-10-26'
  },
  {
    id: 'human_appeal_senegal_10salles_classe_5blocs_2026',
    titre: "Construction de dix (10) salles de classe réparties en cinq (05) blocs de deux salles, sur plusieurs sites (Marsassoum, CEM de Kadam, lycée-collège franco-arabe de Diourbel, CEM Tété Diadhiou à Ziguinchor) — réf. SN26-40702",
    client: 'Human Appeal Sénégal (financement France Zakat)',
    type: 'AO',
    secteur: 'Bâtiment — construction scolaire (terrassement, fondations, maçonnerie, charpente, couverture, menuiseries métalliques, électricité, peinture, accès PMR)',
    pays: 'Sénégal (Marsassoum, Kadam, Diourbel, Ziguinchor)',
    tier: 'A',
    quickWin: true,
    quickWinNote: "Bâtiments scolaires simples et standards, cœur de métier bâtiment de DC ; point de vigilance : 4 sites répartis dans 4 localités différentes (logistique multi-site)",
    source: "Human Appeal Sénégal — relayé par iapg.org.uk",
    lien: 'https://iapg.org.uk/appel-doffres-construction-de-10-salles-de-classe-au-senegal/',
    deadline: '2026-10-27'
  }
];
