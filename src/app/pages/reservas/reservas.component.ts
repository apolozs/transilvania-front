import { Reserva } from 'src/app/models/Reserva';
import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Quarto } from 'src/app/models/Quarto';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  reservas : Reserva[] = [];

  usuario: Usuario = {      
    nome: '',
    senha: '',
    cpf: '',
    dataNascimento: '' 
  };

  constructor(private serviceReserva: ReservaService,private route: ActivatedRoute,private router: Router) 
  {
    this.route.queryParams.subscribe(params => {
      this.usuario.id= params["IdUsuario"]
      console.log(this.usuario.id);
    });

  }

  ngOnInit(): void {
    
    this.serviceReserva.list(this.usuario.id).subscribe((listReserva) => { 
      this.reservas = listReserva;
      // console.log("BATATA", this.usuario)
    })
  }

  passToReservas(){
    let informacoes: NavigationExtras = {
      queryParams: 
      {
      "IdUsuario": this.usuario.id,
      }
  }
  this.router.navigate(['/reservas'], informacoes);
 }
}
