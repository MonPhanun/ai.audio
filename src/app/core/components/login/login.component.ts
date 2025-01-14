import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginModel } from '../../models/login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {
  constructor(private route: Router) {

  }
  dataLogin: LoginModel = new LoginModel("", "");
  userEmail = "againstitute@gmail.com"
  userPassword = "Ai2@25aga";
  errEmail = "";
  errPassword = "";

  onLogin() {
    this.errEmail = "";
    this.errPassword = "";
    var checkMail = true;
    var checkPassword = true;
    if (this.dataLogin.isValid()) {
      if (this.dataLogin.email != this.userEmail) {
        this.errEmail = "Invalid email address !";
        checkMail = false;
      }
      if (this.dataLogin.password != this.userPassword) {
        this.errPassword = "Invalid password !";
        checkPassword = false
      }
      if (checkMail && checkPassword) {
        console.log(this.dataLogin);
        localStorage.setItem("login", "true")
        this.route.navigate(['audio'])
      }
    } else {
      if (this.dataLogin.email == "") {
        this.errEmail = "Email is required !";
      }
      if (this.dataLogin.password == "") {
        this.errPassword = "Password is required !";
      }
    }
  }

  onChange() {
    if (this.dataLogin.email == "") {
      this.dataLogin.email = "againstitute@gmail.com";
    } else {
      this.dataLogin.email = "";
    }
  }
}
