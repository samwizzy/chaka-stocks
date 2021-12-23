import { createReducer, on } from '@ngrx/store';

import { retrievedQuestionList } from '../actions/questions.actions';
import { Question } from '../models/question.model';

export const initialState: ReadonlyArray<Question> = [];

export const questionsReducer = createReducer(
  initialState,
  on(retrievedQuestionList, (state, { questions }) => questions)
);
