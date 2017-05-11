import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Subject } from '../../models/subject';
import { SubjectService } from '../subject.service';

@Injectable()
export class SubjectResolver implements Resolve<Subject> {
  constructor(
    private subjectService: SubjectService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<Subject> {
    return this.subjectService.get(route.params.id);
  }
}
