import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SubjectsService } from '../services/resources/subjects.service';
import { Subject } from '../models/subject.model';

@Injectable()
export class SubjectResolver implements Resolve<Subject> {
  constructor(private subjectsService: SubjectsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Subject> {
    return this.subjectsService.get(route.params.id);
  }
}
