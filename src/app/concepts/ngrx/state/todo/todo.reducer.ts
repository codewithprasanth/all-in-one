import { createReducer, on } from '@ngrx/store';
import {
  todoAdd,
  todoError,
  todoLoadComplete,
  todoLoadStart,
  todoRemove,
} from './todo.action';

export enum Status {
  Loading,
  Error,
  Idle,
}

export interface TodoStateInterface {
  todos: { title: string; id: number }[];
  error: string;
  status: Status;
}

export const todoState: TodoStateInterface = {
  todos: [],
  error: '',
  status: Status.Idle,
};

export const todoReducer = createReducer(
  todoState,
  on(todoAdd, (state, { todoMessage }) => {
    return {
      ...state,
      status: Status.Idle,
      error: '',
      todos: [...state.todos, { title: todoMessage, id: Date.now() }],
    };
  }),
  on(todoRemove, (state, { id }) => {
    return {
      ...state,
      status: Status.Idle,
      error: '',
      todos: state.todos.filter((t) => t.id !== id),
    };
  }),
  on(todoLoadStart, (state) => {
    return {
      ...state,
      status: Status.Loading,
      error: '',
    };
  }),
  on(todoLoadComplete, (state, { todoList }) => {
    return {
      ...state,
      status: Status.Idle,
      error: '',
      todos: todoList,
    };
  }),
  on(todoError, (state, { error }) => {
    return {
      ...state,
      status: Status.Idle,
      error,
      todos: [],
    };
  })
);
