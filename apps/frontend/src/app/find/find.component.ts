import { Component, ViewEncapsulation } from "@angular/core";
import { SharedViewModel } from "../components/shared/shared.models";

@Component({
  selector: "angular-mentor-program-find",
  templateUrl: "./find.component.html",
  styleUrls: ["./find.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FindComponent {
  vm: SharedViewModel = {
    title: "Find component",
    text: "from find component",
    btnCaption: "find",
    placeholder: "your-name@domain.com",
  };

  onBtnClick(value: string) {
    console.log(value);
  }
}
