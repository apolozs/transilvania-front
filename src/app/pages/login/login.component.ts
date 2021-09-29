import { usuarioService } from "src/app/services/usuario.service";
import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { Login } from "src/app/models/Login";
import { Usuario } from "src/app/models/Usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  cpf!: string;
  senha!: string;
  acesso: Login = { Cpf: "", Senha: "" };
  usuario: Usuario = {  
    id: 1,    
    nome: 'batata',
    senha: 'pasta',
    cpf: '123',
    dataNascimento: '2000-06-19T00:00:00' 
  };

  constructor(private router: Router, private service: usuarioService) {}

  ngOnInit(): void {}

  login(): void {
    let login: Login = {
      Senha: this.senha,
      Cpf: this.cpf,
    };

    this.service.login(login).subscribe((userInfos) => {
     
     
      this.usuario = userInfos
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
      
    });
   

  
  }

  goToLogin() {
    this.router.navigate(["/cadastro"]);
  }
}
