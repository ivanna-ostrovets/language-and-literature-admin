import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'nt-back-button',
  templateUrl: './backButton.component.html',
})
export class BackButtonComponent {
  constructor(private location: Location) {
  }

  goBack() {
    this.location.back();
  }
}
