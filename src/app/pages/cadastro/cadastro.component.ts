
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { usuarioService } from '../../services/usuario.service'
import { Usuario  } from 'src/app/models/Usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = {      
    nome: '',
    senha: '',
    cpf: '',
    dataNascimento: '' 
  };

  constructor(private service: usuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = {
      nome: '',
      senha: '',
      cpf: '',
      dataNascimento: ''
    };    
  }

  criar(frm: FormGroup) {
    console.log(this.usuario)
    this.service.criar(this.usuario).subscribe(resposta => {
      // console.log('teste')
      this.router.navigate(["/login"]);
      
      frm.reset();
    });
  }
  
}
