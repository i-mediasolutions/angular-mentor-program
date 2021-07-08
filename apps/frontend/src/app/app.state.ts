import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';
import { storeLogger } from 'ngrx-store-logger';

export interface RootState {
  // lazy loaded feature modules
  readonly [feature: string]: unknown;
}

export const initialState: RootState = {
  // lazy loaded feature modules are initialized when needed
};

export const reducers = {
  // lazy loaded feature modules
} as ActionReducerMap<RootState>;

const logger = (reducer: ActionReducer<any, Action>): any => storeLogger()(reducer);
const clearState = (reducer: ActionReducer<any, Action>) => (state: any | undefined, action: Action) =>
  reducer({ ...state }, action);

const isProduction = environment.production;
export const metaReducers: MetaReducer<RootState>[] = [clearState, ...(isProduction ? [] : [logger])];

export const effects = [];
