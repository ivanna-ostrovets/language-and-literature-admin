export class Question {
  question: string;
  img?: any;
  matchingQuestion?: boolean;
  numberedAnswersQuantity?: number;
  letteredAnswersQuantity?: number;
  tableTitles?: { title: string }[] = [];
  table?: { column: string }[][] = [];
  answers: { text: string, correct?: boolean | string }[] = [];
}
