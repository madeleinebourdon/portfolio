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
      id: 1,
      image: '',
      title: 'Nico Nico Calendar',
      description: 
      [
        'Duis ut lectus eros. Maecenas ullamcorper luctus tellus eu ultrices. Nulla lobortis massa id eros consectetur, nec blandit est tempor. Duis venenatis lacus purus, sit amet semper tellus laoreet in. ',
        'Vivamus laoreet lectus eu tortor accumsan, quis laoreet urna venenatis. Mauris risus diam, luctus nec porta faucibus, tincidunt a mauris. Mauris vitae tempus lacus. Vivamus a nisl a metus ullamcorper eleifend. Vestibulum ultricies massa ante, at maximus leo aliquam sed. Duis auctor venenatis cursus. Aliquam et enim lobortis, interdum magna sed, accumsan ante. '
      ],
      tags: [
        'perso',
        'wip'
      ]
    },
    {
      id: 2, 
      image: '',
      title: 'e-loca et e-bailleur',
      description:[
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In in massa leo. Nam nisl lectus, lacinia feugiat feugiat in, venenatis in lorem. Sed placerat scelerisque eleifend. ',
        'Morbi luctus nibh leo, ut feugiat augue laoreet imperdiet. Suspendisse in semper libero. Pellentesque nec tincidunt neque. Vestibulum vel nulla quis dui euismod tincidunt. Maecenas blandit, tellus ac consequat tristique, nulla sapien mollis eros, quis rhoncus sem nulla ac ex. Quisque vel tempor massa, sed dictum metus. Duis vitae consequat lacus. Mauris et aliquet sem, eu tempor nisl. Praesent non massa sodales lectus volutpat egestas non posuere purus. '
      ],
      tags: [
        'pro'
      ],
      techno: [
        'Ionic', 
        'Angular',
        'SCSS'
      ]
    },
    {
      id: 3,
      image: '',
      title: 'Compéthance',
      description:[
        'Integer varius lectus eu orci rhoncus, eleifend semper turpis iaculis. In mattis ex a nibh bibendum, vel euismod massa condimentum. Ut non nunc vitae velit hendrerit sagittis ut a sapien. Nulla tincidunt sit amet sapien at ullamcorper. Aliquam erat volutpat. Maecenas et rhoncus velit. Proin eget mi at nisi luctus pellentesque. Quisque sit amet metus sed sapien faucibus efficitur sed sed turpis. Duis consequat mi dolor, eget aliquam erat ultrices sit amet. Nullam lacinia eget lacus non placerat. '
      ],
      tags: [
        'pro'
      ]
    },
    {
      id: 4,
      image: '',
      title: 'Legend of Dysmodia',
      description:[
        'Paragraphe 1',
        'Paragraphe 2'
      ],
      tags: [
        'ecole'
      ],
      techno: [
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
