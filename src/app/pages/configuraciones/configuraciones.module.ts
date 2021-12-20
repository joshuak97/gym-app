import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionesPageRoutingModule } from './configuraciones-routing.module';

import { ConfiguracionesPage } from './configuraciones.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfiguracionesPage]
})
export class ConfiguracionesPageModule {}
