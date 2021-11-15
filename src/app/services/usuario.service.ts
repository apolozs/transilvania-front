import { Login } from "./../models/Login";
import { Observable } from "rxjs";
import { Usuario } from "../models/Usuario";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class usuarioService {
  private usuarioAutenticado: boolean = false;
  private baseURL = "https://localhost:5001/api/usuario";
  private variavel: Login = { Cpf: "", Senha: "" };

  constructor(private http: HttpClient) {}

  criar(contato: any) {
    return this.http.post(`${this.baseURL}/create`, contato);
  }

  update(usuario: Usuario): Observable<Usuario[]> {
    return this.http.put<Usuario[]>(`${this.baseURL}/update`, usuario);
  }

  /** GET heroes from the server */
  login(login: Login): Observable<Usuario> {
    return this.http.get<Usuario>(
      `${this.baseURL}/login/${login.Cpf}/${login.Senha}`
    );
  }

  delete(id: any): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.baseURL}/delete/${id}`);
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/getUsuarioById/${id}`);
  }
}
