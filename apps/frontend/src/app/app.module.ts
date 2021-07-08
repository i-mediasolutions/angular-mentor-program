import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PasswordComponent } from "./password/password.component";
import { FindComponent } from "./find/find.component";
import { SharedComponent } from "./components/shared/shared.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, registerLocaleData } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { en_US } from "ng-zorro-antd/i18n";
import en from "@angular/common/locales/en";
import { HttpClientModule } from "@angular/common/http";

import { DemoNgZorroAntdModule } from "./ng-zorro-antd.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, initialState, metaReducers, reducers } from './app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LazyLoadedModule } from "./lazy-loaded-module/lazy-loaded.module";

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    FindComponent,
    SharedComponent,
    HomeComponent,
    PageNotFoundComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    LazyLoadedModule,

    // add NgRx
    StoreModule.forRoot(reducers, {
      initialState,
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
      },
    }),

    // add global effect
    EffectsModule.forRoot([...effects]),

    // enable Redux devtools in Chrome
    StoreDevtoolsModule.instrument({maxAge: 250})


  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
