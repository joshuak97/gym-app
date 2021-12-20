import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisResultadosPageRoutingModule } from './mis-resultados-routing.module';

import { MisResultadosPage } from './mis-resultados.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisResultadosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisResultadosPage]
})
export class MisResultadosPageModule {}
