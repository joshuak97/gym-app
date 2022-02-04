import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoWorkoutPage } from './nuevo-workout.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoWorkoutPageRoutingModule {}
