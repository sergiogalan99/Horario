import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { resolve } from 'url';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
})
export class EstudiosPage {
  private estudios;
  

  constructor(public router: Router, private datos: DatosService) {
    this.datos.getDataBaseState().subscribe(rdy => {
      if (rdy) {
        this.getEstudios();
      }
    });
  }

  getEstudios() {
    this.datos.getEstudios().then((data)=>{
      this.estudios=data;
    });
  }

  public enviarEstudio(estudioSeleccionado) {
    let navigationExtras: NavigationExtras = {
      state: {
        estudioSeleccionado: estudioSeleccionado
      }
    }
    this.router.navigate(['grupos'], navigationExtras);
  }

}
