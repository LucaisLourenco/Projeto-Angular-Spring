import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Responsavel } from '../../model/responsavel';

@Component({
  selector: 'app-responsavel-list',
  templateUrl: './responsavel-list.component.html',
  styleUrls: ['./responsavel-list.component.scss']
})
export class ResponsavelListComponent {

  @Input() responsaveis: Responsavel[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'email', 'cpf', 'actions'];

  onAdd() {
    this.add.emit(true);
  }

  onEdit(responsavel: Responsavel) {
    this.edit.emit(responsavel);
  }

  onDelete(responsavel: Responsavel) {
    this.delete.emit(responsavel);
  }
}
