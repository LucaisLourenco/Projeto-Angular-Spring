import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResponsaveisComponent } from './containers/responsaveis/responsaveis.component';
import { ResponsavelFormComponent } from './containers/responsavel-form/responsavel-form.component';

const routes: Routes = [
  { path:'', component: ResponsaveisComponent },
  { path:'new', component: ResponsavelFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsaveisRoutingModule { }
