export const introTemplates = [
  "Vous recherchez un {{service}} qualifié à {{ville}} ({{cp}}) ? {{entreprise}}, artisan certifié Qualigaz basé à Chatou, intervient rapidement {{dans_la_ville}}.",
  "Besoin d'un {{service}} en urgence à {{ville}} ? Notre équipe, implantée à quelques kilomètres de {{ville}}, assure une réactivité optimale sur tout le {{departement}}.",
  "{{ville}} et ses {{population}} habitants peuvent compter sur {{entreprise}} pour tous leurs travaux de {{service}}. Qualigaz et disponible 24h/24.",
  "À {{ville}} ({{cp}}), {{entreprise}} met son expertise de {{service}} à votre service. Depuis notre base de Chatou, nous couvrons l'ensemble du {{departement}} avec une réponse rapide.",
  "Intervention de {{service}} à {{ville}} : {{entreprise}} propose des solutions sur mesure pour les particuliers et les professionnels. Devis gratuit et travail garanti.",
  "La commune de {{ville}}, située dans les {{departement}}, bénéficie de l'expertise de {{entreprise}} en matière de {{service}}. Intervention rapide, tarifs transparents.",
  "Pour tous vos besoins en {{service}} à {{ville}} et aux alentours, faites confiance à {{entreprise}}. Certifié Qualigaz, nous garantissons un travail conforme aux normes en vigueur.",
  "{{entreprise}} intervient à {{ville}} ({{cp}}) pour tous types de travaux de {{service}}. Que vous soyez en centre-ville ou en zone pavillonnaire, nous nous adaptons à votre configuration.",
  "Artisan {{service}} à {{ville}} : {{entreprise}} combine expertise technique et proximité géographique pour vous offrir le meilleur service. Basés à Chatou, à {{distance}} km de {{ville}}.",
  "Votre {{service}} de confiance à {{ville}}. {{entreprise}} intervient dans les meilleurs délais pour l'installation, l'entretien ou le dépannage de vos équipements.",
  "{{ville}} mérite un service de {{service}} professionnel et réactif. C'est exactement ce que propose {{entreprise}}, avec une équipe disponible 7 jours sur 7.",
  "La densité de {{ville}} ({{densite}} hab/km²) nécessite une expertise pointue en {{service}}. {{entreprise}} maîtrise les spécificités des logements {{type_logement}} de la commune.",
  "{{entreprise}} : votre expert {{service}} à {{ville}}. Nous connaissons parfaitement le territoire du {{departement}} et ses particularités techniques.",
  "Recherche d'un {{service}} sérieux à {{ville}} ({{cp}}) ? {{entreprise}} est référencé et certifié. Nos clients du {{departement}} nous recommandent pour notre professionnalisme.",
  "Du dépannage d'urgence à l'installation complète, {{entreprise}} couvre tous vos besoins en {{service}} à {{ville}} et dans les communes voisines.",
];

export const contextTemplates = [
  "Avec une population de {{population}} habitants répartie sur {{superficie}} km², {{ville}} est une commune {{type_description}} des {{departement}}.",
  "{{ville}} s'étend sur {{superficie}} km² et accueille {{population}} résidents. Sa densité de {{densite}} hab/km² en fait une commune {{type_description}}.",
  "Cette commune des {{departement}}, comptant {{population}} habitants, offre un cadre de vie {{type_description}} apprécié de ses résidents.",
];

export const interventionTemplates = [
  "Basés au 57 Boulevard de la République à Chatou, nous sommes à {{distance}} km de {{ville}}. Temps d'intervention estimé : {{temps}} minutes.",
  "Notre siège à Chatou nous permet d'intervenir à {{ville}} en {{temps}} minutes en moyenne. Distance : {{distance}} km.",
  "À seulement {{distance}} km de Chatou, {{ville}} bénéficie d'une réactivité optimale. Comptez {{temps}} minutes pour notre arrivée sur place.",
];

export const voisinTemplates = [
  "Nous intervenons également à {{voisin1}}, {{voisin2}} et {{voisin3}}.",
  "Notre zone de couverture inclut {{voisin1}}, {{voisin2}} et les communes environnantes.",
  "Les communes voisines de {{ville}} comme {{voisin1}} et {{voisin2}} font également partie de notre secteur d'intervention.",
];

export const logementTemplates: Record<string, string[]> = {
  urbain_dense: [
    "Avec une densité élevée de {{densite}} hab/km², {{ville}} compte majoritairement des immeubles collectifs. Notre expertise en {{service}} s'adapte aux contraintes techniques des appartements et des chaufferies collectives.",
    "La configuration urbaine dense de {{ville}} implique des installations souvent complexes. Nous maîtrisons les spécificités des réseaux collectifs et des gaines techniques.",
  ],
  urbain: [
    "{{ville}} offre un mix de logements individuels et collectifs. Nous proposons des solutions de {{service}} adaptées aux maisons comme aux appartements.",
    "Que vous habitiez une maison ou un appartement à {{ville}}, nos prestations de {{service}} sont pensées pour votre configuration.",
  ],
  periurbain: [
    "En périphérie de {{ville}}, de nombreuses maisons individuelles nécessitent des solutions de {{service}} spécifiques. Nous installons et entretenons tous types d'équipements.",
    "Le caractère résidentiel de {{ville}} favorise les installations de {{service}} autonomes. Nous conseillons les systèmes les plus adaptés à votre habitat.",
  ],
  rural: [
    "Dans ce cadre {{type_description}}, les habitations de {{ville}} nécessitent souvent des solutions de {{service}} adaptées aux maisons individuelles et aux bâtiments anciens.",
    "{{ville}}, avec son cadre {{type_description}}, accueille de nombreuses maisons nécessitant une expertise en {{service}} pour les bâtiments anciens et les extensions récentes.",
  ],
};

export const faqTemplates = [
  {
    q: "Quel est le tarif d'un dépannage {{service}} à {{ville}} ?",
    a: "Le coût d'un dépannage à {{ville}} dépend de la nature de l'intervention et de l'urgence. Nous établissons un devis transparent avant chaque intervention. Pas de frais cachés.",
  },
  {
    q: "Quel délai d'intervention pour un {{service}} à {{ville}} ?",
    a: "Basés à Chatou, à {{distance}} km de {{ville}}, nous intervenons en moyenne en {{temps}} minutes pour les urgences. Pour les rendez-vous programmés, nous nous adaptons à vos disponibilités.",
  },
  {
    q: "Intervenez-vous dans tout {{ville}}, y compris les quartiers {{type_quartier}} ?",
    a: "Oui, nous couvrons l'ensemble de {{ville}} et ses différents quartiers. Quelle que soit votre localisation dans la commune, nous assurons un déplacement rapide.",
  },
  {
    q: "La certification Qualigaz est-elle obligatoire pour un {{service}} à {{ville}} ?",
    a: "Oui, toute intervention sur une installation gaz doit être réalisée par un professionnel certifié Qualigaz. Cette certification garantit la sécurité et la conformité de vos équipements.",
  },
  {
    q: "Proposez-vous des solutions de {{service}} éco-responsables à {{ville}} ?",
    a: "Absolument. Nous proposons des équipements performants et économes en énergie, adaptés aux besoins des habitants de {{ville}} et aux exigences environnementales actuelles.",
  },
  {
    q: "Comment savoir si j'ai besoin d'un {{service}} à {{ville}} ?",
    a: "Si vous constatez une fuite, une perte de pression, un bruit anormal ou une surconsommation, contactez-nous. Nous réalisons un diagnostic complet à {{ville}} pour identifier le problème.",
  },
];
