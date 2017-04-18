import { Injectable } from '@angular/core';

import { Subject } from '../models/subject';
import { Resource } from './abstract/resource.abstract';

@Injectable()
export class SubjectService extends Resource<Subject> {
  protected dbUrl: string = 'subjects';

  constructor() {
    super();
    this.init();
  }
}
