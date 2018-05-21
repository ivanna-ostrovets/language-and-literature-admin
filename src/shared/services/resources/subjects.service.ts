import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Resource } from './resource.abstract';
import { Subject } from '../../models/subject.model';

@Injectable()
export class SubjectsService extends Resource<Subject> {
  constructor(protected http: HttpClient) {
    super(http, 'subjects');
  }

  get(id: number | string): Observable<Subject> {
    return super.get(id);
  }

  getAll(): Observable<Subject> {
    return super.get();
  }

  create(body: Subject): Observable<Subject> {
    return super.create(body);
  }

  update(id: number | string, body: Subject): Observable<Subject> {
    return super.update(id, body);
  }

  delete(id: number | string): Observable<Subject> {
    return super.delete(id);
  }
}
