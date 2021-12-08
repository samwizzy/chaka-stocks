import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Sectors } from '../../interfaces/sectors';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getStocks(): Observable<[]> {
    return this.http.get<[]>(`${this.apiUrl}/stocks`);
  }

  getEarnings(): Observable<[]> {
    return this.http.get<[]>(`${this.apiUrl}/earnings`);
  }

  getSectors(): Observable<Sectors[]> {
    return this.http.get<Sectors[]>(`${this.apiUrl}/sectors`);
  }

  getSectorsHighlights(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/sectors`)
      .pipe(map((res) => res.filter((data) => data.rate > 0.33)));
  }
}
