import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

export abstract class Resource<T> {
  apiUrl: string = environment.apiUrl;

  constructor(protected http: HttpClient,
              protected path: string,
  ) {
    this.path = path;
  }

  get(id?: number | string): Observable<T> {
    return this.http.get<T>(this.buildUrl(id));
  }

  create(body: T): Observable<T> {
    return this.http.post<T>(this.buildUrl(), body);
  }

  update(id: number | string, body: T): Observable<T> {
    return this.http.put<T>(this.buildUrl(id), body);
  }

  delete(id: number | string): Observable<T> {
    return this.http.delete<T>(this.buildUrl(id));
  }

  protected buildUrl(id?: number | string): string {
    return id ? `${this.apiUrl}/${this.path}/${id}` : `${this.apiUrl}/${this.path}`;
  }
}
