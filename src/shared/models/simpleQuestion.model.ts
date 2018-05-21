export class SimpleQuestion {
  question: string;
  matchingQuestion: false = false;
  answers?: Array<{ text: string, correct?: boolean }> = [];
}
