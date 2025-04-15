import { createReducer, on } from '@ngrx/store';
import {
  counterDecrement,
  counterDecrementCustom,
  counterIncrement,
  counterIncrementCustom,
} from './counter.actions';

const count = 0;

export const counterReducer = createReducer(
  count,
  on(counterIncrement, (state) => state + 1),
  on(counterDecrement, (state) => state - 1),
  on(counterIncrementCustom, (state, props) => state + props.count),
  on(counterDecrementCustom, (state, props) => state - props.count)
);
