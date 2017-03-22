import { Component } from '@angular/core';
import { Location } from '@angular/common';

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
    private location: Location
  ) {}

  onSubmit() {
    if (this.inputLogin == this.userLogin && this.inputPassword == this.password) {
      this.location.go('/create-test');
    } else {
      this.showError = true;
    }
  }
}
