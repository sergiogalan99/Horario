import { MateriaHora } from './MateriaHora';


export class Horario {
    private _grupo: string;
    private _estudio: string;
    private _materiasTotales: MateriaHora[][];



	constructor(grupo: string, estudio: string, materiasTotales: MateriaHora[][]) {
		this._grupo = grupo;
		this._estudio = estudio;
		this._materiasTotales = materiasTotales;
	}

	public get grupo(): string {
		return this._grupo;
	}

	public get estudio(): string {
		return this._estudio;
	}

	public get materiasTotales(): MateriaHora[][] {
		return this._materiasTotales;
	}

	public set grupo(value: string) {
		this._grupo = value;
	}

	public set estudio(value: string) {
		this._estudio = value;
	}


	public set materiasTotales(value: MateriaHora[][]) {
		this._materiasTotales = value;
	}
   

}