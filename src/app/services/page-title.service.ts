import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { SharedService } from 'src/app/services/shared.service';


@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  urlPath = this.location.path()
  pageTitleFromService: string = 'Madeleine Bourdon : Développeuse front-end junior — Portfolio'
  projectId

  constructor(
    private titleService: Title,
    private location: Location,
    private route: ActivatedRoute,
    public shared: SharedService
  ) {
    console.log('[page-title.service.ts] urlPath ' + this.urlPath)

    switch (this.urlPath) {
      case '/about':
        this.pageTitleFromService = 'À propos de moi (from service)'
        break
      case '/portfolio':
        this.pageTitleFromService = 'Réalisations (from service)'
        break
      case '/contact':
        this.pageTitleFromService = 'Contact (from service)'
        break
      case '/legal':
        this.pageTitleFromService = 'Mentions légales (from service)'
        break
      // default:
      //   this.name = 'Error'
    }

    if (this.urlPath.startsWith('/portfolio/project/')) {
      this.pageTitleFromService = 'Détails d\'un projet (from service)'
      this.projectId = this.urlPath.split('project/')[1]
      this.pageTitleFromService = shared.realisations.find(element => element.id === parseInt(this.projectId)).title
    }
    
    if (this.pageTitleFromService !== 'Madeleine Bourdon : Développeuse front-end junior — Portfolio') {
      this.titleService.setTitle(this.pageTitleFromService + ' | Madeleine Bourdon — Portfolio')
    }

    // console.log('[page-title.service.ts] pageTitleFromService ' + this.pageTitleFromService)

    // console.log(this.route.snap)

    // this.route.paramMap.subscribe(
    //   params => {
    //     this.projectId = params.get('id');
    //   }
    // );

    // console.log(this.projectId)

    // console.log('[page-title.service.ts] ' + this.route.snapshot.paramMap.get('id'))
  }
}
