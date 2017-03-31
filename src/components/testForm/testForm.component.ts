import { Component } from '@angular/core';

const range = require('lodash.range');

@Component({
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss']
})
export class TestFormComponent {
  tasksQuantity: number;
  currentTab: number = 0;
  questions: string[] = [];
  addImages: boolean[] = [];
  images: any[] = [];
  matchings: boolean[] = [];
  answersQuantities: number[] = [];
  answers: string[][] = [[]];
  answersTableTitles: string[][] = [[]];
  answersLetters: string[][] = [[]];
  answersNumbers: string[][] = [[]];

  getNumbersRange(number: number): number[] {
    return range(0, number);
  }

  onChange(event: any, i: number): void {
    let files = event.srcElement.files;
    this.images[i] = files[0];
    console.log(files[0]);
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

  onSubmit() {
    console.log("d");
    console.log(this.images);
  }
}