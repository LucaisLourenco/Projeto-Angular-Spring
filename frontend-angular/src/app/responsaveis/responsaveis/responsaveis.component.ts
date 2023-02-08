import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Responsavel } from '../model/responsavel';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { ResponsaveisService } from './../services/responsaveis.service';

@Component({
  selector: 'app-responsaveis',
  templateUrl: './responsaveis.component.html',
  styleUrls: ['./responsaveis.component.scss']
})
export class ResponsaveisComponent {

  responsaveis$: Observable<Responsavel[]>;

  constructor(
    private responsaveisService: ResponsaveisService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.responsaveis$ = this.responsaveisService.list().pipe(
      catchError(error => {
          this.openError("Ouve um erro ao carregar os dados.");
          return of([]);
        }
      )
    );
  }

  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
