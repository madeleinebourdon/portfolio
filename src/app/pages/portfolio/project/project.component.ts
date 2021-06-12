import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealisationsService } from 'src/app/services/realisations.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  // public id: string;
  id: string = this.route.snapshot.queryParamMap.get('id')
  realisations = this.realisationsService.realisations
  realisation

  constructor(
    private route: ActivatedRoute,
    public realisationsService: RealisationsService
  ) {
    // console.log('[project.component.ts]')

    this.id = this.route.snapshot.paramMap.get('id');
    this.realisation = this.realisations.find(element => element.id === parseInt(this.id))
    // console.log('id: ' + this.id)

    // console.log(this.realisation)


  }

  ngOnInit(): void {
  }

}
