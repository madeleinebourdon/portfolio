import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  host : {
    '[style.width]' : "'100%'"
  }, 
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @Input() intro: string;
  @Input() name:string;
  @Input() name2:string;
  // @Input() about: string;
  // @Input() portfolio: string;
  // @Input() contact: string;
  // @Input() page: string;
  // @Input() small: string;
  // @Input() thin: string;


  constructor() { }

  ngOnInit() {
    console.log('[jumbotron.component.ts] Jumbotron "' + this.name + '"')
  }

}
