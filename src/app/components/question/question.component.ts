import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
export class QuestionComponent implements OnInit, OnChanges {
  questions$ = this.store.select(selectQuestions);
  questionCollection$ = this.store.select(selectQuestionCollection);

  answers = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4', 'Answer 5'];
  msg = 'hello world';

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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'changes in parent');
  }

  changeFromParent() {
    this.msg = 'Hello from the parent question';
  }

  getFromAnswer(value: any) {
    console.log(value, 'from answer');
  }
}
