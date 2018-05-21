import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { CategoriesService } from '../../../shared/services/resources/categories.service';
import { Subject } from '../../../shared/models/subject.model';
import { Category } from '../../../shared/models/category.model';
import { Test } from '../../../shared/models/test.model';
import { resizeArray } from '../../../shared/utils/resizeArray';
import { SimpleQuestion } from '../../../shared/models/simpleQuestion.model';

@Component({
  selector: 'nt-test-form',
  templateUrl: './testForm.component.html',
  styleUrls: ['./testForm.component.scss'],
})
export class TestFormComponent implements OnInit {
  @ViewChild('testForm') testForm: NgForm;
  @Input() test: Test;
  @Input() subjects: Subject[];
  @Output() formEmitter: EventEmitter<NgForm> = new EventEmitter<NgForm>();

  text: string;
  categories: Category[] = [];
  selectedIndex: number = 0;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.formEmitter.emit(this.testForm);
    this.onSubjectChange(this.test.subject);
  }

  onSubjectChange(subjectId: string) {
    if (subjectId == null) {
      return;
    }

    this.categoriesService.getBySubjectId(subjectId)
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  onQuestionsQuantityChange(quantity: number) {
    resizeArray(this.test.questions, quantity, new SimpleQuestion());
  }

  onMatchingQuestionSelected(questionIndex: number) {
    const question = this.test.questions[questionIndex];

    if (question.matchingQuestion) {
      question.numberedAnswersQuantity = null;
      question.letteredAnswersQuantity = null;
      question.table = [[], []];
      question.answers = [];
      question.tableTitles = {
        title1: '',
        title2: '',
      };
    } else {
      question.answers = [];
    }

    this.test.questions[questionIndex] = question;
  }
}
