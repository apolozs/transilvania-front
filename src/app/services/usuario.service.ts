import { Observable } from 'rxjs';
import { Usuario } from './../models/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL = "https://localhost:5001/api/usuario";

  constructor(private http: HttpClient) { }

  create(usuario: Usuario) : Observable<Usuario>
  {
    return this.http.post<Usuario>(`${this.baseURL}/create`, usuario);
  }

}
