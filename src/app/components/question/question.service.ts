import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../../store/models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Array<Question>> {
    return of([
      { id: '1', title: 'What is PHP?', body: 'Explain this' },
      { id: '2', title: 'What is HTML?', body: 'Explain this' },
    ]);
  }
}
