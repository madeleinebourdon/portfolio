import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './pages/portfolio/project/project.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { JumbotronComponent } from './div/jumbotron/jumbotron.component';
import { IntroComponent } from './div/intro/intro.component';
import { TechnologyComponent } from './div/technology/technology.component';
import { LanguagesComponent } from './div/languages/languages.component';
import { ExperienceComponent } from './div/experience/experience.component';
import { SkillsComponent } from './div/skills/skills.component';
import { PicturesComponent } from './div/pictures/pictures.component';
import { MessageFormComponent } from './contact/message-form/message-form.component';
import { AccessibilityComponent } from './div/accessibility/accessibility.component';
import { LegalComponent } from './pages/legal/legal.component';
// import { HeaderComponent } from './header/header.component';

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
    PicturesComponent,
    MessageFormComponent,
    ProjectComponent,
    AccessibilityComponent,
    LegalComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    PortfolioComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
