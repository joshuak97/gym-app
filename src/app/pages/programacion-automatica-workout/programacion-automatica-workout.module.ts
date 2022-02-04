import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramacionAutomaticaWorkoutPageRoutingModule } from './programacion-automatica-workout-routing.module';

import { ProgramacionAutomaticaWorkoutPage } from './programacion-automatica-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramacionAutomaticaWorkoutPageRoutingModule
  ],
  declarations: [ProgramacionAutomaticaWorkoutPage]
})
export class ProgramacionAutomaticaWorkoutPageModule {}
