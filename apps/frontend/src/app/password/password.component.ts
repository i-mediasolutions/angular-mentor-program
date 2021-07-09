import { Component, ViewEncapsulation } from "@angular/core";
import { SharedViewModel } from "../components/shared/shared.models";

@Component({
  selector: "angular-mentor-program-password",
  templateUrl: "./password.component.html",
  styleUrls: ["./password.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PasswordComponent {
  vm: SharedViewModel = {
    title: "Lost password component",
    text: "from password component",
    btnCaption: "get password",
    placeholder: "username or e-mail address"
  };

  onBtnClick(value: string) {
    console.log(value);
  }
}
