import { Question } from './question.model';

export class Test {
  _id: string;
  name: string;
  subject: string;
  category: string;
  comment: string;
  questions: Question[] = [];
}
