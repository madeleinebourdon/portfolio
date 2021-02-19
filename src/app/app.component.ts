import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PageTitleService]
})

export class AppComponent {
  intro = false
  name: string
  sub: string

  constructor(private location: Location, private pageTitle: PageTitleService) {
    // console.log(this.urlRoute)
    // switch (pageTitle.urlPath) {
    //   case '':
    //     this.intro = true
    //     this.name = 'Madeleine Bourdon'
    //     this.sub = 'Développeuse front-end junior'
    //     break
      // case '/about':
      //   this.name = 'À propos de moi'
      //   break
      // case '/portfolio':
      //   this.name = 'Réalisations'
      //   break
      // case '/contact':
      //   this.name = 'Contact'
      //   break
      // default:
      //   this.name = 'Error'
    // }
    // if (pageTitle.urlPath.startsWith('/portfolio/project/')) {
    //   this.name = 'Détails d\'un projet'
    // }

    // console.log('Intro: ' + this.intro)
    // console.log('Name: ' + this.name)
    // console.log('Sub: ' + this.sub)

    // console.log(this.urlRoute)
    // console.log('Route : ' + this.urlRoute);
    // console.log('Path : ' + this.urlPath);

    // console.log(document)
    // console.log(document.getElementById('project'))
  }

  // public setTitle( newTitle: string) {
  //   this.titleService.setTitle( newTitle );
  // }

  // currentRoute() {
  //   return this.location.path();
  // }
}
