import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// export class SharedService {
export class RealisationsService {
  realisations = [
    {
      id: 11,
      thumbnail: 'sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg',
      title: 'Portfolio',
      date: 2021,
      interventions: [
        'Conception',
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
        'J\'ai créé ce site par moi-même, sur Angular. Le fait de m\'occuper de ce projet de A à Z m\'a permis de voir le développement dans une approche générale et m\'a aidé à progresser sur de nombreux sujets, comme Angular, Bootstrap, la nouvelle mise à jour de SASS, mais aussi JavaScript en général.'
      ],
      tags: [
        'perso'
      ],
      insideLink: 'https://madeleinebourdon.fr'
    },
    {
      id: 10,
      thumbnail: 'kobu-agency-7okkFhxrxNw-unsplash.jpg',
      title: 'Extension de navigateur "Assistant RGAA 4.1"',
      date: 2021,
      interventions: [
        'Maintenance'
      ],
      description: [
        'Dans le cadre de mon travail chez Compéthance, j\'ai été amenée à travailler sur cette extension de navigateur. Celle-ci a pour but d\'aider à la réalisation d\'audits d\'accessibilité numérique sous la norme "RGAA 4.1" (laquelle correspond à la norme française actuelle, demandée aux grandes entreprises et aux administrations publiques).',
        'Une autre extension open-source de ce type était déjà disponible, mais elle prenait en compte le RGAA 3. Mon travail a été de comparer les différences et de proposer de nouveaux tests automatisés en cas de divergence.'
      ],
      tags: [
        'pro'
      ]
    },
    {
      id: 9,
      thumbnail: 'luviana.png',
      title: 'Luviana Hotel Resort',
      date: 2021,
      interventions: [
        'Découpage'
      ],
      technos: [
        'Vue.js'
      ],
      description: [
        'Dans une démarche de prise en main du framework Vue.js, j\'ai décidé de partir d\'une maquette de thème Wordpress et de la découper de la façon la plus ressemblante possible. J\'ai décidé de me limiter à la page d\'accueil, car pour moi, le but n\'était pas de créer un nouveau thème.'
      ],
      tags: [
        'perso'
      ]
    },
    {
      id: 8,
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
        'Angular'
      ],
      description: [
        'JSON Reader est un projet personnel que j\'avais d\'abord imaginé pour m\'améliorer professionnellement, mais que j\'utilise aujourd\'hui plutôt pour travailler le code de la route.',
        'En effet, comme son nom l\'indique, le site sert à afficher de façon détaillée une liste complexe, permettant de la séparer en catégories et de n\'en afficher qu\'une partie. Il permet également de copier du texte dans le presse-papier, ce qui peut s\'avérer utile dans certaines situations.',
        'J\'ai toujours souhaité faire en sorte que les termes et références de cet outil soient le plus général possible, pour qu\'il puisse s\'adapter à de nombreuses situations. J\'aimerais rendre cet outil public au long terme, mais ce n\'est actuellement pas le cas.'
      ],
      tags: [
        'perso'
      ]
    },
    {
      id: 7,
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
        'Sass',
        'WordPress'
      ],
      description: [
        'Dans le cadre de mon travail chez Compéthance, j\'ai participé, dans un premier temps, à la mise en accessibilité du site PRITH Hauts-de-France. Quelques mois plus tard, j\'ai également participé à sa refonte totale sur WordPress.',
        'J\'ai d\'abord été chargée de découper certains modules en restant le plus fidèle possible à la maquette graphique, puis de  m\'assurer que le site s\'afficheait correctement sur toutes les tailles d\'écran. Ensuite, je me suis assurée que le mode contrasté était conforme sur l\'ensemble du site et enfin, j\'ai assuré la maintenance corrective.'
      ],
      tags: [
        'pro'
      ],
      outsideLink: 'https://prith-hauts-de-france.org/'
    },
    {
      id: 6,
      thumbnail: 'bagus-hernawan-A6JxK37IlPo-unsplash.jpg',
      title: 'Application bancaire sur mobile',
      date: 2019,
      interventions: [
        'Découpage',
        'Maintenance'
      ],
      technos: [
        'Ionic',
        'HTML',
        'Sass',
        'JavaScript'
      ],
      description: [
        'Un projet annulé'
      ],
      tags: [
        'pro'
      ]
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
        'Sass',
        'JavaScript'
      ],
      description: [
        'Integer varius lectus eu orci rhoncus, eleifend semper turpis iaculis. In mattis ex a nibh bibendum, vel euismod massa condimentum. Ut non nunc vitae velit hendrerit sagittis ut a sapien. Nulla tincidunt sit amet sapien at ullamcorper. Aliquam erat volutpat. Maecenas et rhoncus velit. Proin eget mi at nisi luctus pellentesque. Quisque sit amet metus sed sapien faucibus efficitur sed sed turpis. Duis consequat mi dolor, eget aliquam erat ultrices sit amet. Nullam lacinia eget lacus non placerat. '
      ],
      tags: [
        'pro'
      ],
      outsideLink: 'https://compethance.fr'
    },
    {
      id: 4,
      thumbnail: 'eloca-ebailleur.jpg',
      title: 'e-loca et e-bailleur',
      date: 2019,
      interventions: [
        'Découpage',
        'Accessibilité'
      ],
      technos: [
        'Ionic',
        'Sass'
      ],
      description: [
        'e-loca et e-bailleur sont 2 éléments d\'un même système de gestion de location Sergic, qui existent à la fois en application pour smartphone ou tablette et en version web.',
        'e-loca permet aux locataires d’accéder au détail de leur compte personnel, à l’ensemble de leurs documents et à toutes les  informations concernant leur location. Elle permet également de communiquer avec son gestionnaire et de signaler un problème ou un sinistre.',
        'J\'ai été chargée de découper les maquettes fournies par Sergic et de les intégrer dans une application Ionic, qui devait comporter plusieurs paramètres d\'accessibilité.'
      ],
      liens: [
        [
          {
            texte: 'Google Play',
            url: 'https://play.google.com/store/apps/details?id=com.sergic.eloca'
          }
        ],
        [
          {
            texte: 'App Store',
            url: 'https://apps.apple.com/fr/app/e-loca/id1488630952'
          }
        ]
      ],
      tags: [
        'pro'
      ]
    },
    {
      id: 3,
      thumbnail: 'atul-vinayak-znXGn3heBsw-unsplash.jpg',
      title: 'Legend of Dysmodia',
      date: 2018,
      interventions: [
        'Conception',
        'Découpage',
        'Intégration'
      ],
      description: [
        'Paragraphe 1',
        'Paragraphe 2'
      ],
      tags: [
        'ecole'
      ],
      technos: [
        'Symfony',
        'Phaser',
        'Bootstrap'
      ]
    },
    {
      id: 2,
      thumbnail: 'meteores-thumbnail.jpg',
      title: 'La nuit des météores',
      date: 2018,
      interventions: [
        'Conception',
        'Découpage',
        'Intégration'
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
        'Découpage'
      ],
      tags: [
        'ecole'
      ],
      technos: [
        'HTML',
        'CSS',
      ]
    }
  ];

  constructor() {
    // console.log('[shared.service.ts] launched')
  }
}
