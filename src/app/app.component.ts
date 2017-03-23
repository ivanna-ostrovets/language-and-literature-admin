import { Component } from '@angular/core';

const range = require('lodash.range');

@Component({
  selector: 'llta-app',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
})
export class AppComponent {
  question: string;
  addImage: boolean;
  matching: boolean;
  answersQuantity: number;
  answers: string[] = [];
  answersTableTitle: string[] = [];
  answersLetters: string[] = [];
  answersNumbers: string[] = [];

  getNumbersRange(): number[] {
    return range(0, this.answersQuantity);
  }

  onSubmit() {
    console.log(
      this.question,
      this.answers
    );
  }
}
