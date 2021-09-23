import { Injectable } from '@angular/core';
import {Quarto} from "../models/Quarto";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuartoService {
  private baseURL = "https://localhost:5001/api/Quarto";

  constructor(private http: HttpClient) { }


  list(): Observable<Quarto[]> {
      return this.http.get<Quarto[]>(`${this.baseURL}/listquarto`);
  }

}
