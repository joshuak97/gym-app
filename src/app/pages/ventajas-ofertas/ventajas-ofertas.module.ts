import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentajasOfertasPageRoutingModule } from './ventajas-ofertas-routing.module';

import { VentajasOfertasPage } from './ventajas-ofertas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentajasOfertasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VentajasOfertasPage]
})
export class VentajasOfertasPageModule {}
