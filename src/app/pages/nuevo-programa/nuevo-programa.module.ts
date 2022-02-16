import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProgramaPageRoutingModule } from './nuevo-programa-routing.module';

import { NuevoProgramaPage } from './nuevo-programa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProgramaPageRoutingModule
  ],
  declarations: [NuevoProgramaPage]
})
export class NuevoProgramaPageModule {}
