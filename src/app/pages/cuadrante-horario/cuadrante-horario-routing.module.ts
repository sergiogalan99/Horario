import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuadranteHorarioPage } from './cuadrante-horario.page';

const routes: Routes = [
  {
    path: '',
    component: CuadranteHorarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuadranteHorarioPageRoutingModule {}
