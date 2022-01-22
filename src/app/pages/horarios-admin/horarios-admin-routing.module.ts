import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorariosAdminPage } from './horarios-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HorariosAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorariosAdminPageRoutingModule {}
