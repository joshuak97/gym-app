import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesActivosPage } from './clientes-activos.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesActivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesActivosPageRoutingModule {}
