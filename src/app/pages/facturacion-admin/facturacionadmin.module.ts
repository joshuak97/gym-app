import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturacionAdminPageRoutingModule } from './facturacionadmin-routing.module';

import { FacturacionAdminPage } from './facturacionadmin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturacionAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FacturacionAdminPage]
})
export class FacturacionAdminPageModule {}
