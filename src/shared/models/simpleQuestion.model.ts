export class SimpleQuestion {
  question: string;
  matchingQuestion: false = false;
  simpleQuestionAnswers: Array<{ text: string, correct?: boolean }> = [];
}
