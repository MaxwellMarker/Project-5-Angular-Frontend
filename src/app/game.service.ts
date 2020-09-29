import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  getGames(): Observable<Game[]> {
    return of()
  }
}
