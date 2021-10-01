import { Quarto } from 'src/app/models/Quarto';
import {Adicionais} from './Adicionais';
import { Usuario } from './Usuario';
export interface Reserva {
  Id?: number;
  Quarto?:{ id: number };
  // Quarto?: Quarto;
  // Usuario?: Usuario;
  Usuario?:{ id: number };
  Adicionais?: Adicionais[];
  checkIn?: Date;
  checkOut?: Date;
}
