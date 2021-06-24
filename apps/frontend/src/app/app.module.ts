import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { FindComponent } from './find/find.component';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [AppComponent, PasswordComponent, FindComponent, SharedComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
