import { DatabaseDocument } from './databaseDocument';
import { Question } from './question';

export class Test extends DatabaseDocument {
  subject: string;
  category: string;
  questions: Question[];

  addAttachment() {
    // TODO: Implement
  }
}
