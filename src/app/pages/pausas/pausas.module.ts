import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PausasPageRoutingModule } from './pausas-routing.module';

import { PausasPage } from './pausas.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PausasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PausasPage]
})
export class PausasPageModule {}
