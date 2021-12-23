import { createReducer, on } from '@ngrx/store';
import { addQuestion, removeQuestion } from '../actions/questions.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeQuestion, (state, { questionId }) =>
    state.filter((id) => id !== questionId)
  ),
  on(addQuestion, (state, { questionId }) => {
    if (state.indexOf(questionId) > -1) return state;

    return [...state, questionId];
  })
);
