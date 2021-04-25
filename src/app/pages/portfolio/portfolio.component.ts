import { Component, OnInit } from '@angular/core';

import { RealisationsService } from 'src/app/services/realisations.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  completeTagsArray = []          // every tag in the whole JSON, doubles removed
  filtersCurrentlyChecked = []    // list of checked tags
  outputResults = []              // array of results shown to user
  emptyResults: boolean           // checks if there are no search results to display

  constructor(public realisationsService: RealisationsService) {
    // console.log('[porfolio.component.ts] realisationsService.realisations')
    // console.log(realisationsService.realisations)

    for (var i = 0; i < realisationsService.realisations.length; i++) {
      // if this realisation has any data on "intervention"
      if (realisationsService.realisations[i].interventions) {
        for (let j = 0; j < realisationsService.realisations[i].interventions.length; j++) {
          // if this type of intervention isn't already in the list of filters
          if (!this.completeTagsArray.includes(realisationsService.realisations[i].interventions[j])) {
            this.completeTagsArray.push(realisationsService.realisations[i].interventions[j]) // add it to the list
            this.filtersCurrentlyChecked.push(realisationsService.realisations[i].interventions[j]) // everything is checked by default
          }
          // console.log(realisationsService.realisations[i].interventions[j])
        }
      }

      // HERE, more tags could be added in a similar manner, for example "technology"
    }
    this.completeTagsArray.sort() // sorts filters alphabetically to make things easier to find

    // console.log(this.completeTagsArray) // displays the list of tags
    // this.outputResults = this.realisationsService.realisations // FOR DEBUGGING PURPOSES: displays the whole array instead of what is checked

    this.initializeOutput(this.filtersCurrentlyChecked)
  }

  ngOnInit() { }

  /**
   *  Function called when something is checked / unchecked in the filters list.
   *  @param  {object} e Indicates which filter changed state
   **/
  portfolioFiltersChanged(e) {
    let id = e.target.id.split('-')[1] - 1
    // console.log('Id in tagsArray: ' + id)

    if (e.target.checked === true) {
      // Check if the filter does not already exist before adding it to the array of filters
      let addFilterToArray: boolean

      for (let i = 0; i < this.filtersCurrentlyChecked.length; i++) {
        if (this.filtersCurrentlyChecked[i].includes(this.completeTagsArray[id])) {
          addFilterToArray = false // Already in array; no need to add
        }
      }
      if (addFilterToArray !== false) {
        this.filtersCurrentlyChecked.push(this.completeTagsArray[id]) // Can be added to the array
      }

      // TODO: investigate if the above check is really useful. It could be removed to enhance performances. Testing would be needed.
    } else {
      this.filtersCurrentlyChecked.splice(this.filtersCurrentlyChecked.findIndex(filter => filter === this.completeTagsArray[id]), 1)
    }

    // console.log(this.filtersCurrentlyChecked)
    // console.log(this.completeTagsArray)

    this.initializeOutput(this.filtersCurrentlyChecked)
  }

  /**
   *  Function that determines which search results should be sent back to the user.
   *  @param  {Array} filtersArray List of filters -- At least one in the filter array should match to be displayed
   **/
  initializeOutput(filtersArray) {
    // For each realisation
    for (let i = 0; i < this.realisationsService.realisations.length; i++) {
      if (this.realisationsService.realisations[i].interventions) {
        var canBeDisplayed = false    // === "don't display by default"
        this.emptyResults = false     // Easier to find situations without results than situation with results

        for (let j = 0; j < filtersArray.length; j++) {
          // console.log('Filter currently checked among its array: "' + filtersArray[j] + '"')

          if (this.realisationsService.realisations[i].interventions.includes(filtersArray[j])) {
            canBeDisplayed = true
            // console.log(this.realisationsService.realisations[i].interventions)
            // console.log('The above array contains "' + filtersArray[j] + '"')
          }

          /* Check that the realisation isn't already present in the array */
          if (canBeDisplayed === true && !this.outputResults.includes(this.realisationsService.realisations[i])) {
            this.outputResults.push(this.realisationsService.realisations[i])
          }

          /* If the realisation doesn't belong in the array, but it is currently included inside, it should be removed */
          if (canBeDisplayed === false && this.outputResults.includes(this.realisationsService.realisations[i])) {
            // console.log('This item should be removed')

            /* Remove the item with the same index as this.realisationsService.realisations[i] */
            this.outputResults.splice(this.outputResults.findIndex(filter => filter === this.realisationsService.realisations[i]), 1)
          }
        }

        /* When nothing's checked, the previous loop will occur 0 times, so the above code won't run.
        Since we know that nothing was selected, we can assume there will be 0 result anyway. */
        if (filtersArray.length === 0) {
          this.outputResults = []
          this.emptyResults = true // Displays the <div> "No result found"
        }
      }
    }
  
    // console.log(this.realisationsService.realisations)
    // console.log(this.outputResults)
  }
}
