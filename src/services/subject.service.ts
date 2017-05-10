import { Injectable } from '@angular/core';

import { Subject } from '../models/subject';
import { Resource } from './abstract/resource.abstract';

import * as _ from 'lodash';

@Injectable()
export class SubjectService extends Resource<Subject> {
  protected dbUrl: string = 'subjects';

  constructor() {
    super();
    this.init();
  }

  getAll() {
    return super.getAll()
      .then(subjects => _.sortBy(subjects, ['name']));
  }
}
