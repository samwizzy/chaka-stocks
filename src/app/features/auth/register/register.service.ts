import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  url: string = 'http://localhost:4000/auth/register';

  constructor(private http: HttpClient) {}

  saveForm(data: any): Observable<[]> {
    return this.http.post<[]>(this.url, data, httpOptions);
  }
}
