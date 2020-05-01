import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StatsModel} from './StatsModel';
import {catchError} from 'rxjs/operators';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http: HttpClient) { }

  getStat(): Observable<StatsModel[]> {
    return this.http.get<StatsModel[]>('https://api.ipgeolocation.io/astronomy?apiKey=409a9d190f8d42e08f26c57cee1dfe4c&long=42.3601&lat=71.0589').pipe(
      tap(data => console.log(JSON.stringify(data))),

    )

  }
}
