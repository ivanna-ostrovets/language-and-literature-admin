import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CategoriesService } from '../services/resources/categories.service';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryResolver implements Resolve<Category> {
  constructor(private categoriesService: CategoriesService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Category> {
    return this.categoriesService.get(route.params.id);
  }
}
