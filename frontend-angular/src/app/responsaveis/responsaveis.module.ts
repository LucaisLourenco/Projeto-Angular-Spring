import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ResponsaveisRoutingModule } from './responsaveis-routing.module';
import { ResponsaveisComponent } from './responsaveis/responsaveis.component';


@NgModule({
  declarations: [
    ResponsaveisComponent
  ],
  imports: [
    CommonModule,
    ResponsaveisRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ResponsaveisModule { }
