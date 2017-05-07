import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { Resource } from './abstract/resource.abstract';

const sortBy = require('lodash.sortby');

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
            .filter(category => category => category.subject === subjectId);
        }

        return categories;
      })
      .then(categories => sortBy(categories, ['name']));
  }
}
