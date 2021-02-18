import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  urlRoute = this.currentRoute();
  urlPath = this.location.path()

  intro = false
  name: string
  sub: string

  constructor(private location: Location) {
    console.log(this.urlRoute)
    switch (this.urlRoute) {
      case '':
        this.intro = true
        this.name = 'Madeleine Bourdon'
        this.sub = 'Développeuse front-end junior'
        break
      case '/about':
        this.name = 'À propos de moi'
        break
      case '/portfolio':
        this.name = 'Réalisations'
        break
      case '/contact':
        this.name = 'Contact'
        break
      // default:
      //   this.name = 'Error'
    }
    if (this.urlRoute.startsWith('/portfolio/project/')) {
      this.name = 'Détails d\'un projet'
    }

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

  currentRoute() {
    return this.location.path();
  }
}
