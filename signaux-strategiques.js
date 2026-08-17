// Signaux stratégiques BTP — annonces de financement, projets en préparation, nouveaux
// bailleurs actifs, pas encore des AO/AMI formels. Synchronisé automatiquement (routine
// quotidienne). Faits publics uniquement, résumés factuels.
const SIGNAUX_META = {
  derniereMiseAJour: '2026-08-17',
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
  },
  {
    id: 'sig_boad_92e_session_aout_2026',
    titre: "BOAD : 185,56 milliards FCFA approuvés lors de la 92e session du Conseil d'administration, dont 119 milliards pour 7 projets routiers",
    bailleurOuSource: 'BOAD',
    pays: 'Zone UEMOA (dont Sénégal, Côte d’Ivoire, Bénin, Togo)',
    secteur: 'Infrastructures routières / multisectorielles',
    dateAnnonce: '2026-08-07',
    resume: "Réunie à Lomé, la 92e session du Conseil d'administration de la BOAD a approuvé 13 nouveaux projets de financement pour un montant total de 185,56 milliards FCFA. Le secteur routier en est le principal bénéficiaire avec 119 milliards FCFA alloués à 7 projets dans la zone UEMOA.",
    lien: 'https://www.agenceecofin.com/banque/2703-18708-boad-13-projets-approuves-pour-pres-de-186-milliards-de-fcfa'
  },
  {
    id: 'sig_senegal_joj_dakar_2026_village_olympique',
    titre: "Sénégal : le Premier ministre fixe des échéances strictes pour livrer le Village olympique et le Centre équestre de Diamniadio avant les JOJ Dakar 2026",
    bailleurOuSource: 'Gouvernement du Sénégal (Primature)',
    pays: 'Sénégal',
    secteur: 'Bâtiment — travaux de finition / second-œuvre',
    dateAnnonce: '2026-08-11',
    resume: "Lors d'un conseil interministériel d'évaluation des préparatifs des JOJ Dakar 2026, le Premier ministre a fixé des échéances strictes pour finaliser le Village olympique (livraison au COJOJ avant le 31 août) et le Centre équestre de Diamniadio, signe d'une pression pour des travaux de finition urgents à très court terme pouvant ouvrir des besoins de sous-traitance BTP locale.",
    lien: 'https://primature.sn/publications/actualites/conseil-interministeriel-devaluation-des-preparatifs-des-joj-dakar-2026'
  },
  {
    id: 'sig_ci_afd_metro_abidjan_agora',
    titre: "Côte d'Ivoire : la France (AFD) finance à hauteur de 23 milliards FCFA le métro d'Abidjan et le programme Agora (infrastructures sportives)",
    bailleurOuSource: 'France (coopération bilatérale) / AFD',
    pays: "Côte d'Ivoire",
    secteur: 'BTP urbain — infrastructures de transport et sportives (génie civil)',
    dateAnnonce: '2026-08-06',
    resume: "Le ministre ivoirien de l'Économie, des Finances et du Budget et l'ambassadeur de France en Côte d'Ivoire ont signé le 6 août 2026 deux conventions de financement totalisant 23 milliards FCFA (35 M€) : l'une pour la déviation d'un collecteur d'eaux usées sur le tracé du métro d'Abidjan, l'autre pour la construction d'infrastructures sportives de proximité du programme « Agora » à Guiglo, Dabou, Boundiali et Dimbokro.",
    lien: 'https://finances.gouv.ci/actualites/la-cote-d-ivoire-et-le-doing-business/65-contenu-dynamique/actualite/1205-financement-des-projets-de-construction-d-agora-et-du-metro-d-abidjan-la-cote-d-ivoire-et-la-france-signent-deux-conventions-de-23-milliards-fcfa'
  },
  {
    id: 'sig_benin_bad_canada_port_cotonou',
    titre: "Bénin : financement canadien de 18,3 M$ (fonds CACF géré par la BAD) pour la modernisation du Port de Cotonou (Terminal 5 et parking Zongo)",
    bailleurOuSource: 'Fonds Canada-Afrique (CACF) géré par la BAD / Canada',
    pays: 'Bénin',
    secteur: 'Infrastructure portuaire / génie civil',
    dateAnnonce: '2026-08-05',
    resume: "À l'occasion de l'ouverture de la première ambassade résidente du Canada à Cotonou, la ministre canadienne des Affaires étrangères a confirmé un financement de 18,3 M$ (fonds CACF géré par la BAD) pour le Port Autonome de Cotonou : création du Terminal 5 (25 ha gagnés sur la mer) et d'un parking tampon « Zongo » de 14 ha pour le trafic de camions, dans le cadre d'un programme plus large de modernisation portuaire soutenu par la BAD.",
    lien: 'https://lanouvelletribune.info/2026/08/benin-le-canada-investit-183-millions-de-dollars-dans-la-modernisation-du-port-de-cotonou/'
  },
  {
    id: 'sig_bid_ci_corridor_tafire_ferkessedougou',
    titre: "Côte d'Ivoire : la BID mobilise 235 M$ (~130 milliards FCFA) pour le tronçon autoroutier Tafiré-Ferkessédougou du corridor Abidjan-Burkina Faso-Mali",
    bailleurOuSource: 'Banque Islamique de Développement (BID/IsDB)',
    pays: "Côte d'Ivoire",
    secteur: 'Génie civil / infrastructures routières (autoroute)',
    dateAnnonce: '2026-06-19',
    resume: "La Côte d'Ivoire et la BID ont signé le 19 juin 2026 à Bakou un accord de financement complémentaire de 235 millions de dollars pour la construction du tronçon Tafiré-Ferkessédougou (environ 60 km, réparti en deux lots) du corridor autoroutier reliant Abidjan aux frontières du Burkina Faso et du Mali, portant la contribution cumulée de la BID à ce corridor à près d'un milliard de dollars.",
    lien: 'https://www.agenceecofin.com/actualites/2306-139525-cote-d-ivoire-235-millions-de-la-bid-pour-un-troncon-du-corridor-abidjan-burkina-faso-mali'
  },
  {
    id: 'sig_afd_ci_marches_bouake_yopougon',
    titre: "Côte d'Ivoire : l'AFD débloque 28,3 M€ (~18,6 milliards FCFA) de financement complémentaire pour la construction des marchés de Bouaké et Yopougon",
    bailleurOuSource: 'Agence Française de Développement (AFD)',
    pays: "Côte d'Ivoire",
    secteur: 'Bâtiment — infrastructures commerciales (marchés)',
    dateAnnonce: '2026-07-22',
    resume: "Le Conseil des ministres ivoirien du 22 juillet 2026 a approuvé un financement complémentaire de 28,285 millions d'euros de l'AFD pour la construction de marchés modernes à Bouaké et à Yopougon, en complément de financements déjà mobilisés pour ces infrastructures commerciales.",
    lien: 'https://www.fratmat.info/article/2643427/economie/logement-marches-de-bouake-et-de-yopougon-routes-le-gouvernement-mobilise-plus-de-125-milliards-de-fcfa-de-nouveaux-financements'
  },
  {
    id: 'sig_berd_afinhab_logement_abordable_zone',
    titre: "Bénin, Côte d'Ivoire, Sénégal : la BERD mobilise 9,6 M€ pour le logement abordable via AFINHAB",
    bailleurOuSource: 'BERD (Banque européenne pour la reconstruction et le développement)',
    pays: "Bénin, Côte d'Ivoire, Sénégal",
    secteur: 'Bâtiment — logement / financement hypothécaire',
    dateAnnonce: '2026-08-04',
    resume: "La BERD a engagé 9,6 millions d'euros (~6,3 milliards FCFA) dans une émission obligataire sociale de 61 millions d'euros portée par AFINHAB, pour refinancer des crédits hypothécaires accordés par des banques partenaires et élargir l'accès au financement du logement abordable pour les ménages à revenus faibles et moyens au Bénin, en Côte d'Ivoire et au Sénégal — signe de l'entrée active de ce nouveau bailleur dans le secteur du logement en zone UEMOA.",
    lien: 'https://lanouvelletribune.info/2026/08/la-berd-mobilise-96-me-au-benin-en-cote-divoire-et-au-senegal-pour-le-logement-abordable/'
  },
  {
    id: 'sig_badea_ci_renforcement_partenariat_aout2026',
    titre: "Côte d'Ivoire : la BADEA reçoit la ministre des Affaires étrangères à Abidjan pour approfondir son portefeuille (déjà 1,4 Md$ sur 67 opérations)",
    bailleurOuSource: 'BADEA (Banque arabe pour le développement économique en Afrique)',
    pays: "Côte d'Ivoire",
    secteur: 'Infrastructures / énergie / secteur privé (multisectoriel)',
    dateAnnonce: '2026-08-12',
    resume: "Le président de la BADEA, Abdullah Kh. Almusaibeeh, a reçu le 12 août 2026 à Abidjan la ministre d'État ivoirienne des Affaires étrangères pour examiner le renforcement de la coopération financière ; la BADEA a déjà financé 67 opérations pour près de 1,4 milliard de dollars en Côte d'Ivoire et affiche une volonté de renforcer son soutien, notamment sur les infrastructures et l'énergie.",
    lien: 'https://www.capmad.com/post/badea-moves-to-deepen-its-ivorian-portfolio-after-high-level-meeting-in-abidjan'
  },
  {
    id: 'sig_mauritanie_dakhlet_nouadhibou_port_assainissement',
    titre: "Mauritanie : programme de développement 2026-2029 de Dakhlet Nouadhibou (39,6 milliards MRU), avec port en eaux profondes et station d'assainissement",
    bailleurOuSource: 'Gouvernement mauritanien (budget national)',
    pays: 'Mauritanie',
    secteur: 'Infrastructure portuaire / assainissement / VRD',
    dateAnnonce: '2026-07-29',
    resume: "Le Conseil des ministres mauritanien a approuvé le 29 juillet 2026 un programme de développement de la wilaya de Dakhlet Nouadhibou (2026-2029) de 39,64 milliards MRU (~1 Md USD), incluant la construction d'un port en eaux profondes multifonctionnel, une station de traitement des eaux usées de la filière pêche (21 630 m³/jour), ainsi que des enveloppes pour routes/transport, eau/assainissement et modernisation urbaine.",
    lien: 'https://ami.mr/fr/archives/299969'
  },
  {
    id: 'sig_mauritanie_espagne_ico_vallee_fleuve_senegal',
    titre: "Mauritanie : l'Espagne (ICO) accorde un crédit de 50 M€ pour des infrastructures dans la vallée du fleuve Sénégal, zone frontalière",
    bailleurOuSource: "Instituto de Crédito Oficial (ICO), Espagne",
    pays: 'Mauritanie',
    secteur: 'Infrastructures / VRD (zone rurale frontalière)',
    dateAnnonce: '2026-07-29',
    resume: "Le gouvernement mauritanien a approuvé un accord de crédit de 50 M€ (2,28 milliards MRU) avec l'Institut de crédit officiel espagnol pour financer le Projet de résilience et de développement communautaire de la vallée du fleuve Sénégal, visant à améliorer l'accès à des infrastructures intégrées dans les communautés frontalières — signal de l'entrée d'un nouveau bailleur (Espagne/ICO) dans la zone.",
    lien: 'https://fr.madar.mr/actualites/le-gouvernement-approuve-un-pret-espagnol-de-50-millions-deuros/'
  },
  {
    id: 'sig_ci_guemon_bitumage_duekoue_bangolo',
    titre: "Côte d'Ivoire : la préfecture du Guémon annonce de nouveaux axes routiers à bitumer à Duékoué et Bangolo",
    bailleurOuSource: "Préfecture du Guémon (annonce locale, budget/bailleur non précisé)",
    pays: "Côte d'Ivoire",
    secteur: 'Génie civil / VRD (route)',
    dateAnnonce: '2026-08-13',
    resume: "À l'occasion du 66e anniversaire de l'indépendance, le préfet du Guémon a annoncé la construction d'environ 15 km de routes à Duékoué et la poursuite du bitumage/réhabilitation de routes à Bangolo et de l'axe Man-Kouibly. Aucun montant ni bailleur précis n'a été communiqué à ce stade — signal amont à confirmer par un futur AO.",
    lien: 'https://www.aip.ci/cote-divoire-aip-independance-2026-le-prefet-du-guemon-annonce-le-bitumage-de-plusieurs-axes-routiers/'
  }
];
