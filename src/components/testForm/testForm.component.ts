import { Component, ViewEncapsulation } from '@angular/core';

import { Test } from '../../models/test';
import { Question } from '../../models/question';
import { Category } from '../../models/category';

import { CategoryService } from '../../services/category.service';
import { TestService } from '../../services/test.service';

const range = require('lodash.range');

@Component({
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestFormComponent {
  constructor(
    private categoryService: CategoryService,
    private testService: TestService
  ) {}

  test: Test = new Test();

  addImages: boolean[] = [];
  answers: string[][] = [];
  answersLetters: string[][] = [];
  answersNumbers: string[][] = [];
  answersQuantities: number[] = [];
  answersTableTitles: string[][] = [];
  categories: { value: string, viewValue: string }[] = [];
  category: string;
  correctAnswers: number[][] = [];
  images: any[] = [];
  lettersQuantities: number[] = [];
  matchings: boolean[] = [];
  numbersQuantities: number[] = [];
  questions: string[] = [];
  subject: string;
  subjects: { value: string, viewValue: string }[] = [];
  tasksQuantity: number;

  setArraysDimensions(index: number): void {
    while (this.answers.length > this.answersQuantities[index]) {
      this.answers.pop();
      this.correctAnswers.pop();
      this.answersTableTitles.pop();
      this.answersLetters.pop();
      this.answersNumbers.pop();
    }
    while (this.answers.length < this.answersQuantities[index]) {
      this.answers.push([]);
      this.correctAnswers.push([]);
      this.answersTableTitles.push([]);
      this.answersLetters.push([]);
      this.answersNumbers.push([]);
    }
  }

  getNumbersRange(num: number): number[] {
    return range(0, num);
  }

  uploadImage(event: any, i: number): void {
    let files = event.srcElement.files;
    this.images[i] = files[0];
  }

  clickOnElement(elementSelector: string): void {
    (<HTMLElement>document.querySelector(elementSelector)).click();
  }

  getNumber(parentIndex: number, index: number, dots: any = true): string {
    if (dots) {
      dots = index === 0 ? '.' : ')';
    } else {
      dots = '';
    }

    return index === 0
      ? parentIndex + 1 + dots
      : 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'[parentIndex] + dots
      ;
  }

  submit(): void {
    let test: any = {
      id: 'id',
      subject: this.subject,
      category: this.category,
      questions: []
    };
    let temp: any;
    let current: string[] = [];

    for (let index of this.getNumbersRange(this.tasksQuantity)) {
      temp = {};

      temp.question = this.questions[index];

      if (this.images[index]) {
        temp.img = this.images[index].name;
      }

      if (this.matchings[index]) {
        temp.table_titles = [];
        for (let title of this.answersTableTitles[index]) {
          temp.table_titles.push({
            title
          });
        }

        temp.table = [];
        for (let idx of this.getNumbersRange(this.answersQuantities[index])) {
          if (this.answersNumbers[index][idx]) {
            current[0] = this.answersNumbers[index][idx];
          } else {
            current[0] = '';
          }

          if (this.answersLetters[index][idx]) {
            current[1] = this.answersLetters[index][idx];
          } else {
            current[1] = '';
          }

          temp.table[idx].push([
            {
              column: current[0]
            },
            {
              column: current[1]
            }
          ]);
        }
      } else {
        temp.answers = [];
        for (let idx of this.getNumbersRange(this.answersQuantities[index])) {
          if (this.correctAnswers[index][0] === idx) {
            temp.answers.push({
              text: this.answers[index][idx],
              correct: true
            });
          } else {
            temp.answers.push({
              text: this.answers[index][idx]
            });
          }
        }
      }

      test.questions.push(temp);
    }

    return test;
  }
}