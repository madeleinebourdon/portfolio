import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';
  
  constructor(private router: Router) {}

  isHomeRoute() {
    return this.router.url === '/';
  }
}
