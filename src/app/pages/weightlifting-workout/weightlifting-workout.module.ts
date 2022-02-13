import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeightliftingWorkoutPageRoutingModule } from './weightlifting-workout-routing.module';

import { WeightliftingWorkoutPage } from './weightlifting-workout.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeightliftingWorkoutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WeightliftingWorkoutPage]
})
export class WeightliftingWorkoutPageModule {}
