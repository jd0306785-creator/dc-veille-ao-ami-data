// Signaux stratégiques BTP — annonces de financement, projets en préparation, nouveaux
// bailleurs actifs, pas encore des AO/AMI formels. Synchronisé automatiquement (routine
// quotidienne). Faits publics uniquement, résumés factuels.
const SIGNAUX_META = {
  derniereMiseAJour: '2026-09-24',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const SIGNAUX = [
  {
    id: 'sig_mauritanie_nouakchott_phase2_ponts_voirie_ecoles',
    titre: "Mauritanie : lancement de la phase 2 du programme de développement de Nouakchott (11,59 milliards MRU — ponts, voirie, écoles)",
    bailleurOuSource: 'Gouvernement mauritanien (budget national)',
    pays: 'Mauritanie',
    secteur: 'Bâtiment / génie civil / VRD — ouvrages d\'art, voirie urbaine, établissements scolaires',
    dateAnnonce: '2026-07-01',
    resume: "Le gouvernement mauritanien a approuvé une deuxième phase du programme de développement de Nouakchott dotée de 11,59 milliards MRU (~289 M$), incluant la construction de 5 ponts aux points de congestion majeurs, l'aménagement de 67 km de voirie principale, la construction de 27 établissements scolaires (2 lycées, 7 collèges, 18 écoles primaires) et la mise à niveau d'infrastructures de santé, eau et électricité ; démarrage des travaux annoncé pour août 2026 sur une durée de 16 mois, projet distinct du programme Dakhlet Nouadhibou déjà suivi.",
    lien: 'http://www.cridem.org/C_Info.php?article=794579'
  },
  {
    id: 'sig_ci_ppp_centrales_electriques_735mw',
    titre: "Côte d'Ivoire : trois conventions PPP validées pour 735 MW de nouvelles capacités électriques (Taboth, Abidjan, Attakro/Abrobakro)",
    bailleurOuSource: "Gouvernement de Côte d'Ivoire (Conseil des ministres) — opérateurs privés Genser Energy, Power32, PIPS",
    pays: "Côte d'Ivoire",
    secteur: 'Génie civil / énergie — construction de centrales thermiques',
    dateAnnonce: '2026-08-05',
    resume: "Le Conseil des ministres ivoirien a validé trois conventions de concession/PPP totalisant 735 MW : une centrale thermique à cycle combiné de 470 MW à Taboth (Genser Energy), une unité de production flottante de 225 MW à Abidjan (Power32), et une centrale thermique modulaire de 40 MW répartie entre Attakro et Abrobakro (PIPS) — projets impliquant d'importants travaux de génie civil pour la construction des sites.",
    lien: 'https://www.sikafinance.com/marches/cote-d-ivoire-l-etat-valide-3-projets-totalisant-735-mw-pour-renforcer-l-approvisionnement-du-reseau-electrique_63463'
  },
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
  },
  {
    id: 'sig_senegal_snhlm_bambilor_phase2',
    titre: "Sénégal : SN HLM lance la phase 2 du programme HLM 1 (157 logements) et l'aménagement de Bambilor 2 (20 ha)",
    bailleurOuSource: 'SN HLM (société parapublique, fonds propres)',
    pays: 'Sénégal',
    secteur: 'Bâtiment / logement social',
    dateAnnonce: '2026-08-13',
    resume: "SN HLM a lancé la construction de 157 nouveaux logements (phase 2 du programme HLM 1) ainsi que la viabilisation de 20 hectares dans le cadre du projet Bambilor 2, pour un investissement de 13 milliards FCFA ; travaux de cette phase déjà confiés à Delta, TKM et TKF (achèvement prévu sous 8 mois) — signal de la poursuite d'un programme national de logement social pouvant ouvrir de futurs lots.",
    lien: 'https://www.capmad.com/post/in-bambilor-sn-hlm-relaunches-hlm-1-and-services-bambilor-2-to-boost-social-housing'
  },
  {
    id: 'sig_bad_benin_togo_corridor_kara_kabou',
    titre: "Bénin/Togo : la BAD (Fonds Africain de Développement) approuve un prêt de 59,78 M$ pour la réhabilitation du corridor frontalier Kara-Kabou (78,80 km)",
    bailleurOuSource: 'Banque Africaine de Développement (FAD) / Banque Islamique de Développement (BID) / UEMOA',
    pays: 'Bénin, Togo',
    secteur: 'Génie civil / VRD — infrastructure routière transfrontalière',
    dateAnnonce: '2026-05-21',
    resume: "Le Conseil d'administration du Fonds africain de développement a approuvé le 21 mai 2026 à Abidjan un prêt de 59,78 M$ pour la réhabilitation de 78,80 km du tronçon frontalier Bénin-Togo (Ouaké-Kémérida-Soundjina-Kara-Djamdé-Kabou), avec traversée de la ville de Kara en 3x2 voies ; opération cofinancée par le Groupe BAD, la BID, l'UEMOA et les gouvernements du Togo et du Bénin dans le cadre du corridor CU18, signal amont avant de futurs marchés de travaux routiers.",
    lien: 'https://www.afdb.org/fr/news-and-events/press-releases/le-fonds-africain-de-developpement-approuve-la-rehabilitation-dun-troncon-frontalier-entre-le-benin-et-le-togo-avec-un-financement-de-plus-de-59-millions-de-dollars-93898'
  },
  {
    id: 'sig_senegal_autoroute_mbour_fatick_kaolack_inauguration',
    titre: "Sénégal : inauguration de l'autoroute à péage Mbour-Fatick-Kaolack (738 M$, corridor Dakar-Bamako), extension vers Tambacounda à l'étude",
    bailleurOuSource: 'China Exim Bank (~620 M$ sur 738 M$) / Gouvernement du Sénégal',
    pays: 'Sénégal',
    secteur: "Infrastructure routière / VRD associée — voiries de connexion et aménagements urbains à Thiadiaye et Kaolack",
    dateAnnonce: '2026-08-22',
    resume: "Le président Bassirou Diomaye Faye a inauguré le 22 août 2026 à Thiadiaye l'autoroute à péage Mbour-Fatick-Kaolack (100 km + 15 km de bretelles de connexion), d'un coût total de 738 M$ financé à hauteur d'environ 620 M$ par un prêt concessionnel de China Exim Bank, avec une vingtaine d'entreprises et PME sénégalaises impliquées dans les travaux (~3 000 emplois directs, ~60 milliards FCFA de sous-traitance) ; l'ouvrage relie la Petite Côte au bassin arachidier dans le corridor Dakar-Bamako, et un prolongement vers Tambacounda serait à l'étude (information à confirmer), signal d'opportunités à venir sur les voiries de connexion et aménagements urbains le long du corridor.",
    lien: 'https://www.financialafrik.com/2026/08/24/senegal-une-autoroute-de-738-millions-de-dollars-inauguree-pour-renforcer-les-echanges-entre-les-regions/'
  },
  {
    id: 'sig_ci_pnd_2026_2030_tgv_metro_logements_bm',
    titre: "Côte d'Ivoire : le PND 2026-2030 (114 838 Md FCFA) confirme un pipeline BTP majeur (TGV 640 km, métro d'Abidjan, 150 000 logements) — 480 Md FCFA de financement Banque mondiale déjà signés",
    bailleurOuSource: "Gouvernement de Côte d'Ivoire / Banque mondiale (Groupe consultatif du PND)",
    pays: "Côte d'Ivoire",
    secteur: 'BTP / génie civil / bâtiment — infrastructures ferroviaires, transport urbain, logement',
    dateAnnonce: '2026-07-08',
    resume: "Le Plan National de Développement (PND) 2026-2030 de la Côte d'Ivoire, adopté à l'unanimité par l'Assemblée nationale le 14 avril 2026 (investissement global visé de 114 838,5 milliards FCFA, ~206 Md$), porte plusieurs grands chantiers BTP à venir : un TGV de 640 km reliant Abidjan à Yamoussoukro, Bouaké, Korhogo et Ferkessédougou, la mise en service de la ligne 1 du métro d'Abidjan visée pour 2029, et la construction de 150 000 logements. Lors du Groupe consultatif de financement du PND tenu le 8 juillet 2026 à Abidjan, le gouvernement ivoirien et la Banque mondiale ont signé cinq nouveaux accords de financement d'environ 480 milliards FCFA (875 M$), sur un total de 80 milliards $ de promesses annoncées par l'ensemble des partenaires au développement — signal d'un pipeline pluriannuel de futurs marchés de travaux à suivre.",
    lien: 'https://news.abidjan.net/articles/748617/en-marge-des-travaux-du-groupe-consultatif-du-pnd-2026-2030-le-gouvernement-ivoirien-et-la-banque-mondiale-signent-cinq-accords-de-financement-denviron-480-milliards-fcfa'
  },
  {
    id: 'sig_ci_6e_pont_abidjan_abatta_koumassi',
    titre: "Côte d'Ivoire : lancement en préparation du 6e pont d'Abidjan (Abatta-Koumassi-Port-Bouët, 200 milliards FCFA en PPP à péage)",
    bailleurOuSource: "Gouvernement de Côte d'Ivoire (PPP) — short-list Socoprim / groupe chinois CCECC",
    pays: "Côte d'Ivoire",
    secteur: "Génie civil — ouvrage d'art (pont à péage), mobilité urbaine",
    dateAnnonce: '2026-08-27',
    resume: "Un nouveau pont de 1,5 km reliant Abatta (Cocody) à l'aéroport de Port-Bouët via Koumassi, estimé à 200 milliards FCFA (~305 M€), est monté en PPP à péage. Mise à jour du 28 août 2026 : l'État ivoirien écarterait le groupe chinois CCECC au profit de Socoprim (Bouygues majoritaire, déjà concessionnaire du pont Riviera-Marcory) pour construire et exploiter l'ouvrage — avancée concrète vers l'attribution formelle et de futurs lots de travaux/sous-traitance.",
    lien: 'https://www.financialafrik.com/2026/08/28/cote-divoire-200-milliards-de-fcfa-pour-le-6e-pont-dabidjan-entre-abatta-koumassi-et-port-bouet/'
  },
  {
    id: 'sig_ci_mcc_300m_reseau_electrique',
    titre: "Côte d'Ivoire : ratification d'un don américain (MCC) de 171 Md FCFA (300 M$) pour la modernisation du réseau électrique régional",
    bailleurOuSource: 'Millennium Challenge Corporation (MCC) — gouvernement des États-Unis',
    pays: "Côte d'Ivoire",
    secteur: 'Énergie — modernisation de réseau électrique (volet génie civil : lignes et postes)',
    dateAnnonce: '2026-08-05',
    resume: "Le Conseil des ministres ivoirien a ratifié le 5 août 2026 un don de 171 milliards FCFA (300 M$) de la Millennium Challenge Corporation américaine, dans le cadre du Programme Compact régional pour l'énergie, destiné à appuyer la phase 2 du West African Power Pool et à moderniser le réseau électrique national pour les échanges transfrontaliers.",
    lien: 'https://news.abidjan.net/articles/748806/financement-du-programme-compact-regional-pour-lenergie-letat-de-cote-divoire-mobilise-171-milliards-fcfa'
  },
  {
    id: 'sig_mauritanie_solaire_eolien_stockage_ppp',
    titre: "Mauritanie : lancement en PPP d'un méga-projet solaire-éolien-stockage de 287 M$ (Nouakchott/Boulenouar)",
    bailleurOuSource: "Ministère de l'Énergie et du Pétrole (Mauritanie) — partenariat public-privé",
    pays: 'Mauritanie',
    secteur: 'Énergie — construction de centrales (génie civil)',
    dateAnnonce: '2026-08-15',
    resume: "Le gouvernement mauritanien a lancé un projet énergétique de 287 M$ en partenariat public-privé sur 15 ans, combinant une centrale solaire de 160 MW à Nouakchott, une centrale éolienne de 60 MW à Boulenouar et un système de stockage par batteries de 370 MWh — chantiers impliquant d'importants travaux de génie civil pour la construction des sites.",
    lien: 'https://fr.apanews.net/news/mauritanie-mega-projet-solaire-eolien-de-287-millions-de-dollars/'
  },
  {
    id: 'sig_senegal_ageroute_extension_autoroute_tambacounda_saintlouis',
    titre: "Sénégal : AGEROUTE annonce un pipeline d'extension autoroutière vers Tambacounda et Saint-Louis (plus de 900 km visés d'ici 2030)",
    bailleurOuSource: 'AGEROUTE Sénégal',
    pays: 'Sénégal',
    secteur: 'Infrastructures routières / autoroutes',
    dateAnnonce: '2026-08-28',
    resume: "Le directeur général d'AGEROUTE a indiqué que l'État vise un réseau autoroutier de plus de 900 km d'ici 2030, avec deux nouveaux tronçons structurants en préparation au-delà des 520 km déjà engagés : Dakar-Tivaouane-Saint-Louis (200 km) et Kaolack-Tambacounda (260 km), en complément de l'axe Mbour-Fatick-Kaolack déjà livré — signal amont sur un pipeline de futurs marchés routiers pas encore mis en appel d'offres.",
    lien: 'https://www.pibusinessinfo.com/reseau-autoroutier-au-senegal-2026-extension-520-km-infrastructures/'
  },
  {
    id: 'sig_benin_deal_room_2026_appel_projets',
    titre: "Bénin : forum d'investissement « Benin Deal Room 2026 » présentant plus de 20 projets publics (2 à 3 Md$), volet infrastructures/logistique inclus",
    bailleurOuSource: "Gouvernement du Bénin (ministères du Tourisme et du Commerce extérieur, Affaires étrangères, APIEx)",
    pays: 'Bénin',
    secteur: 'Infrastructures / logistique-transport / multisectoriel',
    dateAnnonce: '2026-08-21',
    resume: "Le Bénin organise un forum d'investissement à Cotonou (16-18 septembre 2026) présentant plus de 20 projets publics d'une valeur cumulée de 2 à 3 milliards de dollars à des fonds d'investissement et institutions financières, avec un volet infrastructures/logistique/transport explicite ; l'appel à projets était ouvert jusqu'au 28 août 2026 — signal amont sur un pipeline de projets encore en recherche de financement, à confirmer par de futurs AO.",
    lien: 'https://www.kaweru.com/economie/2026/08/21/benin-deal-room-2026-lappel-a-projets-ouvert-jusquau-28-aout/'
  },
  {
    id: 'sig_togo_20000_logements_ami_etudes',
    titre: "Togo : nouvelle étape pour le programme de 20 000 logements à coûts abordables (recrutement d'une firme pour le cahier des charges architecturales et techniques)",
    bailleurOuSource: 'Banque Africaine de Développement (BAD) — maîtrise d\'ouvrage CITAFRIC (Togo), complément BOAD',
    pays: 'Togo',
    secteur: 'Bâtiment / logement social — programme de 20 000 logements',
    dateAnnonce: '2026-07-15',
    resume: "L'Agence de développement urbain et municipal du Togo (CITAFRIC) a lancé un appel à manifestation d'intérêt pour recruter une firme chargée d'élaborer le cahier des charges architecturales et techniques du programme de construction de 20 000 logements à coûts abordables (financé par un prêt de la BAD, complété par la BOAD), déployé principalement sur le site de Kpomé-Dalavé (1 177 ha) ainsi qu'à Sagbado-Avoèmé et Yokoè-Kopegan — signal amont avant de futurs marchés de construction de logements à grande échelle au Togo.",
    lien: 'https://www.togofirst.com/fr/btp/1507-19569-construction-de-20-000-logements-le-togo-amorce-une-nouvelle-etape'
  },
  {
    id: 'sig_boad_nouveau_siege_lome_ami_architecture',
    titre: "Togo : la BOAD lance une AMI pour la conception (maîtrise d'œuvre) de son nouvel immeuble de siège à Lomé",
    bailleurOuSource: 'BOAD (ressources propres)',
    pays: 'Togo',
    secteur: "Bâtiment tertiaire — conception/maîtrise d'œuvre d'un nouvel immeuble de bureaux",
    dateAnnonce: '2026-06-23',
    resume: "La BOAD a publié l'AMI n°001/2026/DAG/DPA/BOAD pour recruter un cabinet d'architecture chargé de la maîtrise d'œuvre complète de la construction d'un nouvel immeuble à son siège de Lomé, destiné à pallier les limites de capacité et d'infrastructures techniques du bâtiment actuel — signal amont avant un futur marché de construction du nouveau siège BOAD.",
    lien: 'https://www.boad.org/fr/opportunites/appels-doffre/ami-001-2026-architecture-nouveau-siege-boad-lome/'
  },
  {
    id: 'sig_senegal_fmi_accord_fec_2026',
    titre: "Sénégal : accord de principe FMI-Sénégal sur un programme de 2,2 Md$ (Facilité Élargie de Crédit), premier retour du FMI depuis la crise des dettes cachées",
    bailleurOuSource: 'Fonds Monétaire International (FMI)',
    pays: 'Sénégal',
    secteur: 'Macro-financier — conditionne la mobilisation de financements infrastructures (Banque mondiale, BAD, autres partenaires)',
    dateAnnonce: '2026-09-01',
    resume: "À l'issue d'une mission à Dakar (19 août - 1er septembre 2026), le FMI et les autorités sénégalaises ont conclu un accord de principe sur un programme de 36 mois au titre de la Facilité Élargie de Crédit (FEC) d'environ 2,2 milliards de dollars (~1 243 milliards FCFA), sous réserve d'approbation du Conseil d'administration du FMI et de l'obtention d'assurances de financement des partenaires ; le FMI indique que ce programme devrait faciliter la mobilisation de financements complémentaires de la Banque mondiale, de la BAD et d'autres bailleurs pour le Sénégal — signal amont sur un possible déblocage de financements d'infrastructures actuellement en attente.",
    lien: 'https://xalimasn.com/2026/09/01/fmi-senegal-un-accord-de-22-milliards-de-dollars-ouvre-une-nouvelle-etape-dans-la-crise-de-la-dette'
  },
  {
    id: 'sig_benin_shelter_afrique_adhesion',
    titre: "Bénin : adhésion à la Shelter Afrique Development Bank, nouveau bailleur panafricain dédié au logement",
    bailleurOuSource: 'Gouvernement du Bénin / Shelter Afrique Development Bank',
    pays: 'Bénin',
    secteur: "Bâtiment / logement — financement de l'habitat et de l'immobilier",
    dateAnnonce: '2026-09-02',
    resume: "Le Conseil des ministres du 2 septembre 2026 a autorisé la transmission à l'Assemblée nationale, pour ratification, de l'adhésion du Bénin à l'accord instituant la Shelter Afrique Development Bank, banque panafricaine dédiée exclusivement au financement de l'habitat et de l'immobilier, ainsi qu'au Fonds pour le développement des exportations en Afrique — signal de l'entrée d'un nouveau bailleur spécialisé logement dans le paysage béninois.",
    lien: 'https://www.nasuba.info/politique-societe/benin-les-grandes-decisions-du-conseil-des-ministres-du-mercredi-2-septembre-2026/'
  },
  {
    id: 'sig_benin_35_centres_integres',
    titre: "Bénin : programme de construction de 35 centres intégrés (services sociaux, La Poste, numérique) dans 26 communes",
    bailleurOuSource: 'Gouvernement du Bénin (Programme des filets sociaux productifs)',
    pays: 'Bénin',
    secteur: 'Bâtiment / infrastructures sociales',
    dateAnnonce: '2026-09-02',
    resume: "Le Conseil des ministres du 2 septembre 2026 a autorisé la construction de 35 centres intégrés dans 26 communes, regroupant guichets uniques de protection sociale, agences de La Poste du Bénin et points numériques communautaires, dans le cadre du Programme des filets sociaux productifs — projet de bâtiment public en amont de futurs appels d'offres.",
    lien: 'https://benin-news.com/2026/09/03/35-centres-integres-benin/'
  },
  {
    id: 'sig_ci_bidc_bhci_logement',
    titre: "Côte d'Ivoire : la BIDC accorde une ligne de financement de 10 milliards FCFA à la BHCI pour le logement",
    bailleurOuSource: "Banque d'Investissement et de Développement de la CEDEAO (BIDC/EBID)",
    pays: "Côte d'Ivoire",
    secteur: 'Bâtiment / logement — refinancement de la chaîne de valeur construction-promotion immobilière',
    dateAnnonce: '2026-09-02',
    resume: "La BIDC et la Banque de l'Habitat de Côte d'Ivoire (BHCI) ont signé le 2 septembre 2026 un accord de financement de 10 milliards FCFA destiné à renforcer la capacité de financement du logement et l'accès aux ressources financières des PME/PMI actives dans la construction, la promotion immobilière et les travaux publics.",
    lien: 'https://www.financialafrik.com/2026/09/02/la-bidc-accorde-une-ligne-de-financement-de-10-milliards-de-fcfa-a-la-bhci-pour-soutenir-le-developpement-du-logement-et-renforcer-la-chaine-de-valeur-immobiliere-en-cote-divoire/'
  },
  {
    id: 'sig_togo_centrale_thermique_bifuel_120mw_lome',
    titre: "Togo : avis de mobilisation anticipée de marché pour une centrale thermique bifuel de 120 MW à Lomé (appui Banque mondiale)",
    bailleurOuSource: "Ministère chargé de l'Énergie et des Ressources Minières (Togo) / Banque mondiale",
    pays: 'Togo',
    secteur: 'Génie civil / énergie — construction de centrale thermique',
    dateAnnonce: '2026-08-30',
    resume: "Le ministère togolais chargé de l'Énergie a publié un avis de mobilisation anticipée de marché pour un projet de centrale thermique bifuel de 120 MW sur le site de la centrale thermique de Lomé, avec l'appui financier de la Banque mondiale ; une réunion de consultation des acteurs du marché est prévue le 18 septembre 2026 (inscriptions jusqu'au 14 septembre), en amont d'une sélection de l'opérateur attendue au 4e trimestre 2026 — signal amont avant de futurs marchés de travaux de génie civil liés à la construction du site.",
    lien: 'https://www.agenceecofin.com/actualites-industries/3008-141145-togo-un-projet-de-centrale-thermique-de-120-mw-a-bifuel-annonce-a-lome'
  },
  {
    id: 'sig_togo_club_ppp_rn1_davie_atakpame',
    titre: "Togo : lancement du « Club PPP Togo » et annonce d'une mise en concession de la RN1 Davié-Atakpamé (dédoublement 2x2 voies)",
    bailleurOuSource: 'Gouvernement togolais (Ministère de l\'Économie et du Suivi de l\'action gouvernementale)',
    pays: 'Togo',
    secteur: 'Génie civil routier — dédoublement 2x2 voies, cadre PPP infrastructures',
    dateAnnonce: '2026-09-03',
    resume: "Le Togo a officiellement lancé un « Club PPP » pour accélérer la mobilisation d'investissements privés dans les infrastructures et a annoncé, à cette occasion, la mise en concession/PPP envisagée du dédoublement en 2x2 voies de la RN1 entre Davié et Atakpamé (tronçon Togblécopé-Atakpamé de 145,5 km), pour un coût estimé à environ 600 millions de dollars ; une Task Force a été mise en place pour accélérer le montage du projet.",
    lien: 'https://www.jeuneafrique.com/mag/786011/economie-entreprises/togo-vers-un-partenariat-public-prive-pour-laxe-routier-davie-atakpame/'
  },
  {
    id: 'sig_benin_mcc_route_setto_dassa_zoume',
    titre: "Bénin : compact régional MCC — reconstruction de la route Sètto/Bohicon-Dassa-Zoumè (83 km, corridor Cotonou-Niamey)",
    bailleurOuSource: 'Millennium Challenge Corporation (MCC) / MCA-Bénin Régional — gouvernements des États-Unis et du Bénin',
    pays: 'Bénin',
    secteur: 'Génie civil routier — reconstruction en autoroute 2x2 voies',
    dateAnnonce: '2026-07-16',
    resume: "Le 3e Compact régional du MCC (10e session du Conseil d'administration MCA-Bénin Régional, 16 juillet 2026) prévoit la reconstruction en autoroute 2x2 voies du tronçon Sètto/Bohicon-Dassa-Zoumè (83 km), maillon du corridor Cotonou-Niamey, financée à hauteur de 202 millions $ (don du gouvernement américain) plus 15,15 millions $ de contrepartie béninoise ; les dispositions pour le démarrage des travaux étaient finalisées début septembre 2026.",
    lien: 'https://www.agenceecofin.com/actualites-infrastructures/2007-140329-benin-le-chantier-de-reconstruction-de-laxe-setto-dassa-zoume-est-pret-a-demarrer'
  },
  {
    id: 'sig_senegal_plan_urgence_ponts_ziguinchor',
    titre: "Sénégal : le chef de l'État ordonne un plan d'urgence national pour les ponts et l'accélération des programmes de logement, avec 25 milliards FCFA pour le second pont de Ziguinchor",
    bailleurOuSource: 'Présidence de la République du Sénégal (fonds propres / budget national)',
    pays: 'Sénégal',
    secteur: "Bâtiment / génie civil — ouvrages d'art (ponts), logement social, infrastructures publiques",
    dateAnnonce: '2026-07-17',
    resume: "Lors d'un conseil interministériel, le président Bassirou Diomaye Faye a ordonné l'élaboration d'un plan d'urgence national pour la construction et la réhabilitation de ponts, ainsi que l'accélération des programmes de logement et d'infrastructures publiques ; il a notamment confirmé le financement sur fonds propres à hauteur de 25 milliards FCFA du second pont de Ziguinchor (lancement des travaux annoncé pour 2026) dans le cadre du Plan Diomaye pour la Casamance, en complément d'une enveloppe de 20 milliards FCFA pour le programme des 30 000 logements et de 51 milliards FCFA pour les programmes PUDC/PUMA/PROMOVILLES.",
    lien: 'https://lesoleil.sn/actualites/politique/logements-et-infrastructures-publiques-le-chef-de-letat-ordonne-lacceleration-des-programmes-et-un-plan-durgence-pour-les-ponts/'
  },
  {
    id: 'sig_senegal_dpg_pm_2026_logement_desenclavement',
    titre: "Sénégal : la déclaration de politique générale du Premier ministre chiffre un plan logement (500 000 unités) et désenclavement routier (3 000 km)",
    bailleurOuSource: 'Gouvernement du Sénégal (Primature / Assemblée nationale)',
    pays: 'Sénégal',
    secteur: 'Bâtiment / logement social — routes / désenclavement — santé (hôpitaux)',
    dateAnnonce: '2026-09-08',
    resume: "Lors de sa déclaration de politique générale devant l'Assemblée nationale le 8 septembre 2026, le Premier ministre Ahmadou Al Aminou Lô a annoncé un objectif de 500 000 logements d'ici 2035 (30 000/an), un programme de désenclavement routier de 3 000 km, et la construction de 4 hôpitaux régionaux de 350 lits (Saint-Louis, Ziguinchor, Mbour, Kaolack) ; l'enveloppe logement 2026 (70 Md FCFA) doublerait en 2027 (140 Md FCFA).",
    lien: 'https://aps.sn/un-total-de-30-000-logements-par-an-et-3-000-km-de-desenclavement-annonces/'
  },
  {
    id: 'sig_africa50_20md_pipeline_2026',
    titre: "Afrique de l'Ouest : Africa50 vise plus de 20 Md$ de projets d'infrastructures co-investis d'ici cinq ans",
    bailleurOuSource: 'Africa50',
    pays: "Zone régionale (dont Sénégal, Côte d'Ivoire)",
    secteur: 'Infrastructures multisectorielles — électricité, transport, logistique, numérique',
    dateAnnonce: '2026-09-09',
    resume: "Africa50 annonce viser au moins 20 milliards de dollars de projets d'infrastructures co-investis d'ici cinq ans, contre environ 9 Md$ actuellement sur 36 projets (~500 M$ de fonds propres engagés), avec une priorité affichée aux zones où les besoins de financement restent les plus criants — signal d'une montée en puissance de ce bailleur panafricain dans la région.",
    lien: 'https://www.agenceecofin.com/actualites/0909-141406-africa50-vise-plus-de-20-milliards-de-projets-co-investis-en-afrique-d-ici-cinq-ans'
  },
  {
    id: 'sig_senegal_conseil_ministres_casamance_strategie_portuaire',
    titre: "Sénégal : le Conseil des ministres du 10 septembre demande l'accélération du Plan Diomaye pour la Casamance et rappelle l'échéance de la stratégie portuaire nationale (Ndayane, Bargny-Sendou)",
    bailleurOuSource: 'Présidence de la République du Sénégal (Conseil des ministres)',
    pays: 'Sénégal',
    secteur: 'Infrastructures régionales (Casamance) / infrastructures portuaires — VRD et bâtiments sociaux de base',
    dateAnnonce: '2026-09-10',
    resume: "Lors du Conseil des ministres du 10 septembre 2026, le président Bassirou Diomaye Faye a demandé l'accélération de la mise en œuvre du Plan Diomaye pour la Casamance et le renforcement des moyens de PUMA/ANRAC pour les infrastructures sociales de base en zones frontalières ; le Conseil a aussi rappelé l'échéance de finalisation, avant fin octobre 2026, du projet de loi sur la stratégie portuaire nationale, avec une attention particulière portée aux infrastructures de Ndayane et Bargny-Sendou (livraison de la plateforme de Bargny-Sendou attendue fin 2026).",
    lien: 'https://aps.sn/le-communique-du-conseil-des-ministres-du-jeudi-10-septembre-2026/'
  },
  {
    id: 'sig_benin_aiib_memorandum_2026',
    titre: "Bénin : signature d'un protocole d'accord avec la Banque Asiatique d'Investissement pour les Infrastructures (AIIB), nouveau bailleur actif dans la zone",
    bailleurOuSource: "AIIB (Asian Infrastructure Investment Bank) / Gouvernement du Bénin (Présidence, Ministère de l'Économie et des Finances)",
    pays: 'Bénin',
    secteur: 'Infrastructures multisectorielles — énergie, infrastructures portuaires et routières, transport, aéroports, agriculture durable',
    dateAnnonce: '2026-09-08',
    resume: "La présidente de l'AIIB, Zou Jiayi, en visite officielle à Cotonou (dont le Port Autonome de Cotonou), a rencontré le président Wadagni et signé un mémorandum d'entente formalisant l'intérêt de la banque à investir dans six secteurs prioritaires du Bénin, sans montant chiffré à ce stade — signal de l'entrée active d'un nouveau bailleur asiatique dans la zone, en amont de futurs projets/financements.",
    lien: 'https://beninwebtv.bj/benin-et-aiib-signature-dun-memorandum-dentente-pour-renforcer-la-cooperation-dans-le-financement-des-infrastructures/'
  },
  {
    id: 'sig_gambie_sfd_routes_grand_banjul',
    titre: "Gambie : le Fonds Saoudien pour le Développement (SFD) octroie un financement additionnel de 10 M$ pour les routes du Grand Banjul",
    bailleurOuSource: 'Fonds Saoudien pour le Développement (SFD) / Gouvernement de Gambie (Ministère des Finances)',
    pays: 'Gambie',
    secteur: 'VRD / voirie urbaine — aménagement de routes',
    dateAnnonce: '2026-09-03',
    resume: "La ministre gambienne des Finances, Seedy K.M. Keita, a signé avec le président du SFD un avenant de financement de 10 millions $ pour compléter l'aménagement de 50 km de routes dans la région du Grand Banjul, consolidant la présence de ce bailleur saoudien dans le financement des infrastructures gambiennes.",
    lien: 'https://www.capmad.com/article/la-gambie-obtient-10-millions-de-dollars-additionnels-du-sfd-pour-boucler-les-routes-du-grand-banjul'
  },
  {
    id: 'sig_benin_bad_ouidah_hillacondji_4lots',
    titre: "Bénin : la BAD annonce le lancement effectif du dédoublement de la route Ouidah-Hillacondji (58,5 km), désormais scindé en 4 lots de travaux",
    bailleurOuSource: 'Banque Africaine de Développement (BAD)',
    pays: 'Bénin',
    secteur: 'Génie civil routier / VRD — corridor Abidjan-Lagos (PIDA)',
    dateAnnonce: '2026-09-10',
    resume: "La BAD a annoncé le 10 septembre 2026 que le Bénin, avec son appui financier, a initié le projet de dédoublement de la route Ouidah-Hillacondji (58,5 km, frontière togolaise), désormais scindé en quatre lots de travaux, incluant aussi 35,5 km de voies de desserte Godomey-Ouidah, 21 km de voies vers des sites touristiques, une aire de stationnement poids lourds (6 ha) et des logements de service à la frontière (3 ha) ; composante béninoise de la phase 2 du corridor prioritaire Lomé-Cotonou (PIDA) — signal amont avant de futurs appels d'offres de travaux répartis en lots.",
    lien: 'https://lanouvelletribune.info/2026/09/avec-lappui-de-la-bad-le-benin-initie-le-projet-de-dedoublement-de-la-route-ouidah-hillacondji/'
  },
  {
    id: 'sig_ci_sia2026_investissements_38756md',
    titre: "Côte d'Ivoire : le SIA 2026 annonce 38 756 milliards FCFA d'investissements infrastructures, appel au privé comme concepteur-financier-gestionnaire",
    bailleurOuSource: "Gouvernement de Côte d'Ivoire (Ministère des Infrastructures) — 5e Salon des Infrastructures d'Abidjan (SIA 2026)",
    pays: "Côte d'Ivoire",
    secteur: 'BTP / infrastructures — financement et montages PPP',
    dateAnnonce: '2026-09-17',
    resume: "À l'occasion de la 5e édition du Salon des Infrastructures d'Abidjan (17-19 septembre 2026), le ministre des Infrastructures Yacouba Hien Sié a annoncé des investissements estimés à 38 756 milliards FCFA dans le cadre du PND 2026-2030, dont environ 70% attendus du secteur privé ; le Premier ministre Beugré Mambé a appelé les opérateurs privés à devenir concepteurs, financiers et gestionnaires d'infrastructures, le gouvernement disant vouloir accélérer la maturation de projets bancables.",
    lien: 'https://www.fratmat.info/article/2644604/economie/5e-edition-du-siahien-sie-38-756-milliards-fcfa-pour-propulser-la-cote-divoire-dans-une-nouvelle-ere-des-infrastructures'
  },
  {
    id: 'sig_senegal_apurement_dette_entreprises_btp_1400md',
    titre: "Sénégal : l'État annonce un plan d'apurement sur trois ans de plus de 1 400 milliards FCFA de dette envers les entreprises, secteur BTP en première ligne",
    bailleurOuSource: 'Primature du Sénégal (budget national)',
    pays: 'Sénégal',
    secteur: 'BTP / bâtiment / travaux publics — climat de paiement du secteur',
    dateAnnonce: '2026-09-19',
    resume: "Le Premier ministre Ahmadou Al Aminou Lô a confirmé le 19 septembre 2026 un calendrier d'apurement sur trois ans de plus de 1 400 milliards FCFA d'arriérés dus par l'État aux entreprises (300 milliards FCFA d'ici fin 2026, puis deux tranches de 550 milliards en 2027 et 2028) ; le secteur du BTP, en première ligne de ces impayés avec chantiers à l'arrêt et investissements en berne, juge ce délai trop long et réclame un remboursement en deux ans — signal à suivre sur le climat de paiement des marchés publics sénégalais (Tier C).",
    lien: 'https://www.senegal24news.com/economie/dette-entreprises-etat-trois-ans-apurer-1400-milliards-fcfa/'
  },
  {
    id: 'sig_senegal_dakar_olympic_city_closing_financier',
    titre: "Sénégal : lancement du closing financier du projet Dakar Olympic City à Diamniadio (911 M€ de financement, groupe britannique Broughton Capital)",
    bailleurOuSource: 'Broughton Capital Group (Royaume-Uni) / DOC S.A. (ALD & Partners, COREX)',
    pays: 'Sénégal',
    secteur: 'Bâtiment / aménagement urbain — complexe hôtelier, bureaux et résidentiel (487 072 m²)',
    dateAnnonce: '2026-09-09',
    resume: "Les partenaires du projet Dakar Olympic City (DOC S.A., porté par ALD & Partners et COREX) ont lancé le 9 septembre 2026 à Diamniadio le processus de closing financier du projet, adossé à un financement senior global de 911 millions d'euros (~598 milliards FCFA) apporté par le groupe britannique Broughton Capital Group ; cette étape ouvre la voie au premier décaissement et au démarrage imminent des travaux de construction (complexe hôtelier, bureaux et 660 logements sur 487 072 m²), déjà confiés au consortium Axiom-Dost Group.",
    lien: 'https://www.dakaractu.com/DAKAR-OLYMPIC-CITY-Le-closing-financier-lance_a275835.html'
  },
  {
    id: 'sig_senegal_kaolack_sport_city_18md',
    titre: "Sénégal : le Conseil départemental de Kaolack présente le projet « Kaolack Sport City » (18 milliards FCFA — stade, arena, hôtel 5 étoiles)",
    bailleurOuSource: 'Conseil départemental de Kaolack / État / Fédération Sénégalaise de Football / partenaires privés',
    pays: 'Sénégal',
    secteur: 'Bâtiment — infrastructures sportives, hôtelières et commerciales',
    dateAnnonce: '2026-09-05',
    resume: "Le président du Conseil départemental de Kaolack a présenté le 5 septembre 2026 le projet « Kaolack Sport City », un programme évalué à 18 milliards FCFA incluant la modernisation du stade Lamine Coura Guèye (nouvelle tribune), une arena de sports de combat avec centre de formation, une zone commerciale et un hôtel 5 étoiles ; financement prévu via l'État, la Fédération Sénégalaise de Football et des partenaires institutionnels et privés, première réalisation (tribune du stade) visée pour janvier 2027.",
    lien: 'https://lesoleil.sn/actualites/economie/kaolack-lambitieux-projet-a-18-milliards-du-conseil-departemental/'
  },
  {
    id: 'sig_senegal_autoroute_dts_pool_bailleurs_plfr2026',
    titre: "Sénégal : le PLFR 2026 détaille le pool élargi de bailleurs de l'autoroute Dakar-Tivaouane-Saint-Louis (dont l'entrée de l'Arabie Saoudite)",
    bailleurOuSource: 'Pool multi-bailleurs (BAD, BADEA, BID, BIDC, BOAD, Fonds koweïtien, Fonds saoudien, Fonds OPEP) / État du Sénégal',
    pays: 'Sénégal',
    secteur: 'Génie civil — autoroute (200 km) et ouvrages connexes',
    dateAnnonce: '2026-09-18',
    resume: "Le projet de loi de finances rectificative 2026, présenté le 18 septembre 2026 à l'Assemblée nationale, détaille le financement désormais bouclé de l'autoroute à péage Dakar-Tivaouane-Saint-Louis (200 km, ~800 M$ au total) par un pool élargi de bailleurs incluant BAD, BADEA, BID, BIDC, BOAD et des fonds koweïtien et saoudien ; plusieurs lots de construction sont déjà attribués tandis que d'autres sections restent à lancer — corridor à surveiller pour des lots de travaux connexes (raccordements, assainissement, péages).",
    lien: 'https://www.topnews.sn/autoroute-dakar-tivaouane-saint-louis-le-financement-dun-montant-de-156-milliards-acquis/'
  },
  {
    id: 'sig_senegal_muctat_milan_logement_35mdeur',
    titre: "Sénégal : le MUCTAT décroche 3,5 milliards d'euros d'investissements pour le logement et les villes nouvelles (convention signée à Milan)",
    bailleurOuSource: 'MUCTAT (Ministère du Renouveau urbain, de l\'Habitat et du Cadre de vie) / IDA International Group / Fondation THESAN',
    pays: 'Sénégal',
    secteur: 'Bâtiment — logement, écoquartiers, villes nouvelles',
    dateAnnonce: '2026-09-22',
    resume: "À l'issue d'une mission européenne (Milan, Lille, Paris, 9-15 septembre 2026) conduite par le ministre Moussa Bala Fofana, le MUCTAT a signé à Milan une convention d'investissement de 3,5 milliards d'euros sur 7 ans avec IDA International Group et la Fondation THESAN pour le logement, les écoquartiers et les villes nouvelles ; un projet pilote de 50 millions d'euros doit être activé immédiatement, pour un objectif affiché de 110 000 logements sur environ 35 000 hectares.",
    lien: 'https://lesoleil.sn/actualites/economie/senegal-le-muctat-en-europe-pour-attirer-des-milliards-deuros-dans-le-logement-et-les-villes-nouvelles/'
  },
  {
    id: 'sig_ci_bm_open_days_portefeuille_25projets',
    titre: "Côte d'Ivoire-Banque mondiale : portefeuille actif de plusieurs milliards $ pour 25 projets stratégiques, objectif de décaissement 32-40% en 2026-2027",
    bailleurOuSource: "Groupe Banque mondiale (Open Days Abidjan) / Ministre de la Communication Amadou Coulibaly",
    pays: "Côte d'Ivoire",
    secteur: 'Génie civil / infrastructures — portefeuille multisectoriel (infrastructures, développement urbain, eau/assainissement, énergie)',
    dateAnnonce: '2026-09-21',
    resume: "Lors de l'ouverture de la 1ère édition des « Open Days » du Groupe Banque mondiale à Abidjan (21 septembre 2026), le gouvernement ivoirien a annoncé un portefeuille actif de 25 projets stratégiques financés par la Banque mondiale (fin exercice 2025-2026), avec un objectif de décaissement de 32 à 40% pour l'exercice 2026-2027, en lien avec le PND 2026-2030 ; le montant cumulé diffère selon les sources (5,3 Md$ chez Financial Afrik, 6,3 Md$ chez Alwihda Info/People's Daily) et reste à confirmer auprès de la source primaire Banque mondiale.",
    lien: 'https://www.alwihdainfo.com/cote-divoire-banque-mondiale-un-portefeuille-actif-de-6-3-milliards-de-dollars-pour-25-projets-strategiques/'
  },
  {
    id: 'sig_senegal_relance_psd_2000km_dubai',
    titre: "Sénégal : relance du Programme Spécial de Désenclavement (PSD) — 2 000 km de routes, mission ministérielle à Dubaï",
    bailleurOuSource: "Ministère des Infrastructures et des Transports terrestres et aériens (Déthié Fall) / groupe Innovo (ex-ASGC, Émirats Arabes Unis)",
    pays: 'Sénégal',
    secteur: 'Génie civil / VRD — désenclavement routier',
    dateAnnonce: '2026-09-23',
    resume: "Le ministre sénégalais des Infrastructures a conduit une délégation à Dubaï pour acter la relance du Programme Spécial de Désenclavement (PSD), portant sur la construction et la réhabilitation de 2 000 km de routes et voiries, avec l'objectif de mobiliser plus de 60 entreprises sénégalaises du BTP et de générer plus de 55 000 emplois directs et indirects ; démarrage des travaux visé pour février 2027, le schéma de financement devant être finalisé lors d'une réunion prévue prochainement à Londres — pas encore d'appel d'offres formel, mais pipeline à fort potentiel pour les entreprises locales de BTP.",
    lien: 'https://www.seneweb.com/fr/news/Diplomatie/relance-du-programme-special-de-desenclavement-le-ministre-dethie-fall-en-mission-a-dubai_n_505010.html'
  },
  {
    id: 'sig_mauritanie_maroc_rn4_nouakchott_nouadhibou',
    titre: "Mauritanie-Maroc : accord-cadre pour la réhabilitation et l'élargissement de la route Nouakchott-Nouadhibou (RN4, 480 km)",
    bailleurOuSource: "Royaume du Maroc (Ministère de l'Équipement et de l'Eau) / Mauritanie (Ministère de l'Équipement et des Transports) — coopération bilatérale",
    pays: 'Mauritanie',
    secteur: 'Génie civil — infrastructure routière',
    dateAnnonce: '2026-09-21',
    resume: "Le Maroc et la Mauritanie ont signé à Rabat un accord-cadre pour la réhabilitation et l'élargissement de la Route Nationale n°4 (480 km) reliant Nouakchott à Nouadhibou, prévoyant développement, entretien et renforcement de la coordination bilatérale sur ce corridor ; projet distinct des programmes Nouakchott phase 2 et Dakhlet Nouadhibou déjà suivis, financement non encore chiffré et pas encore mis en appel d'offres.",
    lien: 'https://www.infomediaire.net/maroc-mauritanie-rehabilitation-route-nouakchott-nouadhibou/'
  }
];
