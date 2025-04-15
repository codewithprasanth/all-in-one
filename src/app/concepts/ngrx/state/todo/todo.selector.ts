import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoStateInterface } from './todo.reducer';

//Selecting only todo Feature from the global App state
export const todoSelector = (state: AppState) => state.todo;

//Selecting only List Of Todos from the todo state
export const selectAlltodods = createSelector(
  todoSelector,
  (state: TodoStateInterface) => state.todos
);

export const selectError = createSelector(todoSelector, (state) => state.error);
