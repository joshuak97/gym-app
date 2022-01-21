import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeightliftingPage } from './weightlifting.page';

const routes: Routes = [
  {
    path: '',
    component: WeightliftingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeightliftingPageRoutingModule {}
