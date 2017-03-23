import { Component } from '@angular/core';

const range = require('lodash.range');

@Component({
  selector: 'llta-app',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
})
export class AppComponent {
  question: string;
  matching: boolean;
  answersQuantity: number = 0;
  answers: string[];
  answersTableTitle: string[];
  answersLetters: string[];
  answersNumbers: string[];

  getNumbersRange(): number[] {
    return range(1, this.answersQuantity + 1);
  }

  onSubmit() {
  }
}
