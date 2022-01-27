import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetricasPageRoutingModule } from './metricas-routing.module';

import { MetricasPage } from './metricas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetricasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MetricasPage]
})
export class MetricasPageModule {}
