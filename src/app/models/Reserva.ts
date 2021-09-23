import { Data } from '@angular/router';
import {Adicionais} from './Adicionais';
export interface Reserva {
  Id: number;
  Quarto:{ id:number };
  Usuario:{ id:number };
  Adicionais: Adicionais[];
  CheckIn: Data;
  CheckOut: Data;



}
