import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenchmarkMetconWorkoutPageRoutingModule } from './benchmark-metcon-workout-routing.module';

import { BenchmarkMetconWorkoutPage } from './benchmark-metcon-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenchmarkMetconWorkoutPageRoutingModule
  ],
  declarations: [BenchmarkMetconWorkoutPage]
})
export class BenchmarkMetconWorkoutPageModule {}
