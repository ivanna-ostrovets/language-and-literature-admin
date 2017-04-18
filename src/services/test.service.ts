import { Injectable } from '@angular/core';

import { Test } from '../models/test';
import { Resource } from './abstract/resource.abstract';

@Injectable()
export class TestService extends Resource<Test> {
  protected dbUrl: string = 'tests';

  constructor() {
    super();
    this.init();
  }
}
