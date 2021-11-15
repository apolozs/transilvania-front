import { Reserva } from 'src/app/models/Reserva';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {Quarto} from "../models/Quarto";
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseURL = "https://localhost:5001/api/reserva";
  private listReserva!: Observable<Reserva[]>;

  constructor(private http: HttpClient) { }


  create(idUsuario: any, idQuarto: any, reserva: Reserva): Observable<Reserva> {
      console.log(idUsuario, idQuarto, reserva)
      return this.http.post<Reserva>(`${this.baseURL}/create/${idUsuario}/${idQuarto}`, reserva)
  }

  list(idUsuario: any): Observable<Reserva[]> {
    this.listReserva = this.http.get<Reserva[]>(`${this.baseURL}/listbyusuario/${idUsuario}`);
    // console.log(this.listReserva)
    this.listReserva.subscribe(resolve =>{
      console.log(resolve)
    })
    return this.listReserva
  }

  delete(id: any): Observable<Reserva> {
    return this.http.delete<Reserva>(`${this.baseURL}/delete/${id}`);
  }

  update(reserva: Reserva): Observable<Reserva[]> {
    return this.http.put<Reserva[]>(`${this.baseURL}/update`, reserva);
  }

  // list(): Observable<Quarto[]> {
  //   return this.http.get<Quarto[]>(`${this.baseURL}/listquarto`);
  // }

}