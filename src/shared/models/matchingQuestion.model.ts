export class MatchingQuestion {
  question: string;
  matchingQuestion: true = true;
  numberedAnswersQuantity: number;
  letteredAnswersQuantity: number;
  table: string[][] = [[], []];
  matchingQuestionAnswers: string[] = [];
}
