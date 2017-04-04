import { Component, ViewEncapsulation } from '@angular/core';

const range = require('lodash.range');

@Component({
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestFormComponent {
  tasksQuantity: number;
  subjects: { value: string, viewValue: string }[] = [
  ];
  categories: { value: string, viewValue: string }[] = [
  ];
  subject: string;
  category: string;
  currentTab: number = 0;
  questions: string[] = [];
  addImages: boolean[] = [];
  images: any[] = [];
  matchings: boolean[] = [];
  answersQuantities: number[] = [];
  answers: string[][] = [];
  correctAnswers: string[][] = [];
  answersTableTitles: string[][] = [];
  answersLetters: string[][] = [];
  answersNumbers: string[][] = [];

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

  getNumbersRange(number: number): number[] {
    return range(0, number);
  }

  uploadImage(event: any, i: number): void {
    let files = event.srcElement.files;
    this.images[i] = files[0];
  }

  //ngOnInit() {
  //  $(document).on("keydown", function(event) {
  //    if (tasksQuantity > 1) {
  //      if ((event.keyCode || event.which) == 37) {
  //        if (currentTab > 0) {
  //          before(currentTab - 1);
  //          return false;
  //        }
  //      }
  //
  //      if ((event.keyCode || event.which) == 39) {
  //        if (currentTab < 11) {
  //          next(currentTab + 1);
  //          return false;
  //        }
  //      }
  //    }
  //  });
  //}

  clickOnElement(elementSelector: string): void {
    (<HTMLElement>document.querySelector(elementSelector)).click();
  }

  getNumber(parentIndex: number, index: number, dots: any = true): string {
    if (dots) {
      dots = index == 0 ? "." : ")";
    } else {
      dots = "";
    }

    return index == 0
      ? parentIndex + 1 + dots
      : "АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ"[parentIndex] + dots
      ;
  }

  onSubmit(): {} {
    let test: { _id: string, subject: string, category: string, questions: {}[] } = {
      _id: 'id',
      subject: this.subject,
      category: this.category,
      questions: []
    };
    let temp:any;

    for (let index of this.getNumbersRange(this.tasksQuantity)) {
      temp = {};

      temp.question = this.questions[index];

      if (this.images[index]) {
        temp.img = this.images[index].name;
      }

      if (this.matchings) {
        temp.table_titles = [];
        for (let title of this.answersTableTitles[index]) {
          temp.table_titles.push({
            title
          });
        }

        temp.table = [];
      } else {
        temp.answers = [];
        for (let idx of this.getNumbersRange(this.answersQuantities[index])) {
          temp.answers.push({
            text: this.answers[index][idx]
          });
        }
      }

      test.questions.push(temp);
    }

    return test;
  }
}