import { Component, OnInit } from '@angular/core';

import { RealisationsService } from 'src/app/services/realisations.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  completeTagsObject = []          // every tag in the whole JSON, doubles removed
  filtersCurrentlyChecked = []    // list of checked tags
  outputResults = []              // array of results shown to user
  emptyResults: boolean           // checks if there are no search results to display
  fullFiltersTitlesDictionnary = {
    interventions: 'Type d\'intervention',
    technos: 'Technologie utilisée'
  }

  constructor(public realisationsService: RealisationsService) {
  }

  ngOnInit() {
    // console.log('[porfolio.component.ts] realisationsService.realisations')

    /* Auto load filters based on fullFiltersTitlesDictionnary's value */
    for (let i = 0; i < Object.keys(this.fullFiltersTitlesDictionnary).length; i++) {
      this.loadFilters(Object.keys(this.fullFiltersTitlesDictionnary)[i])
    }

    // this.outputResults = this.realisationsService.realisations // FOR DEBUGGING PURPOSES: displays the whole array instead of what is checked


    /* Everything is checked by default */
    // for (let i = 0; i < this.completeTagsObject.length; i++) {
    //   this.filtersCurrentlyChecked.push(this.completeTagsObject[i]) // copies the whole array
    // }
    this.filtersCurrentlyChecked = this.completeTagsObject.slice(0) // copies the whole array
    // this.filtersCurrentlyChecked = this.filtersCurrentlyChecked.concat(this.completeTagsObject) // copies the whole array
    /* somehow, when something is unchecked, it disappears from completeTagsObject too */
    /* It does not seem to come from this code, since it happens no matter the method */

    this.initializeOutput(this.filtersCurrentlyChecked)
  }


  /**
 *  Builds completeTagsObject (a list of search filters), based on the data provided by realisationsService and fullFiltersTitlesDictionnary
 * @param  {string} filterType Name of the filter that's being  requested
 **/
  loadFilters(filterType) {
    /* Go through each realisation in order to annex tags */
    for (let i = 0; i < this.realisationsService.realisations.length; i++) {
      /* Check parameter is working */
      if (this.realisationsService.realisations[i][filterType]) {
        /* Add to completeTagsObject if filterType is not already included */
        if (!this.completeTagsObject.find(item => item.name === filterType)) {
          this.completeTagsObject.push({ name: filterType, textContent: [] })
        }
      }
    }

    /* Once that categories names have been set, content info can be divided accordingly */
    /* Every realisation */
    for (let i = 0; i < this.realisationsService.realisations.length; i++) {
      /* If it has the filter asked */
      if (this.realisationsService.realisations[i][filterType]) {
        for (let j = 0; j < this.realisationsService.realisations[i][filterType].length; j++) {
          /* If this tag is not already in the array, add it */
          if (!this.completeTagsObject.find(item => item.name === filterType).textContent.find(item => item === this.realisationsService.realisations[i][filterType][j])) {
            this.completeTagsObject.find(item => item.name === filterType).textContent.push(this.realisationsService.realisations[i][filterType][j])
          }
        }

        /* Sort the filter array to keep it clean */
        this.completeTagsObject.find(item => item.name === filterType).textContent.sort()
      }
    }
  }


  /**
   *  Function that determines which search results should be sent back to the user.
   *  @param  {Array} filtersArray List of filters -- At least one in the filter array should match to be displayed
   **/
  initializeOutput(filtersArray) {
    console.log('initializeOutput()')
    console.log(filtersArray)
    /* For each realisation */
    for (let i = 0; i < this.realisationsService.realisations.length; i++) {
      let canBeDisplayed = false    // === "don't display by default"
      this.emptyResults = false     // Easier to find situations without results than situation with results

      // console.log(' ')
      // console.log(' ')

      // console.log('%cCurrently checked realisation object:', 'text-decoration: underline')
      // console.log(this.realisationsService.realisations[i])

      // console.log('Filters data:')
      for (let j = 0; j < filtersArray.length; j++) {
        // console.log(' ')
        // console.log('%cCurrent filter name, provided by input: "' + filtersArray[j].name + '", which has a value of', 'text-decoration: underline')
        // console.log(filtersArray[j].textContent)

        // console.log(' ')
        // console.log('%cData inside the currently checked realisation object:', 'text-decoration: underline')
        let checkedFiltersInThisCategory = this.realisationsService.realisations[i][filtersArray[j].name]
        if (checkedFiltersInThisCategory) {
          for (let k = 0; k < checkedFiltersInThisCategory.length; k++) {
            // console.log(checkedFiltersInThisCategory[k])
            // console.log('h')

            // console.log('chocolat')
            // console.log(filtersArray[j].textContent)
            // console.log(checkedFiltersInThisCategory[k])

            if (filtersArray[j].textContent.includes(checkedFiltersInThisCategory[k])) {
              canBeDisplayed = true
            }

            if (canBeDisplayed === true && !this.outputResults.includes(this.realisationsService.realisations[i])) {
              this.outputResults.push(this.realisationsService.realisations[i])
            }

            /* If the realisation doesn't belong in the array, but it is currently included inside, it should be removed */
            if (canBeDisplayed === false && this.outputResults.includes(this.realisationsService.realisations[i])) {
              /* Remove the item with the same index as this.realisationsService.realisations[i] */
              this.outputResults.splice(this.outputResults.findIndex(filter => filter === this.realisationsService.realisations[i]), 1)
            }
          }
        }

        /* If no results 
          This condition will need to be updated later, since it isn't the only possible case with several filters */
        /* the filter will never launch, 
          because even if there is nothing the category name is still sent, so the length will never be 0 */
        if (filtersArray.length === 0) {
          this.outputResults = []
          this.emptyResults = true // Displays the <div> "No result found"
        }
      }



      // let shortFilterNames = Object.keys(this.fullFiltersTitlesDictionnary)
      // for (let j = 0; j < shortFilterNames.length; j++) {
      //   console.log('Filtre "' + shortFilterNames[j] + '"')

      //   /* Each filter that has a long name */
      //   if (this.realisationsService.realisations[i][shortFilterNames[j]]) {
      //     console.log('Information fournies')
      //     console.log(this.realisationsService.realisations[i][shortFilterNames[j]])

      //     var canBeDisplayed = false    // === "don't display by default"
      //     this.emptyResults = false     // Easier to find situations without results than situation with results
      //   }

      // }

      //   console.log(filtersArray.filter(obj => {
      //     return obj.name === shortFilterNames[j]
      //   }))















      // if (this.realisationsService.realisations[i].interventions) {
      //   console.log(this.realisationsService.realisations[i].interventions)
      //   var canBeDisplayed = false    // === "don't display by default"
      //   this.emptyResults = false     // Easier to find situations without results than situation with results

      //   console.log(filtersArray)
      //   for (let j = 0; j < filtersArray.length; j++) {
      //     console.log(filtersArray.length)
      //     // console.log('Filter currently checked among its array: "' + filtersArray[j] + '"')

      //     if (this.realisationsService.realisations[i].interventions.includes(filtersArray[j])) {
      //       canBeDisplayed = true
      //       // console.log(this.realisationsService.realisations[i].interventions)
      //       // console.log('The above array contains "' + filtersArray[j] + '"')
      //     }

      //     /* Check that the realisation isn't already present in the array */
      //     if (canBeDisplayed === true && !this.outputResults.includes(this.realisationsService.realisations[i])) {
      //       this.outputResults.push(this.realisationsService.realisations[i])
      //     }

      //     /* If the realisation doesn't belong in the array, but it is currently included inside, it should be removed */
      //     if (canBeDisplayed === false && this.outputResults.includes(this.realisationsService.realisations[i])) {
      //       // console.log('This item should be removed')

      //       /* Remove the item with the same index as this.realisationsService.realisations[i] */
      //       this.outputResults.splice(this.outputResults.findIndex(filter => filter === this.realisationsService.realisations[i]), 1)
      //     }
      //   }

      //   /* When nothing's checked, the previous loop will occur 0 times, so the above code won't run.
      //   Since we know that nothing was selected, we can assume there will be 0 result anyway. */
      //   if (filtersArray.length === 0) {
      //     this.outputResults = []
      //     this.emptyResults = true // Displays the <div> "No result found"
      //   }
      // }
    }

    // console.log(this.realisationsService.realisations)
    // console.log(this.outputResults)
  }

  /**
   *  Function that changes the text of the "Show filters" button.
   **/
  toggleFiltersButton() {
    /* The function tries to synchronize itself with the aria-expanded attribute, to avoid unexpected results */
    if (document.querySelector('[data-target="#collapse-filters"]').attributes['aria-expanded'].value === "false") {
      document.getElementById('toggle-filters').innerText = 'Masquer les filtres'
    } else {
      document.getElementById('toggle-filters').innerText = 'Afficher les filtres'
    }
  }

  /**
   *  "Reset filters" - Sets the filters back to their default state (everything checked)
   **/
  resetFilters() {
    /* Change the array with checked items */
    this.filtersCurrentlyChecked = []
    for (let i = 0; i < this.completeTagsObject.length; i++) {
      this.filtersCurrentlyChecked.push(this.completeTagsObject[i])
    }

    /* Change the DOM accordingly */
    let filters = document.getElementsByClassName('portfolio-filters')[0].querySelectorAll('[type="checkbox"]')
    for (let i = 0; i < filters.length; i++) {
      (filters[i] as HTMLInputElement).checked = true
    }

    document.getElementById('reset-filters').setAttribute('disabled', '')
    this.initializeOutput(this.filtersCurrentlyChecked)
  }



  /**
   *  Function called when something is checked / unchecked in the filters list.
   *  @param  {object} e Indicates which filter changed state
   **/
  portfolioFiltersChanged(e) {
    console.log('portfolioFiltersChanged() : La racine du mal.')
    console.log(this.filtersCurrentlyChecked)
    let category = e.target.id.split('-')[0]
    console.log('Category name: ' + category)
    let id = e.target.id.split('-')[1] - 1
    console.log('Id in tagsArray: ' + id)

    if (e.target.checked === true) {
      /* Check if the filter does not already exist before adding it to the array of filters */
      let addFilterToArray: boolean

      for (let i = 0; i < this.filtersCurrentlyChecked.length; i++) {
        console.log(this.filtersCurrentlyChecked[i].textContent)
        if (this.filtersCurrentlyChecked[i].textContent.includes(this.completeTagsObject[id])) {
          console.log('No need to add to the array')
          addFilterToArray = false // Already in array; no need to add
        }
      }
      console.log(this.completeTagsObject)
      if (addFilterToArray !== false) {
        this.filtersCurrentlyChecked.push(this.completeTagsObject[id]) // Can be added to the array
      }

      // TODO: investigate if the above check is really useful. It could be removed to enhance performances. Testing would be needed.
    } else {
      console.log('Le splice est mauvais')
      // 1. find which filter group we're talking about
      console.log('Filters that were checked before:')
      console.log(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent)
      // this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent.splice(filter => filter === this.fullFiltersTitlesFunction(category), 1)
      // console.log('Category\'s full name is "' + this.fullFiltersTitlesFunction(category) + '"')
      // this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent.splice(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent.findIndex(filter => filter === this.fullFiltersTitlesFunction(category)), 1)
      // the splice function receives -1, so it deletes the last one, which is NOT what we want
      // console.log('This is supposed to be the index of what was checked')
      // console.log(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent)
      // console.log(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent[id])

      console.log('Index dans la catégorie : ' + id)
      console.log(this.filtersCurrentlyChecked)

      console.log('Il faut trouver à quelle catégorie appartient ce truc décoché.')
      console.log(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent[id])

      console.log('On a ses coordonnées pour le dégager')
      console.log(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent.slice(id, 1))
      console.log(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent)
      
      // this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent = this.arrayRemove(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent, this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent.slice(id, 1))



      //  this.filtersCurrentlyChecked = [{name: "interventions", textContent: ["perdu"]}, {name: "technos", textContent: ["encore perdu"]}]
      // console.log(this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent[id])


      // console.log(this.filtersCurrentlyChecked.findIndex(filter => filter.name === category))
      // let indexIn = this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)
      // this.filtersCurrentlyChecked[0].textContent = ['Banane', 'Abricot']
      // this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent.splice((this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent.findIndex(filter => filter === this.filtersCurrentlyChecked[this.filtersCurrentlyChecked.findIndex(filter => filter.name === category)].textContent[id])), 1)

      console.log(this.filtersCurrentlyChecked)
      console.log(this.completeTagsObject)

      // the inputs disappear if they are unchecked, somehow changes on filtersCurrentlyChecked are reflected on completeTagsObject
      // manually changing filtersCurrentlyChecked does not change the view, so it must be the function that launches when something is checked / unchecked
    }
    this.filtersCurrentlyChecked.sort()

    // console.log(this.filtersCurrentlyChecked)
    // console.log(this.completeTagsObject)

    /* If filters aren't on their default position, the "Reset" button becomes usable */
    let resetButtonMustBeEnabled = false

    for (let i = 0; i < this.filtersCurrentlyChecked.length; i++) {
      // console.log('i ' + i)
      console.log('checked filters length ' + this.filtersCurrentlyChecked[i].textContent.length)
      console.log('total length ' + this.completeTagsObject[i].textContent.length)
      console.log(this.filtersCurrentlyChecked)
      console.log(this.completeTagsObject)

      console.log('[Le bouton reset ne se laisse pas réinitialiser, car filtersCurrentlyChecked (et particulièrement filtersCurrentlyChecked[i].textContent) n\'est pas mis à jour. Le reste de la boucle est bon.]')
      if (this.filtersCurrentlyChecked[i].textContent.length !== this.completeTagsObject[i].textContent.length) {
        resetButtonMustBeEnabled = true
      }
    }
    if (resetButtonMustBeEnabled) {
      document.getElementById('reset-filters').removeAttribute('disabled')
    } else {
      document.getElementById('reset-filters').setAttribute('disabled', '')
    }

    console.log('données envoyées depuis portfolioFiltersChanged() :')
    console.log(this.filtersCurrentlyChecked)
    this.initializeOutput(this.filtersCurrentlyChecked)
  }

  /**
   *  Converts short filter names to their full name, if possible
   * (If there is no corresponding value, the short name will be displayed)
   *  @param  {string} shortName The filter name used in completeTagsObject that needs to be converted
   **/
  fullFiltersTitlesFunction(shortName) {
    return (this.fullFiltersTitlesDictionnary[shortName] ? this.fullFiltersTitlesDictionnary[shortName] : shortName)
  }

  /**
   * Filters an array without altering the original like splice() would. Code from https://love2dev.com/blog/javascript-remove-from-array/
   * @param arr The array that needs to be filtered
   * @param value The 1 value to be removed from the array
   * @returns Filtered array
   */
  arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value
    })
  }
}