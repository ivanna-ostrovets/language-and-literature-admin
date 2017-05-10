import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { Resource } from './abstract/resource.abstract';

import * as _ from 'lodash';

@Injectable()
export class CategoryService extends Resource<Category> {
  protected dbUrl: string = 'categories';

  constructor() {
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
}
