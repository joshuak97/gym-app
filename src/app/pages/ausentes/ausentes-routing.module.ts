import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AusentesPage } from './ausentes.page';

const routes: Routes = [
  {
    path: '',
    component: AusentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AusentesPageRoutingModule {}
