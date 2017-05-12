import { Component, Input } from '@angular/core';

import { Question } from '../../../../common/models/question';

@Component({
  selector: 'llta-simple-question',
  templateUrl: './simpleQuestion.component.html',
  styleUrls: ['./simpleQuestion.component.scss']
})
export class SimpleQuestionComponent {
  @Input() question: Question;
  @Input() questionIndex: number;
}
