import { Horario } from './../../model/Horario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/services/datos.service';
import { ToastController } from '@ionic/angular';
import { MateriaHora } from 'src/app/model/MateriaHora';

@Component({
  selector: 'app-cuadrante-horario',
  templateUrl: './cuadrante-horario.page.html',
  styleUrls: ['./cuadrante-horario.page.scss'],
})
export class CuadranteHorarioPage {


  protected horarioFinal: Horario;
  public arrayDias = [0, 1, 2, 3, 4];
  public arrayHoras = [0, 1, 2, 3, 4, 5];
  public grupoSeleccionado: string;
  public estudioSeleccionado: string;





  constructor(public router: Router, private datos: DatosService, public toastController: ToastController) {
    this.grupoSeleccionado = this.router.getCurrentNavigation().extras.state.grupoSeleccionado;
    this.estudioSeleccionado = this.router.getCurrentNavigation().extras.state.estudioSeleccionado;
    this.horarioFinal = this.datos.getHorario(this.grupoSeleccionado, this.estudioSeleccionado);

  }






  nombreToast(materiaPinchada: MateriaHora) {
    this.presentToast(materiaPinchada);
  }

  async presentToast(item) {


    let mensaje = '';
    item.forEach(element => {
      mensaje = mensaje + ' ' + element.completo + '\n';
    })
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000,
      color: "dark",
     
    });
    toast.present();
  }
}
