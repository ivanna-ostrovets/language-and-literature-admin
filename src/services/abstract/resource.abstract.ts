const PouchDB = require('pouchdb');

import { DatabaseDocument } from '../../models/databaseDocument';

export abstract class Resource<T extends DatabaseDocument> {
  // If you don't have CouchDB installed locally, change baseUrl value to empty string.
  private baseUrl: string = '';
  private db: any;

  protected abstract dbUrl: string;

  public lastId: number;

  constructor() {
  }

  getAll(): Promise<T[]> {
    // TODO: https://pouchdb.com/guides/queries.html

    return this.db.allDocs({include_docs: true, attachments: true}).
      then(data => {
        return data.rows.map(row => row.doc);
    });
  }

  create(data: T): Promise<T[]> {
    data._id = this.lastId.toString();

    return this.db.put(data)
      .then(data => {
        this.lastId++;

        return data;
      });
  }

  get() {
    // TODO: Implement
  }

  update() {
    // TODO: Implement
  }

  remove() {
    // TODO: Implement
  }

  protected init() {
    this.db = new PouchDB(this.baseUrl + this.dbUrl);

    this.db.info()
      .then(result => {
        this.lastId = result.doc_count;
      });
  }
}
