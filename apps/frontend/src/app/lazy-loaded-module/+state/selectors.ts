import { featureName, LazyFeatureState } from './state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectFeatureState = createFeatureSelector<LazyFeatureState>(featureName);
const selectLazyState = createSelector(selectFeatureState, featureState => featureState.lazyState);
export const selectCurrentValue = createSelector(selectLazyState, lazyState => lazyState.currentValue);
