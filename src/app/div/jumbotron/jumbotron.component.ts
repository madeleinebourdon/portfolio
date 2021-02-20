import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageTitleService } from 'src/app/services/page-title.service';

@Component({
  selector: 'app-jumbotron',
  host: {
    '[style.width]': "'100%'"
  },
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  // @Input() intro: string;
  // @Input() name: string;
  // @Input() name2: string;
  public id: string;
  public jumbotronName: string;
  public jumbotronBis: string

  constructor(
    private route: ActivatedRoute,
    public pageTitle: PageTitleService
    ) {
    // console.log('[jumbotron.component.ts]')
    if (pageTitle.pageTitleFromService) {
      this.jumbotronName = pageTitle.pageTitleFromService
    }
    
    // console.log(pageTitle)
    if (pageTitle.urlPath === '') {
      this.jumbotronName = 'Madeleine Bourdon'
      this.jumbotronBis = 'Développeuse front-end junior'
    }
  }
  
  ngOnInit() {
  }

}
