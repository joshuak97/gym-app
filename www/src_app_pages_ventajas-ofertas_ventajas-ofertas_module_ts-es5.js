(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_ventajas-ofertas_ventajas-ofertas_module_ts"], {
    /***/
    30947:
    /*!***************************************************************************!*\
      !*** ./src/app/pages/ventajas-ofertas/ventajas-ofertas-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VentajasOfertasPageRoutingModule": function VentajasOfertasPageRoutingModule() {
          return (
            /* binding */
            _VentajasOfertasPageRoutingModule
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


      var _ventajas_ofertas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ventajas-ofertas.page */
      52402);

      var routes = [{
        path: '',
        component: _ventajas_ofertas_page__WEBPACK_IMPORTED_MODULE_0__.VentajasOfertasPage
      }];

      var _VentajasOfertasPageRoutingModule = function VentajasOfertasPageRoutingModule() {
        _classCallCheck(this, VentajasOfertasPageRoutingModule);
      };

      _VentajasOfertasPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _VentajasOfertasPageRoutingModule);
      /***/
    },

    /***/
    54427:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/ventajas-ofertas/ventajas-ofertas.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VentajasOfertasPageModule": function VentajasOfertasPageModule() {
          return (
            /* binding */
            _VentajasOfertasPageModule
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


      var _ventajas_ofertas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ventajas-ofertas-routing.module */
      30947);
      /* harmony import */


      var _ventajas_ofertas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ventajas-ofertas.page */
      52402);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _VentajasOfertasPageModule = function VentajasOfertasPageModule() {
        _classCallCheck(this, VentajasOfertasPageModule);
      };

      _VentajasOfertasPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _ventajas_ofertas_routing_module__WEBPACK_IMPORTED_MODULE_0__.VentajasOfertasPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_ventajas_ofertas_page__WEBPACK_IMPORTED_MODULE_1__.VentajasOfertasPage]
      })], _VentajasOfertasPageModule);
      /***/
    },

    /***/
    52402:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/ventajas-ofertas/ventajas-ofertas.page.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VentajasOfertasPage": function VentajasOfertasPage() {
          return (
            /* binding */
            _VentajasOfertasPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_ventajas_ofertas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./ventajas-ofertas.page.html */
      94751);
      /* harmony import */


      var _ventajas_ofertas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ventajas-ofertas.page.scss */
      83041);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _VentajasOfertasPage = /*#__PURE__*/function () {
        function VentajasOfertasPage() {
          _classCallCheck(this, VentajasOfertasPage);

          this.titulo = 'Ventajas y Ofertas'; //
        }

        _createClass(VentajasOfertasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VentajasOfertasPage;
      }();

      _VentajasOfertasPage.ctorParameters = function () {
        return [];
      };

      _VentajasOfertasPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ventajas-ofertas',
        template: _raw_loader_ventajas_ofertas_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ventajas_ofertas_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VentajasOfertasPage);
      /***/
    },

    /***/
    83041:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/ventajas-ofertas/ventajas-ofertas.page.scss ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YWphcy1vZmVydGFzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    94751:
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ventajas-ofertas/ventajas-ofertas.page.html ***!
      \*********************************************************************************************************/

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
//# sourceMappingURL=src_app_pages_ventajas-ofertas_ventajas-ofertas_module_ts-es5.js.map