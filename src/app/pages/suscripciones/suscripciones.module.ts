import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuscripcionesPageRoutingModule } from './suscripciones-routing.module';

import { SuscripcionesPage } from './suscripciones.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuscripcionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SuscripcionesPage]
})
export class SuscripcionesPageModule {}
