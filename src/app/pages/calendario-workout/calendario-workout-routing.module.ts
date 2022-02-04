import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioWorkoutPage } from './calendario-workout.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioWorkoutPageRoutingModule {}
