import { Component, Input, OnInit } from '@angular/core';

import { SimpleQuestion } from '../../../../shared/models/simpleQuestion.model';
import { resizeArray } from '../../../../shared/utils/resizeArray';

@Component({
  selector: 'nt-simple-question',
  templateUrl: './simpleQuestion.component.html',
  styleUrls: ['./simpleQuestion.component.scss'],
})
export class SimpleQuestionComponent implements OnInit {
  @Input() question: SimpleQuestion;
  @Input() questionIndex: number;
  @Input() selectedIndex: number;

  ngOnInit() {
    const questionsQuantity = 5;
    this.onAnswersQuantityChange(questionsQuantity, this.question);
  }

  onAnswersQuantityChange(quantity: number, question: SimpleQuestion) {
    resizeArray(question.simpleQuestionAnswers, quantity, () => ({ text: null }));
  }
}
