import { Component, Input } from '@angular/core';

import { Question } from '../../../../common/models/question';

@Component({
  selector: 'llta-matching-question',
  templateUrl: './matchingQuestion.component.html',
  styleUrls: ['./matchingQuestion.component.scss']
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

  getLetterLabel(index: number): string {
    return 'АБВГДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ'[index];
  }
}
