import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposComponenteWorkoutPage } from './tipos-componente-workout.page';

const routes: Routes = [
  {
    path: '',
    component: TiposComponenteWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposComponenteWorkoutPageRoutingModule {}
