import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'llta-log-in-form',
  templateUrl: './logInForm.component.html',
  styleUrls: ['./logInForm.component.scss']
})
export class LogInFormComponent {
  userLogin: string = "admin";
  password: string = "password";

  inputLogin: string;
  inputPassword: string;

  showError: boolean = false;

  constructor(
      private router: Router,
  ) {}

  onSubmit() {
    if (this.inputLogin == this.userLogin && this.inputPassword == this.password) {
      return this.router.navigate(['/create-test']);
    } else {
      this.showError = true;
    }
  }
}
