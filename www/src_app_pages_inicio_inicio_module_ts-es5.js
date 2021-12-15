(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_inicio_inicio_module_ts"], {
    /***/
    5652:
    /*!*******************************************************!*\
      !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InicioPageRoutingModule": function InicioPageRoutingModule() {
          return (
            /* binding */
            _InicioPageRoutingModule
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


      var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inicio.page */
      95237);

      var routes = [{
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
      }];

      var _InicioPageRoutingModule = function InicioPageRoutingModule() {
        _classCallCheck(this, InicioPageRoutingModule);
      };

      _InicioPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InicioPageRoutingModule);
      /***/
    },

    /***/
    83633:
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InicioPageModule": function InicioPageModule() {
          return (
            /* binding */
            _InicioPageModule
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


      var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inicio-routing.module */
      5652);
      /* harmony import */


      var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inicio.page */
      95237);
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/components.module */
      45642);

      var _InicioPageModule = function InicioPageModule() {
        _classCallCheck(this, InicioPageModule);
      };

      _InicioPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
      })], _InicioPageModule);
      /***/
    },

    /***/
    95237:
    /*!*********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InicioPage": function InicioPage() {
          return (
            /* binding */
            _InicioPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./inicio.page.html */
      22531);
      /* harmony import */


      var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inicio.page.scss */
      583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _InicioPage = /*#__PURE__*/function () {
        function InicioPage() {
          _classCallCheck(this, InicioPage);

          this.componentes = []; // Constructor Vacio
        }

        _createClass(InicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// Metodo vacio
          }
        }]);

        return InicioPage;
      }();

      _InicioPage.ctorParameters = function () {
        return [];
      };

      _InicioPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InicioPage);
      /***/
    },

    /***/
    583:
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    22531:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<app-header titulo=\"\" inicio=\"1\"></app-header>\n\n<ion-content>\n  <ion-list *ngFor=\"let componente of componentes\">\n    <ion-item [routerLink]=\"componente.redirectTo\" detail>\n      <ion-icon [name]=\"componente.icon\" slot=\"start\"></ion-icon> \n      <ion-label>{{componente.name}}</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_inicio_inicio_module_ts-es5.js.map