import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LazyLoadedComponent } from './lazy-loaded-module/lazy-loaded-component/lazy-loaded.component';

// CLI imports router
const routes: Routes = [
  {
    path: '',
    component: FindComponent
  },
  {
    path: 'reset-password',
    component: PasswordComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ngrx',
    component: LazyLoadedComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];


// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
