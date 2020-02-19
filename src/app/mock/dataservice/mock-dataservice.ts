import { Horario } from './../../model/Horario';
import { MateriaHora } from './../../model/MateriaHora';
import { DataServiceInterfaz } from './../../interfaces/dataServiceInterfaz';

export class MockDataservice implements DataServiceInterfaz {

    private _arrayEstudios: string[] = ['ESO', 'BACHILLERATO', 'PCPI', 'DIV'];
    private _arrayGrupos: string[] = ['1a', '2b', '3c', '4e', '1a'];
    private _arrayDescripcion: Map<string, string> = new Map();

    private _horas: MateriaHora[][] = [
        [new MateriaHora(['ING']), new MateriaHora(['BBDD', 'LEN']), new MateriaHora(['BIO']), new MateriaHora(['LEN']), new MateriaHora(['BIO'])],
        [new MateriaHora(['MATE', 'PRO']), new MateriaHora(['BIO']), new MateriaHora(['BIO']), new MateriaHora(['BIO']), new MateriaHora(['BIO'])],
        [new MateriaHora(['ING']), new MateriaHora(['BIO']), new MateriaHora(['BIO']), new MateriaHora(['ING']), new MateriaHora(['BIO'])],
        [new MateriaHora(['FILO', 'LEN','SOC']), new MateriaHora(['SOC']), new MateriaHora(['ING']), new MateriaHora(['BIO']), new MateriaHora(['LEN'])],
        [new MateriaHora(['ING']), new MateriaHora(['BIO']), new MateriaHora(['BIO']), new MateriaHora(['ING']), new MateriaHora(['BIO'])],
        [new MateriaHora(['MATE', 'FILO']), new MateriaHora(['BIO']), new MateriaHora(['BIO']), new MateriaHora(['BIO']), new MateriaHora(['BIO'])]
    ];

    constructor() {
        this._arrayDescripcion.set('LEN', 'LENGUA');
        this._arrayDescripcion.set('ING', 'INGLES');
        this._arrayDescripcion.set('BIO', 'BIOLOGIA');
        this._arrayDescripcion.set('FILO', 'FILOSOFIA');
        this._arrayDescripcion.set('MATE', 'MATEMATICAS');
        this._arrayDescripcion.set('PRO', 'PROGRAMACION');
        this._arrayDescripcion.set('SOC', 'SOCIALES');
        this._arrayDescripcion.set('BBDD', 'BASE DE DATOS');
    }

    getEstudios(): string[] {
        return this._arrayEstudios;
    }
    getGrupos(estudios: string): string[] {
        return this._arrayGrupos;
    }
    getHorario(grupo: string): Horario {
        return new Horario(this._arrayGrupos[1], this._arrayEstudios[1], this._horas);
    }
    getDescripcion(materias: MateriaHora): string[] {
        let retorno: string[] = [];
        for (let i = 0; i < materias.materias.length; i++) {
            retorno.push(this._arrayDescripcion.get(materias.materias[i].toString().trim()));

        }

        return retorno;
    }







}