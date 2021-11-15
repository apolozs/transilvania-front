import { ReservaService } from './../../services/reserva.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Quarto } from 'src/app/models/Quarto';
import { Reserva } from 'src/app/models/Reserva';
import { Usuario } from 'src/app/models/Usuario';
import { QuartoService } from 'src/app/services/quarto.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  quartos : Quarto[] = [];

    Nome!: string;
    dataFim!: Date;
    dataInicio!: Date;
   
    quarto : Quarto = 
    {
      nomeQuarto: '',
      tipoDeCamas: '',
      imagemQuarto: '',
    };

    usuario: Usuario = {      
      nome: '',
      senha: '',
      cpf: '',
      dataNascimento: '' 
    };

   
  constructor(private service: QuartoService, private serviceReserva: ReservaService, private router: Router, private route: ActivatedRoute) 
  {
    this.route.queryParams.subscribe(params => {
   
      this.quarto.id= params["IdQuarto"]
      this.quarto.nomeQuarto= params["Nome"]
      this.usuario.id= params["Id"]
      this.usuario.nome= params["NomeUsuario"]
      // console.log(params);
    });
  }

  ngOnInit(): void {
    this.service.list().subscribe((quarto) => { 
      this.quartos = quarto;
      // console.log(quarto)
    })
    // console.log(this.quartos)
  }

  create()
  {
    let reserva: Reserva =  {
      checkIn: this.dataInicio,
      checkOut: this.dataFim
    }

    this.serviceReserva.create(this.usuario.id!, this.quarto.id!, reserva).subscribe((response) =>{
      console.log(response)
    }) 

    let informacoes: NavigationExtras = {
      queryParams: 
      {
      "Id": this.usuario.id,
      }
  }

    this.router.navigate(['/reservas'], informacoes);

   
  }

  passToReservas(){
    let informacoes: NavigationExtras = {
      queryParams: 
      {
      "Id": this.usuario.id,
      }
  }
  

    // console.log("BATATA", id,)
    this.router.navigate(['/reservas'], informacoes);
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

    passToPerfil () 
  {
    let informacoes: NavigationExtras = {
        queryParams: 
        {
        
        "Nome": this.usuario.nome,
        "Cpf": this.usuario.cpf,
        "DataNascimento": this.usuario.dataNascimento,
        "Id": this.usuario.id
        
        }
    }
    this.router.navigate(['/perfil'], informacoes);
  }
 
}
