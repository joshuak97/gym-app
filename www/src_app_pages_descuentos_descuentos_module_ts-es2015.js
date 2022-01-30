(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_descuentos_descuentos_module_ts"],{

/***/ 32440:
/*!***************************************************************!*\
  !*** ./src/app/pages/descuentos/descuentos-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescuentosPageRoutingModule": function() { return /* binding */ DescuentosPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _descuentos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descuentos.page */ 68014);




const routes = [
    {
        path: '',
        component: _descuentos_page__WEBPACK_IMPORTED_MODULE_0__.DescuentosPage
    }
];
let DescuentosPageRoutingModule = class DescuentosPageRoutingModule {
};
DescuentosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DescuentosPageRoutingModule);



/***/ }),

/***/ 68136:
/*!*******************************************************!*\
  !*** ./src/app/pages/descuentos/descuentos.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescuentosPageModule": function() { return /* binding */ DescuentosPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _descuentos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descuentos-routing.module */ 32440);
/* harmony import */ var _descuentos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descuentos.page */ 68014);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let DescuentosPageModule = class DescuentosPageModule {
};
DescuentosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _descuentos_routing_module__WEBPACK_IMPORTED_MODULE_0__.DescuentosPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_descuentos_page__WEBPACK_IMPORTED_MODULE_1__.DescuentosPage]
    })
], DescuentosPageModule);



/***/ }),

/***/ 68014:
/*!*****************************************************!*\
  !*** ./src/app/pages/descuentos/descuentos.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescuentosPage": function() { return /* binding */ DescuentosPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_descuentos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./descuentos.page.html */ 88074);
/* harmony import */ var _descuentos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descuentos.page.scss */ 60056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let DescuentosPage = class DescuentosPage {
    constructor() {
        this.titulo = 'Descuentos';
    }
    ngOnInit() {
    }
};
DescuentosPage.ctorParameters = () => [];
DescuentosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-descuentos',
        template: _raw_loader_descuentos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_descuentos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DescuentosPage);



/***/ }),

/***/ 60056:
/*!*******************************************************!*\
  !*** ./src/app/pages/descuentos/descuentos.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXNjdWVudG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 88074:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/descuentos/descuentos.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Descuentos</ion-label>\n        <div class=\"ion-text-end\">\n            <ion-button size=\"small\" color=\"warning\"> +</ion-button>\n        </div>\n\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">Nombre</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">Porcentaje</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">Efectivo</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">Ciclos de facturación</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\"></ion-text>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                Descuento de estudiante\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text>\n                                0%\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text>\n                                $150.00\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text>\n                                Ilimitado\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text>\n                                <div class=\"ion-text-end\">\n                                    <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                                </div>\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n\n    </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_descuentos_descuentos_module_ts-es2015.js.map