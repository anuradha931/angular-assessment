import { BadInput } from '../common/badinput';
import { NotFoundError } from '../common/notfounderror';
import { AppError } from '../common/apperror';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url).
    pipe(
      map(response => response.json())
      ,catchError(this.handleError)) ;
  }

  get(id) { 
    return this.http.get(this.url + '/' + id).
    pipe(
        map(response => response.json())
        ,catchError(this.handleError)
    ) ;    
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      map(response => response.json())
      ,catchError(this.handleError));
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(map(response => response.json())      
    ,catchError(this.handleError)) ;
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(map(response => response.json()),catchError(this.handleError))
      
      .toPromise()
      ;
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));
  
    if (error.status === 404)
      return throwError(new NotFoundError());
    
    return throwError(new AppError(error));
  }
}
