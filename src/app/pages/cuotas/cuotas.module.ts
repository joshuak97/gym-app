import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuotasPageRoutingModule } from './cuotas-routing.module';

import { CuotasPage } from './cuotas.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuotasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CuotasPage]
})
export class CuotasPageModule {}
