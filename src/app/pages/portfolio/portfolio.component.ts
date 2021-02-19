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
  outputObject:object

  constructor(private titleService: Title, public shared: SharedService) {
    console.log('portfolio')
    // console.log('[porfolio.component.ts] shared.realisations')
    console.log(shared.realisations)

    for (var i = 0; i < shared.realisations.length; i++) {
      console.log('i: ' + i)
      console.log(shared.realisations[i].interventions)

      if (shared.realisations[i].interventions) {
        console.log(shared.realisations[i].interventions.length)

        for (let j = 0; j < shared.realisations[i].interventions.length; j++) {
          if (!this.completeTagsArray.includes(shared.realisations[i].interventions[j])) {
            this.completeTagsArray.push(shared.realisations[i].interventions[j])
          }
          console.log(shared.realisations[i].interventions[j])
        }
      }
    }

    console.log(this.completeTagsArray)
    this.outputObject = this.shared.realisations
    
    this.initializeOutput(this.completeTagsArray)
  }
  
  
  ngOnInit() {
    if (this.filtersCurrentlyChecked = ['empty']) {
      this.filtersCurrentlyChecked.splice(0, 1)
      for (let i=0; i<this.completeTagsArray.length; i++) {
        this.filtersCurrentlyChecked.push(this.completeTagsArray[i])
      }
    }
    console.log(this.filtersCurrentlyChecked)
  }

  portfolioFiltersChanged(e) {
    console.log(e)
    let id = e.target.id.split('-')[1] - 1

    console.log('tagsArray id: ' + id)
    // console.log(this.tagsArray)
    // console.log(this.tagsArray[id])

    // console.log(this.outputObject[0])

    // console.log(this.outputObject.filter(obj => { return obj.id === 1}))

    if (e.target.checked === true) {
      // if it was checked, add the filter
      console.log('Now checked')
      // this.filtersCurrentlyChecked.push(this.tagsArray[id])
    } else {
      // if it was unchecked, remove it
      console.log('Now unchecked')
      // this.filtersCurrentlyChecked.splice(id, 1)
      // console.log('pouf')
    }

    console.log(this.filtersCurrentlyChecked)
    console.log(this.completeTagsArray)
  }

  initializeOutput(filtersArray) {
    console.log(filtersArray)
  }
}
