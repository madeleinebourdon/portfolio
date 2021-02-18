import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  newTitle = 'Réalisations | Madeleine Bourdon — Portfolio';
  
  realisations = [
    {
      id: 3,
      image: 'compethance.jpg',
      title: 'Compéthance',
      date: 2019,
      interventions: [
        'Découpage'
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
      id: 2,
      image: 'eloca-ebailleur.jpg',
      title: 'e-loca et e-bailleur',
      date: '2019',
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
      id: 1,
      image: '',
      title: 'Legend of Dysmodia',
      date: '2018',
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
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.newTitle);
  }

  ngOnInit() {
  }

}
