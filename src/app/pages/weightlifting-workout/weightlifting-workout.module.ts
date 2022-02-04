import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightliftingWorkoutPageRoutingModule } from './weightlifting-workout-routing.module';

import { WeightliftingWorkoutPage } from './weightlifting-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightliftingWorkoutPageRoutingModule
  ],
  declarations: [WeightliftingWorkoutPage]
})
export class WeightliftingWorkoutPageModule {}
