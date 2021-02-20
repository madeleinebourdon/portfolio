import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  completeTagsArray = []
  filtersCurrentlyChecked = []
  outputResults = []

  constructor(private titleService: Title, public shared: SharedService) {
    // console.log('portfolio')
    // console.log('[porfolio.component.ts] shared.realisations')
    console.log(shared.realisations)

    for (var i = 0; i < shared.realisations.length; i++) {
      // console.log('i: ' + i)
      // console.log(shared.realisations[i].interventions)

      if (shared.realisations[i].interventions) {
        // console.log(shared.realisations[i].interventions.length)

        for (let j = 0; j < shared.realisations[i].interventions.length; j++) {
          if (!this.completeTagsArray.includes(shared.realisations[i].interventions[j])) {
            this.completeTagsArray.push(shared.realisations[i].interventions[j])
            this.filtersCurrentlyChecked.push(shared.realisations[i].interventions[j]) // ils sont tous cochés par défaut
          }
          // console.log(shared.realisations[i].interventions[j])
        }
      }
    }

    // console.log(this.completeTagsArray)
    // this.outputResults = this.shared.realisations // pour visualiser l'array sans son tri, pour débugger

    this.initializeOutput(this.filtersCurrentlyChecked)
  }


  ngOnInit() {
    // if (this.filtersCurrentlyChecked = ['empty']) {
    //   this.filtersCurrentlyChecked.splice(0, 1)
    //   for (let i=0; i<this.completeTagsArray.length; i++) {
    //     this.filtersCurrentlyChecked.push(this.completeTagsArray[i])
    //   }
    // }
    // console.log(this.filtersCurrentlyChecked)
  }

  portfolioFiltersChanged(e) {
    console.log(e)
    let id = e.target.id.split('-')[1] - 1

    // console.log('tagsArray id: ' + id)
    // console.log(this.tagsArray)
    // console.log(this.tagsArray[id])

    // console.log(this.outputObject[0])

    // console.log(this.outputObject.filter(obj => { return obj.id === 1}))

    if (e.target.checked === true) {
      console.log('Now checked')

      // avant d'ajouter au tableau des filtres, vérifie si ce n'est pas un doublon
      let addFilterToArray: boolean

      for (let i = 0; i < this.filtersCurrentlyChecked.length; i++) {
        if (this.filtersCurrentlyChecked[i].includes(this.completeTagsArray[id])) {
          console.log('Already in array; no need to add')
          addFilterToArray = false
        }
      }

      if (addFilterToArray !== false) {
        this.filtersCurrentlyChecked.push(this.completeTagsArray[id])
      }
    } else {
      console.log('Now unchecked')

      this.filtersCurrentlyChecked.splice(this.filtersCurrentlyChecked.findIndex(filter => filter === this.completeTagsArray[id]), 1)
    }

    // console.log(this.filtersCurrentlyChecked)
    // console.log(this.completeTagsArray)

    this.initializeOutput(this.filtersCurrentlyChecked)
  }

  initializeOutput(filtersArray) {
    // console.log('initializeOutput()')
    console.log(filtersArray)


    for (let i = 0; i < this.shared.realisations.length; i++) {
      // console.log('[initializeOutput()] ' + i)
      
      if (this.shared.realisations[i].interventions) {
        console.log('==========')
        console.log(this.shared.realisations[i])
        console.log('Réalisation avec des interventions')
        var pushToOutput = false

        for (let j = 0; j < filtersArray.length; j++) {
          console.log('Filtre vérifié : "' + filtersArray[j] + '"')

          if (this.shared.realisations[i].interventions.includes(filtersArray[j])) {
            pushToOutput = true
            console.log(this.shared.realisations[i].interventions)
            console.log('contient')
            console.log(filtersArray[j])
          } else {
            console.log(this.shared.realisations[i].interventions)
            console.log('ne contient pas')
            console.log(filtersArray[j])
          }

          // vérifie que ce n'est pas déjà dans le tableau avant de push
          if (pushToOutput === true && !this.outputResults.includes(this.shared.realisations[i])) {
            console.log('à push')
            this.outputResults.push(this.shared.realisations[i])
          }

          
          // supprime du tableau si non pertinent
          // if (pushToOutput === false) {
            if (pushToOutput === false && this.outputResults.includes(this.shared.realisations[i])) {
              console.log('à supprimer')
              console.log('i: ' + i)
              // console.log(this.outputResults)
              // console.log(this.shared.realisations[i])
              
              // l'index dans this.outputResults de l'élément this.shared.realisations[i]
              this.outputResults.splice(this.outputResults.findIndex(filter => filter === this.shared.realisations[i]), 1)
            }

            if (pushToOutput) {
              console.log('[On affiche la réalisation]')
            } else {
              console.log('[On n\'affiche pas la réalisation]')
            }
          }
      }
    }
    // console.log(this.shared.realisations)
    console.log(this.outputResults)
  }
}
