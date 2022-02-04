import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosTpvPage } from './productos-tpv.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosTpvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosTpvPageRoutingModule {}
