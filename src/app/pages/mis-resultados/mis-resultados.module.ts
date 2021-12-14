import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisResultadosPageRoutingModule } from './mis-resultados-routing.module';

import { MisResultadosPage } from './mis-resultados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisResultadosPageRoutingModule
  ],
  declarations: [MisResultadosPage]
})
export class MisResultadosPageModule {}
