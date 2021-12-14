import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/componente';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{

  componentes: Componente[];

  constructor(private menu: MenuController,
              private service: DataService) {

   }
  ngOnInit() {
    this.getOpcionesMenu();
  }

  
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  getOpcionesMenu() {
   this.service.getMenuOpts().then(opciones => {
     this.componentes = opciones as Componente[];
   });
  }

}


