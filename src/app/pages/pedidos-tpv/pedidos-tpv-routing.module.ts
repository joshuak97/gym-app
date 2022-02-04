import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosTpvPage } from './pedidos-tpv.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosTpvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosTpvPageRoutingModule {}
