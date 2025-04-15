import { TodoStateInterface } from './todo/todo.reducer';

export interface AppState {
  counter: number;
  todo: TodoStateInterface;
}
