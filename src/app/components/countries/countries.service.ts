import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from './countries';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  api: string = 'http://localhost:4000/countries';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.api);
  }
}
