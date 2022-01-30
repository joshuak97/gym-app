(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_informes_informes_module_ts"],{

/***/ 97716:
/*!***********************************************************!*\
  !*** ./src/app/pages/informes/informes-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformesPageRoutingModule": function() { return /* binding */ InformesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _informes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informes.page */ 28966);




const routes = [
    {
        path: '',
        component: _informes_page__WEBPACK_IMPORTED_MODULE_0__.InformesPage
    }
];
let InformesPageRoutingModule = class InformesPageRoutingModule {
};
InformesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InformesPageRoutingModule);



/***/ }),

/***/ 63917:
/*!***************************************************!*\
  !*** ./src/app/pages/informes/informes.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformesPageModule": function() { return /* binding */ InformesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _informes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informes-routing.module */ 97716);
/* harmony import */ var _informes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informes.page */ 28966);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let InformesPageModule = class InformesPageModule {
};
InformesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _informes_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformesPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_informes_page__WEBPACK_IMPORTED_MODULE_1__.InformesPage]
    })
], InformesPageModule);



/***/ }),

/***/ 28966:
/*!*************************************************!*\
  !*** ./src/app/pages/informes/informes.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformesPage": function() { return /* binding */ InformesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_informes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./informes.page.html */ 95747);
/* harmony import */ var _informes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informes.page.scss */ 41543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let InformesPage = class InformesPage {
    constructor() {
        this.titulo = 'Informes';
        //
    }
    ngOnInit() {
    }
};
InformesPage.ctorParameters = () => [];
InformesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-informes',
        template: _raw_loader_informes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_informes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InformesPage);



/***/ }),

/***/ 41543:
/*!***************************************************!*\
  !*** ./src/app/pages/informes/informes.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1lcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 95747:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/informes/informes.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Métricas:</ion-label>\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">INGRESOS MENSUALES RECURRENTES</ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                $998.00\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">INGRESOS ANUALES RECURRENTES</ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                $998.00\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">INGRESOS MEDIO POR CLIENTE</ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                $998.00\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">TIEMPO DE VIDA DE CLIENTES</ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                $998.00\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">TASA DE BAJA DE CLIENTES</ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                $998.00\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n        <ion-card>\n            <ion-card-content>\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">COSTE DE BAJA DE CLIENTE</ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                $998.00\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n        </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_informes_informes_module_ts-es2015.js.map