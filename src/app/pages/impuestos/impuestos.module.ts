import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpuestosPageRoutingModule } from './impuestos-routing.module';

import { ImpuestosPage } from './impuestos.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpuestosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ImpuestosPage]
})
export class ImpuestosPageModule {}
