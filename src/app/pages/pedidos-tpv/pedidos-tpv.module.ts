import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosTpvPageRoutingModule } from './pedidos-tpv-routing.module';

import { PedidosTpvPage } from './pedidos-tpv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosTpvPageRoutingModule
  ],
  declarations: [PedidosTpvPage]
})
export class PedidosTpvPageModule {}
