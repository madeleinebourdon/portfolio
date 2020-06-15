import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiencesList = [
    {
      date: {
        debut: 'Juin 2019',
        fin: 'aujourd\'hui'
      },  
      poste: 'Développeur web et mobile',
      compagnie: {
        nom: 'Compéthance',
        url: 'https://compethance.fr',
        ville: 'Villeneuve d\'Ascq'
      },
      description: [
        'Mission principalement front-end.',
        'Découpage de maquette, corrections graphiques, pré-traitement de sites clients pour y intégrer Facil\'Iti, corrections d\'accessibilité.'
      ]
    },
    {
      date: {
        debut: 'Janvier 2019',
        fin: 'mai 2019'
      },  
      poste: 'Stage de développement web',
      compagnie: {
        nom: 'Compéthance',
        url: 'https://compethance.fr',
        ville: 'Villeneuve d\'Ascq'
      },
      description: [
        'Application du contenu de ma formation à la vie en entreprise.',
        'Découpage et intégration de maquettes, corrections graphiques, découverte de l\'accessibilité numérique.'
      ]
    },
    {
      date: {
        debut: 'Septembre 2018',
        fin: 'décembre 2018'
      },  
      poste: 'Formation de développeur intégrateur web et mobile',
      compagnie: {
        nom: 'Webforce 3',
        url: 'https://www.wf3.fr/',
        ville: 'La Madeleine'
      },
      description: [
        'Formation accélérée de 3 mois et demi, au cours de laquelle nous avons intégré les bases du développement, la programmation objet et aussi comment être efficace dans nos futures recherches.',
        'Nous avons évoqué aussi bien le front que le back, à mesures égales. Le projet de fin de formation de mon groupe était réalisé en Symfony 4, couplé à Phaser 3.'
      ]
    }
  ]
  
  constructor() {
  }
  
  ngOnInit() {
  }
}
