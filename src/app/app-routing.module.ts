import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePagesComponent } from './shared/pages/home-page/home-pages.component';


const routes: Routes = [

  {
    path:'home',
    component:HomePagesComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'contact',
    component:ContactPageComponent
  },
  {
    path:'countries',
    loadChildren: ()=> import('./countries/countries.module').then( m => m.CountriesModule )
  },
  {
    path:'**',
    redirectTo:'countries'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
