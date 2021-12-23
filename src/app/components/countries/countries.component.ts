import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Countries } from './countries';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries$!: Observable<Countries[]>;

  constructor(private cs: CountriesService) {}

  ngOnInit(): void {
    this.countries$ = this.cs
      .getCountries()
      .pipe(map((countries) => countries));
  }
}
