import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Category } from '../../models/category';
import { CategoryService } from '../category.service';

@Injectable()
export class CategoryResolver implements Resolve<Category> {
  constructor(
    private categoryService: CategoryService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<Category> {
    return this.categoryService.get(route.params.id);
  }
}
