import { createAction, props } from '@ngrx/store';

enum types {
  'LOADING' = '[AUTH] LOADING',
  'REGISTER' = '[AUTH] REGISTER',
  'LOGIN' = '[AUTH] LOGIN',
}

export const isLoading = createAction(types.LOADING);

export const register = createAction(
  types.REGISTER,
  props<{ email: string; phoneNumber: string; password: string }>()
);

export const login = createAction(
  types.LOGIN,
  props<{ email: string; password: string }>()
);
