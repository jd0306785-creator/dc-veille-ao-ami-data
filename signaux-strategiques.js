// Signaux stratégiques BTP — annonces de financement, projets en préparation, nouveaux
// bailleurs actifs, pas encore des AO/AMI formels. Synchronisé automatiquement (routine
// quotidienne). Faits publics uniquement, résumés factuels.
const SIGNAUX_META = {
  derniereMiseAJour: '2026-08-09',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const SIGNAUX = [
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
  }
];
