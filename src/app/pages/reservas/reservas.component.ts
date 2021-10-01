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

  // reserva: Reserva = {      
  //   Id:0
  // };


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

  passToPerfil(){
    let informacoes: NavigationExtras = {
      queryParams: 
      {
      "IdUsuario": this.usuario.id,
      }
  }
  this.router.navigate(['/perfil'], informacoes);
 }

 passToHome(){
  let navigationExtras: NavigationExtras = {
    queryParams: 
    {
    
    "Nome": this.usuario.nome,
    // "Senha": this.usuario.senha,
    "Cpf": this.usuario.cpf,
    "DataNascimento": this.usuario.dataNascimento,
    "Id": this.usuario.id
      
    }
  };
    this.router.navigate(['/home'], navigationExtras);
  
  }

 delete(idReserva: any): void {

  this.serviceReserva.delete(idReserva).subscribe((reserva) => 
  {      
    console.log(reserva)
    this.router.navigate(['/home']);
  });
}


passToReservas(){
  let informacoes: NavigationExtras = {
    queryParams: 
    {
    "IdUsuario": this.usuario.id,
    }
}


  // console.log("BATATA", id,)
  this.router.navigate(['/reservas'], informacoes);
}



}
