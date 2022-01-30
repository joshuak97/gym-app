(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }, {
        path: 'inicio',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_inicio_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/inicio/inicio.module */
          83633)).then(function (m) {
            return m.InicioPageModule;
          });
        }
      }, {
        path: 'clases',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_inicio_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/inicio/inicio.module */
          83633)).then(function (m) {
            return m.InicioPageModule;
          });
        }
      }, {
        path: 'horarios',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_horarios_horarios_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/horarios/horarios.module */
          76209)).then(function (m) {
            return m.HorariosPageModule;
          });
        }
      }, {
        path: 'mis-reservas',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_mis-reservas_mis-reservas_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/mis-reservas/mis-reservas.module */
          8401)).then(function (m) {
            return m.MisReservasPageModule;
          });
        }
      }, {
        path: 'mis-resultados',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_mis-resultados_mis-resultados_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/mis-resultados/mis-resultados.module */
          10696)).then(function (m) {
            return m.MisResultadosPageModule;
          });
        }
      }, {
        path: 'benchmark-metcon',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_benchmark-metcon_benchmark-metcon_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/benchmark-metcon/benchmark-metcon.module */
          29631)).then(function (m) {
            return m.MisResultadosPageModule;
          });
        }
      }, {
        path: 'gymnastic',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_gymnastic_gymnastic_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/gymnastic/gymnastic.module */
          5426)).then(function (m) {
            return m.GymnasticPageModule;
          });
        }
      }, {
        path: 'weightlifting',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_weightlifting_weightlifting_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/weightlifting/weightlifting.module */
          77278)).then(function (m) {
            return m.WeightliftingPageModule;
          });
        }
      }, {
        path: 'whiteboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_whiteboard_whiteboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/whiteboard/whiteboard.module */
          54564)).then(function (m) {
            return m.WhiteboardPageModule;
          });
        }
      }, {
        path: 'timer',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_timer_timer_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/timer/timer.module */
          93242)).then(function (m) {
            return m.TimerPageModule;
          });
        }
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/dashboard/dashboard.module */
          71659)).then(function (m) {
            return m.DashboardPageModule;
          });
        }
      }, {
        path: 'informes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_informes_informes_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/informes/informes.module */
          63917)).then(function (m) {
            return m.InformesPageModule;
          });
        }
      }, {
        path: 'calendario',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_calendario_calendario_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/calendario/calendario.module */
          37711)).then(function (m) {
            return m.CalendarioPageModule;
          });
        }
      }, {
        path: 'clientes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_clientes_clientes_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/clientes/clientes.module */
          28953)).then(function (m) {
            return m.ClientesPageModule;
          });
        }
      }, {
        path: 'workouts',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_workouts_workouts_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/workouts/workouts.module */
          59978)).then(function (m) {
            return m.WorkoutsPageModule;
          });
        }
      }, {
        path: 'one-on-one',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_one-on-one_one-on-one_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/one-on-one/one-on-one.module */
          87234)).then(function (m) {
            return m.OneOnOnePageModule;
          });
        }
      }, {
        path: 'configuraciones',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_configuraciones_configuraciones_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/configuraciones/configuraciones.module */
          70839)).then(function (m) {
            return m.ConfiguracionesPageModule;
          });
        }
      }, {
        path: 'facturacion',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_facturacion_facturacion_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/facturacion/facturacion.module */
          26433)).then(function (m) {
            return m.FacturacionPageModule;
          });
        }
      }, {
        path: 'engagement',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_engagement_engagement_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/engagement/engagement.module */
          77777)).then(function (m) {
            return m.EngagementPageModule;
          });
        }
      }, {
        path: 'avisos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_avisos_avisos_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/avisos/avisos.module */
          37481)).then(function (m) {
            return m.AvisosPageModule;
          });
        }
      }, {
        path: 'invita-gana',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_invita-gana_invita-gana_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/invita-gana/invita-gana.module */
          42049)).then(function (m) {
            return m.InvitaGanaPageModule;
          });
        }
      }, {
        path: 'punto-venta',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_punto-venta_punto-venta_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/punto-venta/punto-venta.module */
          39721)).then(function (m) {
            return m.PuntoVentaPageModule;
          });
        }
      }, {
        path: 'ventajas-ofertas',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_ventajas-ofertas_ventajas-ofertas_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/ventajas-ofertas/ventajas-ofertas.module */
          54427)).then(function (m) {
            return m.VentajasOfertasPageModule;
          });
        }
      }, {
        path: 'cuenta',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cuenta_cuenta_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cuenta/cuenta.module */
          94178)).then(function (m) {
            return m.CuentaPageModule;
          });
        }
      }, {
        path: 'programas',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_programas_programas_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/programas/programas.module */
          27851)).then(function (m) {
            return m.ProgramasPageModule;
          });
        }
      }, {
        path: 'horarios-admin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_horarios-admin_horarios-admin_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/horarios-admin/horarios-admin.module */
          18955)).then(function (m) {
            return m.HorariosAdminPageModule;
          });
        }
      }, {
        path: 'cuotas',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_cuotas_cuotas_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/cuotas/cuotas.module */
          92500)).then(function (m) {
            return m.CuotasPageModule;
          });
        }
      }, {
        path: 'descuentos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_descuentos_descuentos_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/descuentos/descuentos.module */
          68136)).then(function (m) {
            return m.DescuentosPageModule;
          });
        }
      }, {
        path: 'medios-pago',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_medios-pago_medios-pago_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/medios-pago/medios-pago.module */
          50480)).then(function (m) {
            return m.MediosPagoPageModule;
          });
        }
      }, {
        path: 'impuestos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_impuestos_impuestos_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/impuestos/impuestos.module */
          94758)).then(function (m) {
            return m.ImpuestosPageModule;
          });
        }
      }, {
        path: 'terminos-condiciones',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_terminos-condiciones_terminos-condiciones_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/terminos-condiciones/terminos-condiciones.module */
          46267)).then(function (m) {
            return m.TerminosCondicionesPageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      _AppComponent.ctorParameters = function () {
        return [];
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/components.module */
      45642);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/locales/es-MX */
      73394);
      /* harmony import */


      var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3__);

      (0, _angular_common__WEBPACK_IMPORTED_MODULE_4__.registerLocaleData)(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_3___default(), 'es');

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.LOCALE_ID,
          useValue: 'es'
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    45642:
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsModule": function ComponentsModule() {
          return (
            /* binding */
            _ComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./header/header.component */
      43646);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu/menu.component */
      85819);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      _ComponentsModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      })], _ComponentsModule);
      /***/
    },

    /***/
    43646:
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./header.component.html */
      97911);
      /* harmony import */


      var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component.scss */
      64993);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(menu) {
          _classCallCheck(this, HeaderComponent);

          this.menu = menu; // Constructor Vacio
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menu.enable(true, 'first');

            if (this.titulo === '' || this.titulo === 'Dashboard') {
              this.inicio = true;
            } else {
              this.inicio = false;
            }
          }
        }, {
          key: "toogleMenu",
          value: function toogleMenu() {
            this.menu.enable(true, 'first');
            this.menu.open('first');
          }
        }]);

        return HeaderComponent;
      }();

      _HeaderComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController
        }];
      };

      _HeaderComponent.propDecorators = {
        titulo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _HeaderComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HeaderComponent);
      /***/
    },

    /***/
    85819:
    /*!***************************************************!*\
      !*** ./src/app/components/menu/menu.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuComponent": function MenuComponent() {
          return (
            /* binding */
            _MenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./menu.component.html */
      44300);
      /* harmony import */


      var _menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu.component.scss */
      93847);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/data.service */
      52468);

      var _MenuComponent = /*#__PURE__*/function () {
        function MenuComponent(menu, route, service) {
          _classCallCheck(this, MenuComponent);

          this.menu = menu;
          this.route = route;
          this.service = service;
          this.menuPrincipal = true;
          this.tituloMenu = 'Menu Principal';
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getOpcionesMenu();
          }
        }, {
          key: "cerrarMenu",
          value: function cerrarMenu() {
            this.menu.close('first').then();
          }
        }, {
          key: "cargarMenu",
          value: function cargarMenu() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              params['acceso'] && params['acceso'] === 'admin' ? _this.getOpcionesMenuAdmin() : _this.getOpcionesMenu();
            });
          }
        }, {
          key: "mostrarMenuPrincipal",
          value: function mostrarMenuPrincipal() {
            this.menuPrincipal = true;
            this.tituloMenu = 'Menu Principal';
            this.getOpcionesMenu();
          }
        }, {
          key: "mostrarMenuAdministrador",
          value: function mostrarMenuAdministrador() {
            this.menuPrincipal = false;
            this.tituloMenu = 'Menu Administrador';
            this.getOpcionesMenuAdmin();
          }
        }, {
          key: "getOpcionesMenu",
          value: function getOpcionesMenu() {
            var _this2 = this;

            this.service.getMenuOpts().then(function (opciones) {
              _this2.componentes = opciones;
            });
          }
        }, {
          key: "getOpcionesMenuAdmin",
          value: function getOpcionesMenuAdmin() {
            var _this3 = this;

            this.service.getMenuOptsAdmin().then(function (opciones) {
              _this3.componentes = opciones;
            });
          }
        }, {
          key: "desplegar",
          value: function desplegar(i) {
            this.componentes[i].hijosVisibles = !this.componentes[i].hijosVisibles;
          }
        }]);

        return MenuComponent;
      }();

      _MenuComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _MenuComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-menu',
        template: _raw_loader_menu_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MenuComponent);
      /***/
    },

    /***/
    52468:
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _DataService = /*#__PURE__*/function () {
        function DataService(http) {
          _classCallCheck(this, DataService);

          this.http = http;
        }

        _createClass(DataService, [{
          key: "getUsers",
          value: function getUsers() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.http.get('https://jsonplaceholder.typicode.com/users').subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getMenuOpts",
          value: function getMenuOpts() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              _this5.http.get('/assets/data/menu.json').subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "getMenuOptsAdmin",
          value: function getMenuOptsAdmin() {
            var _this6 = this;

            return new Promise(function (resolve, reject) {
              _this6.http.get('/assets/data/menu-admin.json').subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }]);

        return DataService;
      }();

      _DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
        }];
      };

      _DataService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _DataService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    64993:
    /*!*********************************************************!*\
      !*** ./src/app/components/header/header.component.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    93847:
    /*!*****************************************************!*\
      !*** ./src/app/components/menu/menu.component.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <app-menu></app-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    97911:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\"> \n      <ion-menu-button color=\"primary\" menu=\"first\" *ngIf=\"inicio\"></ion-menu-button>\n      <ion-back-button defaultHref=\"/\" icon=\"chevron-back-outline\" text=\"atras\" *ngIf=\"!inicio\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">CrossGym AR7</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button color=\"primary\">\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-button>\n  </ion-buttons>  \n  </ion-toolbar>\n</ion-header>\n";
      /***/
    },

    /***/
    44300:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menu/menu.component.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>{{tituloMenu}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n\n<!-- opciones menu       -->\n<!-- mostrar menu principal -->      \n      <ion-list>\n          <ion-item routerLink=\"/inicio\" *ngIf=\"!menuPrincipal\" (click)=\"mostrarMenuPrincipal()\">\n            <ion-icon name=\"arrow-back\" slot=\"start\" color=\"primary\">\n            </ion-icon>\n            <ion-label color=\"primary\">Menu Principal</ion-label>\n          </ion-item>\n        </ion-list>\n       <ion-list *ngFor=\"let opcion of componentes;let i = index\">\n<!--           Se muestra si tiene hijos (Es dropdown).-->\n        <ion-item  *ngIf=\"opcion.hijos.length>0\" (click)=\"desplegar(i)\">\n          <ion-icon [name]=\"opcion.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n          <ion-label color=\"primary\">{{opcion.name}}</ion-label>\n        </ion-item>\n           <!--           Se muestra si no tiene hijos (No es dropdown).-->\n           <ion-item [routerLink]=\"opcion.redirectTo\" *ngIf=\"opcion.hijos.length == 0\" (click)=\"cerrarMenu()\">\n               <ion-icon [name]=\"opcion.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n               <ion-label color=\"primary\">{{opcion.name}}</ion-label>\n           </ion-item>\n               <ion-list *ngIf=\"opcion.hijosVisibles\">\n                   <ion-item *ngFor=\"let subOpcion of opcion.hijos\" [routerLink]=\"subOpcion.redirectTo\" (click)=\"cerrarMenu()\">\n                       <ion-icon [name]=\"subOpcion.icon\" slot=\"start\" color=\"primary\"></ion-icon>\n                       <ion-label color=\"primary\">{{subOpcion.name}}</ion-label>\n                   </ion-item>\n           </ion-list>\n       </ion-list>\n<!-- mostrar menu de Administrador -->\n      <ion-list>\n        <ion-item routerLink=\"/dashboard\" *ngIf=\"menuPrincipal\" (click)=\"mostrarMenuAdministrador()\">\n          <ion-icon name=\"construct\" slot=\"start\" color=\"primary\">\n          </ion-icon>\n          <ion-label color=\"primary\">Administrador </ion-label>\n        </ion-item>\n       </ion-list>\n    </ion-content>\n  </ion-menu>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map