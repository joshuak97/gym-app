(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_cuenta_cuenta_module_ts"], {
    /***/
    31162:
    /*!*******************************************************!*\
      !*** ./src/app/pages/cuenta/cuenta-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CuentaPageRoutingModule": function CuentaPageRoutingModule() {
          return (
            /* binding */
            _CuentaPageRoutingModule
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


      var _cuenta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cuenta.page */
      37399);

      var routes = [{
        path: '',
        component: _cuenta_page__WEBPACK_IMPORTED_MODULE_0__.CuentaPage
      }];

      var _CuentaPageRoutingModule = function CuentaPageRoutingModule() {
        _classCallCheck(this, CuentaPageRoutingModule);
      };

      _CuentaPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CuentaPageRoutingModule);
      /***/
    },

    /***/
    94178:
    /*!***********************************************!*\
      !*** ./src/app/pages/cuenta/cuenta.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CuentaPageModule": function CuentaPageModule() {
          return (
            /* binding */
            _CuentaPageModule
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


      var _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cuenta-routing.module */
      31162);
      /* harmony import */


      var _cuenta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cuenta.page */
      37399);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _CuentaPageModule = function CuentaPageModule() {
        _classCallCheck(this, CuentaPageModule);
      };

      _CuentaPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _cuenta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuentaPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_cuenta_page__WEBPACK_IMPORTED_MODULE_1__.CuentaPage]
      })], _CuentaPageModule);
      /***/
    },

    /***/
    37399:
    /*!*********************************************!*\
      !*** ./src/app/pages/cuenta/cuenta.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CuentaPage": function CuentaPage() {
          return (
            /* binding */
            _CuentaPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cuenta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cuenta.page.html */
      19707);
      /* harmony import */


      var _cuenta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cuenta.page.scss */
      20875);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CuentaPage = /*#__PURE__*/function () {
        function CuentaPage() {
          _classCallCheck(this, CuentaPage);

          this.titulo = 'Cuenta'; // void
        }

        _createClass(CuentaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// void
          }
        }]);

        return CuentaPage;
      }();

      _CuentaPage.ctorParameters = function () {
        return [];
      };

      _CuentaPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cuenta',
        template: _raw_loader_cuenta_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cuenta_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CuentaPage);
      /***/
    },

    /***/
    20875:
    /*!***********************************************!*\
      !*** ./src/app/pages/cuenta/cuenta.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWVudGEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    19707:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cuenta/cuenta.page.html ***!
      \*************************************************************************************/

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
//# sourceMappingURL=src_app_pages_cuenta_cuenta_module_ts-es5.js.map