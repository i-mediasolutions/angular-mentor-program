import { Component, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { increment } from '../+state/actions';
import { selectCurrentValue } from '../+state/selectors';

@Component({
  selector: 'angular-mentor-program-lazy-loaded',
  templateUrl: './lazy-loaded.component.html',
  styleUrls: ['./lazy-loaded.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LazyLoadedComponent {

  // create an observable that listens to the current value in our store
  readonly currentValue$ = this.store.pipe(select(selectCurrentValue));

  constructor(private readonly store: Store) {
  }

  increment() {
    // send a custom action to the store with a payload
    this.store.dispatch(increment({ value: 1 }));
  }
}
