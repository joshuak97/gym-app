import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightliftingWorkoutPage } from './weightlifting-workout.page';

const routes: Routes = [
  {
    path: '',
    component: WeightliftingWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightliftingWorkoutPageRoutingModule {}
