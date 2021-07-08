import { inject, InjectionToken } from '@angular/core';
import { Action, combineReducers } from '@ngrx/store';
import { LazyFeatureReducer } from './reducer';

export const featureName = 'featureState';
export const featureReducerTokenDescription = 'lazy-state reducer token';

export const featureReducerToken = new InjectionToken<(state: LazyFeatureState, action: Action) => LazyFeatureState>(featureReducerTokenDescription, {
  factory: () =>
    combineReducers({
      lazyState: inject(LazyFeatureReducer).createReducer()
    })
});

export interface LazyFeatureState {
  lazyState: LazyState;
}

export interface LazyState {
  currentValue: number;
}
