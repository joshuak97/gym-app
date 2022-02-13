import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenchmarkMetconWorkoutPageRoutingModule } from './benchmark-metcon-workout-routing.module';

import { BenchmarkMetconWorkoutPage } from './benchmark-metcon-workout.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenchmarkMetconWorkoutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BenchmarkMetconWorkoutPage]
})
export class BenchmarkMetconWorkoutPageModule {}
