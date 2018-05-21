import { Component, Input } from '@angular/core';

import range from 'lodash-es/range';

import { MatchingQuestion } from '../../../../shared/models/matchingQuestion.model';
import resizeArray from '../../../../shared/utils/resizeArray';

@Component({
  selector: 'nt-matching-question',
  templateUrl: './matchingQuestion.component.html',
  styleUrls: ['./matchingQuestion.component.scss'],
})
export class MatchingQuestionComponent {
  @Input() question: MatchingQuestion;
  @Input() questionIndex: number;
  @Input() selectedIndex: number;

  onNumberedAnswersQuantityChange() {
    resizeArray(
      this.question.answers,
      this.question.numberedAnswersQuantity,
      null,
    );
  }

  onCorrectAnswerChange(event: any, index: number) {
    this.question.answers[index] = event;
  }

  getAnswersRange() {
    return range(Math.max(
      this.question.numberedAnswersQuantity,
      this.question.letteredAnswersQuantity,
      ),
    );
  }

  getLetteredAnswersRange() {
    return range(Math.max(this.question.letteredAnswersQuantity));
  }

  getLetterLabel(index: number): string {
    return 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'[index];
  }
}
