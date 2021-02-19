import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private location: Location, public pageTitle: PageTitleService) {
  }
}
