import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from './review';
import { server } from './variables';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor( private http: HttpClient ) {}

  private reviewsUrl = `${server}/reviews`;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getReviews(id: string): Observable<Review[]> {
    const url = `${this.reviewsUrl}/${id}`
    return this.http.get<Review[]>(url).pipe(
      catchError(this.handleError<Review[]>(`getGame ${id}`))
    )
  }
}
