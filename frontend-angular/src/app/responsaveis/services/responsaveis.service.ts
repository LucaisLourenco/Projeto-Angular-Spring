import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Responsavel } from '../model/responsavel';

@Injectable({
  providedIn: 'root'
})
export class ResponsaveisService {

  private readonly API = 'api/responsaveis';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Responsavel[]>(this.API).pipe(
      first(),
      //delay(5000),
      //tap(responsaveis => console.log(responsaveis))
    );
  }

  save(responsavel: Partial<Responsavel>) {
    if (responsavel.id) {
      return this.update(responsavel);
    }

    return this.store(responsavel);
  }

  loadById(id: string) {
    return this.http.get<Responsavel>(`${this.API}/${id}`);
  }

  private store(responsavel: Partial<Responsavel>) {
    return this.http.post<Responsavel>(this.API, responsavel).pipe(first());
  }

  private update(responsavel: Partial<Responsavel>) {
    return this.http.put<Responsavel>(`${this.API}/${responsavel.id}`, responsavel).pipe(first());
  }

  delete(id: string) {
    return this.http.delete(`${this.API}/${id}`).pipe(first());
  }

}
