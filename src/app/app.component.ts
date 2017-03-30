import { Component } from '@angular/core';

declare const $: any;
const range = require('lodash.range');

@Component({
  selector: 'llta-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasksQuantity: number;
  currentTab: number = 0;
  question: string[] = [];
  addImage: boolean[] = [];
  matching: boolean[] = [];
  answersQuantity: number[] = [];
  answers: string[] = [];
  answersTableTitles: string[] = [];
  answersLetters: string[] = [];
  answersNumbers: string[] = [];

  //initTabs() {
  //  $('ul.tabs').tabs();
  //}
  //
  //before(tab: number): void {
  //  this.currentTab--;
  //  $('ul.tabs').tabs('select_tab', 'tab${currentTab}');
  //};
  //
  //next(tab: number): void {
  //  this.currentTab++;
  //  $('ul.tabs').tabs('select_tab', 'tab${currentTab}');
  //};
  
  getNumbersRange(number: number): number[] {
    return range(0, number);
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

  onSubmit() {
    //console.log(
    //  this.question,
    //  this.answers,
    //  this.answersTableTitles,
    //  this.answersLetters,
    //  this.answersNumbers,
    //);
  }
}
