import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSliderPageRoutingModule } from './list-slider-routing.module';

import { ListSliderPage } from './list-slider.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSliderPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListSliderPage]
})
export class ListSliderPageModule {}
