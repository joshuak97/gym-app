import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturacionAdminPage } from './facturacionadmin.page';

const routes: Routes = [
  {
    path: '',
    component: FacturacionAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturacionAdminPageRoutingModule {}
