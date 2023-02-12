import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Responsavel } from '../../model/responsavel';
import { ResponsaveisService } from '../../services/responsaveis.service';

@Component({
  selector: 'app-responsaveis',
  templateUrl: './responsaveis.component.html',
  styleUrls: ['./responsaveis.component.scss']
})
export class ResponsaveisComponent {

  responsaveis$: Observable<Responsavel[]> | null = null;

  constructor(
    private responsaveisService: ResponsaveisService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {

    this.refresh();
  }

  refresh() {
    this.responsaveis$ = this.responsaveisService.list().pipe(
      catchError(error => {
        this.onError("Ouve um erro ao carregar os dados.");
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  onEdit(responsavel: Responsavel) {
    this.router.navigate(['edit', responsavel.id], { relativeTo: this.route });
  }

  onDelete(responsavel: Responsavel) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Deseja remover este responsável?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.responsaveisService.delete(responsavel.id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Resposável removido com sucesso.', 'x', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          error => this.onError('Ouve um erro ao remover o responsável.')
        )
      }
    });
  }

}
