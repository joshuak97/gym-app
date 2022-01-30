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


      var _whiteboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./whiteboard-routing.module */
      96937);
      /* harmony import */


      var _whiteboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./whiteboard.page */
      40154);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _WhiteboardPageModule = function WhiteboardPageModule() {
        _classCallCheck(this, WhiteboardPageModule);
      };

      _WhiteboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _whiteboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.WhiteboardPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
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

          this.titulo = 'Whiteboard';
          this.visualizarWhiteBoard = false;
          this.visualizarWhiteBoard2 = false; //
        }

        _createClass(WhiteboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "mostrarWthiteBoard",
          value: function mostrarWthiteBoard() {
            this.visualizarWhiteBoard = !this.visualizarWhiteBoard;
          }
        }, {
          key: "mostrarWthiteBoard2",
          value: function mostrarWthiteBoard2() {
            this.visualizarWhiteBoard2 = !this.visualizarWhiteBoard2;
          }
        }, {
          key: "mostrarResultadosWhiteboard",
          value: function mostrarResultadosWhiteboard() {
            if (this.fechaSelected && this.programaSelected) {
              this.visualizarWhiteBoard = true;
            } else {
              this.visualizarWhiteBoard = false;
            }
          }
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


      __webpack_exports__["default"] = "<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n    <!--              Selector de programa                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label>Programa:</ion-label>\n        <ion-select (ionChange)=\"mostrarResultadosWhiteboard()\" [(ngModel)]=\"programaSelected\" placeholder=\"Seleccione un programa\">\n            <ion-select-option value=\"1\">CROSSFIT</ion-select-option>\n            <ion-select-option value=\"2\">CROSSFIT KIDS</ion-select-option>\n            <ion-select-option value=\"3\">CYCLING</ion-select-option>\n        </ion-select>\n    </div>\n    <!--             Selector de fecha             -->\n    <div class=\"ion-padding-horizontal\">\n        <ion-label>Fecha:</ion-label>\n        <ion-datetime (ionChange)=\"mostrarResultadosWhiteboard()\" placeholder=\"DD/MM/YYYY\" [(ngModel)]=\"fechaSelected\" id=\"fecha\" display-format=\"DD/MMMM/YYYY\"></ion-datetime>\n    </div>\n<!--                   WhiteBoard-->\n    <ion-card>\n        <ion-item color=\"danger\" (click)=\"mostrarWthiteBoard();\">\n            <ion-label color=\"light\"> {{fechaSelected | date: 'EEEE, MMMM d, y' || 'No se encontraron resultados' }}</ion-label>\n            <ion-icon *ngIf=\"visualizarWhiteBoard\" name=\"arrow-up-circle\" color=\"light\" slot=\"end\"></ion-icon>\n            <ion-icon *ngIf=\"!visualizarWhiteBoard\" name=\"arrow-down-circle\" color=\"light\" slot=\"end\"></ion-icon>\n        </ion-item>\n        <ion-card-content *ngIf=\"visualizarWhiteBoard\">\n            <div>\n                <div><strong>Warmup:</strong></div>\n                <p> 10 min Amrap</p>\n                <p> 20 jumping jack</p>\n                <p> 20 jalon en trx</p>\n                <p> 10/10 DB hing pull</p>\n            </div>\n            <div>\n                <div><strong>Custom Metcon:</strong></div>\n                <p> This is content, without any paragraph or header tags,\n                    within an ion-card-content element.\n                </p>\n                <p> This is content, without any paragraph or header tags,\n                    within an ion-card-content element.</p>\n                <p> This is content, without any paragraph or header tags,\n                    within an ion-card-content element.</p>\n            </div>\n            <div>\n                <div><strong>Vuelta a la cama:</strong></div>\n                <p> This is content, without any paragraph or header tags,\n                    within an ion-card-content element.\n                </p>\n                <p> This is content, without any paragraph or header tags,\n                    within an ion-card-content element.</p>\n                <p> This is content, without any paragraph or header tags,\n                    within an ion-card-content element.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_whiteboard_whiteboard_module_ts-es5.js.map