import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Responsavel } from '../model/responsavel';

@Injectable({
  providedIn: 'root'
})
export class ResponsaveisService {

  private readonly API = '/assets/responsaveis.json';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Responsavel[]>(this.API).pipe(
      first(),
      //delay(5000),
      //tap(responsaveis => console.log(responsaveis))
    );
  }
}
