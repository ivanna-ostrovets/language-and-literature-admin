import { Component, ViewEncapsulation, Input } from '@angular/core';

import { Question } from '../../../models/question';

@Component({
  selector: 'llta-simple-question',
  templateUrl: './simpleQuestion.component.html',
  styleUrls: ['./simpleQuestion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleQuestionComponent {
  @Input() question: Question;
  @Input() questionIndex: number;
}
