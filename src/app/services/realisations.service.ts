import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// export class SharedService {
export class RealisationsService {
  realisations = [
    {
      id: 10,
      thumbnail: 'sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg',
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
      ],
      tags: [
        'perso'
      ],
      insideLinks: ['https://madeleinebourdon.fr']
    },
    {
      id: 9,
      thumbnail: 'assistant-rgaa-thumbnail.jpg',
      title: 'Extension de navigateur "Assistant RGAA 4.1"',
      date: 2021,
      interventions: [
        'Maintenance'
      ],
      description: [
        'Dans le cadre de mon travail chez Compéthance, j\'ai été amenée à travailler sur l\'extension de navigateur "Assistant RGAA 4.1", qui a pour but d\'aider à la réalisation d\'audits d\'accessibilité numérique sous la norme RGAA 4.1 (qui correspond à la norme française actuelle, demandée aux grandes entreprises et aux administrations publiques). On peut y tester l\'ensemble des critères du référentiel sur la page où l\'on se trouve.',
        'Une autre extension open-source de ce type était déjà disponible, mais elle prenait en compte le RGAA 3. Mon travail a été de comparer les différences et de proposer de nouveaux tests automatisés, tout en veillant à leur bon fonctionnement.'
      ],
      tags: [
        'pro'
      ],
      customLinks: [
        [
          {
            icon: 'fab fa-firefox-browser',
            text: 'Voir l\'extension Firefox',
            url: 'https://addons.mozilla.org/fr/firefox/addon/comp%C3%A9thance-assistant-rgaa-4-1/',
            btnClass: 'btn btn-orange'
          },
          {
            icon: 'fab fa-chrome',
            text: 'Voir l\'extension Chrome',
            url: 'https://chrome.google.com/webstore/detail/comp%C3%A9thance-assistant-rga/oghdikaepecoiejflgkminkaallldcjj',
            btnClass: 'btn btn-blue'
          }
        ]
      ]
    },
    {
      id: 8,
      thumbnail: 'luviana.png',
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
        'Nous avons décidé de nous limiter à la page d\'accueil, car le but n\'était pas de créer un nouveau thème, mais bien de prendre le framework en main.'
      ],
      tags: [
        'perso'
      ]
    },
    {
      id: 7,
      thumbnail: 'json-reader.png',
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
        'J\'ai toujours souhaité faire en sorte que les termes et références de cet outil soient le plus général possible, pour qu\'il puisse s\'adapter à de nombreuses situations. J\'aimerais rendre cet outil public au long terme, mais ce n\'est pas encore le cas.'
      ],
      tags: [
        'perso'
      ]
    },
    {
      id: 6,
      thumbnail: 'prith.png',
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
        'Le site est articulé en pages composées de modules complètement personnalisables, offrant de grandes possibilités de personnalisation au client.',
        'J\'ai d\'abord été chargée de découper certains modules en restant le plus fidèle possible à la maquette graphique, puis de  m\'assurer que le site s\'afficheait correctement sur toutes les tailles d\'écran. Ensuite, je me suis assurée que le mode contrasté était conforme sur l\'ensemble du site et enfin, j\'ai assuré la maintenance corrective.'
      ],
      tags: [
        'pro'
      ],
      outsideLinks: ['https://prith-hauts-de-france.org/']
    },
    {
      id: 5,
      thumbnail: 'compethance.jpg',
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
      tags: [
        'pro'
      ],
      outsideLinks: ['https://compethance.fr']
    },
    {
      id: 4,
      thumbnail: 'eloca-ebailleur.jpg',
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
        'Au cours de mon stage chez Compéthance, j\'ai pu travailler sur e-loca et e-bailleur, qui sont 2 éléments d\'un même système de gestion de location par Sergic.',
        'e-loca permet aux locataires d’accéder au détail de leur compte personnel, à l’ensemble de leurs documents et à toutes les  informations concernant leur location. Elle permet également de communiquer avec son gestionnaire et de signaler un problème ou un sinistre.',
        'e-bailleur correspond à l\'autre côté du mécanisme, en permettant au bailleur d\'accéder à son solde, aux signalements sur ses différentes propriétés, à la messagerie et à divers documents.',
        'Ces deux parties sont disponibles à la fois en application smartphone / tablette et à la fois en version web.',
        'C\'est sur la partie application que j\'ai travaillé, en utilisant le framework Ionic. Sous la supervision d\'un collègue expérimenté, j\'ai été chargée de découper et de commencer l\'intégration des maquettes fournies par Sergic.'
      ],
      tags: [
        'pro'
      ],
      customLinks: [
        [
          {
            icon: 'fab fa-google-play',
            text: 'Voir e-loca sur Google Play',
            url: 'https://play.google.com/store/apps/details?id=com.sergic.eloca',
            btnClass: 'btn btn-cyan'
          },
          {
            icon: 'fab fa-app-store',
            text: 'Voir e-loca sur l\'App Store',
            url: 'https://apps.apple.com/app/e-loca/id1488630952',
            btnClass: 'btn btn-cyan'
          }
        ],
        [
          {
            icon: 'fab fa-google-play',
            text: 'Voir e-bailleur sur Google Play',
            url: 'https://play.google.com/store/apps/details?id=com.sergic.ebailleur',
            btnClass: 'btn btn-indigo'
          },
          {
            icon: 'fab fa-app-store',
            text: 'Voir e-bailleur sur l\'App Store',
            url: 'https://apps.apple.com/app/e-bailleur/id1487935207',
            btnClass: 'btn btn-indigo'
          }
        ]
      ]
    },
    {
      id: 3,
      thumbnail: 'atul-vinayak-znXGn3heBsw-unsplash.jpg',
      title: 'Legend of Dysmodia',
      date: 2018,
      interventions: [
        'Conception',
        'Design',
        'Découpage',
        'Intégration'
      ],
      description: [
        'À la fin de ma formation "Développeur Intégrateur Web et Mobile" chez Webforce 3, il nous a été demandé de présenter un projet en groupe de 4.','Nous avons choisi de présenter Legend of Dysmodia, site d\'un jeu RPG en ligne. Celui-ci tournait sur Symfony avec Bootstrap 4, tandis que le jeu était basé sur Phaser.',
        'Le site comportait une connexion utilisateur (soit par une combinaison adresse email / mot de passe, soit par Facebook Connect) et sa réinitialisation de mot de passe associée, une page de jeu, une page de guide, une page de meilleurs scores et une page de contact.',
        'J\'avais été à l\'origine du design du site et j\'avais donc assuré son apparence sur une grosse partie du contenu. J\'avais également été en charge du formulaire de réinitialisation de mot de passe et des mails envoyés par celui-ci. De plus, nous avons tous effectué un important travail de veille, car alors que nous avions étudié Symfony en cours, Phaser était complètement nouveau pour nous, tout en représentant une partie essentielle du site.'
      ],
      tags: [
        'ecole'
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
      description: [
        'Au cours de mes études "Développeur Intégrateur Web et Mobile", il nous a été demandé de créer le site d\'un évènement, avec la contrainte que celui-ci devrait être en one-page (c\'est-à-dire que l\'intégralité du site peut être parcourue en défilant sur une seule même page).',
        'J\'ai choisi de présenter un évènement lié aux pluies de météores.',
        'Le site comportait une image d\'introduction, une section de présentation, un programme, comment accéder à l\'évènement (grâce à Google Maps), et enfin, comment contacter les organisateurs.'
      ],
      tags: [
        'ecole'
      ],
      technos: [
        'HTML',
        'CSS',
      ]
    },
    {
      id: 1,
      thumbnail: 'Caesar1.jpg',
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
      tags: [
        'ecole'
      ],
      technos: [
        'HTML',
        'CSS',
        'Bootstrap'
      ]
    }
  ];

  constructor() {
    // console.log('[shared.service.ts] launched')
  }
}
