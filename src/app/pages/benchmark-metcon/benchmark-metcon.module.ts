import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenchmarkMetconPageRoutingModule } from './benchmark-metcon-routing.module';

import { BenchmarkMetconPage } from './benchmark-metcon.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenchmarkMetconPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BenchmarkMetconPage]
})
export class MisResultadosPageModule {}
