import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private route: ActivatedRoute,
              private service: DataService) {

   }
  ngOnInit() {
    this.getOpcionesMenu();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  cargarMenu() {
    this.route.params.subscribe(params =>{
    params['acceso'] && params['acceso'] === 'admin' ? this.getOpcionesMenuAdmin() : this.getOpcionesMenu();   
    });
  }

  getOpcionesMenu() {
   this.service.getMenuOpts().then(opciones => {
     this.componentes = opciones as Componente[];
   });
  }

  getOpcionesMenuAdmin() {
    this.service.getMenuOptsAdmin().then(opciones => {
      this.componentes = opciones as Componente[];
    });
   }

}


