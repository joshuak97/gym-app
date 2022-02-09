import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaPageRoutingModule } from './cuenta-routing.module';

import { CuentaPage } from './cuenta.page';
import {ComponentsModule} from "../../components/components.module";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {ConfigComponent} from "./components/config/config.component";
import {FacturasComponent} from "./components/facturas/facturas.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CuentaPage,PerfilComponent,ConfigComponent,FacturasComponent]
})
export class CuentaPageModule {}
