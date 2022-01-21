import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymnasticPageRoutingModule } from './gymnastic-routing.module';

import { GymnasticnPage } from './gymnastic.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymnasticPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GymnasticnPage]
})
export class GymnasticPageModule {}
