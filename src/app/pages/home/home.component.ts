import { Usuario } from 'src/app/models/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Quarto } from '../../models/Quarto';
import { QuartoService } from '../../services/quarto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quartos : Quarto[] = [];

  // quarto : Quarto = 
  // {
  //   nomeQuarto: '',
  //   tipoDeCamas: '',
  //   imagemQuarto: '',
  //   preco:''
  // };

  usuario: Usuario = {      
    nome: '',
    senha: '',
    cpf: '',
    dataNascimento: '' 
  };

  constructor(private router: Router,private service: QuartoService, private route: ActivatedRoute) 
  {
    this.route.queryParams.subscribe(params => {
   
      this.usuario.id = params["Id"]
      this.usuario.nome = params["Nome"]
      this.usuario.cpf = params["Cpf"]
      this.usuario.senha = params["Senha"]
      this.usuario.dataNascimento = params["DataNascimento"]
     
      console.log(this.usuario);
  });
  this.route.queryParams.subscribe(params => {
   
    this.quartos= params["Id"]
  
   
    console.log(this.usuario);
});
  }

  ngOnInit(): void {
    this.service.list().subscribe((quarto) => { 
      this.quartos = quarto;
      console.log(quarto)
      console.log("BATATA", this.usuario)
    })

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
