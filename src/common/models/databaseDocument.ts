export class DatabaseDocument {
  _id: string;
  _rev?: string;
  _attachments?: {
    [name: string]: {
      content_type: string;
      data: string;
    }
  } = {};
  deleted: boolean = false;
}
