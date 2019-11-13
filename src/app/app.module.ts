import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { JumbotronComponent } from './div/jumbotron/jumbotron.component';
import { IntroComponent } from './div/intro/intro.component';
import { TechnologyComponent } from './div/technology/technology.component';
import { LanguagesComponent } from './div/languages/languages.component';
import { ExperienceComponent } from './div/experience/experience.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './div/skills/skills.component';
import { PicturesComponent } from './div/pictures/pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    JumbotronComponent,
    IntroComponent,
    TechnologyComponent,
    LanguagesComponent,
    ExperienceComponent,
    PortfolioComponent,
    FooterComponent,
    SkillsComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
