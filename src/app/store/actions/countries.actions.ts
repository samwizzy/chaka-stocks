import { createAction, props } from '@ngrx/store';
import { Countries } from 'src/app/components/countries/countries';

enum types {
  'ALL' = '[COUNTRIES] GET COUNTRIES]',
}

export const getCountries = createAction(
  types.ALL,
  props<{ countries: ReadonlyArray<Countries> }>()
);
