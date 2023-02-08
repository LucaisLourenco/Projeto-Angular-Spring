import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ResponsaveisRoutingModule } from './responsaveis-routing.module';
import { ResponsaveisComponent } from './responsaveis/responsaveis.component';
import { ResponsavelFormComponent } from './responsavel-form/responsavel-form.component';

@NgModule({
  declarations: [
    ResponsaveisComponent,
    ResponsavelFormComponent
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
