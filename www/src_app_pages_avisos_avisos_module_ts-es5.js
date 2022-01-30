(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_avisos_avisos_module_ts"], {
    /***/
    8200:
    /*!*******************************************************!*\
      !*** ./src/app/pages/avisos/avisos-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AvisosPageRoutingModule": function AvisosPageRoutingModule() {
          return (
            /* binding */
            _AvisosPageRoutingModule
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


      var _avisos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./avisos.page */
      4824);

      var routes = [{
        path: '',
        component: _avisos_page__WEBPACK_IMPORTED_MODULE_0__.AvisosPage
      }];

      var _AvisosPageRoutingModule = function AvisosPageRoutingModule() {
        _classCallCheck(this, AvisosPageRoutingModule);
      };

      _AvisosPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AvisosPageRoutingModule);
      /***/
    },

    /***/
    37481:
    /*!***********************************************!*\
      !*** ./src/app/pages/avisos/avisos.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AvisosPageModule": function AvisosPageModule() {
          return (
            /* binding */
            _AvisosPageModule
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


      var _avisos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./avisos-routing.module */
      8200);
      /* harmony import */


      var _avisos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./avisos.page */
      4824);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _AvisosPageModule = function AvisosPageModule() {
        _classCallCheck(this, AvisosPageModule);
      };

      _AvisosPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _avisos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AvisosPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_avisos_page__WEBPACK_IMPORTED_MODULE_1__.AvisosPage]
      })], _AvisosPageModule);
      /***/
    },

    /***/
    4824:
    /*!*********************************************!*\
      !*** ./src/app/pages/avisos/avisos.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AvisosPage": function AvisosPage() {
          return (
            /* binding */
            _AvisosPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_avisos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./avisos.page.html */
      12386);
      /* harmony import */


      var _avisos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./avisos.page.scss */
      30716);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AvisosPage = /*#__PURE__*/function () {
        function AvisosPage() {
          _classCallCheck(this, AvisosPage);

          this.titulo = 'Avisos'; //
        }

        _createClass(AvisosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AvisosPage;
      }();

      _AvisosPage.ctorParameters = function () {
        return [];
      };

      _AvisosPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-avisos',
        template: _raw_loader_avisos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_avisos_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AvisosPage);
      /***/
    },

    /***/
    30716:
    /*!***********************************************!*\
      !*** ./src/app/pages/avisos/avisos.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdmlzb3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    12386:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avisos/avisos.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Avisos</ion-label>\n    </div>\n    <ion-card>\n        <ion-card-content>\n            <ion-grid class=\"ion-text-left\">\n                <ion-row class=\"header-row\">\n                    <ion-col>\n                        <ion-text class=\"strong\">Asunto</ion-text>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-text class=\"strong\">Fecha inicio</ion-text>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-text class=\"strong\">Fecha final</ion-text>\n                    </ion-col>\n                <ion-col>\n                    <ion-text class=\"strong\"></ion-text>\n                </ion-col>\n                </ion-row>\n\n\n                <ion-row>\n                    <ion-col>\n                        <ion-text>\n                           Aumento de mesualidad 2022\n                        </ion-text>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-text>\n                            01/01/22\n                        </ion-text>\n                    </ion-col>\n\n                    <ion-col>\n                        <ion-text class=\"strong\">\n                            01/01/22\n                        </ion-text>\n                    </ion-col>\n                    <ion-col>\n                        <ion-text>\n                            <div class=\"ion-text-end\">\n                                <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                            </div>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n\n            </ion-grid>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_avisos_avisos_module_ts-es5.js.map