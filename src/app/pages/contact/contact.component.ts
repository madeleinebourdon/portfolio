import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  newTitle = 'Contact | Madeleine Bourdon — Portfolio';
  
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.newTitle);
  }

  ngOnInit() {
  }
}
