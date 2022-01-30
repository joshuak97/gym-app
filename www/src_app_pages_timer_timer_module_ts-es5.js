(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_timer_timer_module_ts"], {
    /***/
    17070:
    /*!*****************************************************!*\
      !*** ./src/app/pages/timer/timer-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimerPageRoutingModule": function TimerPageRoutingModule() {
          return (
            /* binding */
            _TimerPageRoutingModule
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


      var _timer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./timer.page */
      53449);

      var routes = [{
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_0__.TimerPage
      }];

      var _TimerPageRoutingModule = function TimerPageRoutingModule() {
        _classCallCheck(this, TimerPageRoutingModule);
      };

      _TimerPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TimerPageRoutingModule);
      /***/
    },

    /***/
    93242:
    /*!*********************************************!*\
      !*** ./src/app/pages/timer/timer.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimerPageModule": function TimerPageModule() {
          return (
            /* binding */
            _TimerPageModule
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


      var _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./timer-routing.module */
      17070);
      /* harmony import */


      var _timer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timer.page */
      53449);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _TimerPageModule = function TimerPageModule() {
        _classCallCheck(this, TimerPageModule);
      };

      _TimerPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimerPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_1__.TimerPage]
      })], _TimerPageModule);
      /***/
    },

    /***/
    53449:
    /*!*******************************************!*\
      !*** ./src/app/pages/timer/timer.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimerPage": function TimerPage() {
          return (
            /* binding */
            _TimerPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_timer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./timer.page.html */
      68481);
      /* harmony import */


      var _timer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./timer.page.scss */
      51132);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TimerPage = /*#__PURE__*/function () {
        function TimerPage() {
          _classCallCheck(this, TimerPage);

          this.titulo = 'Timer'; //
        }

        _createClass(TimerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TimerPage;
      }();

      _TimerPage.ctorParameters = function () {
        return [];
      };

      _TimerPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timer',
        template: _raw_loader_timer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_timer_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TimerPage);
      /***/
    },

    /***/
    51132:
    /*!*********************************************!*\
      !*** ./src/app/pages/timer/timer.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    68481:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/timer/timer.page.html ***!
      \***********************************************************************************/

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
//# sourceMappingURL=src_app_pages_timer_timer_module_ts-es5.js.map