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
    Nome: 'batata',
    Senha: 'pasta',
    Cpf: '123',
    DataNascimento: '12/12/12' 
  };

  constructor(private router: Router, private service: usuarioService) {}

  ngOnInit(): void {}

  login(): void {
    let login: Login = {
      Senha: this.senha,
      Cpf: this.cpf,
    };

    this.service.login(login).subscribe(
      (userInfos) => {
        console.log(this.usuario.Nome);
        let navigationExtras: NavigationExtras = {
          queryParams: 
          {
           user: this.usuario
          }
      };
      this.router.navigate(['/home'], navigationExtras);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  goToLogin() {
    this.router.navigate(["/cadastro"]);
  }
}
