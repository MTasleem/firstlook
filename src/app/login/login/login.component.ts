import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  ngOnInit() {}

  invalidCredentialMsg: string;
  constructor(private authService: AuthService, private router: Router) {}
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  onFormSubmit() {
  //   let uname = this.loginForm.get("username").value;
  //   let pwd = this.loginForm.get("password").value;
  //   this.authService
  //     .isUserAuthenticated(uname, pwd)
  //     .subscribe(authenticated => {
  //       if (authenticated) {
  //         let url = this.authService.getRedirectUrl();
  //         console.log("Redirect Url:" + url);
  //         this.router.navigate([url]);
  //       } else {
  //         this.invalidCredentialMsg = "Invalid Credentials. Try again.";
  //       }
  //     });
  }
}

// function toggleResetPswd(e){
//   e.preventDefault();
//   $('#logreg-forms .form-signin').toggle() // display:block or none
//   $('#logreg-forms .form-reset').toggle() // display:block or none
// }

// function toggleSignUp(e){
//   e.preventDefault();
//   $('#logreg-forms .form-signin').toggle(); // display:block or none
//   $('#logreg-forms .form-signup').toggle(); // display:block or none
// }

// $(()=>{
//   // Login Register Form
//   $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
//   $('#logreg-forms #cancel_reset').click(toggleResetPswd);
//   $('#logreg-forms #btn-signup').click(toggleSignUp);
//   $('#logreg-forms #cancel_signup').click(toggleSignUp);
// })
