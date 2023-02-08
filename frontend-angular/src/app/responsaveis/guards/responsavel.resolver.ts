import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Responsavel } from '../model/responsavel';
import { ResponsaveisService } from './../services/responsaveis.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelResolver implements Resolve<Responsavel> {

  constructor(private responsaveisService: ResponsaveisService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Responsavel> {
    if (route.params && route.params['id']) {
      return this.responsaveisService.loadById(route.params['id']);
    }

    return of({ id: '', nome: '', email: '', cpf: '' });
  }
}
