import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcupacionDeClasesPage } from './ocupacion-de-clases.page';

const routes: Routes = [
  {
    path: '',
    component: OcupacionDeClasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcupacionDeClasesPageRoutingModule {}
