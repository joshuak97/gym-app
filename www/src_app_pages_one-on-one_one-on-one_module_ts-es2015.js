(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_one-on-one_one-on-one_module_ts"],{

/***/ 40595:
/*!***************************************************************!*\
  !*** ./src/app/pages/one-on-one/one-on-one-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneOnOnePageRoutingModule": function() { return /* binding */ OneOnOnePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _one_on_one_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-on-one.page */ 97721);




const routes = [
    {
        path: '',
        component: _one_on_one_page__WEBPACK_IMPORTED_MODULE_0__.OneOnOnePage
    }
];
let OneOnOnePageRoutingModule = class OneOnOnePageRoutingModule {
};
OneOnOnePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OneOnOnePageRoutingModule);



/***/ }),

/***/ 87234:
/*!*******************************************************!*\
  !*** ./src/app/pages/one-on-one/one-on-one.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneOnOnePageModule": function() { return /* binding */ OneOnOnePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _one_on_one_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-on-one-routing.module */ 40595);
/* harmony import */ var _one_on_one_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-on-one.page */ 97721);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let OneOnOnePageModule = class OneOnOnePageModule {
};
OneOnOnePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _one_on_one_routing_module__WEBPACK_IMPORTED_MODULE_0__.OneOnOnePageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_one_on_one_page__WEBPACK_IMPORTED_MODULE_1__.OneOnOnePage]
    })
], OneOnOnePageModule);



/***/ }),

/***/ 97721:
/*!*****************************************************!*\
  !*** ./src/app/pages/one-on-one/one-on-one.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneOnOnePage": function() { return /* binding */ OneOnOnePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_one_on_one_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./one-on-one.page.html */ 18577);
/* harmony import */ var _one_on_one_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-on-one.page.scss */ 52831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let OneOnOnePage = class OneOnOnePage {
    constructor() {
        this.titulo = 'One-On-One';
        //
    }
    ngOnInit() {
    }
};
OneOnOnePage.ctorParameters = () => [];
OneOnOnePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-one-on-one',
        template: _raw_loader_one_on_one_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_one_on_one_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OneOnOnePage);



/***/ }),

/***/ 52831:
/*!*******************************************************!*\
  !*** ./src/app/pages/one-on-one/one-on-one.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbmUtb24tb25lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 18577:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/one-on-one/one-on-one.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">One-on-one</ion-label>\n        <ion-card>\n            <ion-card-header>\n                <ion-card-subtitle>Filtrar</ion-card-subtitle>\n            </ion-card-header>\n            <ion-label class=\"ion-margin-top ion-padding strong\">Estado:</ion-label>\n            <ion-select placeholder=\"Todos\">\n                <ion-select-option value=\"1\">Activo</ion-select-option>\n                <ion-select-option value=\"2\">Inactivo</ion-select-option>\n            </ion-select>\n            <ion-label class=\"ion-margin-top ion-padding strong\">Cliente:</ion-label>\n            <ion-select placeholder=\"Todos\">\n                <ion-select-option value=\"1\">Emir Morales aaaaaaaaa</ion-select-option>\n                <ion-select-option value=\"2\">Yareth Barrientos</ion-select-option>\n                <ion-select-option value=\"3\">Ximena Presa Juarez</ion-select-option>\n            </ion-select>\n            <ion-label class=\"ion-margin-top ion-padding strong\">Programa:</ion-label>\n            <ion-select placeholder=\"Todos\">\n                <ion-select-option value=\"1\">Cycling</ion-select-option>\n                <ion-select-option value=\"2\">Crossfit</ion-select-option>\n                <ion-select-option value=\"3\">Cardio</ion-select-option>\n            </ion-select>\n            <ion-item>\n                <ion-label position=\"floating\">Nombre</ion-label>\n                <ion-input type=\"text\"></ion-input>\n            </ion-item>\n            <div class=\"ion-margin-top ion-padding\">\n                <ion-button color=\"danger\">Filtrar</ion-button>\n            </div>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">Nombre</ion-text>\n                        </ion-col>\n    \n                        <ion-col>\n                            <ion-text class=\"strong\">Cliente</ion-text>\n                        </ion-col>\n    \n                        <ion-col>\n                            <ion-text class=\"strong\">Programa</ion-text>\n                        </ion-col>\n    \n                        <ion-col>\n                            <ion-text class=\"strong\">Estado</ion-text>\n                        </ion-col>\n                    <ion-col>\n                        <ion-text class=\"strong\"></ion-text>\n                    </ion-col>\n                    </ion-row>\n    \n    \n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                Plan de entrenamiento\n                            </ion-text>\n                        </ion-col>\n    \n                        <ion-col>\n                            <ion-text>\n                                Pablo Mendoza\n                            </ion-text>\n                        </ion-col>\n    \n                        <ion-col>\n                            <ion-text class=\"strong\">\n                                Rutina en casa\n                            </ion-text>\n                        </ion-col>\n                        <ion-col>\n                            <ion-text class=\"strong\">\n                                Activo\n                            </ion-text>\n                        </ion-col>\n                        <ion-col>\n                            <ion-text>\n                                <div class=\"ion-text-end\">\n                                    <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                                </div>\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n    \n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_one-on-one_one-on-one_module_ts-es2015.js.map