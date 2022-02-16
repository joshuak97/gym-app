import { Component, OnInit } from '@angular/core';
import {Programas} from "../../../models/programas";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-nuevo-programa',
  templateUrl: './nuevo-programa.component.html',
  styleUrls: ['./nuevo-programa.component.scss'],
})
export class NuevoProgramaComponent implements OnInit {
    titulo = 'Nuevo Programa';
    programa = {} as Programas;

  constructor(private modalController: ModalController) {

  }

  ngOnInit() {}

  cerrarModal() {
    this.modalController.dismiss();
  }

  guardarPrograma() {

  }
}
