import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Subject } from '../../models/subject';
import { Category } from '../../models/category';
import { Test } from '../../models/test';
import { Question } from '../../models/question';

import { SubjectService } from '../../services/subject.service';
import { CategoryService } from '../../services/category.service';
import { TestService } from '../../services/test.service';

import { MdSnackBar } from '@angular/material';

const cloneDeep = require('lodash.clonedeep');

@Component({
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestFormComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;

  test: Test = new Test();
  testCopy: Test = new Test();
  questions: Question = new Question();

  subjects: Subject[] = [];
  categories: Category[] = [];
  private _allCategories: Category[];

  constructor(
    private subjectService: SubjectService,
    private categoryService: CategoryService,
    private testService: TestService,
    private route: ActivatedRoute,
    private location: Location,
    public snackBar: MdSnackBar
  ) {
  }

  ngOnInit() {
    this.subjectService.getAll()
      .then(subjects => {
        this.subjects = subjects;
      });

    this.categoryService.getAll()
      .then(categories => {
        this._allCategories = categories;
      });

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    if (this.id) {
      this.testService.get(this.id).then(test => {
        this.test = test;
        this.testCopy = test;
        this.onSubjectChange(test.subject);
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubjectChange(subjectId: string) {
    this.categories = this._allCategories.filter(category => category.subject === subjectId);
  }

  setArrayDimension(array: any[], index: number, element: any) {
    while (array.length > index) {
      array.pop();
    }

    while (array.length < index) {
      array.push(element);
    }
  }

  onQuestionsQuantityChange(questionsQuantity: number) {
    this.setArrayDimension(this.test.questions, questionsQuantity, new Question());
  }

  onAnswersQuantityChange(answersQuantity: number, question: Question) {
    this.setArrayDimension(question.answers, answersQuantity, {});
  }

  onMatchingQuestionSelected(selected: boolean, question: Question) {
    if (selected) {
      question.numberedAnswersQuantity = 0;
      question.letteredAnswersQuantity = 0;
    }

    question.answers = [];
  }

  uploadImage(event: any, i: number): void {
    let files = event.srcElement.files;
    // this.images[questionIndex] = files[0];
  }

  clickOnElement(elementSelector: string): void {
    (<HTMLElement>document.querySelector(elementSelector)).click();
  }

  cancel() {
    this.location.back();
  }

  undoChanges() {
    this.test = cloneDeep(this.testCopy);
  }

  submit(form: any) {
    console.log(this.test);
    // if (this.id) {
    //   return this.testService.update(this.id, this.test)
    //     .then(() => {
    //       this.snackBar.open('Тест оновлено!', 'OK', {
    //         duration: 3000,
    //       });
    //
    //       this.cancel();
    //     });
    // }
    //
    // return this.testService.create(this.test)
    //   .then(() => {
    //     this.id = '';
    //
    //     this.snackBar.open('Тест додано!', 'OK', {
    //       duration: 3000,
    //     });
    //
    //     form.reset();
    //   });
  }
}
