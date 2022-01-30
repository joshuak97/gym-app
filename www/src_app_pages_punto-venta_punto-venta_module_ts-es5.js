(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_punto-venta_punto-venta_module_ts"], {
    /***/
    69388:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/punto-venta/punto-venta-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PuntoVentaPageRoutingModule": function PuntoVentaPageRoutingModule() {
          return (
            /* binding */
            _PuntoVentaPageRoutingModule
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


      var _punto_venta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./punto-venta.page */
      26755);

      var routes = [{
        path: '',
        component: _punto_venta_page__WEBPACK_IMPORTED_MODULE_0__.PuntoVentaPage
      }];

      var _PuntoVentaPageRoutingModule = function PuntoVentaPageRoutingModule() {
        _classCallCheck(this, PuntoVentaPageRoutingModule);
      };

      _PuntoVentaPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PuntoVentaPageRoutingModule);
      /***/
    },

    /***/
    39721:
    /*!*********************************************************!*\
      !*** ./src/app/pages/punto-venta/punto-venta.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PuntoVentaPageModule": function PuntoVentaPageModule() {
          return (
            /* binding */
            _PuntoVentaPageModule
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


      var _punto_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./punto-venta-routing.module */
      69388);
      /* harmony import */


      var _punto_venta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./punto-venta.page */
      26755);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _PuntoVentaPageModule = function PuntoVentaPageModule() {
        _classCallCheck(this, PuntoVentaPageModule);
      };

      _PuntoVentaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _punto_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__.PuntoVentaPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_punto_venta_page__WEBPACK_IMPORTED_MODULE_1__.PuntoVentaPage]
      })], _PuntoVentaPageModule);
      /***/
    },

    /***/
    26755:
    /*!*******************************************************!*\
      !*** ./src/app/pages/punto-venta/punto-venta.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PuntoVentaPage": function PuntoVentaPage() {
          return (
            /* binding */
            _PuntoVentaPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_punto_venta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./punto-venta.page.html */
      30375);
      /* harmony import */


      var _punto_venta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./punto-venta.page.scss */
      97671);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PuntoVentaPage = /*#__PURE__*/function () {
        function PuntoVentaPage() {
          _classCallCheck(this, PuntoVentaPage);

          this.titulo = 'Punto de Venta'; //
        }

        _createClass(PuntoVentaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PuntoVentaPage;
      }();

      _PuntoVentaPage.ctorParameters = function () {
        return [];
      };

      _PuntoVentaPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-punto-venta',
        template: _raw_loader_punto_venta_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_punto_venta_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PuntoVentaPage);
      /***/
    },

    /***/
    97671:
    /*!*********************************************************!*\
      !*** ./src/app/pages/punto-venta/punto-venta.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdW50by12ZW50YS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    30375:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/punto-venta/punto-venta.page.html ***!
      \***********************************************************************************************/

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
//# sourceMappingURL=src_app_pages_punto-venta_punto-venta_module_ts-es5.js.map