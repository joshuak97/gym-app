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
  },
  {
    path: 'clases-admin',
    loadChildren: () => import('./pages/clases-admin/clases-admin.module').then( m => m.ClasesAdminPageModule)
  },
  {
    path: 'coaches',
    loadChildren: () => import('./pages/coaches/coaches.module').then( m => m.CoachesPageModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./pages/todos/todos.module').then( m => m.TodosPageModule)
  },
  {
    path: 'suscripciones',
    loadChildren: () => import('./pages/suscripciones/suscripciones.module').then( m => m.SuscripcionesPageModule)
  },
  {
    path: 'pausas',
    loadChildren: () => import('./pages/pausas/pausas.module').then( m => m.PausasPageModule)
  },
  {
    path: 'leads',
    loadChildren: () => import('./pages/leads/leads.module').then( m => m.LeadsPageModule)
  },
  {
    path: 'nuevo-workout',
    loadChildren: () => import('./pages/nuevo-workout/nuevo-workout.module').then( m => m.NuevoWorkoutPageModule)
  },
  {
    path: 'calendario-workout',
    loadChildren: () => import('./pages/calendario-workout/calendario-workout.module').then( m => m.CalendarioWorkoutPageModule)
  },
  {
    path: 'programacion-automatica-workout',
    loadChildren: () => import('./pages/programacion-automatica-workout/programacion-automatica-workout.module').then( m => m.ProgramacionAutomaticaWorkoutPageModule)
  },
  {
    path: 'tipos-componente-workout',
    loadChildren: () => import('./pages/tipos-componente-workout/tipos-componente-workout.module').then( m => m.TiposComponenteWorkoutPageModule)
  },
  {
    path: 'benchmark-metcon-workout',
    loadChildren: () => import('./pages/benchmark-metcon-workout/benchmark-metcon-workout.module').then( m => m.BenchmarkMetconWorkoutPageModule)
  },
  {
    path: 'gymnastics-workout',
    loadChildren: () => import('./pages/gymnastics-workout/gymnastics-workout.module').then( m => m.GymnasticsWorkoutPageModule)
  },
  {
    path: 'weightlifting-workout',
    loadChildren: () => import('./pages/weightlifting-workout/weightlifting-workout.module').then( m => m.WeightliftingWorkoutPageModule)
  },
  {
    path: 'facturas',
    loadChildren: () => import('./pages/facturas/facturas.module').then( m => m.FacturasPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./pages/gastos/gastos.module').then( m => m.GastosPageModule)
  },
  {
    path: 'manual-engagement',
    loadChildren: () => import('./pages/manual-engagement/manual-engagement.module').then( m => m.ManualEngagementPageModule)
  },
  {
    path: 'automatico-engagement',
    loadChildren: () => import('./pages/automatico-engagement/automatico-engagement.module').then( m => m.AutomaticoEngagementPageModule)
  },
  {
    path: 'correos-enviados-engagement',
    loadChildren: () => import('./pages/correos-enviados-engagement/correos-enviados-engagement.module').then( m => m.CorreosEnviadosEngagementPageModule)
  },
  {
    path: 'nuevo-pedido-tpv',
    loadChildren: () => import('./pages/nuevo-pedido-tpv/nuevo-pedido-tpv.module').then( m => m.NuevoPedidoTpvPageModule)
  },
  {
    path: 'pedidos-tpv',
    loadChildren: () => import('./pages/pedidos-tpv/pedidos-tpv.module').then( m => m.PedidosTpvPageModule)
  },
  {
    path: 'productos-tpv',
    loadChildren: () => import('./pages/productos-tpv/productos-tpv.module').then( m => m.ProductosTpvPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
