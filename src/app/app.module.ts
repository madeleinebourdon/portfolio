import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { AboutComponent } from './part/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JumbotronComponent } from './div/jumbotron/jumbotron.component';
import { IntroComponent } from './div/intro/intro.component';
import { SkillsComponent } from './div/skills/skills.component';
import { LanguagesComponent } from './div/languages/languages.component';
import { ExperienceComponent } from './div/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RealisationsComponent,
    AboutComponent,
    ContactComponent,
    JumbotronComponent,
    IntroComponent,
    SkillsComponent,
    LanguagesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
