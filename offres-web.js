// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-10-21',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
  {
    id: 'sen_promoged_bambilor_cet_route_acces_2026',
    titre: "Conception et construction du Centre d'Enfouissement Technique (CET) de Bambilor et de sa route d'accès, en 2 lots (Projet PROMOGED, réf. SN-PROMOGED-541271-CW-RFB)",
    client: "Unité de Coordination de la Gestion des déchets solides (UCG) — Ministère de l'Environnement et de la Transition Écologique",
    type: 'AO',
    secteur: "Génie civil / VRD — conception-construction d'un ouvrage d'enfouissement technique et de sa voirie d'accès",
    pays: 'Sénégal (Bambilor, Rufisque)',
    tier: 'A',
    quickWin: false,
    quickWinNote: "Marché en conception-construction avec exigences techniques spécialisées (étanchéité/géomembrane, gestion de déchets) hors cœur de métier standard DC — pertinent surtout en groupement avec un spécialiste déchets",
    source: 'PROMOGED / Banque Mondiale — relayé par GlobalTenders, Business-Senegal',
    lien: 'https://allbusiness.africa/tenders/conception-et-construction-du-centre-denfouissement-technique-de-bambilor-et-de-sa-route-dacces',
    deadline: '2026-11-03'
  },
  {
    id: 'ageroute_entretien_routes_revetues_8regions_2026',
    titre: "Travaux d'entretien des routes revêtues dans les régions de Dakar, Thiès, Saint-Louis, Diourbel, Louga, Matam, Tambacounda et Kédougou (AO n° D/1828/A2)",
    client: 'AGEROUTE Sénégal',
    type: 'AO',
    secteur: 'VRD — entretien routier (routes revêtues)',
    pays: 'Sénégal (8 régions)',
    tier: 'B',
    quickWin: true,
    quickWinNote: "Entretien routier = décomptes mensuels usuels, durée généralement courte (souvent 12 mois sur ce type de marché AGEROUTE), cœur de métier VRD de DC",
    source: 'AGEROUTE Sénégal — avis d\'appels d\'offres de travaux',
    lien: 'https://ageroute.sn/avis-dappel-doffres-de-travaux/',
    deadline: '2026-10-22'
  },
  {
    id: 'sonacos_demolition_terrassement_voiries_kaolack_ziguinchor_2026',
    titre: "Travaux de démolition, de terrassement, de nivellement et de voiries — unités industrielles de Kaolack et Ziguinchor",
    client: 'SONACOS (Société Nationale de Commercialisation des Oléagineux du Sénégal)',
    type: 'AO',
    secteur: 'VRD / génie civil — démolition, terrassement, voiries',
    pays: 'Sénégal (Kaolack, Ziguinchor)',
    tier: 'C',
    quickWin: true,
    quickWinNote: "Démolition/terrassement/voiries = durée courte, cœur de métier VRD de DC ; tier C car maître d'ouvrage public hors ressources propres de bailleur, financement direct de l'entreprise publique",
    source: 'Pi Business Info — avis d\'appels d\'offres',
    lien: 'https://www.pibusinessinfo.com/avis-dappels-doffres/',
    deadline: '2026-10-23'
  },
  {
    id: 'unicef_togo_jardins_enfants_kara_savanes_maritime_2026',
    titre: "Construction de six (6) jardins d'enfants à deux salles de classe avec dortoir, bureau-magasin et bloc sanitaire intégré — régions de la Kara, des Savanes et Maritime (réf. LRFPS-2026-9206456)",
    client: 'UNICEF Togo',
    type: 'AO',
    secteur: 'Bâtiment — construction scolaire/petite enfance (gros œuvre, second œuvre, sanitaire)',
    pays: 'Togo (régions Kara, Savanes, Maritime)',
    tier: 'A',
    quickWin: true,
    quickWinNote: "Bâtiments scolaires simples et de courte durée, cœur de métier bâtiment de DC ; points de vigilance : 6 sites répartis sur 3 régions (logistique multi-site) et présence opérationnelle au Togo à confirmer",
    source: 'UNGM (United Nations Global Marketplace)',
    lien: 'https://www.ungm.org/Public/Notice/316494',
    deadline: '2026-10-21'
  },
  {
    id: 'unicef_togo_laboratoire_salle_informatique_4lycees_2026',
    titre: "Travaux de construction d'un laboratoire et d'une salle informatique dans quatre (4) lycées — régions de la Kara et des Savanes (réf. LRFPS-2026-9206335)",
    client: 'UNICEF Togo',
    type: 'AO',
    secteur: 'Bâtiment — construction scolaire (gros œuvre, second œuvre)',
    pays: 'Togo (régions Kara, Savanes)',
    tier: 'A',
    quickWin: true,
    quickWinNote: 'Bâtiments scolaires simples et de courte durée, cœur de métier bâtiment de DC ; point de vigilance : 4 sites répartis sur 2 régions (logistique multi-site) et présence opérationnelle au Togo à confirmer',
    source: 'UNGM (United Nations Global Marketplace)',
    lien: 'https://www.ungm.org/Public/Notice/316485',
    deadline: '2026-10-21'
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
  }
];
