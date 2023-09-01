import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Beer } from '../Beers';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  // @ts-ignore
  private apiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getBeers(): Observable<Beer[]> {
    console.log('it is working');
    return this.http.get<Beer[]>(this.apiUrl);
  }
}
