import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  Nome!: string;
  Cpf!: string;
  DataNascimento!: string;
  Senha!: string;

  constructor(private router: Router, private service: UsuarioService) { }

  ngOnInit(): void 
  {
  }

  cadastrar(): void
  {
    let usuario: Usuario = {
      Nome: this.Nome,
      Senha: this.Senha,
      Cpf: this.Cpf,
      DataNascimento: this.DataNascimento,

    }
    this.service.create(usuario).subscribe(usuario => {
      console.log(usuario)
      this.router.navigate([""])
    }
    );
    
  }

}
