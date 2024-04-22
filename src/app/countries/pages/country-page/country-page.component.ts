import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { count, switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public country?: Country;;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryServices: CountriesService,
    private router:Router
  ) {}



  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countryServices.searchCountryByAlphaCode(id)  )
    )
    .subscribe((country) => {

       if(!country) return this.router.navigateByUrl('');
       return this.country = country;

    });
  }

  // searchCountry(code: string) {
  //   this.countryServices
  //     .searchCountryByAlphaCode(code)
  //     .subscribe((countries) => console.log(countries));
  // }


}
