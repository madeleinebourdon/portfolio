import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HomeComponent } from './home/home.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  // pages de test
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },

  // vraies pages
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: RealisationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
