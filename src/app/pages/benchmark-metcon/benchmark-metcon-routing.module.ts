import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenchmarkMetconPage } from './benchmark-metcon.page';

const routes: Routes = [
  {
    path: '',
    component: BenchmarkMetconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenchmarkMetconPageRoutingModule {}
