import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-activos',
  templateUrl: './clientes-activos.page.html',
  styleUrls: ['./clientes-activos.page.scss'],
})
export class ClientesActivosPage implements OnInit {

  titulo = 'Clientes activos';

  constructor() { }

  ngOnInit() {
  }

}
