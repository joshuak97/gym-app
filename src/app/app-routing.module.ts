import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule) },
  {
    path: 'clases',
    loadChildren: () => import('./pages/clases/clases.module').then( m => m.ClasesPageModule)
  },
  {
    path: 'horarios',
    loadChildren: () => import('./pages/horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'mis-reservas',
    loadChildren: () => import('./pages/mis-reservas/mis-reservas.module').then( m => m.MisReservasPageModule)
  },
  {
    path: 'mis-resultados',
    loadChildren: () => import('./pages/mis-resultados/mis-resultados.module').then( m => m.MisResultadosPageModule)
  },
  {
    path: 'whiteboard',
    loadChildren: () => import('./pages/whiteboard/whiteboard.module').then( m => m.WhiteboardPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./pages/timer/timer.module').then( m => m.TimerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
