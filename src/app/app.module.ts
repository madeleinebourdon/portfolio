import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './pages/portfolio/project/project.component';

import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';

import { JumbotronComponent } from './common/div/jumbotron/jumbotron.component';
import { IntroComponent } from './common/div/intro/intro.component';
import { TechnologyComponent } from './common/div/technology/technology.component';
import { LanguagesComponent } from './common/div/languages/languages.component';
import { ExperienceComponent } from './common/div/experience/experience.component';
import { SkillsComponent } from './common/div/skills/skills.component';
import { MessageFormComponent } from './contact/message-form/message-form.component';
import { AccessibilityComponent } from './common/div/accessibility/accessibility.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ErrorComponent } from './pages/error/error.component';
// import { HeaderComponent } from './header/header.component';

import { SwiperModule } from 'swiper/angular';

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
    MessageFormComponent,
    ProjectComponent,
    AccessibilityComponent,
    LegalComponent,
    ErrorComponent,
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [
    Title,
    PortfolioComponent,
    JumbotronComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
