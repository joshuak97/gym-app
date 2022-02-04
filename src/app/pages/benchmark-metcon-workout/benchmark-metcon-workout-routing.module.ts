import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenchmarkMetconWorkoutPage } from './benchmark-metcon-workout.page';

const routes: Routes = [
  {
    path: '',
    component: BenchmarkMetconWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenchmarkMetconWorkoutPageRoutingModule {}
