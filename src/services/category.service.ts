import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { Resource } from './abstract/resource.abstract';

@Injectable()
export class CategoryService extends Resource<Category> {
  protected dbUrl: string = 'categories';

  constructor() {
    super();
    this.init();
  }
}
