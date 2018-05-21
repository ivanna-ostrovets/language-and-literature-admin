import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { TestsService } from '../services/resources/tests.service';
import { Test } from '../models/test.model';

@Injectable()
export class TestsResolver implements Resolve<Test> {
  constructor(private testsService: TestsService) {
  }

  resolve(): Observable<Test> {
    return this.testsService.getAll();
  }
}
