import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualEngagementPage } from './manual-engagement.page';

const routes: Routes = [
  {
    path: '',
    component: ManualEngagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualEngagementPageRoutingModule {}
