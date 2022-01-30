(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_clientes_clientes_module_ts"], {
    /***/
    74533:
    /*!***********************************************************!*\
      !*** ./src/app/pages/clientes/clientes-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClientesPageRoutingModule": function ClientesPageRoutingModule() {
          return (
            /* binding */
            _ClientesPageRoutingModule
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


      var _clientes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./clientes.page */
      32230);

      var routes = [{
        path: '',
        component: _clientes_page__WEBPACK_IMPORTED_MODULE_0__.ClientesPage
      }];

      var _ClientesPageRoutingModule = function ClientesPageRoutingModule() {
        _classCallCheck(this, ClientesPageRoutingModule);
      };

      _ClientesPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ClientesPageRoutingModule);
      /***/
    },

    /***/
    28953:
    /*!***************************************************!*\
      !*** ./src/app/pages/clientes/clientes.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClientesPageModule": function ClientesPageModule() {
          return (
            /* binding */
            _ClientesPageModule
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


      var _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./clientes-routing.module */
      74533);
      /* harmony import */


      var _clientes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clientes.page */
      32230);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _ClientesPageModule = function ClientesPageModule() {
        _classCallCheck(this, ClientesPageModule);
      };

      _ClientesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _clientes_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientesPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_clientes_page__WEBPACK_IMPORTED_MODULE_1__.ClientesPage]
      })], _ClientesPageModule);
      /***/
    },

    /***/
    32230:
    /*!*************************************************!*\
      !*** ./src/app/pages/clientes/clientes.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClientesPage": function ClientesPage() {
          return (
            /* binding */
            _ClientesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./clientes.page.html */
      52990);
      /* harmony import */


      var _clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./clientes.page.scss */
      41738);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ClientesPage = /*#__PURE__*/function () {
        function ClientesPage() {
          _classCallCheck(this, ClientesPage);

          this.titulo = 'Clientes'; //
        }

        _createClass(ClientesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ClientesPage;
      }();

      _ClientesPage.ctorParameters = function () {
        return [];
      };

      _ClientesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-clientes',
        template: _raw_loader_clientes_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_clientes_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClientesPage);
      /***/
    },

    /***/
    41738:
    /*!***************************************************!*\
      !*** ./src/app/pages/clientes/clientes.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    52990:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clientes/clientes.page.html ***!
      \*****************************************************************************************/

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
//# sourceMappingURL=src_app_pages_clientes_clientes_module_ts-es5.js.map