import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todoAdd, todoLoadStart, todoRemove } from '../state/todo/todo.action';
import { AppState } from '../state/app.state';
import { selectAlltodods, selectError } from '../state/todo/todo.selector';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent implements OnInit {
  todoList: { title: string; id: number }[] = [];
  error = this.store.select(selectError);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectAlltodods).subscribe((data) => {
      this.todoList = data;
    });
  }

  add(el: HTMLInputElement) {
    const text = el.value.trim();
    if (text) this.store.dispatch(todoAdd({ todoMessage: text }));
    el.value = '';
  }

  remove(id: number) {
    this.store.dispatch(todoRemove({ id }));
  }

  loadTodos() {
    this.store.dispatch(todoLoadStart());
  }
}
