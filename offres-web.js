// Données de veille AO/AMI BTP — synchronisées automatiquement (routine quotidienne).
// Fichier volontairement allégé : uniquement des faits publics (titre, client, pays,
// type, tier, lien, échéance). Aucune analyse stratégique interne DC n'est publiée ici.
const OFFRES_WEB_META = {
  derniereMiseAJour: '2026-10-10',
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
    id: 'sones_reseau_eau_potable_kaolack_2026',
    titre: "Travaux de restructuration et de renforcement du réseau d'eau potable de la ville de Kaolack",
    client: 'SONES (Société Nationale des Eaux du Sénégal)',
    type: 'AO',
    secteur: 'VRD — adduction d\'eau potable',
    pays: 'Sénégal (Kaolack)',
    tier: 'B',
    quickWin: true,
    quickWinNote: "Travaux de réseau d'adduction d'eau potable en décomptes mensuels, lot unique probable sur le périmètre de Kaolack, cœur de métier VRD de DC ; délai de dépôt très court (5 jours) à surveiller",
    source: 'Pi Business Info — avis d\'appels d\'offres',
    lien: 'https://www.pibusinessinfo.com/avis-dappels-doffres/',
    deadline: '2026-10-15'
  }
];
