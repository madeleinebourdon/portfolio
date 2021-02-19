import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { PortfolioComponent } from '../portfolio.component';
// import { JumbotronComponent } from '../../../div/jumbotron/jumbotron.component';

import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  // public id: string;
  id: string = this.route.snapshot.queryParamMap.get('id')
  realisations = this.shared.realisations
  realisation
  
  constructor(
    private route: ActivatedRoute, 
    // private portfolio: PortfolioComponent,
    // private jumbotron: JumbotronComponent,
    public shared: SharedService
    ) {

      console.log('[project.component.ts]')

      this.id = this.route.snapshot.paramMap.get('id');
      this.realisation = this.realisations.find(element => element.id === parseInt(this.id))
      console.log('id: ' + this.id)
      
      console.log(this.realisation)
    }
    
    ngOnInit(): void {
    // console.log(this.jumbotron)
  }

}
