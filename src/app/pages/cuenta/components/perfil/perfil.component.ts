import { Component, OnInit } from '@angular/core';
import {Perfil} from "../../../../models/perfil";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  perfil = {} as Perfil;

  constructor() { }

  ngOnInit() {}



  mostrarFotoPerfil() {
    if (!this.perfil.logo_gym) {
      return '/assets/shapes.svg';
    } else {
      return this.perfil.logo_gym;
    }
  }

}
