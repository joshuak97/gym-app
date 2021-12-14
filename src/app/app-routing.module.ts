import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule) },
  { path: 'alert',  loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule) },
  { path: 'action-sheet', loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule) },
  { path: 'avatar', loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule) },
  { path: 'botones', loadChildren: () => import('./pages/botones/botones.module').then( m => m.BotonesPageModule) },
  { path: 'cards', loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule) },
  { path: 'checkbox', loadChildren: () => import('./pages/checkbox/checkbox.module').then( m => m.CheckboxPageModule) },
  { path: 'date-time', loadChildren: () => import('./pages/date-time/date-time.module').then( m => m.DateTimePageModule) },
  { path: 'fabs', loadChildren: () => import('./pages/fabs/fabs.module').then( m => m.FabsPageModule) },
  { path: 'grid', loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule) },
  { path: 'infinity-scroll', loadChildren: () => import('./pages/infinity-scroll/infinity-scroll.module').then( m => m.InfinityScrollPageModule) },
  { path: 'ion-input', loadChildren: () => import('./pages/ion-input/ion-input.module').then( m => m.IonInputPageModule) },
  { path: 'list-slider', loadChildren: () => import('./pages/list-slider/list-slider.module').then( m => m.ListSliderPageModule) },
  { path: 'list-reorder', loadChildren: () => import('./pages/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule) },
  { path: 'loading', loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
