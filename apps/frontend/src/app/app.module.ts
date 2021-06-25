import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PasswordComponent } from "./password/password.component";
import { FindComponent } from "./find/find.component";
import { SharedComponent } from "./components/shared/shared.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    FindComponent,
    SharedComponent,
  ],
  imports: [CommonModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
