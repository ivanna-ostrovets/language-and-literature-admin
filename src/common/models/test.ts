import { DatabaseDocument } from './databaseDocument';
import { Question } from './question';

export class Test extends DatabaseDocument {
  subject: string;
  category: string;
  questions: Question[] = [];

  addAttachment(name: string, type: string, data: string) {
    this._attachments[name] = {
      content_type: type,
      data: data
    };
  }
}
