import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectQuestionCollection,
  selectQuestions,
} from '../../store/selectors/questions.selectors';
import {
  retrievedQuestionList,
  addQuestion,
  removeQuestion,
} from '../../store/actions/questions.actions';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questions$ = this.store.select(selectQuestions);
  questionCollection$ = this.store.select(selectQuestionCollection);

  onAdd(questionId: string) {
    this.store.dispatch(addQuestion({ questionId }));
  }

  onRemove(questionId: string) {
    this.store.dispatch(removeQuestion({ questionId }));
  }

  constructor(private questionService: QuestionService, private store: Store) {}

  ngOnInit(): void {
    this.questionService
      .getQuestions()
      .subscribe((questions) =>
        this.store.dispatch(retrievedQuestionList({ questions }))
      );
  }
}
