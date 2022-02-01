import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = 'http://localhost:4000/auth/login';

  constructor(private http: HttpClient) {}

  saveFrom(data: any): Observable<any> {
    return this.http.post(this.url, data, httpOptions);
  }
}
