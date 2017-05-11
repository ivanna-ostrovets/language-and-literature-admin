import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Subject } from '../../models/subject';
import { SubjectService } from '../subject.service';

@Injectable()
export class SubjectsResolver implements Resolve<Subject[]> {
  constructor(
    private subjectService: SubjectService
  ) {
  }

  resolve(): Promise<Subject[]> {
    return this.subjectService.getAll();
  }
}

