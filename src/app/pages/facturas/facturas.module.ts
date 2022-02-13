import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturasPageRoutingModule } from './facturas-routing.module';

import { FacturasPage } from './facturas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FacturasPageRoutingModule,
        ComponentsModule
    ],
    exports: [
        FacturasPage
    ],
    declarations: [FacturasPage]
})
export class FacturasPageModule {}
