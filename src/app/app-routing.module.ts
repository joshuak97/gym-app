import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  },
  { path: 'inicio', loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule) 
  },
  {
    path: 'clases',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
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
    path: 'benchmark-metcon',
    loadChildren: () => import('./pages/benchmark-metcon/benchmark-metcon.module').then( m => m.MisResultadosPageModule)
  },
  {
    path: 'gymnastic',
    loadChildren: () => import('./pages/gymnastic/gymnastic.module').then( m => m.GymnasticPageModule)
  },
  {
    path: 'weightlifting',
    loadChildren: () => import('./pages/weightlifting/weightlifting.module').then( m => m.WeightliftingPageModule)
  },
  {
    path: 'whiteboard',
    loadChildren: () => import('./pages/whiteboard/whiteboard.module').then( m => m.WhiteboardPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./pages/timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'informes',
    loadChildren: () => import('./pages/informes/informes.module').then( m => m.InformesPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('./pages/workouts/workouts.module').then( m => m.WorkoutsPageModule)
  },
  {
    path: 'one-on-one',
    loadChildren: () => import('./pages/one-on-one/one-on-one.module').then( m => m.OneOnOnePageModule)
  },
  {
    path: 'configuraciones',
    loadChildren: () => import('./pages/configuraciones/configuraciones.module').then( m => m.ConfiguracionesPageModule)
  },
  {
    path: 'facturacion',
    loadChildren: () => import('./pages/facturacion/facturacion.module').then( m => m.FacturacionPageModule)
  },
  {
    path: 'engagement',
    loadChildren: () => import('./pages/engagement/engagement.module').then( m => m.EngagementPageModule)
  },
  {
    path: 'avisos',
    loadChildren: () => import('./pages/avisos/avisos.module').then( m => m.AvisosPageModule)
  },
  {
    path: 'invita-gana',
    loadChildren: () => import('./pages/invita-gana/invita-gana.module').then( m => m.InvitaGanaPageModule)
  },
  {
    path: 'punto-venta',
    loadChildren: () => import('./pages/punto-venta/punto-venta.module').then( m => m.PuntoVentaPageModule)
  },
  {
    path: 'ventajas-ofertas',
    loadChildren: () => import('./pages/ventajas-ofertas/ventajas-ofertas.module').then( m => m.VentajasOfertasPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'programas',
    loadChildren: () => import('./pages/programas/programas.module').then( m => m.ProgramasPageModule)
  },
  {
    path: 'horarios-admin',
    loadChildren: () => import('./pages/horarios-admin/horarios-admin.module').then( m => m.HorariosAdminPageModule)
  },
  {
    path: 'cuotas',
    loadChildren: () => import('./pages/cuotas/cuotas.module').then( m => m.CuotasPageModule)
  },
  {
    path: 'descuentos',
    loadChildren: () => import('./pages/descuentos/descuentos.module').then( m => m.DescuentosPageModule)
  },
  {
    path: 'medios-pago',
    loadChildren: () => import('./pages/medios-pago/medios-pago.module').then( m => m.MediosPagoPageModule)
  },
  {
    path: 'impuestos',
    loadChildren: () => import('./pages/impuestos/impuestos.module').then( m => m.ImpuestosPageModule)
  },
  {
    path: 'metricas',
    loadChildren: () => import('./pages/metricas/metricas.module').then( m => m.MetricasPageModule)
  },
  {
    path: 'clientes-en-riesgo',
    loadChildren: () => import('./pages/clientes-en-riesgo/clientes-en-riesgo.module').then( m => m.ClientesEnRiesgoPageModule)
  },
  {
    path: 'clientes-activos',
    loadChildren: () => import('./pages/clientes-activos/clientes-activos.module').then( m => m.ClientesActivosPageModule)
  },
  {
    path: 'ausentes',
    loadChildren: () => import('./pages/ausentes/ausentes.module').then( m => m.AusentesPageModule)
  },
  {
    path: 'facturacion-admin',
    loadChildren: () => import('./pages/facturacion-admin/facturacionadmin.module').then( m => m.FacturacionAdminPageModule)
  },
  {
    path: 'ocupacion-de-clases',
    loadChildren: () => import('./pages/ocupacion-de-clases/ocupacion-de-clases.module').then( m => m.FacturacionAdminPageModule)
  },
  {
    path: 'terminos-condiciones',
    loadChildren: () => import('./pages/terminos-condiciones/terminos-condiciones.module').then( m => m.TerminosCondicionesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
