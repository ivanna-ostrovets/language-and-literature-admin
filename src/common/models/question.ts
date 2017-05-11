export class Question {
  question: string;
  img?: any;
  matchingQuestion?: boolean;
  numberedAnswersQuantity?: number;
  letteredAnswersQuantity?: number;
  tableTitles?: { title1: string, title2: string } = {
    title1: '',
    title2: ''
  };
  table?: string[][] = [[], []];
  answers: { text: string, correct?: boolean }[] | string[] = [];
}
