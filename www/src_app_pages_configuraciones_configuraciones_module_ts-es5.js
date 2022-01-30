(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_configuraciones_configuraciones_module_ts"], {
    /***/
    64540:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/configuraciones/configuraciones-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfiguracionesPageRoutingModule": function ConfiguracionesPageRoutingModule() {
          return (
            /* binding */
            _ConfiguracionesPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _configuraciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./configuraciones.page */
      19967);

      var routes = [{
        path: '',
        component: _configuraciones_page__WEBPACK_IMPORTED_MODULE_0__.ConfiguracionesPage
      }];

      var _ConfiguracionesPageRoutingModule = function ConfiguracionesPageRoutingModule() {
        _classCallCheck(this, ConfiguracionesPageRoutingModule);
      };

      _ConfiguracionesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ConfiguracionesPageRoutingModule);
      /***/
    },

    /***/
    70839:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/configuraciones/configuraciones.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfiguracionesPageModule": function ConfiguracionesPageModule() {
          return (
            /* binding */
            _ConfiguracionesPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _configuraciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./configuraciones-routing.module */
      64540);
      /* harmony import */


      var _configuraciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./configuraciones.page */
      19967);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _ConfiguracionesPageModule = function ConfiguracionesPageModule() {
        _classCallCheck(this, ConfiguracionesPageModule);
      };

      _ConfiguracionesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _configuraciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfiguracionesPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_configuraciones_page__WEBPACK_IMPORTED_MODULE_1__.ConfiguracionesPage]
      })], _ConfiguracionesPageModule);
      /***/
    },

    /***/
    19967:
    /*!***************************************************************!*\
      !*** ./src/app/pages/configuraciones/configuraciones.page.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfiguracionesPage": function ConfiguracionesPage() {
          return (
            /* binding */
            _ConfiguracionesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_configuraciones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./configuraciones.page.html */
      29429);
      /* harmony import */


      var _configuraciones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./configuraciones.page.scss */
      14366);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ConfiguracionesPage = /*#__PURE__*/function () {
        function ConfiguracionesPage() {
          _classCallCheck(this, ConfiguracionesPage);

          this.titulo = "Configuraciones";
        }

        _createClass(ConfiguracionesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ConfiguracionesPage;
      }();

      _ConfiguracionesPage.ctorParameters = function () {
        return [];
      };

      _ConfiguracionesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-configuraciones',
        template: _raw_loader_configuraciones_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_configuraciones_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ConfiguracionesPage);
      /***/
    },

    /***/
    14366:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/configuraciones/configuraciones.page.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmFjaW9uZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    29429:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuraciones/configuraciones.page.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_configuraciones_configuraciones_module_ts-es5.js.map