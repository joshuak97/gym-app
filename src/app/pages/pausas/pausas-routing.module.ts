import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PausasPage } from './pausas.page';

const routes: Routes = [
  {
    path: '',
    component: PausasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PausasPageRoutingModule {}
