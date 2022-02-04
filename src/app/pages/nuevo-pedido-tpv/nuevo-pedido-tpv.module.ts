import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPedidoTpvPageRoutingModule } from './nuevo-pedido-tpv-routing.module';

import { NuevoPedidoTpvPage } from './nuevo-pedido-tpv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPedidoTpvPageRoutingModule
  ],
  declarations: [NuevoPedidoTpvPage]
})
export class NuevoPedidoTpvPageModule {}
