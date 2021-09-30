import { Usuario } from 'src/app/models/Usuario';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  usuario: any = {      
    nome: '',
    senha: '',
    cpf: '',
    dataNascimento: '' 
  };


  constructor(private router: Router, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
      this.usuario.id = params["Id"]
      this.usuario.nome = params["Nome"]
      this.usuario.cpf = params["Cpf"]
      this.usuario.dataNascimento = params["DataNascimento"]
    });    
   }

  ngOnInit(): void {
  }


  passToHome () 
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
    this.router.navigate(['/home'], informacoes);
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

  passToSuasReservas () 
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
    this.router.navigate(['/reservas'], informacoes);
  }  

}
