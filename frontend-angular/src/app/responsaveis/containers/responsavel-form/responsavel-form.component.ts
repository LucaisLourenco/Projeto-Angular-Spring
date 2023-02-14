import { Responsavel } from './../../model/responsavel';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { ResponsaveisService } from '../../services/responsaveis.service';

@Component({
  selector: 'app-responsavel-form',
  templateUrl: './responsavel-form.component.html',
  styleUrls: ['./responsavel-form.component.scss']
})
export class ResponsavelFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    cpf: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: ResponsaveisService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const responsavel: Responsavel = this.route.snapshot.data['responsavel'];
    this.form.setValue({
      id: responsavel.id,
      nome: responsavel.nome,
      cpf: responsavel.cpf,
      email: responsavel.email
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Responsável salvo com sucesso.', '', { duration: 5000 });
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar responsável.', '', { duration: 5000 });
  }

}
