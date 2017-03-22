import { Component, OnInit } from '@angular/core';

const range = require('lodash.range');

@Component({
  selector: 'llta-create-test-form',
  templateUrl: './createTestForm.component.html',
  styleUrls: ['./createTestForm.component.scss']
})
export class CreateTestFormComponent {
  question: string;
  matching: boolean;
  answersQuantity: number;
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
