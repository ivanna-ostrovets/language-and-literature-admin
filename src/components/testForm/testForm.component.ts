import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MdSnackBar } from '@angular/material';

import { Subject } from '../../models/subject';
import { Category } from '../../models/category';
import { Test } from '../../models/test';
import { Question } from '../../models/question';

import { SubjectService } from '../../services/subject.service';
import { CategoryService } from '../../services/category.service';
import { TestService } from '../../services/test.service';

const cloneDeep = require('lodash.clonedeep'); // TODO: Use full lodash

@Component({
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss'],
  encapsulation: ViewEncapsulation.None // TODO: Use /deep/ selector inside scss
})
export class TestFormComponent implements OnInit {
  @ViewChild('testForm') testForm: NgForm;

  id: string;

  test: Test;
  originalTest: Test;

  subjects: Subject[] = [];
  categories: Category[] = [];

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

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if (this.id) {
        this.testService.get(this.id).then(test => {
          this.originalTest = test;
          this.copyOriginalTest();
          this.onSubjectChange(test.subject);
        });
      } else {
        this.test = new Test();
      }
    });
  }

  onSubjectChange(subjectId: string) {
    this.categoryService.getAll(subjectId)
      .then(categories => {
        this.categories = categories;
      });
  }

  onQuestionsQuantityChange(quantity: number) {
    this.resizeArray(this.test.questions, quantity, new Question());
  }

  onMatchingQuestionSelected(question: Question) {
    question.numberedAnswersQuantity = null;
    question.letteredAnswersQuantity = null;
    question.answers = [];
  }

  uploadImage(event: any, questionIndex: number): void {
    const file = event.srcElement.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      this.test.addAttachment(file.name, file.type, reader.result);
      this.test.questions[questionIndex].img = file.name;
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  onAnswersQuantityChange(quantity: number, question: Question) {
    this.resizeArray(question.answers, quantity, {});

    if (question.matchingQuestion) {
      question.numberedAnswersQuantity = question.answers.length;
      question.letteredAnswersQuantity = question.answers.length;
    }
  }

  submit() {
    console.log(this.test);
    // if (this.id) {
    //   return this.testService.update(this.id, this.test)
    //     .then(() => {
    //       this.snackBar.open('Тест оновлено!', 'OK', {
    //         duration: 3000,
    //       });
    //
    //       this.goBack();
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
    //     this.testForm.reset();
    //   });
  }

  goBack() {
    this.location.back();
  }

  copyOriginalTest() {
    this.test = cloneDeep(this.originalTest);
  }

  private resizeArray(array: any[], index: number, element: any) {
    while (array.length > index) {
      array.pop();
    }

    while (array.length < index) {
      array.push(element);
    }
  }
}
