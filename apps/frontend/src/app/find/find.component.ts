import { Component, ViewEncapsulation } from "@angular/core";
import { SharedViewModel } from "../components/shared/shared.models";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "angular-mentor-program-find",
  templateUrl: "./find.component.html",
  styleUrls: ["./find.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class FindComponent {
  vm: SharedViewModel = {
    title: "Find component",
    text: "from find component",
    btnCaption: "find",
    description: 'Enter your email, and we will send you your workspaces',
    placeholder: "your-name@domain.com"
  };


  onBtnClick(value: string) {
    console.log(value);
  }
}


