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

  
  constructor(private location: Location) {
    console.log('Route : ' + this.urlRoute);
    console.log('Path : ' + this.urlPath);
  }

  // public setTitle( newTitle: string) {
  //   this.titleService.setTitle( newTitle );
  // }
  
  currentRoute() {
    return this.location.path();
  }
}
