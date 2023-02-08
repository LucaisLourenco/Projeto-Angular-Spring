import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResponsaveisComponent } from './containers/responsaveis/responsaveis.component';
import { ResponsavelFormComponent } from './containers/responsavel-form/responsavel-form.component';
import { ResponsavelResolver } from './guards/responsavel.resolver';

const routes: Routes = [
  { path: '', component: ResponsaveisComponent },
  { path: 'create', component: ResponsavelFormComponent, resolve: { responsavel: ResponsavelResolver } },
  { path: 'edit/:id', component: ResponsavelFormComponent, resolve: { responsavel: ResponsavelResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsaveisRoutingModule { }
