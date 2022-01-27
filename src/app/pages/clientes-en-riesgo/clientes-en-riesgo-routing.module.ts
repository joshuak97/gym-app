import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesEnRiesgoPage } from './clientes-en-riesgo.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesEnRiesgoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesEnRiesgoPageRoutingModule {}
