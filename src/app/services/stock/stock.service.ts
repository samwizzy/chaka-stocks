import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Sectors } from '../../interfaces/sectors';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private firestore: Firestore) {}

  getStocks(): Observable<any[]> {
    const data = collection(this.firestore, 'stocks');
    return collectionData(data);
  }

  getEarnings(): Observable<any[]> {
    const data = collection(this.firestore, 'earnings');
    return collectionData(data);
  }

  getSectors(): Observable<any[]> {
    const data = collection(this.firestore, 'sectors');
    return collectionData(data);
  }

  getSectorsHighlights(): Observable<any[]> {
    const data = collection(this.firestore, 'sectors');
    return collectionData(data);
  }
  // getSectorsHighlights(): Observable<any[]> {
  //   return this.http
  //     .get<any[]>(`${this.apiUrl}/sectors`)
  //     .pipe(map((res) => res.filter((data) => data.rate > 0.33)));
  // }
}
