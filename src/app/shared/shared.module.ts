import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomePagesComponent } from './pages/home-page/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinerComponent } from './components/loading-spiner/loading-spiner.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePagesComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ContactPageComponent,
    HomePagesComponent,
    LoadingSpinerComponent,
    SearchBoxComponent,
    SidebarComponent,

  ]
})
export class SharedModule { }
