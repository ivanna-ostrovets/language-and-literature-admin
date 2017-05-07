import { Injectable } from '@angular/core';

import { Subject } from '../models/subject';
import { Resource } from './abstract/resource.abstract';

const sortBy = require('lodash.sortby');

@Injectable()
export class SubjectService extends Resource<Subject> {
  protected dbUrl: string = 'subjects';

  constructor() {
    super();
    this.init();
  }

  getAll() {
    return super.getAll()
      .then(subjects => sortBy(subjects, ['name']));
  }
}
