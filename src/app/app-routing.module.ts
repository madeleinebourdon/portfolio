import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectComponent } from './pages/portfolio/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LegalComponent } from './pages/legal/legal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'portfolio/project/:id', component: ProjectComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'legal', component: LegalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  name;
}
