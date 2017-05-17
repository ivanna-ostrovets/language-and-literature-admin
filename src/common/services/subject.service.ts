import { Injectable } from '@angular/core';

import { Subject } from '../models/subject';
import { Resource } from './abstract/resource.abstract';

import { CategoryService } from './category.service';
import { TestService } from './test.service';

import * as _ from 'lodash';

@Injectable()
export class SubjectService extends Resource<Subject> {
  protected dbUrl: string = 'subjects';

  constructor(
    private categoryService: CategoryService,
    private testService: TestService
  ) {
    super();
    this.init();
  }

  getAll() {
    return super.getAll()
      .then(subjects => _.sortBy(subjects, ['name']));
  }

  delete(subjectId: string) {
    this.categoryService.getAll(subjectId)
      .then(data => {
        data.map(category => {
          this.testService.getAll(category._id)
            .then(data => {
              data.map(test => this.testService.remove(test._id));
            });

          this.categoryService.remove(category._id);
        });
      });

    return this.remove(subjectId);
  }
}
