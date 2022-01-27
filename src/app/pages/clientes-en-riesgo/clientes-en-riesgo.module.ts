import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesEnRiesgoPageRoutingModule } from './clientes-en-riesgo-routing.module';

import { ClientesEnRiesgoPage } from './clientes-en-riesgo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesEnRiesgoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClientesEnRiesgoPage]
})
export class ClientesEnRiesgoPageModule {}
