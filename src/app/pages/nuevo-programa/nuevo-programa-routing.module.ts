import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProgramaPage } from './nuevo-programa.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProgramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProgramaPageRoutingModule {}
