import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioWorkoutPageRoutingModule } from './calendario-workout-routing.module';

import { CalendarioWorkoutPage } from './calendario-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioWorkoutPageRoutingModule
  ],
  declarations: [CalendarioWorkoutPage]
})
export class CalendarioWorkoutPageModule {}
