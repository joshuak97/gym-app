(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_mis-resultados_mis-resultados_module_ts"], {
    /***/
    64605:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/mis-resultados/mis-resultados-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisResultadosPageRoutingModule": function MisResultadosPageRoutingModule() {
          return (
            /* binding */
            _MisResultadosPageRoutingModule
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


      var _mis_resultados_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-resultados.page */
      50201);

      var routes = [{
        path: '',
        component: _mis_resultados_page__WEBPACK_IMPORTED_MODULE_0__.MisResultadosPage
      }];

      var _MisResultadosPageRoutingModule = function MisResultadosPageRoutingModule() {
        _classCallCheck(this, MisResultadosPageRoutingModule);
      };

      _MisResultadosPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MisResultadosPageRoutingModule);
      /***/
    },

    /***/
    10696:
    /*!***************************************************************!*\
      !*** ./src/app/pages/mis-resultados/mis-resultados.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisResultadosPageModule": function MisResultadosPageModule() {
          return (
            /* binding */
            _MisResultadosPageModule
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _mis_resultados_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-resultados-routing.module */
      64605);
      /* harmony import */


      var _mis_resultados_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-resultados.page */
      50201);

      var _MisResultadosPageModule = function MisResultadosPageModule() {
        _classCallCheck(this, MisResultadosPageModule);
      };

      _MisResultadosPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mis_resultados_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisResultadosPageRoutingModule],
        declarations: [_mis_resultados_page__WEBPACK_IMPORTED_MODULE_1__.MisResultadosPage]
      })], _MisResultadosPageModule);
      /***/
    },

    /***/
    50201:
    /*!*************************************************************!*\
      !*** ./src/app/pages/mis-resultados/mis-resultados.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisResultadosPage": function MisResultadosPage() {
          return (
            /* binding */
            _MisResultadosPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mis_resultados_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mis-resultados.page.html */
      73603);
      /* harmony import */


      var _mis_resultados_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-resultados.page.scss */
      75762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MisResultadosPage = /*#__PURE__*/function () {
        function MisResultadosPage() {
          _classCallCheck(this, MisResultadosPage);
        }

        _createClass(MisResultadosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MisResultadosPage;
      }();

      _MisResultadosPage.ctorParameters = function () {
        return [];
      };

      _MisResultadosPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mis-resultados',
        template: _raw_loader_mis_resultados_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mis_resultados_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MisResultadosPage);
      /***/
    },

    /***/
    75762:
    /*!***************************************************************!*\
      !*** ./src/app/pages/mis-resultados/mis-resultados.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtcmVzdWx0YWRvcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    73603:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-resultados/mis-resultados.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>mis-resultados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mis-resultados_mis-resultados_module_ts-es5.js.map