import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("openhamburger", [
      state(
        "initial",
        style({
          width: "0"
        })
      ),
      state(
        "final",
        style({
          width: "250px"
        })
      ),
      transition("initial => final", animate("0.5s")),
      transition("final => initial", animate("0.5s"))
    ]),
    trigger("openbackground", [
      state(
        "initial",
        style({
          marginLeft: "80px"
        })
      ),
      state(
        "final",
        style({
          marginLeft: "330px"
        })
      ),
      transition("initial => final", animate("0.5s")),
      transition("final => initial", animate("0.5s"))
    ])
  ]
})
export class AppComponent {
  title = "angular-app";
  currentState = "initial";
  changeStateIcon = "";
  isActive = "";
  changeState() {
    this.currentState = this.currentState === "initial" ? "final" : "initial";
  }
  changeIcon() {
    // x.classList.toggle("change");
    this.changeStateIcon = this.changeStateIcon === "" ? "change" : "";
    // this.isActive = this.isActive === "" ? "250px" : "";
  }
}
