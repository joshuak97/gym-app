import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightliftingPageRoutingModule } from './weightlifting-routing.module';

import { WeightliftingPage } from './weightlifting.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightliftingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WeightliftingPage]
})
export class WeightliftingPageModule {}
