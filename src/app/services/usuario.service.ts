import { Login } from './../models/Login';
import { Observable } from 'rxjs';
import {Usuario} from "../models/Usuario";
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class usuarioService {

    private usuarioAutenticado: boolean = false;
    private baseURL = "https://localhost:5001/api/usuario";

    private variavel:  Login = 
    {
      Senha: '',
      Cpf: ''
    }

    constructor(private http: HttpClient) { }

    criar(contato: any){
        return this.http.post(`${this.baseURL}/create`, contato);
    }

    update(usuario: Usuario): Observable<Usuario[]>{
        return this.http.put<Usuario[]>(`${this.baseURL}/update`, usuario);
    }

    // login(login: Login): Observable<Login> 
    // {
      
        // try {
            
        // } catch (error) {
            
        // }
    //   return this.http.get<Login>(`${this.baseURL}/login/${login.Cpf}/${login.Senha}`).subscribe(result => this.variavel = result  );
                    

    
    }
        


// }
  
