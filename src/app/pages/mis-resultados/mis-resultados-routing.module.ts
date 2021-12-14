import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisResultadosPage } from './mis-resultados.page';

const routes: Routes = [
  {
    path: '',
    component: MisResultadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisResultadosPageRoutingModule {}
