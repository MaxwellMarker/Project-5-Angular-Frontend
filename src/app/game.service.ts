import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './game';
import { server } from './variables';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor( private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private gamesUrl = `${server}/games`;

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl)
  }

  getGame(id: string): Observable<Game> {
    const url = `${this.gamesUrl}/${id}`
    return this.http.get<Game>(url).pipe(
      catchError(this.handleError<Game>(`getGame ${id}`))
    )
  }

  updateRating(id: string, rating: number): Observable<any> {
    return this.http.put(`${this.gamesUrl}/${id}`, {rating: rating}, this.httpOptions)
  }
}
