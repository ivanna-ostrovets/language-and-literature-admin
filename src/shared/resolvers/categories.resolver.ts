import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CategoriesService } from '../services/resources/categories.service';
import { Subject } from '../models/subject.model';

@Injectable()
export class CategoriesResolver implements Resolve<Subject> {
  constructor(private categoriesService: CategoriesService) {
  }

  resolve(): Observable<Subject> {
    return this.categoriesService.getAll();
  }
}
