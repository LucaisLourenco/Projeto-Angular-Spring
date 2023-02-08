import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsavel } from '../model/responsavel';

@Component({
  selector: 'app-responsavel-list',
  templateUrl: './responsavel-list.component.html',
  styleUrls: ['./responsavel-list.component.scss']
})
export class ResponsavelListComponent {

  @Input() responsaveis: Responsavel[] = [];

  readonly displayedColumns = ['id', 'nome', 'email', 'cpf', 'actions'];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
