import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Test } from '../../models/test';
import { TestService } from '../test.service';

@Injectable()
export class TestResolver implements Resolve<Test> {
  constructor(
    private testService: TestService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<Test> {
    return this.testService.get(route.params.id);
  }
}
