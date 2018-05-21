import { Component } from '@angular/core';

@Component({
  selector: 'nt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  creationYear: number = 2018;
  currentYear: number = new Date().getFullYear();
}
