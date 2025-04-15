import { createAction, props } from '@ngrx/store';

export const todoAdd = createAction(
  '[TODO] add todo',
  props<{ todoMessage: string }>()
);

export const todoRemove = createAction(
  '[TODO] remove todo',
  props<{ id: number }>()
);

export const todoLoadComplete = createAction(
  '[TODO] load todo complete',
  props<{ todoList: { title: string; id: number }[] }>()
);

export const todoLoadStart = createAction('[TODO] load todo Start');

export const todoError = createAction(
  '[TODO] error todo',
  props<{ error: string }>()
);
