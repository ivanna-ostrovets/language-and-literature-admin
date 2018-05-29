import { Component, Input } from '@angular/core';

import { SimpleQuestion } from '../../../../shared/models/simpleQuestion.model';
import { resizeArray } from '../../../../shared/utils/resizeArray';

@Component({
  selector: 'nt-simple-question',
  templateUrl: './simpleQuestion.component.html',
  styleUrls: ['./simpleQuestion.component.scss'],
})
export class SimpleQuestionComponent {
  @Input() question: SimpleQuestion;
  @Input() questionIndex: number;
  @Input() selectedIndex: number;

  onAnswersQuantityChange(quantity: number, question: SimpleQuestion) {
    resizeArray(question.simpleQuestionAnswers, quantity, {});
  }
}
