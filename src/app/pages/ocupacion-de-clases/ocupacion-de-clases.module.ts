import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcupacionDeClasesPageRoutingModule } from './ocupacion-de-clases-routing.module';

import { OcupacionDeClasesPage } from './ocupacion-de-clases.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcupacionDeClasesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OcupacionDeClasesPage]
})
export class FacturacionAdminPageModule {}
