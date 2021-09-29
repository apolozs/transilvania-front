import { Usuario } from 'src/app/models/Usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quarto } from '../../models/Quarto';
import { QuartoService } from '../../services/quarto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quartos : Quarto[] = [];

  public firstname: string = "";
  public lastname: string = "";

  constructor(private router: Router,private service: QuartoService, private route: ActivatedRoute) 
  {
    this.route.queryParams.subscribe(params => {
      console.log(params.Nome)
  });
  }

  ngOnInit(): void {
    this.service.list().subscribe((quarto) => { 
      this.quartos = quarto;
      console.log(quarto)
    })
    
    // let usuario: Usuario = this.router.getCurrentNavigation().extras.state
    // console.log(usuario)

  }

}
