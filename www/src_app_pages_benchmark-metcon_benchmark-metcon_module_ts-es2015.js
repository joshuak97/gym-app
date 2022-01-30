(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_benchmark-metcon_benchmark-metcon_module_ts"],{

/***/ 72694:
/*!***************************************************************************!*\
  !*** ./src/app/pages/benchmark-metcon/benchmark-metcon-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenchmarkMetconPageRoutingModule": function() { return /* binding */ BenchmarkMetconPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _benchmark_metcon_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./benchmark-metcon.page */ 55502);




const routes = [
    {
        path: '',
        component: _benchmark_metcon_page__WEBPACK_IMPORTED_MODULE_0__.BenchmarkMetconPage
    }
];
let BenchmarkMetconPageRoutingModule = class BenchmarkMetconPageRoutingModule {
};
BenchmarkMetconPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BenchmarkMetconPageRoutingModule);



/***/ }),

/***/ 29631:
/*!*******************************************************************!*\
  !*** ./src/app/pages/benchmark-metcon/benchmark-metcon.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisResultadosPageModule": function() { return /* binding */ MisResultadosPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _benchmark_metcon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./benchmark-metcon-routing.module */ 72694);
/* harmony import */ var _benchmark_metcon_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./benchmark-metcon.page */ 55502);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let MisResultadosPageModule = class MisResultadosPageModule {
};
MisResultadosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _benchmark_metcon_routing_module__WEBPACK_IMPORTED_MODULE_0__.BenchmarkMetconPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_benchmark_metcon_page__WEBPACK_IMPORTED_MODULE_1__.BenchmarkMetconPage]
    })
], MisResultadosPageModule);



/***/ }),

/***/ 55502:
/*!*****************************************************************!*\
  !*** ./src/app/pages/benchmark-metcon/benchmark-metcon.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BenchmarkMetconPage": function() { return /* binding */ BenchmarkMetconPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_benchmark_metcon_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./benchmark-metcon.page.html */ 12896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);



let BenchmarkMetconPage = class BenchmarkMetconPage {
    constructor() {
        this.titulo = 'Benchmark-Metcon';
        this.visualizarWhiteBoard = false;
        //
    }
    ngOnInit() {
    }
};
BenchmarkMetconPage.ctorParameters = () => [];
BenchmarkMetconPage = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-benchmark-metcon',
        template: _raw_loader_benchmark_metcon_page_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], BenchmarkMetconPage);



/***/ }),

/***/ 12896:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/benchmark-metcon/benchmark-metcon.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label class=\"strong\">Benchmark Metcon</ion-label>\n        <ion-select placeholder=\"Seleccione un cliente\">\n            <ion-select-option value=\"1\">Emir Morales aaaaaaaaa</ion-select-option>\n            <ion-select-option value=\"2\">Yareth Barrientos</ion-select-option>\n            <ion-select-option value=\"3\">Ximena Presa Juarez</ion-select-option>\n        </ion-select>\n        <div  class=\"ion-text-end\">\n        <ion-button size=\"small\" color=\"warning\"> +</ion-button>\n    </div>\n        <ion-select placeholder=\"Seleccione un componente\"> \n            <ion-select-option value=\"1\">1 mile run</ion-select-option>\n            <ion-select-option value=\"2\">100 meters run</ion-select-option>\n            <ion-select-option value=\"3\">1000 meters row</ion-select-option>\n        </ion-select>\n    </div>\n    \n    <div class=\"ion-margin-top ion-padding\">\n        <ion-card>\n            <ion-item color=\"danger\">\n                <ion-label color=\"light\"> {{componente || 'No se encontraron resultados' }}</ion-label>\n                <ion-icon  *ngIf=\"visualizarWhiteBoard\" name=\"arrow-up-circle\" color=\"light\" slot=\"end\"></ion-icon>\n                <ion-icon  *ngIf=\"!visualizarWhiteBoard\" name=\"arrow-down-circle\" color=\"light\" slot=\"end\"></ion-icon>\n            </ion-item>\n            <ion-card-header>\n            </ion-card-header>\n            <ion-card-content  *ngIf=\"visualizarWhiteBoard\">\n                <ion-grid class=\"ion-text-left\">\n                    <ion-row class=\"header-row\">\n                        <ion-col>\n                            <ion-text class=\"strong\">Componente</ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text class=\"strong\">Resultado</ion-text>\n                        </ion-col>\n\n                       \n                        <ion-col>\n                            <ion-text class=\"strong\"></ion-text>\n                        </ion-col>\n                    </ion-row>\n\n                    <ion-row>\n                        <ion-col>\n                            <ion-text>\n                                100 meters run\n                            </ion-text>\n                        </ion-col>\n\n                        <ion-col>\n                            <ion-text>\n                               30:20\n                            </ion-text>\n                        </ion-col>\n                        <ion-col>\n                            <ion-text>\n                                <div class=\"ion-text-end\">\n                                    <ion-button size=\"small\" color=\"light\"> +</ion-button>\n                                </div>\n                            </ion-text>\n                        </ion-col>\n                    </ion-row>\n\n                </ion-grid>\n            </ion-card-content>\n        </ion-card>\n</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_benchmark-metcon_benchmark-metcon_module_ts-es2015.js.map