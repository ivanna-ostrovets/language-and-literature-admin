import { Injectable } from '@angular/core';

import { Test } from '../models/test';
import { Resource } from './abstract/resource.abstract';

@Injectable()
export class TestService extends Resource<Test> {
  protected dbUrl: string = 'http://localhost:5984/tests';

  constructor() {
    super();
    this.init();
  }
}
