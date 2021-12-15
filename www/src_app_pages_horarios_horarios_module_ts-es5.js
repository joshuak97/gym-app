(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_horarios_horarios_module_ts"], {
    /***/
    44949:
    /*!***********************************************************!*\
      !*** ./src/app/pages/horarios/horarios-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HorariosPageRoutingModule": function HorariosPageRoutingModule() {
          return (
            /* binding */
            _HorariosPageRoutingModule
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


      var _horarios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./horarios.page */
      98889);

      var routes = [{
        path: '',
        component: _horarios_page__WEBPACK_IMPORTED_MODULE_0__.HorariosPage
      }];

      var _HorariosPageRoutingModule = function HorariosPageRoutingModule() {
        _classCallCheck(this, HorariosPageRoutingModule);
      };

      _HorariosPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HorariosPageRoutingModule);
      /***/
    },

    /***/
    76209:
    /*!***************************************************!*\
      !*** ./src/app/pages/horarios/horarios.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HorariosPageModule": function HorariosPageModule() {
          return (
            /* binding */
            _HorariosPageModule
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


      var _horarios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./horarios-routing.module */
      44949);
      /* harmony import */


      var _horarios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./horarios.page */
      98889);

      var _HorariosPageModule = function HorariosPageModule() {
        _classCallCheck(this, HorariosPageModule);
      };

      _HorariosPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _horarios_routing_module__WEBPACK_IMPORTED_MODULE_0__.HorariosPageRoutingModule],
        declarations: [_horarios_page__WEBPACK_IMPORTED_MODULE_1__.HorariosPage]
      })], _HorariosPageModule);
      /***/
    },

    /***/
    98889:
    /*!*************************************************!*\
      !*** ./src/app/pages/horarios/horarios.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HorariosPage": function HorariosPage() {
          return (
            /* binding */
            _HorariosPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_horarios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./horarios.page.html */
      27195);
      /* harmony import */


      var _horarios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./horarios.page.scss */
      21232);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HorariosPage = /*#__PURE__*/function () {
        function HorariosPage() {
          _classCallCheck(this, HorariosPage);
        }

        _createClass(HorariosPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HorariosPage;
      }();

      _HorariosPage.ctorParameters = function () {
        return [];
      };

      _HorariosPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-horarios',
        template: _raw_loader_horarios_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_horarios_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HorariosPage);
      /***/
    },

    /***/
    21232:
    /*!***************************************************!*\
      !*** ./src/app/pages/horarios/horarios.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jhcmlvcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    27195:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/horarios/horarios.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>horarios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_horarios_horarios_module_ts-es5.js.map