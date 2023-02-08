import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsavel } from '../../model/responsavel';

@Component({
  selector: 'app-responsavel-list',
  templateUrl: './responsavel-list.component.html',
  styleUrls: ['./responsavel-list.component.scss']
})
export class ResponsavelListComponent {

  @Input() responsaveis: Responsavel[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['id', 'nome', 'email', 'cpf', 'actions'];

  onAdd() {
    this.add.emit(true);
  }
}