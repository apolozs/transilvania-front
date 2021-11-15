import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { usuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
    id!: number;  
    Nome!: string;
    Senha!: string;
    Cpf!: string;
    DataNascimento!: string;

    usuario: Usuario = {      
      nome: '',
      senha: '',
      cpf: '',
      dataNascimento: '' 
    };
 

  constructor(private service: usuarioService, private router: Router, private route: ActivatedRoute) 
  {
    this.route.queryParams.subscribe(params => {
   
      this.usuario.id = params["Id"]
      this.usuario.nome = params["Nome"]
      this.usuario.cpf = params["Cpf"]
      this.usuario.senha = params["Senha"]
      this.usuario.dataNascimento = params["DataNascimento"]
     
      // console.log(this.usuario);
  });
  }

  ngOnInit(): void {
  }

  update(): void {
    let usuario : Usuario = 
    {
      id: this.usuario.id,
      nome: this.Nome,
      senha: this.Senha,
      cpf: this.Cpf,
      dataNascimento: this.DataNascimento,
    }

    this.service.update(usuario).subscribe((usuario) => {
      // console.log(usuario)
      
    });
  }

  passToPerfil () 
  {
    let informacoes: NavigationExtras = {
      queryParams: 
      {
      
        "Nome": this.usuario.nome,
        "Senha": this.usuario.senha,
        "Cpf": this.usuario.cpf,
        "DataNascimento": this.usuario.dataNascimento,
        "Id": this.usuario.id
      
      }
  }

  this.router.navigate(['/perfil'], informacoes);
 }

 passToSuasReservas(){
  let informacoes: NavigationExtras = {
    queryParams: 
    {

    "Nome": this.usuario.nome,
    "Senha": this.usuario.senha,
    "Cpf": this.usuario.cpf,
    "DataNascimento": this.usuario.dataNascimento,
    "Id": this.usuario.id
    
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
    "Senha": this.usuario.senha,
    "Cpf": this.usuario.cpf,
    "DataNascimento": this.usuario.dataNascimento,
    "Id": this.usuario.id
      
    }
  };
    this.router.navigate(['/home'], navigationExtras);
  
  }

}
