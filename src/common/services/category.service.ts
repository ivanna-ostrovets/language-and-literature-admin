import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { Resource } from './abstract/resource.abstract';

import { TestService } from './test.service';

import * as _ from 'lodash';

@Injectable()
export class CategoryService extends Resource<Category> {
  protected dbUrl: string = 'categories';

  constructor(
    private testService: TestService
  ) {
    super();
    this.init();
  }

  getAll(subjectId?: string) {
    return super.getAll()
      .then(categories => {
        if (subjectId) {
          return categories
            .filter(category => category.subject === subjectId);
        }

        return categories;
      })
      .then(categories => _.sortBy(categories, ['name']));
  }

  delete(categoryId: string) {
    this.testService.getAll(categoryId)
      .then(data => {
        data.map(test => this.testService.remove(test._id));
      });

    return this.remove(categoryId);
  }
}
