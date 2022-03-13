import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  titulo = 'Dashboard';

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