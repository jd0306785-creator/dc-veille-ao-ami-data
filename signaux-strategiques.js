// Signaux stratégiques BTP — annonces de financement, projets en préparation, nouveaux
// bailleurs actifs, pas encore des AO/AMI formels. Synchronisé automatiquement (routine
// quotidienne). Faits publics uniquement, résumés factuels.
const SIGNAUX_META = {
  derniereMiseAJour: '2026-08-11',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const SIGNAUX = [
  {
    id: 'sig_senegal_sandiara_zes_agropole_autoroute',
    titre: "Sénégal : trois projets structurants annoncés pour la zone industrielle de Sandiara et Mbour (ZES, agropole, bretelle autoroutière à péage)",
    bailleurOuSource: "Gouvernement du Sénégal (Ministère de l'Industrie et du Commerce)",
    pays: 'Sénégal',
    secteur: 'BTP / VRD — zone économique spéciale, agropole, infrastructure routière',
    dateAnnonce: '2026-08-10',
    resume: "Le ministre de l'Industrie et du Commerce a annoncé trois projets pour Sandiara (Mbour) : clôture de la zone industrielle sous 1 an (7 milliards FCFA, voirie/réseaux/assainissement), un agropole intercommunal (20 milliards FCFA dans une enveloppe nationale de 350 milliards FCFA pour 45 agropoles), et une sortie d'autoroute à péage vers Sandiara avec extension vers Mbour, travaux prévus dès 2027.",
    lien: 'https://aps.sn/sandiara-trois-projets-majeurs-annonces-pour-la-zone-industrielle-et-le-departement-de-mbour/'
  },
  {
    id: 'sig_gambie_connect_gambia_infrastructure',
    titre: "Gambie : lancement du programme routier « Connect Gambia Infrastructure » (360 km, North Bank)",
    bailleurOuSource: 'État gambien (financement public)',
    pays: 'Gambie',
    secteur: 'BTP — infrastructures routières',
    dateAnnonce: '2026-08-10',
    resume: "Le président Adama Barrow a lancé un chantier de construction/réhabilitation routière de plus de 360 km dans la région de North Bank, pour environ 9 milliards de dalasis (~121 M USD), dans le cadre du programme national « Connect Gambia Infrastructure » visant à terme 1 500 km de routes à l'échelle du pays.",
    lien: 'https://www.financialafrik.com/2026/08/10/gambie-le-president-barrow-lance-un-chantier-routier-de-360-km-finance-a-hauteur-de-121-millions-de-dollars/'
  },
  {
    id: 'sig_bad_strategie_senegal_2026_2031',
    titre: "Nouvelle stratégie pays 2026-2031 de la BAD au Sénégal : le financement privé érigé en levier central des projets de transport",
    bailleurOuSource: 'Banque Africaine de Développement (BAD)',
    pays: 'Sénégal',
    secteur: 'Infrastructures / Transport',
    dateAnnonce: '2026-08-06',
    resume: "Le nouveau document de stratégie pays 2026-2031 de la BAD prévoit que les opérations de financement privé représentent 42% du programme indicatif, contre 5% actuellement, pour soutenir les grands projets de transport sénégalais dans un contexte de marge budgétaire réduite.",
    lien: 'https://www.agenceecofin.com/actualites-infrastructures/0806-139085-senegal-face-aux-contraintes-budgetaires-la-bad-fait-du-financement-prive-le-moteur-des-projets-de-transport'
  },
  {
    id: 'sig_boad_cote_ivoire_yabayo_buyo',
    titre: "Côte d'Ivoire : la BOAD finance l'axe routier Yabayo-Buyo (60 km) à hauteur de 30 milliards FCFA",
    bailleurOuSource: 'BOAD',
    pays: "Côte d'Ivoire",
    secteur: 'Génie civil / VRD (route)',
    dateAnnonce: '2026-07-23',
    resume: "Le gouvernement ivoirien a ratifié un prêt de 30 milliards FCFA accordé par la BOAD pour l'aménagement et le bitumage de l'axe routier Yabayo-Buyo, long de 60 km, dans le Sud-Ouest du pays.",
    lien: 'https://www.financialafrik.com/2026/07/23/la-cote-divoire-ratifie-un-pret-de-30-milliards-fcfa-de-la-boad-pour-laxe-yabayo-buyo/'
  },
  {
    id: 'sig_boad_uemoa_juin_2026',
    titre: "BOAD : 344,6 milliards FCFA de nouveaux financements approuvés pour l'UEMOA",
    bailleurOuSource: 'BOAD',
    pays: 'Zone UEMOA (dont Sénégal, Côte d’Ivoire, Bénin, Togo)',
    secteur: 'Infrastructures multisectorielles',
    dateAnnonce: '2026-06-27',
    resume: "Lors de son conseil d'administration de juin 2026 tenu à Lomé, la BOAD a approuvé onze nouvelles opérations de financement pour un montant total de 344,577 milliards FCFA au profit des pays membres de l'UEMOA.",
    lien: 'https://www.financialafrik.com/2026/06/27/boad-3446-milliards-fcfa-de-nouveaux-financements-pour-accelerer-la-transformation-de-luemoa/'
  },
  {
    id: 'sig_bm_senegal_220md_routes_rurales',
    titre: "Sénégal : la Banque mondiale débloque 220,71 milliards FCFA pour trois projets incluant la réhabilitation de routes rurales",
    bailleurOuSource: 'Banque mondiale',
    pays: 'Sénégal',
    secteur: 'Infrastructures routières rurales / VRD',
    dateAnnonce: '2026-08-05',
    resume: "Le Sénégal et la Banque mondiale ont signé trois accords de financement totalisant 220,71 milliards FCFA, incluant un volet de réhabilitation de routes rurales et de modernisation de systèmes d'irrigation en Casamance et dans l'est du pays, ainsi qu'un volet de connectivité des zones de production agricole au nord et au centre.",
    lien: 'https://aps.sn/le-senegal-beneficie-de-trois-nouveaux-financements-de-la-banque-mondiale-dun-montant-global-de-22071-milliards-de-francs-cfa/'
  },
  {
    id: 'sig_boad_ci_wassoulou_barrages',
    titre: "Côte d'Ivoire : la BOAD accorde 29,7 milliards FCFA pour le projet Wassoulou (barrages et irrigation)",
    bailleurOuSource: 'BOAD',
    pays: "Côte d'Ivoire",
    secteur: 'Génie civil / hydraulique',
    dateAnnonce: '2026-08-05',
    resume: "Le Conseil des ministres ivoirien a ratifié un prêt BOAD de 29,7 milliards FCFA pour la consolidation du projet Wassoulou, comprenant la construction de deux barrages et l'aménagement de 800 hectares de terres irriguées.",
    lien: 'https://www.presidence.ci/communiques-ministres/communique-du-conseil-des-ministres-du-mercredi-05-aout-2026/'
  },
  {
    id: 'sig_boad_ci_logements_bouake',
    titre: "Côte d'Ivoire : 42 milliards FCFA de la BOAD pour 840 logements sociaux à Bouaké",
    bailleurOuSource: 'BOAD',
    pays: "Côte d'Ivoire",
    secteur: 'Bâtiment / logement social',
    dateAnnonce: '2026-08-05',
    resume: "Le Conseil des ministres ivoirien a ratifié un prêt BOAD de 42 milliards FCFA pour la construction de 840 logements sociaux à Bouaké, dans le cadre d'un programme plus large de 4 300 logements répartis entre Abidjan, Yamoussoukro et Bouaké.",
    lien: 'https://www.presidence.ci/communiques-ministres/communique-du-conseil-des-ministres-du-mercredi-05-aout-2026/'
  },
  {
    id: 'sig_afd_ue_ter_extension_thies',
    titre: "Sénégal : l'AFD et l'Union européenne mobilisent 10 M€ pour les études de l'extension du TER vers Thiès",
    bailleurOuSource: 'AFD / Union européenne',
    pays: 'Sénégal',
    secteur: 'Infrastructure ferroviaire',
    dateAnnonce: '2026-07-24',
    resume: "L'État du Sénégal, l'AFD et l'Union européenne ont signé un mémorandum d'entente mobilisant 10 millions d'euros pour financer les études de faisabilité de la 3e phase du TER (extension Dakar–Thiès), signal amont avant un futur marché de construction ferroviaire.",
    lien: 'https://lesoleil.sn/actualites/economie/extension-du-ter-a-thies-letat-lafd-et-lunion-europeenne-signent-un-memorandum-dentente/'
  }
];
