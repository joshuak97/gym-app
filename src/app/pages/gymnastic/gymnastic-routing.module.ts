import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymnasticnPage } from './gymnastic.page';

const routes: Routes = [
  {
    path: '',
    component: GymnasticnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymnasticPageRoutingModule {}
