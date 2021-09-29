import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
 

  constructor(private service: usuarioService) { }

  ngOnInit(): void {
  }

  update(): void {
    let usuario : Usuario = 
    {
      id: this.id,
      nome: this.Nome,
      senha: this.Senha,
      cpf: this.Cpf,
      dataNascimento: this.DataNascimento,
    }

    this.service.update(usuario).subscribe((usuario) => {
      console.log(usuario)
      
    });
  }
}
