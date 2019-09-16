import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';
  
  constructor(private router: Router, private location: Location) {
    console.log('Route : ' + this.currentRoute());
    console.log('Path : ' + this.location.path());
  }

  // isHomeRoute() {
  //   return this.router.url === '/';
  // }
  
  currentRoute() {
    return this.location.path();
  }
}
