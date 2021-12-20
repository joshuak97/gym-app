import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitaGanaPage } from './invita-gana.page';

const routes: Routes = [
  {
    path: '',
    component: InvitaGanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitaGanaPageRoutingModule {}
