import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  formationsList = [
    {
      date: {
        unique: 'Mai 2019'
      },  
      poste: 'Certification "Maîtrise de la qualité en projet Web" - 905/1000',
      compagnie: {
        nom: 'Opquast',
        url: 'https://directory.opquast.com/fr/certificat/2RHICV/'
      },
      description: [
        'Dans le cadre de mon poste chez Compéthance, j\'ai passé cette certification en mai 2019, qui exprime à quel point quelqu\'un est capable de suivre les normes Opquast. Celles-ci visent à produire un site de qualité, c\'est-à-dire que l\'utilisateur en soit complètement satisfait, du référencement jusqu\'au service après-vente.',
        'J\'ai obtenu la note de 905 sur 1000, ce qui correspond d\'après Opquast à "Maîtrise complète des règles qualité Web et du vocabulaire associé. Niveau d\'expertise suffisant pour devenir référent et formateur sur la qualité Web."'
      ]
    },
    {
      date: {
        debut: 'Septembre 2018',
        fin: 'Décembre 2018'
      },  
      poste: 'Formation "Développeur intégrateur web et mobile"',
      compagnie: {
        nom: 'Webforce 3',
        url: 'https://www.wf3.fr/',
        ville: 'La Madeleine'
      },
      description: [
        'Confrontée à la réalité du marché par rapport aux carrières dans les langues, j\'ai décidé d\'entamer une reconversion vers le développement web, qui constituait un autre de mes centres d\'intérêt.',
        'J\'ai intégré la formation "Développeur intégrateur web et mobile" de Webforce 3, qui durait 3 mois et demi et donnait un diplôme BAC+2 à la sortie.',
        'Au cours de cette formation, nous y avons étudié le développement front-end et back-end en quantité égales. Nous y avons également abordé Wordpress, Angular, Ionic et Symfony.',
        'En fin de formation, nous avons dû réaliser un projet en groupe. Celui sur lequel j\'ai travaillé, Legend of Dysmodia, était réalisé en Symfony 4 couplé à Phaser 3 (que nous n\'avions pas vu en cours).'
      ]
    },
    {
      date: {
        debut: 'Septembre 2013',
        fin: 'Juin 2016'
      },  
      poste: 'Licence "Langues, Littératures et Civilisations Étrangères", spécialité Japonais',
      compagnie: {
        nom: 'Lille III',
        url: 'https://www.univ-lille.fr/',
        ville: 'Villeneuve d\'Ascq'
      },
      description: [
        'Convaincue de mon intérêt pour le Japonais, j\'ai décidé de prolonger ce que j\'avais commencé au lycée en rejoignant la licence Langues, Littératures et Civilisations Étrangères de l\'université Lille III. En plus de la langue, j\'ai pu y étudier la culture japonaise, avec notamment son histoire et sa littérature.'
      ]
    },
    {
      date: {
        unique: 'Juin 2011'
      },  
      poste: 'Bac Économique et Social, options Anglais Euro et Japonais',
      compagnie: {
        nom: 'Lycée Européen Montebello',
        url: 'https://montebello.enthdf.fr/',
        ville: 'Lille'
      },
      description: [
        'Passionnée de langues, j\'ai tenu à ajouter à mon bac Économique et Social des options Anglais Euro (c\'est-à-dire des cours avec un niveau d\'anglais plus soutenu, plus 1h par semaine de matières générales intégralement en anglais) et Japonais.'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
