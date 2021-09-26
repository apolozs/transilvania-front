
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { usuarioService } from '../../services/usuario.service'
import { Usuario  } from 'src/app/models/Usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = {       
    Nome: '',
    Senha: '',
    Cpf: '',
    DataNascimento: '' 
  };

  constructor(private service: usuarioService) { }

  ngOnInit(): void {
    this.usuario = {
      Nome: '',
      Senha: '',
      Cpf: '',
      DataNascimento: ''
    };    
  }

  criar(frm: FormGroup) {
    console.log(this.usuario)
    this.service.criar(this.usuario).subscribe(resposta => {
      console.log('teste')
      
      frm.reset();
    });
  }
  
}
