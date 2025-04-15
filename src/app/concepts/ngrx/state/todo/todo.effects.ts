import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { todoError, todoLoadComplete, todoLoadStart } from './todo.action';
import { map, mergeMap, catchError, of } from 'rxjs';

interface Response {
  id: number;
  title: string;
}

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  onLoadAction = createEffect(() =>
    this.actions$.pipe(
      ofType(todoLoadStart),
      mergeMap(() =>
        this.httpClient
          .get<Response[]>('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            map((res) => todoLoadComplete({ todoList: res })),
            catchError((err: Error) => of(todoError({ error: err.message })))
          )
      )
    )
  );
}
