import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  @Input() intro: string;
  @Input() about: string;
  @Input() portfolio: string;
  @Input() contact: string;
  @Input() page: string;
  @Input() small: string;

  constructor() { }

  ngOnInit() {
  }

}
