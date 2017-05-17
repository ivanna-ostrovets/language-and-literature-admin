import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subject } from '../../../common/models/subject';
import { Category } from '../../../common/models/category';
import { Test } from '../../../common/models/test';
import { Question } from '../../../common/models/question';

import { CategoryService } from '../../../common/services/category.service';

@Component({
  selector: 'llta-test-form',
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss']
})
export class TestFormComponent implements OnInit {
  @ViewChild('testForm') testForm: NgForm;
  @Input() test: Test;
  @Input() subjects: Subject[];
  @Output() formEmitter: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.formEmitter.emit(this.testForm);
    this.onSubjectChange(this.test.subject);
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
    question.letteredAnswersQuantity = null;
    question.numberedAnswersQuantity = null;
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

  private resizeArray(array: any[], index: number, element: any) {
    while (array.length > index) {
      array.pop();
    }

    while (array.length < index) {
      array.push(element);
    }
  }
}
