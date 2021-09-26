import { Component, OnInit } from '@angular/core';
import { Quarto } from '../../models/Quarto';
import { QuartoService } from '../../services/quarto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quartos : Quarto[] = [];

  constructor(private servive: QuartoService) { }

  ngOnInit(): void {
    this.servive.list().subscribe((quarto) => { 
      this.quartos = quarto;
      console.log(quarto)
    })
  }

}
