import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: [""]
})

export class AppComponent{
  
  title = 'Tic Tac Toe';
  isAuthenticated = false;
  
  async logout(): Promise<void> {
    // todo
  }
}


/*
export class AppComponent implements OnInit {
  teste = "TESTE"
  listquartos : Quarto[] = [];
  constructor(private service: QuartoService){}
  ngOnInit(): void {
    this.service.list().subscribe(quartos =>{
        this.listquartos = quartos;
    });
  }
  
}
*/