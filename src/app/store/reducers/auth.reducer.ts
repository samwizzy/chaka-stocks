import { createReducer, on } from '@ngrx/store';
import { login, register, isLoading } from '../actions/auth.actions';

export const initialState = {
  loading: false,
  user: null,
};

export const authReducer = createReducer(
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
