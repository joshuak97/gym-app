import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneOnOnePageRoutingModule } from './one-on-one-routing.module';

import { OneOnOnePage } from './one-on-one.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneOnOnePageRoutingModule,
    ComponentsModule
  ],
  declarations: [OneOnOnePage]
})
export class OneOnOnePageModule {}
