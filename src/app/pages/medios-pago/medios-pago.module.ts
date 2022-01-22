import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediosPagoPageRoutingModule } from './medios-pago-routing.module';

import { MediosPagoPage } from './medios-pago.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediosPagoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MediosPagoPage]
})
export class MediosPagoPageModule {}
