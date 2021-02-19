import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { PortfolioComponent } from 'src/app/pages/portfolio/portfolio.component';
import { SharedService } from 'src/app/services/shared.service';
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
  @Input() intro: string;
  @Input() name: string;
  @Input() name2: string;
  public id: string;
  public jumbotronName: string;
  public jumbotronBis: string


  // realisations = this.shared.realisations
  // realisation

  constructor(
    private route: ActivatedRoute,
    // private portfolio: PortfolioComponent,
    public shared: SharedService,
    private pageTitle: PageTitleService
  ) {
    console.log('[jumbotron.component.ts]')
    // console.log(this.realisations)
    // console.log(shared)
    if (pageTitle.pageTitleFromService) {
      this.jumbotronName = pageTitle.pageTitleFromService
    }

    console.log(pageTitle)
    if (pageTitle.urlPath === '') {
      this.jumbotronName = 'Madeleine Bourdon'
      this.jumbotronBis = 'Développeuse front-end junior'
    }
    console.log(this.jumbotronName)

    // this.id = this.route.snapshot.paramMap.get('id');
    // // console.log(this.route.snapshot.paramMap.get('id'))
    // this.realisation = this.realisations.find(element => element.id === parseInt(this.id))
    // console.log('[jumbotron.component.ts] id: ' + this.id)
  
    // if(this.realisation) {
    //   this.name = this.realisation.title
    //   console.log(this.name)
    // }
    // console.log(this.realisation)
    // console.log(this.realisation.title)
  }
  
  ngOnInit() {
    console.log('[jumbotron.component.ts] Jumbotron "' + this.jumbotronName + '"')
  }

}
