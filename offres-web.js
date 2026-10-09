// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-10-09',
  modeMiseAJour: 'automatique (routine quotidienne 7h)'
};

const OFFRES_WEB = [
  {
    id: 'petrosen_diamniadio_renovation_base_2026',
    titre: "Travaux de rénovation du mur de clôture, manutention de conteneurs-bureaux et raccordement électrique — Base PETROSEN de Diamniadio (AO n° T-PETROSEN HOLDING SA-097)",
    client: 'PETROSEN Holding SA',
    type: 'AO',
    secteur: 'Bâtiment / VRD — clôture, manutention, raccordement électrique',
    pays: 'Sénégal (Diamniadio)',
    tier: 'A',
    quickWin: true,
    quickWinNote: 'Lot unique, périmètre réduit sur un seul site (clôture + manutention + raccordement électrique), garantie de soumission faible (2 M FCFA) signe une exécution courte, maître d\'ouvrage à ressources propres',
    source: 'Avis général marchespublics.sn — relayé par Pi Business Info, Business-Senegal',
    lien: 'https://www.pibusinessinfo.com/appel_offre/avis-appels-offres-petrosen-renovation-base-diamniadio/',
    deadline: '2026-10-20'
  }
];
