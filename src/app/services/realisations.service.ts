import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// export class SharedService {
export class RealisationsService {
  realisations = [
    {
      id: 10,
      thumbnail: 'placeholders/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg',
      title: 'Portfolio',
      date: 2021,
      interventions: [
        'Conception',
        'Design',
        'Découpage',
        'Intégration',
        'Accessibilité'
      ],
      technos: [
        'Angular',
        'HTML',
        'SCSS',
        'TypeScript',
        'JavaScript'
      ],
      description: [
        'Mon portfolio est le site sur lequel vous êtes en train de naviguer. Sa première version terminée est sortie en 2021, comportant une introduction, l\'essentiel de mon CV, une gallerie de mes réalisations et comment me contacter.',
        'J\'ai créé ce site par moi-même, sur Angular. Le fait de m\'occuper de ce projet de A à Z m\'a permis de voir le développement dans une approche générale et m\'a aidé à progresser sur de nombreux sujets, comme Angular, Bootstrap, SASS, mais aussi JavaScript en général.'
      ]
    },
    {
      id: 9,
      thumbnail: 'placeholders/assistant-rgaa-thumbnail.jpg',
      title: 'Extension de navigateur "Assistant RGAA 4.1"',
      date: 2021,
      interventions: [
        'Maintenance'
      ],
      description: [
        'Dans le cadre de mon travail chez Compéthance, j\'ai été amenée à travailler sur l\'extension de navigateur "Assistant RGAA 4.1", qui a pour but d\'aider à la réalisation d\'audits d\'accessibilité numérique sous la norme RGAA 4.1 (qui correspond à la norme française actuelle, demandée aux grandes entreprises et aux administrations publiques). On peut y tester l\'ensemble des critères du référentiel sur la page où l\'on se trouve.',
        'Une autre extension open-source de ce type était déjà disponible, mais elle prenait en compte le RGAA 3. Mon travail a été de comparer les différences et de proposer de nouveaux tests automatisés, tout en veillant à leur bon fonctionnement.'
      ],
      customLinks: [
        [
          {
            icon: 'fab fa-chrome',
            text: 'Extension pour Chrome',
            url: 'https://chrome.google.com/webstore/detail/comp%C3%A9thance-assistant-rga/oghdikaepecoiejflgkminkaallldcjj',
            btnClass: 'btn btn-primary'
          }
        ],
        [
          {
            icon: 'fab fa-firefox-browser',
            text: 'Extension pour Firefox',
            url: 'https://addons.mozilla.org/fr/firefox/addon/comp%C3%A9thance-assistant-rgaa-4-1/',
            btnClass: 'btn btn-primary'
          }
        ]
      ],
      linksDisclaimer: true
    },
    {
      id: 8,
      thumbnail: 'luviana-thumbnail.jpg',
      title: 'Luviana Hotel Resort',
      date: 2021,
      interventions: [
        'Découpage'
      ],
      technos: [
        'Vue.js',
        'HTML',
        'SCSS',
        'JavaScript'
      ],
      description: [
        'Dans une démarche de prise en main du framework Vue.js, J\'ai travaillé en groupe sur un projet qui consistait à partir d\'une maquette de thème Wordpress et de la découper de la façon la plus ressemblante possible.',
        'Nous avons décidé de nous limiter à la page d\'accueil, car le but n\'était pas de créer une copie du thème, mais bien de prendre en main le framework.'
      ],
      customLinks: [
        [
          {
            icon: 'fab fa-wordpress-simple',
            text: 'Voir le thème original',
            url: 'https://themes.getmotopress.com/luviana/?refmp',
            btnClass: 'btn btn-primary'
          }
        ]
      ],
      pictures: [
        {
          'url': 'luviana/luviana.jpg',
          'legend': 'Le morceau de page que j\'ai traité'
        },
      ]
    },
    {
      id: 7,
      thumbnail: 'json-reader-thumbnail.jpg',
      title: 'JSON Reader',
      date: 2021,
      interventions: [
        'Conception',
        'Découpage',
        'Intégration',
        'Accessibilité'
      ],
      technos: [
        'Angular',
        'Bootstrap',
        'HTML',
        'SCSS',
        'TypeScript'
      ],
      description: [
        'JSON Reader est un projet personnel que j\'avais d\'abord imaginé pour m\'améliorer professionnellement, mais que j\'utilise aujourd\'hui plutôt pour travailler le code de la route.',
        'En effet, comme son nom l\'indique, le site sert à afficher de façon détaillée une liste complexe, permettant de la séparer en catégories et de n\'en afficher qu\'une partie. Il est donc utile pour la relecture de prises de notes. Il permet également de copier du texte dans le presse-papier, ce qui peut parfois s\'avérer utile.',
        'Une partie "Options" est également prévue, permettant de sélectionner le JSON à lire et d\'afficher ou non certains éléments d\'interface.',
        'J\'ai toujours souhaité faire en sorte que les termes et références de cet outil soient le plus général possible, pour qu\'il puisse s\'adapter à de nombreuses situations.',
        'J\'aimerais rendre cet outil public au long terme, mais ce n\'est pas encore le cas.'
      ],
      pictures: [
        {
          'url': 'json-reader/json-reader-lecture-json.jpg',
          'legend': 'Exemple de page de lecture de fichier JSON'
        },
      ]
    },
    {
      id: 6,
      thumbnail: 'prith-thumbnail.jpg',
      title: 'PRITH Hauts-de-France',
      date: 2020,
      interventions: [
        'Découpage',
        'Intégration',
        'Accessibilité'
      ],
      technos: [
        'HTML',
        'SCSS',
        'WordPress'
      ],
      description: [
        'Dans le cadre de mon travail chez Compéthance, j\'ai participé, dans un premier temps, à la mise en accessibilité du site PRITH Hauts-de-France. Quelques mois plus tard, j\'ai également participé à sa refonte totale sur WordPress.',
        'Le site est articulé en pages composées de modules complètement personnalisables en back-office, offrant au client une expérience autonome.',
        'Lors de la refonte totale, j\'ai d\'abord été chargée de découper certains modules en restant le plus fidèle possible à la maquette graphique, puis de  m\'assurer que le site s\'afficheait correctement sur toutes les tailles d\'écran. Ensuite, je me suis assurée que le mode contrasté était conforme sur l\'ensemble du site et enfin, j\'ai assuré la maintenance corrective.'
      ],
      outsideLinks: ['https://prith-hauts-de-france.org/'],
      pictures: [
        {
          'url': 'prith/prith-accueil.jpg',
          'legend': 'Accueil'
        },
        {
          'url': 'prith/prith-employeur.jpg',
          'legend': 'Employeur'
        },
        {
          'url': 'prith/prith-guide-maintien-emploi.jpg',
          'legend': 'Guide du maintien dans l\'emploi'
        },
        {
          'url': 'prith/prith-evenements.jpg',
          'legend': 'Évènements'
        },
        {
          'url': 'prith/prith-resultats-recherche.jpg',
          'legend': 'Résultats de recherche'
        },
        {
          'url': 'prith/prith-popin-accessibilite.jpg',
          'legend': 'Options d\'accessibilté'
        },
        {
          'url': 'prith/prith-accueil-options-accessibilite.jpg',
          'legend': 'Accueil avec police dyslexique, contrastes augmentés et taille de police augmentée'
        },
      ]
    },
    {
      id: 5,
      thumbnail: 'compethance-thumbnail.jpg',
      title: 'Compéthance',
      date: 2019,
      interventions: [
        'Découpage',
        'Maintenance'
      ],
      technos: [
        'HTML',
        'SCSS',
        'JavaScript',
        'WordPress'
      ],
      description: [
        'Dans le cadre de mon travail chez Compéthance, j\'ai été amenée à participer à une refonte totale de leur site vitrine sur WordPress.',
        'J\'ai d\'abord été chargée de découper les maquettes de certaines pages, puis de mettre en commun l\'ensemble des pages du site pour leur donner la même identité graphique. J\'ai également été en charge du responsive et du mode contrasté, et enfin, j\'ai assuré la maintenance sur le back-office WordPress.'
      ],
      outsideLinks: ['https://compethance.fr'],
      pictures: [
        {
          'url': 'compethance/compethance-accueil.jpg',
          'legend': 'Accueil'
        },
        {
          'url': 'compethance/compethance-prestations.jpg',
          'legend': 'Nos prestations'
        },
        {
          'url': 'compethance/compethance-formations.jpg',
          'legend': 'Nos formations'
        },
        {
          'url': 'compethance/compethance-qui-sommes-nous.jpg',
          'legend': 'Qui sommes-nous ?'
        },
        {
          'url': 'compethance/compethance-contact.jpg',
          'legend': 'Contact'
        }
      ]
    },
    {
      id: 4,
      thumbnail: 'eloca-ebailleur-thumbnail.jpg',
      title: 'e-loca et e-bailleur',
      date: 2019,
      interventions: [
        'Découpage', 'Intégration'
      ],
      technos: [
        'Ionic',
        'HTML',
        'SCSS'
      ],
      description: [
        'Au cours de mon stage chez Compéthance, j\'ai pu travailler sur e-loca et e-bailleur, qui sont 2 éléments d\'un même système de gestion de location assuré par Sergic.',
        'e-loca permet aux locataires d’accéder au détail de leur compte personnel, à l’ensemble de leurs documents et à toutes les  informations concernant leur location. Elle permet également de communiquer avec son gestionnaire et de signaler un problème ou un sinistre.',
        'e-bailleur correspond à l\'autre côté du mécanisme, en permettant au bailleur d\'accéder à son solde, aux signalements sur ses différentes propriétés, à la messagerie et à divers documents.',
        'Ces deux parties sont disponibles à la fois en application smartphone / tablette et à la fois en version web.',
        'C\'est sur la partie application que j\'ai travaillé, en utilisant le framework Ionic. Sous la supervision d\'un collègue expérimenté, j\'ai été chargée de découper et de commencer l\'intégration des maquettes fournies par Sergic, tout en suivant un planning rigoureux défini par le client.'
      ],
      customLinks: [
        [
          {
            icon: 'fab fa-google-play',
            text: 'e-loca sur Google Play',
            url: 'https://play.google.com/store/apps/details?id=com.sergic.eloca',
            btnClass: 'btn btn-primary'
          },
          {
            icon: 'fab fa-app-store',
            text: 'e-loca sur l\'App Store',
            url: 'https://apps.apple.com/app/e-loca/id1488630952',
            btnClass: 'btn btn-primary'
          }
        ],
        [
          {
            icon: 'fab fa-google-play',
            text: 'e-bailleur sur Google Play',
            url: 'https://play.google.com/store/apps/details?id=com.sergic.ebailleur',
            btnClass: 'btn btn-primary'
          },
          {
            icon: 'fab fa-app-store',
            text: 'e-bailleur sur l\'App Store',
            url: 'https://apps.apple.com/app/e-bailleur/id1487935207',
            btnClass: 'btn btn-primary'
          }
        ]
      ],
      linksDisclaimer: true,
      pictures: [
        {
          'url': 'e-loca e-bailleur/e-loca-accueil1.jpg',
          'legend': 'Page d\'accueil de e-loca'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-compte1.jpg',
          'legend': 'Page "Mon compte" de e-loca'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-messages1.jpg',
          'legend': 'Page "Messages" de e-loca : Accueil'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-messages2.jpg',
          'legend': 'Page "Messages" de e-loca : Nouveau message (1/2) - Choisir le type'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-messages3.jpg',
          'legend': 'Page "Messages" de e-loca : Nouveau message (2/2) - Rédaction'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-messages4.jpg',
          'legend': 'Page "Messages" de e-loca : Conversation'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-signalements1.jpg',
          'legend': 'Page "Signalements" de e-loca : Accueil'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-signalements2.jpg',
          'legend': 'Page "Signalements" de e-loca : Détail d\'un signalement'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-signalements3.jpg',
          'legend': 'Page "Signalements" de e-loca : Nouveau signalement (1/3)'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-signalements4.jpg',
          'legend': 'Page "Signalements" de e-loca : Nouveau signalement (2/3)'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-signalements5.jpg',
          'legend': 'Page "Signalements" de e-loca : Nouveau signalement (3/3)'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-documents1.jpg',
          'legend': 'Page "Documents" de e-loca : Accueil'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-documents2.jpg',
          'legend': 'Page "Documents" de e-loca : Mes documents'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-documents3.jpg',
          'legend': 'Page "Documents" de e-loca : Détail d\'un document'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-documents4.jpg',
          'legend': 'Page "Documents" de e-loca : Attestations d\'entretien'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-documents5.jpg',
          'legend': 'Page "Documents" de e-loca : Mon assurance (non renseignée)'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-documents6.jpg',
          'legend': 'Page "Documents" de e-loca : Enregistrer mon assurance'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-documents7.jpg',
          'legend': 'Page "Documents" de e-loca : Mon assurance (renseignée)'
        },
        {
          'url': 'e-loca e-bailleur/e-loca-documents8.jpg',
          'legend': 'Page "Documents" de e-loca : Popin "En savoir plus"'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-accueil1.jpg',
          'legend': 'Page d\'accueil de e-bailleur'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-compte1.jpg',
          'legend': 'Page "Mon compte" de e-bailleur'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-messages1.jpg',
          'legend': 'Page "Messages" de e-bailleur : Accueil'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-messages2.jpg',
          'legend': 'Page "Messages" de e-bailleur : Nouveau message (1/2) - Choisir le type'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-messages3.jpg',
          'legend': 'Page "Messages" de e-bailleur : Nouveau message (2/2) - Rédaction'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-messages4.jpg',
          'legend': 'Page "Messages" de e-bailleur : Conversation'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-biens1.jpg',
          'legend': 'Page "Biens" de e-bailleur : Accueil'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-biens2.jpg',
          'legend': 'Page "Biens" de e-bailleur : Détail d\'un bien'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-biens3.jpg',
          'legend': 'Page "Biens" de e-bailleur : Détail d\'un(e) occupant(e)'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents1.jpg',
          'legend': 'Page "Documents" de e-bailleur : Accueil'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents2.jpg',
          'legend': 'Page "Documents" de e-bailleur : Mes documents'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents3.jpg',
          'legend': 'Page "Documents" de e-bailleur : Détail d\'un document'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents4.jpg',
          'legend': 'Page "Documents" de e-bailleur : Documents personnels'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents5.jpg',
          'legend': 'Page "Documents" de e-bailleur : Assurance - liste des biens'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents6.jpg',
          'legend': 'Page "Documents" de e-bailleur : Assurance propriétaire (non renseignée)'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents7.jpg',
          'legend': 'Page "Documents" de e-bailleur : Enregistrer mon assurance'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents8.jpg',
          'legend': 'Page "Documents" de e-bailleur : Assurance propriétaire (renseignée)'
        },
        {
          'url': 'e-loca e-bailleur/e-bailleur-documents9.jpg',
          'legend': 'Page "Documents" de e-bailleur : Popin "En savoir plus"'
        }
      ],
      tallPictures: true
    },
    {
      id: 3,
      thumbnail: 'placeholders/atul-vinayak-znXGn3heBsw-unsplash.jpg',
      title: 'Legend of Dysmodia',
      date: 2018,
      interventions: [
        'Conception',
        'Design',
        'Découpage',
        'Intégration'
      ],
      description: [
        'À la fin de ma formation "Développeur Intégrateur Web et Mobile" chez Webforce 3, il nous a été demandé de présenter un projet en groupe de 4.', 'Nous avons choisi de présenter Legend of Dysmodia, site d\'un jeu RPG en ligne. Celui-ci tournait sur Symfony avec Bootstrap 4, tandis que le jeu était basé sur Phaser.',
        'Le site comportait une connexion utilisateur (soit par une combinaison adresse email / mot de passe, soit par Facebook Connect) et sa réinitialisation de mot de passe associée, une page de jeu, une page de guide, une page de meilleurs scores et une page de contact.',
        'J\'avais été à l\'origine du design du site et j\'avais donc assuré son apparence sur une grosse partie du contenu. J\'avais également été en charge du formulaire de réinitialisation de mot de passe et des mails envoyés par celui-ci. De plus, nous avons tous effectué un important travail de veille, car alors que nous avions étudié Symfony en cours, Phaser était complètement nouveau pour nous, tout en représentant une partie essentielle du site.'
      ],
      technos: [
        'Symfony',
        'Phaser',
        'Bootstrap',
        'HTML',
        'CSS',
        'JavaScript',
        'PHP'
      ]
    },
    {
      id: 2,
      thumbnail: 'meteores-thumbnail.jpg',
      title: 'La nuit des météores',
      date: 2018,
      interventions: [
        'Conception',
        'Design',
        'Découpage',
        'Intégration'
      ],
      technos: [
        'HTML',
        'CSS',
      ],
      description: [
        'Au cours de mes études "Développeur Intégrateur Web et Mobile" chez Webforce 3, j\'ai eu l\'exercice de créer le site d\'un évènement, avec la contrainte que celui-ci devrait être en one-page (c\'est-à-dire que l\'intégralité du site peut être parcourue en défilant sur une seule page).',
        'J\'ai choisi de présenter un évènement lié aux pluies de météores.',
        'Le site comportait une image d\'introduction avec une vidéo de fond, une section de présentation, un programme avec la carte des boissons, comment y accéder (en utilisant l\'API de Google Maps), et enfin, comment contacter les organisateurs de l\'évènement.'
      ],
      pictures: [
        {
          'url': 'meteores/meteores1.jpg',
          'legend': 'Accueil'
        },
        {
          'url': 'meteores/meteores2.jpg',
          'legend': 'Présentation'
        },
        {
          'url': 'meteores/meteores3.jpg',
          'legend': 'Programme'
        },
        {
          'url': 'meteores/meteores4.jpg',
          'legend': 'Accès'
        },
        {
          'url': 'meteores/meteores5.jpg',
          'legend': 'Contact'
        },
      ]
    },
    {
      id: 1,
      thumbnail: 'cuisine-facile-thumbnail.jpg',
      title: 'Cuisine facile',
      date: 2018,
      interventions: [
        'Conception',
        'Design',
        'Découpage',
        'Intégration',
        'Référencement'
      ],
      description: [
        'Au cours de mes études "Développeur Intégrateur Web et Mobile", il nous a été demandé de créer une page de recette qui soit SEO friendly (c\'est-à-dire constituée de micro-données, pour faciliter le référencement).',
        'Souhaitant pousser l\'exercice alors que j\'avais terminé la partie référencement, j\'avais décidé de donner un design plus élaboré à la page. Voici le résultat final auquel je suis arrivée.'
      ],
      technos: [
        'HTML',
        'CSS',
        'Bootstrap'
      ],
      pictures: [
        {
          'url': 'cuisine facile/cuisine-facile.jpg',
          'legend': 'Accueil'
        }
      ]
    }
  ];

  constructor() {
    // console.log('[shared.service.ts] launched')
  }
}
