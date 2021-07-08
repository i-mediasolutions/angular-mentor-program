import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedComponent } from './lazy-loaded-component/lazy-loaded.component';
import { StoreModule } from '@ngrx/store';
import { featureName, featureReducerToken } from './+state/state';
import { LazyFeatureEffects } from './+state/effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [LazyLoadedComponent],
  imports: [CommonModule,
    StoreModule.forFeature(featureName, featureReducerToken),
    EffectsModule.forFeature([LazyFeatureEffects])
  ],
  exports: [LazyLoadedComponent]
})
export class LazyLoadedModule {
}
