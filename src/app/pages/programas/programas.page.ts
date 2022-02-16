import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NuevoProgramaComponent} from "./nuevo-programa/nuevo-programa.component";
import {Programas} from "../../models/programas";

@Component({
  selector: 'app-programas',
  templateUrl: './programas.page.html',
  styleUrls: ['./programas.page.scss'],
})
export class ProgramasPage implements OnInit {

  titulo = 'Programas';
  programa = {} as Programas;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: NuevoProgramaComponent
    });
    return await modal.present();
  }

  async editarModal(programa: Programas) {
    const modal = await this.modalController.create({
      component: NuevoProgramaComponent,
      componentProps: {
        preguntas: programa
      }
    });
    return await modal.present();
  }

}
