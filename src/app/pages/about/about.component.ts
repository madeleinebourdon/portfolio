import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  newTitle = 'À propos de moi | Madeleine Bourdon — Portfolio';

  constructor() {
  }

  ngOnInit() {
  }

}
