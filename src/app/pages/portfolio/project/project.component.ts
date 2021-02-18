import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PortfolioComponent } from '../portfolio.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  public id: string;
  // id: string = this.route.snapshot.queryParamMap.get('id')
  realisations = this.portfolio.realisations
  realisation
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private portfolio: PortfolioComponent
    ) {
    // if (!this.route.snapshot.paramMap.get('id')) {
      //   // alert('pas d\'ID !')
      //   this.router.navigate(['/portfolio'])
      // }
      this.id = this.route.snapshot.paramMap.get('id');
      this.realisation = this.realisations.find(element => element.id == parseInt(this.id))
    console.log('id: ' + this.id)

    console.log(this.realisation)
  }

  ngOnInit(): void {
  }

}
