import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  error = true

  constructor(
    private titleService: Title,
    public pageTitle: PageTitleService
    ) { 
    this.titleService.setTitle('Page introuvable | Madeleine Bourdon — Portfolio')
  }

  ngOnInit(): void {
    // console.log()
  }

}
