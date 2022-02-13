import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymnasticsWorkoutPageRoutingModule } from './gymnastics-workout-routing.module';

import { GymnasticsWorkoutPage } from './gymnastics-workout.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymnasticsWorkoutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GymnasticsWorkoutPage]
})
export class GymnasticsWorkoutPageModule {}
