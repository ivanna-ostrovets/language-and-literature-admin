import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { Resource } from './resource.abstract';
import { Test } from '../../models/test.model';

@Injectable()
export class TestsService extends Resource<Test> {
  constructor(protected http: HttpClient) {
    super(http, 'tests');
  }

  get(id: number | string): Observable<Test> {
    return super.get(id);
  }

  getAll(): Observable<Test> {
    return super.get();
  }

  getByCategoryId(subjectId: number | string): Observable<Test[]> {
    return this.http.get<Test[]>(`${environment.apiUrl}/tests?category=${subjectId}`);
  }

  create(body: Test): Observable<Test> {
    return super.create(body);
  }

  update(id: number | string, body: Test): Observable<Test> {
    return super.update(id, body);
  }

  delete(id: number | string): Observable<Test> {
    return super.delete(id);
  }
}
