export class MatchingQuestion {
  question: string;
  matchingQuestion: true = true;
  numberedAnswersQuantity: number;
  letteredAnswersQuantity: number;
  tableTitles: { title1: string, title2: string } = {
    title1: '',
    title2: '',
  };
  table: string[][] = [[], []];
  answers: string[] = [];
}
