import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentajasOfertasPage } from './ventajas-ofertas.page';

const routes: Routes = [
  {
    path: '',
    component: VentajasOfertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentajasOfertasPageRoutingModule {}
