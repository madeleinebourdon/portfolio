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
      title: 'Nico nico calendar',
      description: 
      [
        'Site permettant de',
        'test'
      ]
    },
    {
      id: 2, 
      image: '',
      title: 'Titre 2',
      description:[
        'Paragraphe 1',
        'Paragraphe 2'
      ]
    },
    {
      id: 3,
      image: '',
      title: 'Titre 3',
      description:[
        'Paragraphe 1',
        'Paragraphe 2'
      ]
    },
    {
      id: 4,
      image: '',
      title: 'Titre 4',
      description:[
        'Paragraphe 1',
        'Paragraphe 2'
      ]
    },
    {
      id: 5,
      image: '',
      title: 'Titre 5',
      description:[
        'Paragraphe 1',
        'Paragraphe 2'
      ]
    }
  ];


  constructor(private titleService: Title) {
    this.titleService.setTitle(this.newTitle);
  }

  ngOnInit() {
  }

}
