import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 
  avisos = [];

  visualizarAvisos = true;
  visualizarClases = false;
  fechaSelected: string;
  claseSelected: number;

  constructor() {}

  ngOnInit() {
  // Metodo vacio
  }

  mostrarAvisos() {
    this.visualizarAvisos = !this.visualizarAvisos;
  }

  mostrarClases(){
    this.visualizarClases = !this.visualizarClases;
  }

}
