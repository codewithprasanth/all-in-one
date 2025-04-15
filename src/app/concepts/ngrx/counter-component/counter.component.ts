import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  counterDecrement,
  counterDecrementCustom,
  counterIncrement,
  counterIncrementCustom,
} from '../state/counter/counter.actions';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count!: Observable<number>;
  constructor(private store: Store<AppState>) {
    this.count = this.store.select('counter');
  }

  decrement() {
    this.store.dispatch(counterDecrement());
  }
  increment() {
    this.store.dispatch(counterIncrement());
  }

  incrementDouble(count: number) {
    this.store.dispatch(counterIncrementCustom({ count }));
  }

  decrementTriple(count: number) {
    this.store.dispatch(counterDecrementCustom({ count }));
  }
}
