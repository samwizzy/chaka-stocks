import { createAction, props } from '@ngrx/store';
import { Question } from '../models/question.model';

export enum types {
  'ADD' = '[Question List] Add Question',
  'REMOVE' = '[Question List] Add Question',
  'LIST' = '[Question List/API] Retrieve Questions',
}

export const addQuestion = createAction(
  types.ADD,
  props<{ questionId: string }>()
);

export const removeQuestion = createAction(
  types.REMOVE,
  props<{ questionId: string }>()
);

export const retrievedQuestionList = createAction(
  types.LIST,
  props<{ questions: ReadonlyArray<Question> }>()
);
