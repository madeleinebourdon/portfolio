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
      tags: [
        'perso'
      ]
    },
    {
      id: 10,
      thumbnail: 'kobu-agency-7okkFhxrxNw-unsplash.jpg',
      title: 'Extension de navigateur pour audit RGAA 4.1',
      date: 2021,
      interventions: [
        'Maintenance'
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
        'Intégration'
      ],
      technos: [
        'HTML',
        'Sass',
        'WordPress'
      ],
      tags: [
        'pro'
      ]
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
      ]
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
