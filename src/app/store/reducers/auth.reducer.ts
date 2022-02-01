import { Action, createReducer, on } from '@ngrx/store';
import { login, register, isLoading } from '../actions/auth.actions';

export const initialState = {
  loading: false,
  user: null,
};

const authReducer = createReducer(
  initialState,
  on(isLoading, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(login, (state, action) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(register, (state, action) => {
    return {
      ...state,
      loading: false,
    };
  })
);

export function authReducers(state: any, action: Action) {
  return authReducer(state, action);
}
