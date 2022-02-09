import { Component, OnInit } from '@angular/core';
import {Perfil} from "../../models/perfil";

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
    titulo = 'Cuenta';
    pagina = 'perfil';

  constructor() {
    // void
  }

  ngOnInit() {
    // void
  }

  cambiarPagina(ev: any) {
    this.pagina = ev.detail.value;
  }
}
