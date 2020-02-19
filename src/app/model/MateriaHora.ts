export class MateriaHora {
	private _materias: string[];



	constructor(materias: string[]) {
		this._materias = materias;
	
	}


    /**
     * Getter materias
     * @return {string[]}
     */
	public get materias(): string[] {
		return this._materias;
	}

 

    /**
     * Setter materias
     * @param {string[]} value
     */
	public set materias(value: string[]) {
		this._materias = value;
	}

   

}