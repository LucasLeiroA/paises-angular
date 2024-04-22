import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  public navLinks:any[]= [

    {
      route:'countries/by-capital',
      tittle:'Por Capital'
    },
    {
      route:'countries/by-country',
      tittle:'Por Pais'
    },
    {
      route:'countries/by-region',
      tittle:'Por Region'
    }


  ]


}
