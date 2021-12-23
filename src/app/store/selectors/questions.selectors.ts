import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Question } from '../models/question.model';

export const selectQuestions =
  createFeatureSelector<ReadonlyArray<Question>>('questions');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectQuestionCollection = createSelector(
  selectQuestions,
  selectCollectionState,
  (questions, collection) => {
    return collection.map((id) =>
      questions.find((question) => question.id === id)
    );
  }
);
