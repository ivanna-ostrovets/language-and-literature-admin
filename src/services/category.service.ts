import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { Resource } from './abstract/resource.abstract';

@Injectable()
export class CategoryService extends Resource<Category> {
  protected dbUrl: string = 'http://localhost:5984/categories';

  constructor() {
    super();
    this.init();
  }
}
