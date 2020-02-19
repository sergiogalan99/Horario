
import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataServiceInterfaz } from '../interfaces/dataServiceInterfaz';
import { MateriaHora } from '../model/MateriaHora';
import { Horario } from '../model/Horario';

@Injectable({
  providedIn: 'root'
})

export class DatosService implements DataServiceInterfaz {

  private _estudioSeleccionado: string;
  protected asignaturas: any;

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private plt: Platform, private sqlite: SQLite) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'Horario16c.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.dbReady.next(true);
        });
    });

  }
  getDataBaseState() {
    return this.dbReady.asObservable();
  }

  getEstudios() {
    let estudios = [];
    return new Promise((resolve) => {
      this.database.executeSql("SELECT * FROM estudios", []).then((datos) => {
        if (datos.rows.length > 0) {
          for (let i = 0; i < datos.rows.length; i++) {
            estudios.push({
              idEstudios: datos.rows.item(i).idEstudios,
              nombre: datos.rows.item(i).nombre
            });
          }
        }
      });
      console.log(estudios);
      resolve(estudios);
    })
  }

  getGrupos(estudiosParams: string) {
    let grupos = [];
    return new Promise((resolve) => {
      this.database.executeSql('SELECT * FROM grupo WHERE grupo.idEstudios = (SELECT idEstudios FROM estudios WHERE nombre=?)', [estudiosParams]).then((datos) => {
        if (datos.rows.length > 0) {
          for (let i = 0; i < datos.rows.length; i++) {
            grupos.push({
              idGrupo: datos.rows.item(i).idGrupo,
              nombre: datos.rows.item(i).nombre,
            });
          }
        }
      });
      console.log(grupos);
      resolve(grupos);
    })
  }

  sqlHorario(hora: string, dia: string, grupo: string) {

    return new Promise((resolve, reject) => {
      this.database.executeSql("SELECT * FROM materia WHERE idMateria IN (SELECT idMateria FROM materiahoraclase WHERE idHoraClase = (SELECT idHoraClase FROM horaClase WHERE idHorasSemana=? AND idHoraClase IN (SELECT idHoraClase FROM materiahoraclase WHERE idHoraClase IN (SELECT idHoraClase FROM horaClase WHERE idDiaClase IN (SELECT idDiaClase FROM diaClase WHERE  idDiaSemana=? and idGrupo=(SELECT idGrupo FROM grupo WHERE nombre=?))))))", [hora, dia, grupo])
        .then(
          (data) => {
            let arrayMateria = [];
            if (data.rows.length > 0) {
              for (var i = 0; i < data.rows.length; i++) {
                arrayMateria.push({
                  idMateria: data.rows.item(i).idMateria,
                  nombre: data.rows.item(i).nombre,
                  completo: data.rows.item(i).completo,
                });
              }
              console.log(arrayMateria);
              resolve(arrayMateria);
            }
          })
        .catch((error) => {
          reject(error);
        });
    });

  }

  getMaterias(hora: string, dia: string, grupo: string): string[] {
    let asignaturas = [];
    this.sqlHorario(hora, dia, grupo).then((data) => {
      asignaturas.push(data);

    }).catch(() => {
      return null;
    });
    return asignaturas;

  }

  getHoras(grupo: string): MateriaHora[][] {
    let _horas: MateriaHora[][];

    _horas = [
      [new MateriaHora(this.getMaterias('1', '1', grupo)), new MateriaHora(this.getMaterias('1', '2', grupo)), new MateriaHora(this.getMaterias('1', '3', grupo)), new MateriaHora(this.getMaterias('1', '4', grupo)), new MateriaHora(this.getMaterias('1', '5', grupo))],
      [new MateriaHora(this.getMaterias('2', '1', grupo)), new MateriaHora(this.getMaterias('2', '2', grupo)), new MateriaHora(this.getMaterias('2', '3', grupo)), new MateriaHora(this.getMaterias('2', '4', grupo)), new MateriaHora(this.getMaterias('2', '5', grupo))],
      [new MateriaHora(this.getMaterias('3', '1', grupo)), new MateriaHora(this.getMaterias('3', '2', grupo)), new MateriaHora(this.getMaterias('3', '3', grupo)), new MateriaHora(this.getMaterias('3', '4', grupo)), new MateriaHora(this.getMaterias('3', '5', grupo))],
      [new MateriaHora(this.getMaterias('4', '1', grupo)), new MateriaHora(this.getMaterias('4', '2', grupo)), new MateriaHora(this.getMaterias('4', '3', grupo)), new MateriaHora(this.getMaterias('4', '4', grupo)), new MateriaHora(this.getMaterias('4', '5', grupo))],
      [new MateriaHora(this.getMaterias('5', '1', grupo)), new MateriaHora(this.getMaterias('5', '2', grupo)), new MateriaHora(this.getMaterias('5', '3', grupo)), new MateriaHora(this.getMaterias('5', '4', grupo)), new MateriaHora(this.getMaterias('5', '5', grupo))],
      [new MateriaHora(this.getMaterias('6', '1', grupo)), new MateriaHora(this.getMaterias('6', '2', grupo)), new MateriaHora(this.getMaterias('6', '3', grupo)), new MateriaHora(this.getMaterias('6', '4', grupo)), new MateriaHora(this.getMaterias('5', '5', grupo))]
    ];

    return _horas;
  }

  getHorario(grupo: string, estudioSeleccionado: string): Horario {
    let _horas: MateriaHora[][];
    _horas = this.getHoras(grupo);
    return new Horario(grupo, estudioSeleccionado, _horas);
  }



 

  
}