import { Injectable } from '@angular/core';
import { Action, ActionReducer, createReducer, on, ReducerTypes } from '@ngrx/store';
import { ActionType, increment } from './actions';
import { LazyState } from './state';

@Injectable({
  providedIn: 'root'
})
export class LazyFeatureReducer {

  createReducer() {
    return (state = initialState, action: Action) => {
      return reducer(state, action);
    };
  }
}

const initialState: LazyState = {
  currentValue: 0
};

const reducers: ReducerTypes<LazyState, ActionType[]>[] = [
  on(increment, (state, action) => {
    return { ...state, currentValue: state.currentValue + action.value };
  })
];
const reducer: ActionReducer<LazyState> = createReducer<LazyState, Action>(initialState, ...reducers);


