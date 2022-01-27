import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesActivosPageRoutingModule } from './clientes-activos-routing.module';

import { ClientesActivosPage } from './clientes-activos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesActivosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClientesActivosPage]
})
export class ClientesActivosPageModule {}
