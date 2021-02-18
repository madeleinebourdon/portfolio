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

  name = ''


  constructor(private location: Location) {
    // switch (this.urlRoute) {
    //   case '':
    //     this.name = 'o'
    //     break
    //   case '/about':
    //     this.name = 'À propos de moi'
    //     break
    //   case '/portfolio':
    //     this.name = 'Réalisations'
    //     break
    //   case '/contact':
    //     this.name = 'Contact'
    //     break
    //   default:
    //     this.name = 'Error'
    // }


    console.log(this.urlRoute)
    console.log('Route : ' + this.urlRoute);
    console.log('Path : ' + this.urlPath);

    console.log(document)
    console.log(document.getElementById('project'))
  }

  // public setTitle( newTitle: string) {
  //   this.titleService.setTitle( newTitle );
  // }

  currentRoute() {
    return this.location.path();
  }
}
