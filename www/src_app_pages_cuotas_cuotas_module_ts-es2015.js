(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_cuotas_cuotas_module_ts"],{

/***/ 24349:
/*!*******************************************************!*\
  !*** ./src/app/pages/cuotas/cuotas-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuotasPageRoutingModule": function() { return /* binding */ CuotasPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cuotas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuotas.page */ 67230);




const routes = [
    {
        path: '',
        component: _cuotas_page__WEBPACK_IMPORTED_MODULE_0__.CuotasPage
    }
];
let CuotasPageRoutingModule = class CuotasPageRoutingModule {
};
CuotasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CuotasPageRoutingModule);



/***/ }),

/***/ 92500:
/*!***********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuotasPageModule": function() { return /* binding */ CuotasPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cuotas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuotas-routing.module */ 24349);
/* harmony import */ var _cuotas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuotas.page */ 67230);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let CuotasPageModule = class CuotasPageModule {
};
CuotasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _cuotas_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuotasPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_cuotas_page__WEBPACK_IMPORTED_MODULE_1__.CuotasPage]
    })
], CuotasPageModule);



/***/ }),

/***/ 67230:
/*!*********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuotasPage": function() { return /* binding */ CuotasPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cuotas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cuotas.page.html */ 58511);
/* harmony import */ var _cuotas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuotas.page.scss */ 20608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let CuotasPage = class CuotasPage {
    constructor() {
        this.titulo = 'Cuotas';
    }
    ngOnInit() {
    }
};
CuotasPage.ctorParameters = () => [];
CuotasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cuotas',
        template: _raw_loader_cuotas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cuotas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CuotasPage);



/***/ }),

/***/ 20608:
/*!***********************************************!*\
  !*** ./src/app/pages/cuotas/cuotas.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdW90YXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 58511:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cuotas/cuotas.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Cuotas:</ion-label>\n        <ion-card>\n            <ion-card-header>\n                <ion-card-subtitle>Filtrar</ion-card-subtitle>\n              </ion-card-header>\n              <ion-label class=\"ion-margin-top ion-padding strong\">Programas:</ion-label>\n        <ion-select placeholder=\"Todos\">\n            <ion-select-option value=\"1\">Emir Morales aaaaaaaaa</ion-select-option>\n            <ion-select-option value=\"2\">Yareth Barrientos</ion-select-option>\n            <ion-select-option value=\"3\">Ximena Presa Juarez</ion-select-option>\n        </ion-select>\n        <ion-label class=\"ion-margin-top ion-padding strong\">Tipo de venta:</ion-label>\n        <ion-select placeholder=\"Todos\">\n            <ion-select-option value=\"1\">Emir Morales aaaaaaaaa</ion-select-option>\n            <ion-select-option value=\"2\">Yareth Barrientos</ion-select-option>\n            <ion-select-option value=\"3\">Ximena Presa Juarez</ion-select-option>\n        </ion-select>\n\n        <ion-item>\n            <ion-label position=\"floating\" >Nombre</ion-label>\n            <ion-input type=\"text\" ></ion-input>\n          </ion-item>\n          <div class=\"ion-margin-top ion-padding\">\n          <ion-button color=\"danger\">Filtrar</ion-button>\n        </div>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n              <ion-grid class=\"ion-text-left\">\n                <ion-row class=\"header-row\">\n                  <ion-col>\n                    <ion-text class=\"strong\">Nombre</ion-text>\n                  </ion-col>\n            \n                  <ion-col>\n                    <ion-text class=\"strong\">Precio</ion-text>\n                  </ion-col>\n            \n                  <ion-col>\n                    <ion-text class=\"strong\">Creditos cuota</ion-text>\n                  </ion-col>\n\n                  <ion-col>\n                      <ion-text class=\"strong\"></ion-text>\n                    </ion-col>\n                </ion-row>\n            \n            \n                <ion-row>\n                  <ion-col>\n                    <ion-text>\n                        Clases en vivo\n                    </ion-text>\n                  </ion-col>\n            \n                    <ion-col>\n                      <ion-text>\n                        $100.00\n                      </ion-text>\n                    </ion-col>\n\n                    <ion-col>\n                      <ion-text class=\"strong\">\n                       30 creditos mensual\n                      </ion-text>\n                    </ion-col>\n              \n                    <ion-col>\n                      <ion-text >\n                          <div  class=\"ion-text-end\">\n                              <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                          </div>\n                      </ion-text>\n                    </ion-col>\n                </ion-row>\n            \n              </ion-grid>\n      </ion-card-content>\n  </ion-card>\n    </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cuotas_cuotas_module_ts-es2015.js.map