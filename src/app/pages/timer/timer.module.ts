import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerPageRoutingModule } from './timer-routing.module';

import { TimerPage } from './timer.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TimerPage]
})
export class TimerPageModule {}
