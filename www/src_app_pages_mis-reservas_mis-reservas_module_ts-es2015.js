(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_mis-reservas_mis-reservas_module_ts"],{

/***/ 25308:
/*!*******************************************************************!*\
  !*** ./src/app/pages/mis-reservas/mis-reservas-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReservasPageRoutingModule": function() { return /* binding */ MisReservasPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mis_reservas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-reservas.page */ 33832);




const routes = [
    {
        path: '',
        component: _mis_reservas_page__WEBPACK_IMPORTED_MODULE_0__.MisReservasPage
    }
];
let MisReservasPageRoutingModule = class MisReservasPageRoutingModule {
};
MisReservasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MisReservasPageRoutingModule);



/***/ }),

/***/ 8401:
/*!***********************************************************!*\
  !*** ./src/app/pages/mis-reservas/mis-reservas.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReservasPageModule": function() { return /* binding */ MisReservasPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mis_reservas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mis-reservas-routing.module */ 25308);
/* harmony import */ var _mis_reservas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-reservas.page */ 33832);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let MisReservasPageModule = class MisReservasPageModule {
};
MisReservasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _mis_reservas_routing_module__WEBPACK_IMPORTED_MODULE_0__.MisReservasPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_mis_reservas_page__WEBPACK_IMPORTED_MODULE_1__.MisReservasPage]
    })
], MisReservasPageModule);



/***/ }),

/***/ 33832:
/*!*********************************************************!*\
  !*** ./src/app/pages/mis-reservas/mis-reservas.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisReservasPage": function() { return /* binding */ MisReservasPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_mis_reservas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mis-reservas.page.html */ 88705);
/* harmony import */ var _mis_reservas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-reservas.page.scss */ 80295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MisReservasPage = class MisReservasPage {
    constructor() {
        this.titulo = 'Mis Reservas';
        this.visualizarAvisos = true;
        this.visualizarClases = false;
    }
    ngOnInit() {
        // Metodo vacio
    }
    mostrarAvisos() {
        this.visualizarAvisos = !this.visualizarAvisos;
    }
    mostrarClases() {
        this.visualizarClases = !this.visualizarClases;
    }
};
MisReservasPage.ctorParameters = () => [];
MisReservasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mis-reservas',
        template: _raw_loader_mis_reservas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mis_reservas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MisReservasPage);



/***/ }),

/***/ 80295:
/*!***********************************************************!*\
  !*** ./src/app/pages/mis-reservas/mis-reservas.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtaXMtcmVzZXJ2YXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 88705:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mis-reservas/mis-reservas.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header titulo=\"{{titulo}}\"></app-header>\n\n<ion-content>\n\n    <!--              Selector de reservas                -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label>Mis Reservas:</ion-label>\n        <ion-select placeholder=\"Seleccione un cliente\">\n            <ion-select-option value=\"1\">Emir Morales aaaaaaaaa</ion-select-option>\n            <ion-select-option value=\"2\">Yareth Barrientos</ion-select-option>\n            <ion-select-option value=\"3\">Ximena Presa Juarez</ion-select-option>\n        </ion-select>\n    </div>\n    <!--               Desplegable de los creditos                   -->\n    <div class=\"ion-margin-top ion-padding\">\n        <ion-label>Créditos:</ion-label>\n        <ion-card>\n            <ion-card-header>\n                <ion-card-subtitle>Destination</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>\n                <p>Programa:</p>\n                <p>Créditos utilizados:</p>\n                <p>Créditos disponibles:</p>\n                <p>Período de los créditos:</p>\n                <p>Caducidad de la suscripción:</p>\n            </ion-card-content>\n        </ion-card>\n</div>\n<!--              reservas disponibles            -->\n<ion-card>\n    <ion-item color=\"danger\" (click)=\"mostrarClases();\">\n        <ion-label color=\"light\">Ninguna reserva encontrada </ion-label>\n        <ion-icon *ngIf=\"visualizarClases\" name=\"arrow-up-circle\" color=\"light\" slot=\"end\"></ion-icon>\n        <ion-icon *ngIf=\"!visualizarClases\" name=\"arrow-down-circle\" color=\"light\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-card-content *ngIf=\"visualizarClases\"></ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mis-reservas_mis-reservas_module_ts-es2015.js.map