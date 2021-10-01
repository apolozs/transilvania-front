import { usuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';


@Component({
  selector: 'app-usuario',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any = {      
    nome: '',
    senha: '',
    cpf: '',
    dataNascimento: '' 
  };


  constructor(private route: ActivatedRoute, private service: usuarioService, private router: Router) 
  {
    this.route.queryParams.subscribe(params => {
      this.usuario.id = params["Id"]
      this.usuario.nome = params["Nome"]
      this.usuario.cpf = params["Cpf"]
      this.usuario.dataNascimento = params["DataNascimento"]
     
      // console.log(this.usuario);
  });
  }

  ngOnInit(): void {
  }

  delete(): void {

    this.service.delete(this.usuario.id).subscribe((usuario) => 
    {      
      this.router.navigate(['']);
    });
  }

  passToAtualizar () 
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

  this.router.navigate(['/usuario'], informacoes);
 }
 


}
