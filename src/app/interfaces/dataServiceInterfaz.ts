import { MateriaHora } from './../model/MateriaHora';
import { Horario } from '../model/Horario';

export interface DataServiceInterfaz {
    getEstudios();
    getGrupos(estudios: string);
    getHorario(grupo: string, estudios: string): Horario;
}
