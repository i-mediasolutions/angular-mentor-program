import { createAction, props } from '@ngrx/store';

// create a custom action with a payload
export const increment = createAction('increment', props<{value: number}>());

// type used to narrow down the allowed actions in our reducer
export type ActionType = typeof increment;
