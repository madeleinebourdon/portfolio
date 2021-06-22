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
        fin: 'Avril 2021'
      },  
      poste: 'Développeuse web et mobile',
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
        fin: 'Mai 2019'
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
    }
  ]
  
  constructor() {
  }
  
  ngOnInit() {
  }
}
