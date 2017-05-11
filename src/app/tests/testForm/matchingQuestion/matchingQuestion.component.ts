import { Component, ViewEncapsulation, Input } from '@angular/core';

import { Question } from '../../../../common/models/question';

@Component({
  selector: 'llta-matching-question',
  templateUrl: './matchingQuestion.component.html',
  styleUrls: ['./matchingQuestion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MatchingQuestionComponent {
  @Input() question: Question;
  @Input() questionIndex: number;


  setArrayDimension(array: any[], index: number, element: any) {
    while (array.length > index) {
      array.pop();
    }

    while (array.length < index) {
      array.push(element);
    }
  }

  onPartialQuantityChange() {
    if (this.question.answers.length > this.question.letteredAnswersQuantity
      && this.question.answers.length > this.question.numberedAnswersQuantity ) {
      this.setArrayDimension(
        this.question.answers,
        Math.max(this.question.letteredAnswersQuantity, this.question.numberedAnswersQuantity),
        {}
      );
    }
  }

  getPrefix(parentIndex: number, index: number, withSuffix: boolean = true): string {
    let suffix: string = '';

    if (withSuffix) {
      suffix = (index === 0 ? '.' : ')');
    }

    return index === 0
      ? parentIndex + 1 + suffix
      : 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'[parentIndex] + suffix
      ;
  }
}
