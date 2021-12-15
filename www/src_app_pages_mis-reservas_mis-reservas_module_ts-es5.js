(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_mis-reservas_mis-reservas_module_ts"], {
    /***/
    25308:
    /*!*******************************************************************!*\
      !*** ./src/app/pages/mis-reservas/mis-reservas-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisReservasPageRoutingModule": function MisReservasPageRoutingModule() {
          return (
            /* binding */
            _MisReservasPageRoutingModule
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


      var _mis_reservas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-reservas.page */
      33832);

      var routes = [{
        path: '',
        component: _mis_reservas_page__WEBPACK_IMPORTED_MODULE_0__.MisReservasPage
      }];

      var _MisReservasPageRoutingModule = function MisReservasPageRoutingModule() {
        _classCallCheck(this, MisReservasPageRoutingModule);
      };

      _MisReservasPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MisReservasPageRoutingModule);
      /***/
    },

    /***/
    8401:
    /*!***********************************************************!*\
      !*** ./src/app/pages/mis-reservas/mis-reservas.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisReservasPageModule": function MisReservasPageModule() {
          return (
            /* binding */
            _MisReservasPageModule
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


      var _mis_reservas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./mis-reservas-routing.module */
      25308);
      /* harmony import */


      var _mis_reservas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-reservas.page */
      33832);

      var _MisReservasPageModule = function MisReservasPageModule() {
        _classCallCheck(this, MisReservasPageModule);
      };

      _MisReservasPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _mis_reservas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisReservasPageRoutingModule],
        declarations: [_mis_reservas_page__WEBPACK_IMPORTED_MODULE_1__.MisReservasPage]
      })], _MisReservasPageModule);
      /***/
    },

    /***/
    33832:
    /*!*********************************************************!*\
      !*** ./src/app/pages/mis-reservas/mis-reservas.page.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MisReservasPage": function MisReservasPage() {
          return (
            /* binding */
            _MisReservasPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_mis_reservas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./mis-reservas.page.html */
      88705);
      /* harmony import */


      var _mis_reservas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./mis-reservas.page.scss */
      80295);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MisReservasPage = /*#__PURE__*/function () {
        function MisReservasPage() {
          _classCallCheck(this, MisReservasPage);
        }

        _createClass(MisReservasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MisReservasPage;
      }();

      _MisReservasPage.ctorParameters = function () {
        return [];
      };

      _MisReservasPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mis-reservas',
        template: _raw_loader_mis_reservas_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mis_reservas_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MisReservasPage);
      /***/
    },

    /***/
    80295:
    /*!***********************************************************!*\
      !*** ./src/app/pages/mis-reservas/mis-reservas.page.scss ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtcmVzZXJ2YXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    88705:
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-reservas/mis-reservas.page.html ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>mis-reservas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_mis-reservas_mis-reservas_module_ts-es5.js.map