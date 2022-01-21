import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-reservas',
  templateUrl: './mis-reservas.page.html',
  styleUrls: ['./mis-reservas.page.scss'],
})
export class MisReservasPage implements OnInit {

  titulo = 'Mis Reservas';

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
