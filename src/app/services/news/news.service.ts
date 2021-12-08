import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl: string = 'http://localhost:3000/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<[]> {
    return this.http.get<[]>(this.apiUrl);
  }
}
