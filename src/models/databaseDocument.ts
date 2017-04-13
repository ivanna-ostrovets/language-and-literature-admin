export class DatabaseDocument {
  _id: string;
  _attachments?: {
    [name: string]: {
      content_type: string;
      data: string;
    }
  };
}
