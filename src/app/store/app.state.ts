import { Question } from './models/question.model';

export interface AppState {
  questions: ReadonlyArray<Question>;
  collection: ReadonlyArray<string>;
}
