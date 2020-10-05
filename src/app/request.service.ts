import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from './request';
import { server } from './variables';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private requestsUrl = `${server}/requests`;

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.requestsUrl)
  }

  addRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(this.requestsUrl, request, this.httpOptions)
  }
}
