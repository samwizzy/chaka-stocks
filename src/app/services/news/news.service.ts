import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient, private firestore: Firestore) {}

  getNews(): Observable<any[]> {
    const data = collection(this.firestore, 'news');
    return collectionData(data);
  }
}
