import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { SharedViewModel } from "./shared.models";

@Component({
  selector: "angular-mentor-program-shared",
  templateUrl: "./shared.component.html",
  styleUrls: ["./shared.component.css"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SharedComponent {
  @Input() vm: SharedViewModel;
  @Output() bntClick = new EventEmitter<string>();

  value: string;

  onBtnClick() {
    this.bntClick.emit(this.value);
  }
}
