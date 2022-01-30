(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_programas_programas_module_ts"], {
    /***/
    5646:
    /*!*************************************************************!*\
      !*** ./src/app/pages/programas/programas-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgramasPageRoutingModule": function ProgramasPageRoutingModule() {
          return (
            /* binding */
            _ProgramasPageRoutingModule
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


      var _programas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./programas.page */
      30830);

      var routes = [{
        path: '',
        component: _programas_page__WEBPACK_IMPORTED_MODULE_0__.ProgramasPage
      }];

      var _ProgramasPageRoutingModule = function ProgramasPageRoutingModule() {
        _classCallCheck(this, ProgramasPageRoutingModule);
      };

      _ProgramasPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProgramasPageRoutingModule);
      /***/
    },

    /***/
    27851:
    /*!*****************************************************!*\
      !*** ./src/app/pages/programas/programas.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgramasPageModule": function ProgramasPageModule() {
          return (
            /* binding */
            _ProgramasPageModule
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


      var _programas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./programas-routing.module */
      5646);
      /* harmony import */


      var _programas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./programas.page */
      30830);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _ProgramasPageModule = function ProgramasPageModule() {
        _classCallCheck(this, ProgramasPageModule);
      };

      _ProgramasPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _programas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProgramasPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_programas_page__WEBPACK_IMPORTED_MODULE_1__.ProgramasPage]
      })], _ProgramasPageModule);
      /***/
    },

    /***/
    30830:
    /*!***************************************************!*\
      !*** ./src/app/pages/programas/programas.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProgramasPage": function ProgramasPage() {
          return (
            /* binding */
            _ProgramasPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_programas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./programas.page.html */
      24954);
      /* harmony import */


      var _programas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./programas.page.scss */
      76749);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProgramasPage = /*#__PURE__*/function () {
        function ProgramasPage() {
          _classCallCheck(this, ProgramasPage);

          this.titulo = 'Programas';
        }

        _createClass(ProgramasPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProgramasPage;
      }();

      _ProgramasPage.ctorParameters = function () {
        return [];
      };

      _ProgramasPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-programas',
        template: _raw_loader_programas_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_programas_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProgramasPage);
      /***/
    },

    /***/
    76749:
    /*!*****************************************************!*\
      !*** ./src/app/pages/programas/programas.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtYXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    24954:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/programas/programas.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Programas</ion-label>\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">Nombre</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\"></ion-text>\n                        </ion-col>\n                    </ion-row>\n\n\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                Corssfit\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text>\n                                <div class=\"ion-text-end\">\n                                    <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                                </div>\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_programas_programas_module_ts-es5.js.map