import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposComponenteWorkoutPageRoutingModule } from './tipos-componente-workout-routing.module';

import { TiposComponenteWorkoutPage } from './tipos-componente-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposComponenteWorkoutPageRoutingModule
  ],
  declarations: [TiposComponenteWorkoutPage]
})
export class TiposComponenteWorkoutPageModule {}
