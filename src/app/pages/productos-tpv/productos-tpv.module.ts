import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosTpvPageRoutingModule } from './productos-tpv-routing.module';

import { ProductosTpvPage } from './productos-tpv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosTpvPageRoutingModule
  ],
  declarations: [ProductosTpvPage]
})
export class ProductosTpvPageModule {}
