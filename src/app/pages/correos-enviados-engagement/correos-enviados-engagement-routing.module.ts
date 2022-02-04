import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorreosEnviadosEngagementPage } from './correos-enviados-engagement.page';

const routes: Routes = [
  {
    path: '',
    component: CorreosEnviadosEngagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorreosEnviadosEngagementPageRoutingModule {}
