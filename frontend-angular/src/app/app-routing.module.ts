import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'responsaveis' },
  {
    path: 'responsaveis',
    loadChildren: () => import('./responsaveis/responsaveis.module').then(m => m.ResponsaveisModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
