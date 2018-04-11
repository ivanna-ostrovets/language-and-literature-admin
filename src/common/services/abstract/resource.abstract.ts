import PouchDB from 'pouchdb';

import { DatabaseDocument } from '../../models/databaseDocument';

interface PouchResponse {
  ok: boolean;
  id: string;
  rev: string;
}

export abstract class Resource<T extends DatabaseDocument> {
  // If you don't have CouchDB installed locally, change baseUrl value to empty string.
  private baseUrl: string = '';
  private db: PouchDB.Database<any>;

  protected abstract dbUrl: string;

  public lastId: number;

  constructor() {
  }

  getAll(): Promise<T[]> {
    // TODO: https://pouchdb.com/guides/queries.html

    return this.db.allDocs({include_docs: true, attachments: true})
      .then(data => {
        return data.rows
          .filter(row => !row.doc.deleted)
          .map(row => row.doc);
    });
  }

  create(data: T): Promise<PouchResponse> {
    data._id = this.lastId.toString();

    return this.db.put(data)
      .then((response: PouchResponse) => {
        this.lastId++;

        return response;
      });
  }

  get(id: string): Promise<T> {
    return this.db.get(id, {attachments: true});
  }

  update(id: string, body: T): Promise<PouchResponse> {
    return this.db.get(id)
      .then(doc => {
        body._rev = doc._rev;

        return this.db.put(body);
    });
  }

  remove(id: string): Promise<PouchResponse> {
    return this.db.get(id)
      .then(doc => {
        doc.deleted = true;

        return this.db.put(doc);
    });
  }

  protected init() {
    this.db = new PouchDB(this.baseUrl + this.dbUrl);

    this.db.info()
      .then(result => {
        this.lastId = result.doc_count;
      });
  }
}
