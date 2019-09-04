import { ErrorStateMatcher } from "@angular/material";
import { FormControl, NgForm, FormGroupDirective } from "@angular/forms";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmit = form && form.submitted;
    return control.invalid && (control.dirty || control.touched || isSubmit);
  }
}
