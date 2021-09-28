import { usuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cpf!: string;
  senha!: string;

  constructor(
    private router: Router,
    private service: usuarioService
  ) { }

  ngOnInit(): void 
  {
  }

  // login(): void {

  //   let login: Login = 
  //   {
  //     Senha: this.senha,
  //     Cpf: this.cpf,
  //   }

  //   this.service.login(login).subscribe((login) => {
  //     console.log(login)
  //     this.router.navigate(['/home'])
      
  //   },
  //   error => 
  //   {
  //     console.error(error);
  //   }
    
    
  //   );
  //   }

  goToLogin() 
  {
    this.router.navigate(['/cadastro']);
  }

}
