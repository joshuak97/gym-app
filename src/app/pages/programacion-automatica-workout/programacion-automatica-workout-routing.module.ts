import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramacionAutomaticaWorkoutPage } from './programacion-automatica-workout.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramacionAutomaticaWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramacionAutomaticaWorkoutPageRoutingModule {}
