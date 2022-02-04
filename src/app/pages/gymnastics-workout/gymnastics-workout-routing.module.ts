import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymnasticsWorkoutPage } from './gymnastics-workout.page';

const routes: Routes = [
  {
    path: '',
    component: GymnasticsWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymnasticsWorkoutPageRoutingModule {}
