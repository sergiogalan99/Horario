import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage {

  protected grupos;
  protected estudioSeleccionado;

  constructor(public router: Router, private datos: DatosService) {
    this.estudioSeleccionado = this.router.getCurrentNavigation().extras.state.estudioSeleccionado;
    this.datos.getDataBaseState().subscribe(rdy => {
      if (rdy) {
        this.getGrupos(this.estudioSeleccionado);
      }
    });
  }

  getGrupos(estudioSeleccionado: string) {
    this.datos.getGrupos(estudioSeleccionado).then((data) => {
      this.grupos = data;
    });
  }
  public enviarGrupoEstudio(grupoSeleccionado) {

    let navigationExtras: NavigationExtras = {
      state: {
        estudioSeleccionado: this.estudioSeleccionado,
        grupoSeleccionado: grupoSeleccionado
      }
    }
    this.router.navigate(['cuadrante-horario'], navigationExtras);
  }

}
