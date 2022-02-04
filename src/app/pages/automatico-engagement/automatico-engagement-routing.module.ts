import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutomaticoEngagementPage } from './automatico-engagement.page';

const routes: Routes = [
  {
    path: '',
    component: AutomaticoEngagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutomaticoEngagementPageRoutingModule {}
