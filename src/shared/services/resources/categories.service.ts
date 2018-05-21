import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { Resource } from './resource.abstract';
import { Category } from '../../models/category.model';

@Injectable()
export class CategoriesService extends Resource<Category> {
  constructor(protected http: HttpClient) {
    super(http, 'categories');
  }

  get(id: number | string): Observable<Category> {
    return super.get(id);
  }

  getAll(): Observable<Category> {
    return super.get();
  }

  getBySubjectId(subjectId: number | string): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories?subject=${subjectId}`);
  }

  create(body: Category): Observable<Category> {
    return super.create(body);
  }

  update(id: number | string, body: Category): Observable<Category> {
    return super.update(id, body);
  }

  delete(id: number | string): Observable<Category> {
    return super.delete(id);
  }
}
