import { Component, OnInit } from '@angular/core';
import { Quarto } from 'src/app/models/Quarto';
import { QuartoService } from 'src/app/services/quarto.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  quartos : Quarto[] = [];

    Nome!: string;
    // Senha!: string;
    // Cpf!: string;
    // DataNascimento!: string;
    // onKey(ReservaComponent) {const inputValue = ReservaComponent.;}
   
  constructor(private service: QuartoService) { }

  ngOnInit(): void {
    this.service.list().subscribe((quarto) => { 
      this.quartos = quarto;
      console.log(quarto)
    })
    console.log(this.quartos)
  }

}
