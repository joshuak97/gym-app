import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoWorkoutPageRoutingModule } from './nuevo-workout-routing.module';

import { NuevoWorkoutPage } from './nuevo-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoWorkoutPageRoutingModule
  ],
  declarations: [NuevoWorkoutPage]
})
export class NuevoWorkoutPageModule {}
