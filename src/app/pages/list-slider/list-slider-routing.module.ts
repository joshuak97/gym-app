import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSliderPage } from './list-slider.page';

const routes: Routes = [
  {
    path: '',
    component: ListSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSliderPageRoutingModule {}
