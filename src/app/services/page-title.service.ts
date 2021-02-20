import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Router } from '@angular/router';

import { RealisationsService } from 'src/app/services/realisations.service';


@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  urlPath = this.location.path()
  pageTitleFromService: string = 'Page introuvable'
  projectId

  constructor(
    private titleService: Title,
    private location: Location,
    private route: ActivatedRoute,
    public realisationsService: RealisationsService,
    private router: Router
  ) {
    console.log('[page-title.service.ts] urlPath ' + this.urlPath)

    switch (this.urlPath) {
      case '':
        this.pageTitleFromService = 'Madeleine Bourdon : Développeuse front-end junior — Portfolio'
        break
      case '/about':
        this.pageTitleFromService = 'À propos de moi'
        break
      case '/portfolio':
        this.pageTitleFromService = 'Réalisations'
        break
      case '/contact':
        this.pageTitleFromService = 'Contact'
        break
      case '/legal':
        this.pageTitleFromService = 'Mentions légales'
        break
      // default:
      //   this.pageTitleFromService = 'Error'
    }

    if (this.urlPath.startsWith('/portfolio/project/')) {
      this.pageTitleFromService = 'Détails d\'un projet'
      this.projectId = this.urlPath.split('project/')[1]

      if (!isNaN(this.projectId) && realisationsService.realisations.find(element => element.id === parseInt(this.projectId))) {
        this.pageTitleFromService = realisationsService.realisations.find(element => element.id === parseInt(this.projectId)).title
      } else {
        this.pageTitleFromService = 'Page introuvable'
        this.router.navigate(['error-404'])
      }
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

    // console.log('[page-title.service.ts] ' + this.projectId)

    // console.log('[page-title.service.ts] ' + this.route.snapshot.paramMap.get('id'))
  }
}
