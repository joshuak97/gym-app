(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_whiteboard_whiteboard_module_ts"], {
    /***/
    96937:
    /*!***************************************************************!*\
      !*** ./src/app/pages/whiteboard/whiteboard-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhiteboardPageRoutingModule": function WhiteboardPageRoutingModule() {
          return (
            /* binding */
            _WhiteboardPageRoutingModule
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


      var _whiteboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./whiteboard.page */
      40154);

      var routes = [{
        path: '',
        component: _whiteboard_page__WEBPACK_IMPORTED_MODULE_0__.WhiteboardPage
      }];

      var _WhiteboardPageRoutingModule = function WhiteboardPageRoutingModule() {
        _classCallCheck(this, WhiteboardPageRoutingModule);
      };

      _WhiteboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WhiteboardPageRoutingModule);
      /***/
    },

    /***/
    54564:
    /*!*******************************************************!*\
      !*** ./src/app/pages/whiteboard/whiteboard.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhiteboardPageModule": function WhiteboardPageModule() {
          return (
            /* binding */
            _WhiteboardPageModule
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


      var _whiteboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./whiteboard-routing.module */
      96937);
      /* harmony import */


      var _whiteboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./whiteboard.page */
      40154);

      var _WhiteboardPageModule = function WhiteboardPageModule() {
        _classCallCheck(this, WhiteboardPageModule);
      };

      _WhiteboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _whiteboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.WhiteboardPageRoutingModule],
        declarations: [_whiteboard_page__WEBPACK_IMPORTED_MODULE_1__.WhiteboardPage]
      })], _WhiteboardPageModule);
      /***/
    },

    /***/
    40154:
    /*!*****************************************************!*\
      !*** ./src/app/pages/whiteboard/whiteboard.page.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhiteboardPage": function WhiteboardPage() {
          return (
            /* binding */
            _WhiteboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_whiteboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./whiteboard.page.html */
      85949);
      /* harmony import */


      var _whiteboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./whiteboard.page.scss */
      4066);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _WhiteboardPage = /*#__PURE__*/function () {
        function WhiteboardPage() {
          _classCallCheck(this, WhiteboardPage);
        }

        _createClass(WhiteboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WhiteboardPage;
      }();

      _WhiteboardPage.ctorParameters = function () {
        return [];
      };

      _WhiteboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-whiteboard',
        template: _raw_loader_whiteboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_whiteboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WhiteboardPage);
      /***/
    },

    /***/
    4066:
    /*!*******************************************************!*\
      !*** ./src/app/pages/whiteboard/whiteboard.page.scss ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aGl0ZWJvYXJkLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    85949:
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/whiteboard/whiteboard.page.html ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>whiteboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_whiteboard_whiteboard_module_ts-es5.js.map