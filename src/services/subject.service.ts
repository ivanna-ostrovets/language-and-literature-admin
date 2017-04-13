import { Injectable } from '@angular/core';

import { Subject } from '../models/subject';
import { Resource } from './abstract/resource.abstract';

@Injectable()
export class SubjectService extends Resource<Subject> {
  protected dbUrl = 'http://localhost:5984/subjects';

  constructor() {
    super();
    this.init();
  }
}
