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

  menuPrincipal = true;
  tituloMenu = 'Menu Principal';
  componentes: Componente[];

  constructor(private menu: MenuController,
              private route: ActivatedRoute,
              private service: DataService) {

   }
  ngOnInit() {
    this.getOpcionesMenu();
  }

  cerrarMenu() {
    this.menu.close('first').then();
  }

  cargarMenu() {
    this.route.params.subscribe(params =>{
    params['acceso'] && params['acceso'] === 'admin' ? this.getOpcionesMenuAdmin() : this.getOpcionesMenu();   
    });
  }

  mostrarMenuPrincipal() {
    this.menuPrincipal = true;
    this.tituloMenu = 'Menu Principal';
    this.getOpcionesMenu();
  }

  mostrarMenuAdministrador() {
    this.menuPrincipal = false;
    this.tituloMenu = 'Menu Administrador';
    this.getOpcionesMenuAdmin();
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

  desplegar(i: number) {
    this.componentes[i].hijosVisibles = !this.componentes[i].hijosVisibles;
  }
}


