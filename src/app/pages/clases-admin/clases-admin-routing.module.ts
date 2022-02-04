import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesAdminPage } from './clases-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesAdminPageRoutingModule {}
