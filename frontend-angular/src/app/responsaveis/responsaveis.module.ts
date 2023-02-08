import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ResponsaveisRoutingModule } from './responsaveis-routing.module';
import { ResponsaveisComponent } from './containers/responsaveis/responsaveis.component';
import { ResponsavelFormComponent } from './containers/responsavel-form/responsavel-form.component';
import { ResponsavelListComponent } from './components/responsavel-list/responsavel-list.component';

@NgModule({
  declarations: [
    ResponsaveisComponent,
    ResponsavelFormComponent,
    ResponsavelListComponent
  ],
  imports: [
    CommonModule,
    ResponsaveisRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ResponsaveisModule { }
