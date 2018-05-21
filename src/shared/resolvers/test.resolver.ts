import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { TestsService } from '../services/resources/tests.service';
import { Test } from '../models/test.model';

@Injectable()
export class TestResolver implements Resolve<Test> {
  constructor(private testsService: TestsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Test> {
    return this.testsService.get(route.params.id);
  }
}
