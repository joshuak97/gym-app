import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturacionPageRoutingModule } from './facturacion-routing.module';

import { FacturacionPage } from './facturacion.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FacturacionPage]
})
export class FacturacionPageModule {}
