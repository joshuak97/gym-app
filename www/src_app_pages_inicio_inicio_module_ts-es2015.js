(self["webpackChunkcomponents"] = self["webpackChunkcomponents"] || []).push([["src_app_pages_inicio_inicio_module_ts"],{

/***/ 5652:
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": function() { return /* binding */ InicioPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 95237);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 83633:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": function() { return /* binding */ InicioPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 5652);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 95237);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 45642);








let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 95237:
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": function() { return /* binding */ InicioPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./inicio.page.html */ 22531);
/* harmony import */ var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let InicioPage = class InicioPage {
    constructor() {
        this.avisos = [];
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
InicioPage.ctorParameters = () => [];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InicioPage);



/***/ }),

/***/ 583:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 22531:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header titulo=\"\"></app-header>\n\n<ion-content>\n  <ion-card >\n    <ion-item color=\"warning\" (click)=\"mostrarAvisos();\">\n      <ion-label color=\"light\">Avisos</ion-label>\n      <ion-icon *ngIf=\"visualizarAvisos\" name=\"arrow-up-circle\" color=\"light\" slot=\"end\"></ion-icon>\n      <ion-icon *ngIf=\"!visualizarAvisos\" name=\"arrow-down-circle\" color=\"light\" slot=\"end\"></ion-icon>\n    </ion-item>\n\n    <ion-card-content *ngIf=\"visualizarAvisos\">\n      <div>\n        <div><strong>Aviso 1:</strong></div>\n        <p> This is content, without any paragraph or header tags,\n          within an ion-card-content element.\n        </p>\n        <p> This is content, without any paragraph or header tags,\n          within an ion-card-content element.</p>\n        <p> This is content, without any paragraph or header tags,\n          within an ion-card-content element.</p>\n        <ion-img src=\"/assets/shapes.svg\"></ion-img>\n      </div>\n    </ion-card-content>\n  </ion-card>\n<!--              Selector de programa                -->\n  <div class=\"ion-margin-top ion-padding\">\n      <ion-label>Programa:</ion-label>\n      <ion-select placeholder=\"Seleccione un programa\">\n      <ion-select-option value=\"1\">CROSSFIT</ion-select-option>\n      <ion-select-option value=\"2\">CROSSFIT KIDS</ion-select-option>\n      <ion-select-option value=\"3\">CYCLING</ion-select-option>\n      </ion-select>\n  </div>\n  <!--             Selector de fecha             -->\n  <div class=\"ion-padding-horizontal\">\n    <ion-label>Fecha:</ion-label>\n    <ion-datetime placeholder=\"DD/MM/YYYY\" [(ngModel)]=\"fechaSelected\" display-format=\"DD/MMMM/YYYY\" id=\"fecha\"></ion-datetime>\n  </div>\n  <!--             Selector de clase             -->\n  <div class=\"ion-padding-horizontal\" *ngIf=\"fechaSelected\">\n    <ion-label>Clase:</ion-label>\n    <ion-select placeholder=\"Seleccione un programa\" [(ngModel)]=\"claseSelected\" id=\"clase\">\n      <ion-select-option value=\"1\">7:00 Area de Cycling</ion-select-option>\n      <ion-select-option value=\"2\">8:00 Area de Cycling</ion-select-option>\n      <ion-select-option value=\"3\">9:00 Area de Cycling</ion-select-option>\n    </ion-select>\n  </div>\n\n  <!--             Selector de cliente             -->\n  <div class=\"ion-padding-horizontal\" *ngIf=\"claseSelected\">\n    <ion-label>Cliente:</ion-label>\n    <ion-select placeholder=\"Seleccione un programa\">\n      <ion-select-option value=\"1\">ADELA RIOS GARCIA</ion-select-option>\n      <ion-select-option value=\"2\">ADRIAN GARCIA GARCIA</ion-select-option>\n      <ion-select-option value=\"3\">ADRIAN GERON AGUILERA</ion-select-option>\n    </ion-select>\n  </div>\n  <!--              clases disponibles            -->\n<ion-card>\n  <ion-item color=\"danger\" (click)=\"mostrarClases();\">\n    <ion-label color=\"light\">No se encontraron clases </ion-label>\n    <ion-icon *ngIf=\"visualizarClases\" name=\"arrow-up-circle\" color=\"light\" slot=\"end\"></ion-icon>\n    <ion-icon *ngIf=\"!visualizarClases\" name=\"arrow-down-circle\" color=\"light\" slot=\"end\"></ion-icon>\n  </ion-item>\n  <ion-card-content *ngIf=\"visualizarClases\"></ion-card-content>\n</ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio_inicio_module_ts-es2015.js.map