import {Usuario} from "../models/Usuario";
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class usuarioService {
    private baseURL = "https://localhost:5001/api/usuario";

    constructor(private http: HttpClient) { }

    criar(contato: any){
        return this.http.post(`${this.baseURL}/create`, contato);
    }
}
  
