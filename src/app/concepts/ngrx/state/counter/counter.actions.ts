import { createAction, props } from '@ngrx/store';

export const counterIncrement = createAction('[Counter] increment');
export const counterDecrement = createAction('[Counter] decrement');

export const counterIncrementCustom = createAction(
  '[Counter] Increment Custom',
  props<{ count: number }>()
);

export const counterDecrementCustom = createAction(
  '[Counter] Decrement Custom',
  props<{ count: number }>()
);
