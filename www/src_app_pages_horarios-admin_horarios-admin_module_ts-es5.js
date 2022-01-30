(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_horarios-admin_horarios-admin_module_ts"], {
    /***/
    23835:
    /*!***********************************************************************!*\
      !*** ./src/app/pages/horarios-admin/horarios-admin-routing.module.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HorariosAdminPageRoutingModule": function HorariosAdminPageRoutingModule() {
          return (
            /* binding */
            _HorariosAdminPageRoutingModule
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


      var _horarios_admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./horarios-admin.page */
      9659);

      var routes = [{
        path: '',
        component: _horarios_admin_page__WEBPACK_IMPORTED_MODULE_0__.HorariosAdminPage
      }];

      var _HorariosAdminPageRoutingModule = function HorariosAdminPageRoutingModule() {
        _classCallCheck(this, HorariosAdminPageRoutingModule);
      };

      _HorariosAdminPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HorariosAdminPageRoutingModule);
      /***/
    },

    /***/
    18955:
    /*!***************************************************************!*\
      !*** ./src/app/pages/horarios-admin/horarios-admin.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HorariosAdminPageModule": function HorariosAdminPageModule() {
          return (
            /* binding */
            _HorariosAdminPageModule
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


      var _horarios_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./horarios-admin-routing.module */
      23835);
      /* harmony import */


      var _horarios_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./horarios-admin.page */
      9659);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _HorariosAdminPageModule = function HorariosAdminPageModule() {
        _classCallCheck(this, HorariosAdminPageModule);
      };

      _HorariosAdminPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _horarios_admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.HorariosAdminPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_horarios_admin_page__WEBPACK_IMPORTED_MODULE_1__.HorariosAdminPage]
      })], _HorariosAdminPageModule);
      /***/
    },

    /***/
    9659:
    /*!*************************************************************!*\
      !*** ./src/app/pages/horarios-admin/horarios-admin.page.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HorariosAdminPage": function HorariosAdminPage() {
          return (
            /* binding */
            _HorariosAdminPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_horarios_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./horarios-admin.page.html */
      67663);
      /* harmony import */


      var _horarios_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./horarios-admin.page.scss */
      24770);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HorariosAdminPage = /*#__PURE__*/function () {
        function HorariosAdminPage() {
          _classCallCheck(this, HorariosAdminPage);

          this.titulo = 'Horarios';
        }

        _createClass(HorariosAdminPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HorariosAdminPage;
      }();

      _HorariosAdminPage.ctorParameters = function () {
        return [];
      };

      _HorariosAdminPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-horarios-admin',
        template: _raw_loader_horarios_admin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_horarios_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HorariosAdminPage);
      /***/
    },

    /***/
    24770:
    /*!***************************************************************!*\
      !*** ./src/app/pages/horarios-admin/horarios-admin.page.scss ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jhcmlvcy1hZG1pbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    67663:
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/horarios-admin/horarios-admin.page.html ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Horarios:</ion-label>\n        <ion-card>\n            <ion-card-content>\n                <ion-card-header>\n                    <ion-card-subtitle>Cycling</ion-card-subtitle>\n                  </ion-card-header>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">Duración</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">Días</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">Coach</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">Sala</ion-text>\n                        </ion-col>\n                        <ion-col>\n                            <ion-text class=\"strong\"></ion-text>\n                        </ion-col>\n                    </ion-row>\n\n\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                7:00a.m to 9:00a.m\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text>\n                                lun,mart,mierc.\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">\n                                Nadia Castillo\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">\n                                area de Cycling\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text>\n                                <div class=\"ion-text-end\">\n                                    <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                                </div>\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_horarios-admin_horarios-admin_module_ts-es5.js.map