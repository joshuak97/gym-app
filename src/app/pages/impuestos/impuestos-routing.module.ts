import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpuestosPage } from './impuestos.page';

const routes: Routes = [
  {
    path: '',
    component: ImpuestosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpuestosPageRoutingModule {}
