import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymnasticsWorkoutPageRoutingModule } from './gymnastics-workout-routing.module';

import { GymnasticsWorkoutPage } from './gymnastics-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymnasticsWorkoutPageRoutingModule
  ],
  declarations: [GymnasticsWorkoutPage]
})
export class GymnasticsWorkoutPageModule {}
