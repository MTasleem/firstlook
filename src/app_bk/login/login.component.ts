import { Component, OnInit, SimpleChanges, Input } from "@angular/core";
import { FormControl, Validators, AbstractControl } from "@angular/forms";
import { CustomErrorStateMatcher } from '../shared/error-state-matcher';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myCity = new FormControl("", [Validators.required, this.removeSpaces]);
  commentText = new FormControl("", [Validators.required, this.removeSpaces]);
  isDisabled = true;
  esMatcher = new CustomErrorStateMatcher(); 
  @Input() labelPositions: "before" | "after";
  constructor() {}
  removeSpaces(control: AbstractControl) {
    if (control && control.value && !control.value.replace(/\s/g, "").length) {
      control.setValue("");
    }
    return null;
  }
  ngOnInit() {}
  onchangecomment() {
    console.log(this.commentText.value);
  }
}
