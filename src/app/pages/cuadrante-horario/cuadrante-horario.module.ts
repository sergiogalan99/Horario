import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuadranteHorarioPageRoutingModule } from './cuadrante-horario-routing.module';

import { CuadranteHorarioPage } from './cuadrante-horario.page';
import { DiasPipe } from 'src/app/pipes/dias.pipe';
import { HorasPipe } from 'src/app/pipes/horas.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuadranteHorarioPageRoutingModule
  ],
  declarations: [CuadranteHorarioPage, DiasPipe, HorasPipe]
})
export class CuadranteHorarioPageModule {}
