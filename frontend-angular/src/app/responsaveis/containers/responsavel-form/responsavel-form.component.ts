import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ResponsaveisService } from '../../services/responsaveis.service';

@Component({
  selector: 'app-responsavel-form',
  templateUrl: './responsavel-form.component.html',
  styleUrls: ['./responsavel-form.component.scss']
})
export class ResponsavelFormComponent {

  form = this.formBuilder.group({
    nome: [''],
    email: [''],
    cpf: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ResponsaveisService,
    private snackBar: MatSnackBar,
    private location: Location) {
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso.', '', { duration: 5000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar responsável.', '', { duration: 5000 });
  }
}
