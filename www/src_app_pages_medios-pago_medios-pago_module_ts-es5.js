(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_medios-pago_medios-pago_module_ts"], {
    /***/
    42407:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/medios-pago/medios-pago-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MediosPagoPageRoutingModule": function MediosPagoPageRoutingModule() {
          return (
            /* binding */
            _MediosPagoPageRoutingModule
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


      var _medios_pago_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./medios-pago.page */
      97941);

      var routes = [{
        path: '',
        component: _medios_pago_page__WEBPACK_IMPORTED_MODULE_0__.MediosPagoPage
      }];

      var _MediosPagoPageRoutingModule = function MediosPagoPageRoutingModule() {
        _classCallCheck(this, MediosPagoPageRoutingModule);
      };

      _MediosPagoPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MediosPagoPageRoutingModule);
      /***/
    },

    /***/
    50480:
    /*!*********************************************************!*\
      !*** ./src/app/pages/medios-pago/medios-pago.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MediosPagoPageModule": function MediosPagoPageModule() {
          return (
            /* binding */
            _MediosPagoPageModule
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


      var _medios_pago_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./medios-pago-routing.module */
      42407);
      /* harmony import */


      var _medios_pago_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./medios-pago.page */
      97941);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _MediosPagoPageModule = function MediosPagoPageModule() {
        _classCallCheck(this, MediosPagoPageModule);
      };

      _MediosPagoPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _medios_pago_routing_module__WEBPACK_IMPORTED_MODULE_0__.MediosPagoPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_medios_pago_page__WEBPACK_IMPORTED_MODULE_1__.MediosPagoPage]
      })], _MediosPagoPageModule);
      /***/
    },

    /***/
    97941:
    /*!*******************************************************!*\
      !*** ./src/app/pages/medios-pago/medios-pago.page.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MediosPagoPage": function MediosPagoPage() {
          return (
            /* binding */
            _MediosPagoPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_medios_pago_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./medios-pago.page.html */
      36763);
      /* harmony import */


      var _medios_pago_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./medios-pago.page.scss */
      25708);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MediosPagoPage = /*#__PURE__*/function () {
        function MediosPagoPage() {
          _classCallCheck(this, MediosPagoPage);

          this.titulo = 'Medios de Pago';
        }

        _createClass(MediosPagoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MediosPagoPage;
      }();

      _MediosPagoPage.ctorParameters = function () {
        return [];
      };

      _MediosPagoPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-medios-pago',
        template: _raw_loader_medios_pago_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_medios_pago_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MediosPagoPage);
      /***/
    },

    /***/
    25708:
    /*!*********************************************************!*\
      !*** ./src/app/pages/medios-pago/medios-pago.page.scss ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpb3MtcGFnby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    36763:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/medios-pago/medios-pago.page.html ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"{{titulo}}\"></app-header>\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Medios de pago</ion-label>\n        <ion-card>\n            <ion-card-content>\n                    <ion-grid class=\"ion-text-left\">\n                      <ion-row class=\"header-row\">\n                        <ion-col>\n                          <ion-text class=\"strong\">Nombre</ion-text>\n                        </ion-col>\n                  \n                        <ion-col>\n                          <ion-text class=\"strong\">Estado</ion-text>\n                        </ion-col>\n                  \n                        <ion-col>\n                          <ion-text class=\"strong\"></ion-text>\n                        </ion-col>\n                      </ion-row>\n                  \n                  \n                      <ion-row>\n                        <ion-col>\n                          <ion-text>\n                              19/10/2020\n                          </ion-text>\n                        </ion-col>\n                  \n                          <ion-col>\n                            <ion-text>\n                              Nome\n                            </ion-text>\n                          </ion-col>\n                    \n                          <ion-col>\n                            <ion-text >\n                                <div  class=\"ion-text-end\">\n                                    <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                                </div>\n                            </ion-text>\n                          </ion-col>\n                      </ion-row>\n                  \n                    </ion-grid>\n                    Para conectarse a su cuenta de Stripe, por favor, abra la version web de la app.\n            </ion-card-content>\n        </ion-card>\n        \n    </div>\n    \n    \n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_medios-pago_medios-pago_module_ts-es5.js.map