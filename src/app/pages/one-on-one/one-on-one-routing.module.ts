import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneOnOnePage } from './one-on-one.page';

const routes: Routes = [
  {
    path: '',
    component: OneOnOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneOnOnePageRoutingModule {}
