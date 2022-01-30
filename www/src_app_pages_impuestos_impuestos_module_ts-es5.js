(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_impuestos_impuestos_module_ts"], {
    /***/
    24948:
    /*!*************************************************************!*\
      !*** ./src/app/pages/impuestos/impuestos-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImpuestosPageRoutingModule": function ImpuestosPageRoutingModule() {
          return (
            /* binding */
            _ImpuestosPageRoutingModule
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


      var _impuestos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./impuestos.page */
      19034);

      var routes = [{
        path: '',
        component: _impuestos_page__WEBPACK_IMPORTED_MODULE_0__.ImpuestosPage
      }];

      var _ImpuestosPageRoutingModule = function ImpuestosPageRoutingModule() {
        _classCallCheck(this, ImpuestosPageRoutingModule);
      };

      _ImpuestosPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ImpuestosPageRoutingModule);
      /***/
    },

    /***/
    94758:
    /*!*****************************************************!*\
      !*** ./src/app/pages/impuestos/impuestos.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImpuestosPageModule": function ImpuestosPageModule() {
          return (
            /* binding */
            _ImpuestosPageModule
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


      var _impuestos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./impuestos-routing.module */
      24948);
      /* harmony import */


      var _impuestos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./impuestos.page */
      19034);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _ImpuestosPageModule = function ImpuestosPageModule() {
        _classCallCheck(this, ImpuestosPageModule);
      };

      _ImpuestosPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _impuestos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImpuestosPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_impuestos_page__WEBPACK_IMPORTED_MODULE_1__.ImpuestosPage]
      })], _ImpuestosPageModule);
      /***/
    },

    /***/
    19034:
    /*!***************************************************!*\
      !*** ./src/app/pages/impuestos/impuestos.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImpuestosPage": function ImpuestosPage() {
          return (
            /* binding */
            _ImpuestosPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_impuestos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./impuestos.page.html */
      17549);
      /* harmony import */


      var _impuestos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./impuestos.page.scss */
      7650);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ImpuestosPage = /*#__PURE__*/function () {
        function ImpuestosPage() {
          _classCallCheck(this, ImpuestosPage);

          this.titulo = 'Impuestos';
        }

        _createClass(ImpuestosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ImpuestosPage;
      }();

      _ImpuestosPage.ctorParameters = function () {
        return [];
      };

      _ImpuestosPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-impuestos',
        template: _raw_loader_impuestos_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_impuestos_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ImpuestosPage);
      /***/
    },

    /***/
    7650:
    /*!*****************************************************!*\
      !*** ./src/app/pages/impuestos/impuestos.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbXB1ZXN0b3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    17549:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/impuestos/impuestos.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"{{titulo}}\"></app-header>\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Impuestos</ion-label>\n        <div  class=\"ion-text-end\">\n            <ion-button size=\"small\" color=\"warning\"> +</ion-button>\n        </div>\n        \n        <ion-card>\n            <ion-card-content>\n                    <ion-grid class=\"ion-text-left\">\n                      <ion-row class=\"header-row\">\n                        <ion-col>\n                          <ion-text class=\"strong\">Nombre</ion-text>\n                        </ion-col>\n                  \n                        <ion-col>\n                          <ion-text class=\"strong\">Porcentaje</ion-text>\n                        </ion-col>\n                  \n                        <ion-col>\n                          <ion-text class=\"strong\"></ion-text>\n                        </ion-col>\n                      </ion-row>\n                  \n                  \n                      <ion-row>\n                        <ion-col>\n                          <ion-text>\n                              19/10/2020\n                          </ion-text>\n                        </ion-col>\n                  \n                          <ion-col>\n                            <ion-text>\n                              Nome\n                            </ion-text>\n                          </ion-col>\n                    \n                          <ion-col>\n                            <ion-text >\n                                <div  class=\"ion-text-end\">\n                                    <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                                </div>\n                            </ion-text>\n                          </ion-col>\n                      </ion-row>\n                  \n                    </ion-grid>\n            </ion-card-content>\n        </ion-card>\n        \n    </div>\n    \n    \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_impuestos_impuestos_module_ts-es5.js.map