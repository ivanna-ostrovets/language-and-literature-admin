import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SubjectsService } from '../services/resources/subjects.service';
import { Subject } from '../models/subject.model';

@Injectable()
export class SubjectsResolver implements Resolve<Subject> {
  constructor(private subjectsService: SubjectsService) {
  }

  resolve(): Observable<Subject> {
    return this.subjectsService.getAll();
  }
}
