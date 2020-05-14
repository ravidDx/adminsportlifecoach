(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _services_deportista_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/deportista.service */ "./src/app/services/deportista.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/content/content.component */ "./src/app/pages/content/content.component.ts");
/* harmony import */ var _pages_single_single_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/single/single.component */ "./src/app/pages/single/single.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_social_social_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/social/social.component */ "./src/app/shared/social/social.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/*FIREBASE */





/*Data Tables*/

//Restfull

/*Rutas*/

//Services



/*Componenentes*/








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_18__["AdminLayoutComponent"],
                _pages_content_content_component__WEBPACK_IMPORTED_MODULE_19__["ContentComponent"],
                _pages_single_single_component__WEBPACK_IMPORTED_MODULE_20__["SingleComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _shared_social_social_component__WEBPACK_IMPORTED_MODULE_22__["SocialComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_23__["ModalComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_24__["SigninComponent"]
            ],
            providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _services_deportista_service__WEBPACK_IMPORTED_MODULE_14__["DeportistaService"], _services_toaster_service__WEBPACK_IMPORTED_MODULE_16__["ToasterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*COMPONENTES*/


var routes = [
    /*
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },*/
    /*
    {
      path: '',
      component: SingleComponent
    },*/
    {
        path: '',
        component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
    },
    {
        path: 'signin',
        component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    },
    { path: "**", pathMatch: "full", redirectTo: "" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\">\r\n  <div class=\"container-login100\">\r\n    <div class=\"wrap-login100\">\r\n      <form class=\"login100-form validate-form\" #formLogin=\"ngForm\" (ngSubmit)=\"onLogin()\">\r\n        <span class=\"login100-form-title p-b-43\">\r\n          Login to continue\r\n        </span>\r\n        <br><br>\r\n        \r\n        <div class=\"wrap-input100 validate-input\" data-validate = \"Valid email is required: ex@abc.xyz\">\r\n          <input class=\"input100\" type=\"text\" name=\"email\" [(ngModel)]=\"email\">\r\n          <span class=\"focus-input100\"></span>\r\n          <span class=\"label-input100\">Email</span>\r\n        </div>\r\n            \r\n        <div class=\"wrap-input100 validate-input\" data-validate=\"Password is required\">\r\n          <input class=\"input100\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" >\r\n          <span class=\"focus-input100\"></span>\r\n          <span class=\"label-input100\">Password</span>\r\n        </div>\r\n      \r\n        <div class=\"flex-sb-m w-full p-t-3 p-b-32\">\r\n          <div class=\"contact100-form-checkbox\">\r\n            <input class=\"input-checkbox100\" id=\"ckb1\" type=\"checkbox\" name=\"remember-me\">\r\n            <label class=\"label-checkbox100\" for=\"ckb1\">\r\n              Recuerdame\r\n            </label>\r\n          </div>\r\n\r\n          <div class=\"forgot-link\">\r\n            <a href=\"#\" class=\"txt1\">\r\n              Olvidate tu contraseña?\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <br>\r\n    \r\n        <div class=\"container-login100-form-btn\">\r\n          <button class=\"login100-form-btn\" [disabled]=\"isInvalid\"> \r\n            <span [hidden]=\"isInvalid\">Iniciar sesion</span>\r\n            <div class=\"loader\" [hidden]=\"!isInvalid\"></div>\r\n          </button>\r\n        </div>\r\n        \r\n\r\n      </form>\r\n   \r\n      <div class=\"login100-more\" style=\"background-image: url('assets/images/signin2.jpeg');\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*//////////////////////////////////////////////////////////////////\r\n  [ RESTYLE TAG ]*/\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box; }\nbody, html {\n  height: 100%;\n  font-family: Poppins-Regular, sans-serif; }\n/*---------------------------------------------*/\na {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px;\n  transition: all 0.4s;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s; }\na:focus {\n  outline: none !important; }\na:hover {\n  text-decoration: none;\n  color: #6675df; }\n/*---------------------------------------------*/\nh1, h2, h3, h4, h5, h6 {\n  margin: 0px; }\np {\n  font-family: Poppins-Regular;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #666666;\n  margin: 0px; }\nul, li {\n  margin: 0px;\n  list-style-type: none; }\n/*---------------------------------------------*/\ninput {\n  outline: none;\n  border: none; }\ntextarea {\n  outline: none;\n  border: none; }\ntextarea:focus, input:focus {\n  border-color: transparent !important; }\ninput:focus::-webkit-input-placeholder {\n  color: transparent; }\ninput:focus:-moz-placeholder {\n  color: transparent; }\ninput:focus::-moz-placeholder {\n  color: transparent; }\ninput:focus:-ms-input-placeholder {\n  color: transparent; }\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent; }\ntextarea:focus:-moz-placeholder {\n  color: transparent; }\ntextarea:focus::-moz-placeholder {\n  color: transparent; }\ntextarea:focus:-ms-input-placeholder {\n  color: transparent; }\ninput::-webkit-input-placeholder {\n  color: #999999; }\ninput:-moz-placeholder {\n  color: #999999; }\ninput::-moz-placeholder {\n  color: #999999; }\ninput:-ms-input-placeholder {\n  color: #999999; }\ntextarea::-webkit-input-placeholder {\n  color: #999999; }\ntextarea:-moz-placeholder {\n  color: #999999; }\ntextarea::-moz-placeholder {\n  color: #999999; }\ntextarea:-ms-input-placeholder {\n  color: #999999; }\nlabel {\n  display: block;\n  margin: 0; }\n/*---------------------------------------------*/\nbutton {\n  outline: none !important;\n  border: none;\n  background: transparent; }\nbutton:hover {\n  cursor: pointer; }\niframe {\n  border: none !important; }\n/*//////////////////////////////////////////////////////////////////\r\n  [ utility ]*/\n/*==================================================================\r\n  [ Text ]*/\n.txt1 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #555555; }\n.txt2 {\n  font-family: Montserrat-Regular;\n  font-size: 13px;\n  line-height: 1.4;\n  color: #999999; }\n/*==================================================================\r\n  [ Size ]*/\n.size1 {\n  width: 355px;\n  max-width: 100%; }\n.size2 {\n  width: calc(100% - 43px); }\n/*==================================================================\r\n  [ Background ]*/\n.bg1 {\n  background: #3b5998; }\n.bg2 {\n  background: #1da1f2; }\n.bg3 {\n  background: #cd201f; }\n/*//////////////////////////////////////////////////////////////////\r\n  [ login ]*/\n.limiter {\n  width: 100%;\n  margin: 0 auto; }\n.container-login100 {\n  width: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #f2f2f2; }\n.wrap-login100 {\n  width: 100%;\n  background: #fff;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse; }\n/*==================================================================\r\n  [ login more ]*/\n.login100-more {\n  width: calc(100% - 560px);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  z-index: 1; }\n.login100-more::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.1); }\n/*==================================================================\r\n  [ Form ]*/\n.login100-form {\n  width: 560px;\n  min-height: 100vh;\n  display: block;\n  background-color: #f7f7f7;\n  padding: 173px 55px 55px 55px; }\n.login100-form-title {\n  width: 100%;\n  display: block;\n  font-family: Poppins-Regular;\n  font-size: 30px;\n  color: #333333;\n  line-height: 1.2;\n  text-align: center; }\n/*------------------------------------------------------------------\r\n  [ Input ]*/\n.wrap-input100 {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  width: 100%;\n  height: 80px;\n  position: relative;\n  border: 1px solid #e6e6e6;\n  border-radius: 10px;\n  margin-bottom: 10px; }\n.label-input100 {\n  font-family: Montserrat-Regular;\n  font-size: 18px;\n  color: #999999;\n  line-height: 1.2;\n  display: block;\n  position: absolute;\n  pointer-events: none;\n  width: 100%;\n  padding-left: 24px;\n  left: 0;\n  top: 9px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n.input100 {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font-family: Montserrat-Regular;\n  font-size: 18px;\n  color: #555555;\n  line-height: 1.2;\n  padding: 0 26px; }\ninput.input100 {\n  height: 100%;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n/*---------------------------------------------*/\n.focus-input100 {\n  position: absolute;\n  display: block;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  top: -1px;\n  left: -1px;\n  pointer-events: none;\n  border: 1px solid #6675df;\n  border-radius: 10px;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  -webkit-transform: scaleX(1.1) scaleY(1.3);\n  transform: scaleX(1.1) scaleY(1.3); }\n.input100:focus + .focus-input100 {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n.eff-focus-selection {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n.input100:focus {\n  height: 48px; }\n.input100:focus + .focus-input100 + .label-input100 {\n  top: 14px;\n  font-size: 13px; }\n.has-val {\n  height: 48px !important; }\n.has-val + .focus-input100 + .label-input100 {\n  top: 14px;\n  font-size: 13px; }\n/*==================================================================\r\n  [ Restyle Checkbox ]*/\n.input-checkbox100 {\n  display: none; }\n.label-checkbox100 {\n  font-family: Poppins-Regular;\n  font-size: 13px;\n  color: #999999;\n  line-height: 1.4;\n  display: block;\n  position: absolute;\n  padding-left: 26px;\n  cursor: pointer; }\n.label-checkbox100::before {\n  content: \"\\f00c\";\n  font-family: FontAwesome;\n  font-size: 13px;\n  color: transparent;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  border-radius: 2px;\n  background: #fff;\n  border: 1px solid #6675df;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%); }\n.input-checkbox100:checked + .label-checkbox100::before {\n  color: #6675df; }\n/*------------------------------------------------------------------\r\n  [ Button ]*/\n.container-login100-form-btn {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.login100-form-btn {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 20px;\n  width: 100%;\n  height: 50px;\n  border-radius: 10px;\n  background: #6675df;\n  font-family: Montserrat-Bold;\n  font-size: 12px;\n  color: #fff;\n  line-height: 1.2;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s; }\n.login100-form-btn:hover {\n  background: #333333; }\n/*------------------------------------------------------------------\r\n  [ Responsive ]*/\n@media (max-width: 992px) {\n  .login100-form {\n    width: 50%;\n    padding-left: 30px;\n    padding-right: 30px; }\n  .login100-more {\n    width: 50%; } }\n@media (max-width: 768px) {\n  .login100-form {\n    width: 100%; }\n  .login100-more {\n    display: none; } }\n@media (max-width: 576px) {\n  .login100-form {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 70px; } }\n/*------------------------------------------------------------------\r\n  [ Alert validate ]*/\n.validate-input {\n  position: relative; }\n.alert-validate::before {\n  content: attr(data-validate);\n  position: absolute;\n  z-index: 100;\n  max-width: 70%;\n  background-color: #fff;\n  border: 1px solid #c80000;\n  border-radius: 2px;\n  padding: 4px 25px 4px 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 12px;\n  pointer-events: none;\n  font-family: Poppins-Regular;\n  color: #c80000;\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.4s;\n  transition: opacity 0.4s; }\n.alert-validate::after {\n  content: \"\\f12a\";\n  font-family: FontAwesome;\n  display: block;\n  position: absolute;\n  z-index: 110;\n  color: #c80000;\n  font-size: 16px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 18px; }\n.alert-validate:hover:before {\n  visibility: visible;\n  opacity: 1; }\n@media (max-width: 992px) {\n  .alert-validate::before {\n    visibility: visible;\n    opacity: 1; } }\n/*==================================================================\r\n  [ Social ]*/\n.login100-form-social-item {\n  width: 36px;\n  height: 36px;\n  font-size: 18px;\n  color: #fff;\n  border-radius: 50%; }\n.login100-form-social-item:hover {\n  background: #333333;\n  color: #fff; }\n.forgot-link {\n  text-align: right; }\n.loader {\n  font-size: 4px;\n  margin: 0 24px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear; }\n@-webkit-keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0em -3em 0em 0.2em #ffffff, 2em -2em 0 0em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 -0.5em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 0em #ffffff; }\n  12.5% {\n    box-shadow: 0em -3em 0em 0em #ffffff, 2em -2em 0 0.2em #ffffff, 3em 0em 0 0em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 -0.5em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  25% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 0em #ffffff, 3em 0em 0 0.2em #ffffff, 2em 2em 0 0em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 -0.5em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  37.5% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 0em #ffffff, 2em 2em 0 0.2em #ffffff, 0em 3em 0 0em #ffffff, -2em 2em 0 -0.5em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  50% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 0em #ffffff, 0em 3em 0 0.2em #ffffff, -2em 2em 0 0em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  62.5% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 0em #ffffff, -2em 2em 0 0.2em #ffffff, -3em 0em 0 0em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  75% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 0em #ffffff, -3em 0em 0 0.2em #ffffff, -2em -2em 0 0em #ffffff; }\n  87.5% {\n    box-shadow: 0em -3em 0em 0em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 0em #ffffff, -3em 0em 0 0em #ffffff, -2em -2em 0 0.2em #ffffff; } }\n@keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0em -3em 0em 0.2em #ffffff, 2em -2em 0 0em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 -0.5em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 0em #ffffff; }\n  12.5% {\n    box-shadow: 0em -3em 0em 0em #ffffff, 2em -2em 0 0.2em #ffffff, 3em 0em 0 0em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 -0.5em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  25% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 0em #ffffff, 3em 0em 0 0.2em #ffffff, 2em 2em 0 0em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 -0.5em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  37.5% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 0em #ffffff, 2em 2em 0 0.2em #ffffff, 0em 3em 0 0em #ffffff, -2em 2em 0 -0.5em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  50% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 0em #ffffff, 0em 3em 0 0.2em #ffffff, -2em 2em 0 0em #ffffff, -3em 0em 0 -0.5em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  62.5% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 0em #ffffff, -2em 2em 0 0.2em #ffffff, -3em 0em 0 0em #ffffff, -2em -2em 0 -0.5em #ffffff; }\n  75% {\n    box-shadow: 0em -3em 0em -0.5em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 0em #ffffff, -3em 0em 0 0.2em #ffffff, -2em -2em 0 0em #ffffff; }\n  87.5% {\n    box-shadow: 0em -3em 0em 0em #ffffff, 2em -2em 0 -0.5em #ffffff, 3em 0em 0 -0.5em #ffffff, 2em 2em 0 -0.5em #ffffff, 0em 3em 0 -0.5em #ffffff, -2em 2em 0 0em #ffffff, -3em 0em 0 0em #ffffff, -2em -2em 0 0.2em #ffffff; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vRTpcXFRlc2lzXFxhZG1pbnNwb3J0bGlmZWNvYWNoL3NyY1xcYXBwXFxhdXRoXFxzaWduaW5cXHNpZ25pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO2tCQ0RnQjtBREloQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCLEVBQUE7QUFHMUI7RUFDSSxZQUFZO0VBQ1osd0NBQXdDLEVBQUE7QUFHNUMsZ0RBQUE7QUFDQTtFQUNJLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM5Qix1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUE7QUFHM0I7RUFDSSx3QkFBd0IsRUFBQTtBQUc1QjtFQUNJLHFCQUFxQjtFQUN2QixjQUFjLEVBQUE7QUFHaEIsZ0RBQUE7QUFDQTtFQUNJLFdBQVcsRUFBQTtBQUdmO0VBQ0ksNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVcsRUFBQTtBQUdmO0VBQ0ksV0FBVztFQUNYLHFCQUFxQixFQUFBO0FBSXpCLGdEQUFBO0FBQ0E7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBO0FBR2hCO0VBQ0UsYUFBYTtFQUNiLFlBQVksRUFBQTtBQUdkO0VBQ0Usb0NBQW9DLEVBQUE7QUFHdEM7RUFBeUMsa0JBQWlCLEVBQUE7QUFDMUQ7RUFBK0Isa0JBQWlCLEVBQUE7QUFDaEQ7RUFBZ0Msa0JBQWlCLEVBQUE7QUFDakQ7RUFBb0Msa0JBQWlCLEVBQUE7QUFFckQ7RUFBNEMsa0JBQWlCLEVBQUE7QUFDN0Q7RUFBa0Msa0JBQWlCLEVBQUE7QUFDbkQ7RUFBbUMsa0JBQWlCLEVBQUE7QUFDcEQ7RUFBdUMsa0JBQWlCLEVBQUE7QUFFeEQ7RUFBbUMsY0FBYyxFQUFBO0FBQ2pEO0VBQXlCLGNBQWMsRUFBQTtBQUN2QztFQUEwQixjQUFjLEVBQUE7QUFDeEM7RUFBOEIsY0FBYyxFQUFBO0FBRTVDO0VBQXNDLGNBQWMsRUFBQTtBQUNwRDtFQUE0QixjQUFjLEVBQUE7QUFDMUM7RUFBNkIsY0FBYyxFQUFBO0FBQzNDO0VBQWlDLGNBQWMsRUFBQTtBQUcvQztFQUNFLGNBQWM7RUFDZCxTQUFTLEVBQUE7QUFHWCxnREFBQTtBQUNBO0VBQ0ksd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWix1QkFBdUIsRUFBQTtBQUczQjtFQUNJLGVBQWUsRUFBQTtBQUduQjtFQUNJLHVCQUF1QixFQUFBO0FBRzNCO2NDU1k7QUROWjtXQ1FTO0FETlQ7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFHaEI7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFJaEI7V0NLUztBREhUO0VBQ0UsWUFBWTtFQUNaLGVBQWUsRUFBQTtBQUdqQjtFQUNFLHdCQUF3QixFQUFBO0FBRzFCO2lCQ0dlO0FERGY7RUFBTSxtQkFBbUIsRUFBQTtBQUN6QjtFQUFNLG1CQUFtQixFQUFBO0FBQ3pCO0VBQU0sbUJBQW1CLEVBQUE7QUFHekI7WUNPVTtBRExWO0VBQ0UsV0FBVztFQUNYLGNBQWMsRUFBQTtBQUdoQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBSXBCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0FBSXJCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBSXBCLGFBQWE7RUFDYixlQUFlO0VBQ2YsMEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiw4QkFBMkI7RUFBM0IsOEJBQTJCO1VBQTNCLDJCQUEyQixFQUFBO0FBSTdCO2lCQ0VlO0FEQWY7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCw4QkFBMkIsRUFBQTtBQUs3QjtXQ0ZTO0FES1Q7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsNkJBQTZCLEVBQUE7QUFHL0I7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtBQUtwQjtZQ1BVO0FEVVY7RUFDRSxvQkFBb0I7RUFJcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFFaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUVSLDRCQUE0QjtFQUc1QixvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7QUFHakI7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBRzVCLG9CQUFvQixFQUFBO0FBR3RCLGdEQUFBO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsU0FBUztFQUNULFVBQVU7RUFDVixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUVuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUVWLDRCQUE0QjtFQUc1QixvQkFBb0I7RUFFcEIsMENBQTBDO0VBSTFDLGtDQUFrQyxFQUFBO0FBR3BDO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFFViwyQkFBMkI7RUFJM0IsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUVWLDJCQUEyQjtFQUkzQixtQkFBbUIsRUFBQTtBQUdyQjtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsU0FBUztFQUNULGVBQWUsRUFBQTtBQUdqQjtFQUNFLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0UsU0FBUztFQUNULGVBQWUsRUFBQTtBQUdqQjt1QkMzQnFCO0FEOEJyQjtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBRWhCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGtCQUFrQjtFQUVsQixvQkFBb0I7RUFJcEIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixPQUFPO0VBQ1AsUUFBUTtFQUNSLG1DQUFtQztFQUluQywyQkFBMkIsRUFBQTtBQUc3QjtFQUNFLGNBQWMsRUFBQTtBQUloQjthQ25DVztBRHFDWDtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFJcEIsYUFBYTtFQUNiLGVBQWU7RUFDZix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFHekI7RUFDRSxvQkFBb0I7RUFJcEIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBRW5CLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBRW5CLDRCQUE0QjtFQUc1QixvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLG1CQUFtQixFQUFBO0FBS3JCO2lCQzFDZTtBRDZDZjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLFVBQVUsRUFBQSxFQUNYO0FBR0g7RUFDRTtJQUNFLFdBQVcsRUFBQTtFQUdiO0lBQ0UsYUFBYSxFQUFBLEVBQ2Q7QUFHSDtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQSxFQUNsQjtBQUlIO3FCQ3REbUI7QUR5RG5CO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFFBQVE7RUFDUixtQ0FBbUM7RUFJbkMsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxvQkFBb0I7RUFFcEIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUVoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUVWLGdDQUFnQztFQUdoQyx3QkFBd0IsRUFBQTtBQUcxQjtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUNBQW1DO0VBSW5DLDJCQUEyQjtFQUMzQixXQUFXLEVBQUE7QUFHYjtFQUNFLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7QUFHWjtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVUsRUFBQSxFQUNYO0FBS0g7YUNsRVc7QURvRVg7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0FBR2I7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLDZDQUE2QztFQUM3QyxxQ0FBcUMsRUFBQTtBQUV2QztFQUNFOztJQUVFLDJOQUEyTixFQUFBO0VBRTdOO0lBQ0UsMk5BQTJOLEVBQUE7RUFFN047SUFDRSwyTkFBMk4sRUFBQTtFQUU3TjtJQUNFLDJOQUEyTixFQUFBO0VBRTdOO0lBQ0UsMk5BQTJOLEVBQUE7RUFFN047SUFDRSwyTkFBMk4sRUFBQTtFQUU3TjtJQUNFLDJOQUEyTixFQUFBO0VBRTdOO0lBQ0Usd05BQXdOLEVBQUEsRUFBQTtBQUc1TjtFQUNFOztJQUVFLDJOQUEyTixFQUFBO0VBRTdOO0lBQ0UsMk5BQTJOLEVBQUE7RUFFN047SUFDRSwyTkFBMk4sRUFBQTtFQUU3TjtJQUNFLDJOQUEyTixFQUFBO0VBRTdOO0lBQ0UsMk5BQTJOLEVBQUE7RUFFN047SUFDRSwyTkFBMk4sRUFBQTtFQUU3TjtJQUNFLDJOQUEyTixFQUFBO0VBRTdOO0lBQ0Usd05BQXdOLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBSRVNUWUxFIFRBRyBdKi9cclxuICBcclxuICAqIHtcclxuICAgICAgbWFyZ2luOiAwcHg7IFxyXG4gICAgICBwYWRkaW5nOiAwcHg7IFxyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5LCBodG1sIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgYSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgYTpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjY3NWRmO1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgaDEsaDIsaDMsaDQsaDUsaDYge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICBcclxuICB1bCwgbGkge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgaW5wdXQge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuICBpbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuICBpbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuICBcclxuICB0ZXh0YXJlYTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgdGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgdGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG4gIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XHJcbiAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cclxuICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cclxuICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XHJcbiAgXHJcbiAgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XHJcbiAgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cclxuICB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5O31cclxuICB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTt9XHJcbiAgXHJcbiAgXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBidXR0b24ge1xyXG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaWZyYW1lIHtcclxuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyB1dGlsaXR5IF0qL1xyXG4gIFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBUZXh0IF0qL1xyXG4gIC50eHQxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgfVxyXG4gIFxyXG4gIC50eHQyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBTaXplIF0qL1xyXG4gIC5zaXplMSB7XHJcbiAgICB3aWR0aDogMzU1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaXplMiB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDNweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBCYWNrZ3JvdW5kIF0qL1xyXG4gIC5iZzEge2JhY2tncm91bmQ6ICMzYjU5OTg7fVxyXG4gIC5iZzIge2JhY2tncm91bmQ6ICMxZGExZjI7fVxyXG4gIC5iZzMge2JhY2tncm91bmQ6ICNjZDIwMWY7fVxyXG4gIFxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBsb2dpbiBdKi9cclxuICAubGltaXRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLWxvZ2luMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIH1cclxuICBcclxuICBcclxuICAud3JhcC1sb2dpbjEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFsgbG9naW4gbW9yZSBdKi9cclxuICAubG9naW4xMDAtbW9yZSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTYwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtbW9yZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFsgRm9ybSBdKi9cclxuICBcclxuICAubG9naW4xMDAtZm9ybSB7XHJcbiAgICB3aWR0aDogNTYwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmc6IDE3M3B4IDU1cHggNTVweCA1NXB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIElucHV0IF0qL1xyXG4gIFxyXG4gIC53cmFwLWlucHV0MTAwIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsLWlucHV0MTAwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgcGFkZGluZzogMCAyNnB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5pbnB1dDEwMCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBcclxuICAuZm9jdXMtaW5wdXQxMDAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMnB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlICsgMnB4KTtcclxuICAgIHRvcDogLTFweDtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Njc1ZGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIFxyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICBcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS4xKSBzY2FsZVkoMS4zKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZVgoMS4xKSBzY2FsZVkoMS4zKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgxLjEpIHNjYWxlWSgxLjMpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZVgoMS4xKSBzY2FsZVkoMS4zKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMSkgc2NhbGVZKDEuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICBcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5lZmYtZm9jdXMtc2VsZWN0aW9uIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIFxyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0MTAwOmZvY3VzIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwICsgLmxhYmVsLWlucHV0MTAwIHtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLmhhcy12YWwge1xyXG4gICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5oYXMtdmFsICsgLmZvY3VzLWlucHV0MTAwICsgLmxhYmVsLWlucHV0MTAwIHtcclxuICAgIHRvcDogMTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBbIFJlc3R5bGUgQ2hlY2tib3ggXSovXHJcbiAgXHJcbiAgLmlucHV0LWNoZWNrYm94MTAwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbC1jaGVja2JveDEwMCB7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NzVkZjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCArIC5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcclxuICAgIGNvbG9yOiAjNjY3NWRmO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgQnV0dG9uIF0qL1xyXG4gIC5jb250YWluZXItbG9naW4xMDAtZm9ybS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbjEwMC1mb3JtLWJ0biB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzY2NzVkZjtcclxuICBcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLWZvcm0tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBSZXNwb25zaXZlIF0qL1xyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmxvZ2luMTAwLWZvcm0ge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubG9naW4xMDAtbW9yZSB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxvZ2luMTAwLWZvcm0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIC5sb2dpbjEwMC1tb3JlIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAubG9naW4xMDAtZm9ybSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBBbGVydCB2YWxpZGF0ZSBdKi9cclxuICBcclxuICAudmFsaWRhdGUtaW5wdXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdmFsaWRhdGUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4MDAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDRweCAyNXB4IDRweCAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgXHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xyXG4gICAgY29sb3I6ICNjODAwMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtdmFsaWRhdGU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTJhXCI7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDExMDtcclxuICAgIGNvbG9yOiAjYzgwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtdmFsaWRhdGU6aG92ZXI6YmVmb3JlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5hbGVydC12YWxpZGF0ZTo6YmVmb3JlIHtcclxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBbIFNvY2lhbCBdKi9cclxuICAubG9naW4xMDAtZm9ybS1zb2NpYWwtaXRlbSB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS1zb2NpYWwtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3Jnb3QtbGlua3tcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciB7XHJcbiAgICBmb250LXNpemU6IDRweDtcclxuICAgIG1hcmdpbjogMCAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDQgMS4zcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBhbmltYXRpb246IGxvYWQ0IDEuM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDQge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDAuMmVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMGVtICNmZmZmZmYsIDNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAwZW0gM2VtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIC0zZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDBlbSAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgMTIuNSUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gMGVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMC4yZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAyZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIDBlbSAzZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMGVtICNmZmZmZmYsIDNlbSAwZW0gMCAwLjJlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMGVtICNmZmZmZmYsIDBlbSAzZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAzNy41JSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gI2ZmZmZmZiwgMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMC4yZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIDBlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gI2ZmZmZmZiwgMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMGVtICNmZmZmZmYsIDBlbSAzZW0gMCAwLjJlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIDYyLjUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmLCAzZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIDJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIDBlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDAuMmVtICNmZmZmZmYsIC0zZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgNzUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmLCAzZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIDJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIDAuMmVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDBlbSAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgODcuNSUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gMGVtICNmZmZmZmYsIDJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmYsIDNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAwZW0gM2VtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gMmVtIDAgMGVtICNmZmZmZmYsIC0zZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDAuMmVtICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbG9hZDQge1xyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDAuMmVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMGVtICNmZmZmZmYsIDNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAwZW0gM2VtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIC0zZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDBlbSAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgMTIuNSUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gMGVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMC4yZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAyZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIDBlbSAzZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAyNSUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMGVtICNmZmZmZmYsIDNlbSAwZW0gMCAwLjJlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMGVtICNmZmZmZmYsIDBlbSAzZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgICAzNy41JSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gI2ZmZmZmZiwgMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMC4yZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIDBlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gI2ZmZmZmZiwgMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMGVtICNmZmZmZmYsIDBlbSAzZW0gMCAwLjJlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIDYyLjUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmLCAzZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIDJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIDBlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDAuMmVtICNmZmZmZmYsIC0zZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgNzUlIHtcclxuICAgICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmLCAzZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIDJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIDAuMmVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDBlbSAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgODcuNSUge1xyXG4gICAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gMGVtICNmZmZmZmYsIDJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmYsIDNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAwZW0gM2VtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gMmVtIDAgMGVtICNmZmZmZmYsIC0zZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDAuMmVtICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gICBcclxuXHJcblxyXG5cclxuXHJcbiAgIiwiLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFJFU1RZTEUgVEFHIF0qL1xuKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhciwgc2Fucy1zZXJpZjsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5hIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40czsgfVxuXG5hOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNjY3NWRmOyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBtYXJnaW46IDBweDsgfVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luOiAwcHg7IH1cblxudWwsIGxpIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG50ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTsgfVxuXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IH1cblxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxudGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxudGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG50ZXh0YXJlYTpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG50ZXh0YXJlYTpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTsgfVxuXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM5OTk5OTk7IH1cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTsgfVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTsgfVxuXG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5OyB9XG5cbnRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzk5OTk5OTsgfVxuXG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5OyB9XG5cbnRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOTk5OTk5OyB9XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5idXR0b24ge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbmlmcmFtZSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyB1dGlsaXR5IF0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBbIFRleHQgXSovXG4udHh0MSB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM1NTU1NTU7IH1cblxuLnR4dDIge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjOTk5OTk5OyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBTaXplIF0qL1xuLnNpemUxIHtcbiAgd2lkdGg6IDM1NXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7IH1cblxuLnNpemUyIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQzcHgpOyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBCYWNrZ3JvdW5kIF0qL1xuLmJnMSB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7IH1cblxuLmJnMiB7XG4gIGJhY2tncm91bmQ6ICMxZGExZjI7IH1cblxuLmJnMyB7XG4gIGJhY2tncm91bmQ6ICNjZDIwMWY7IH1cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIGxvZ2luIF0qL1xuLmxpbWl0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87IH1cblxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyOyB9XG5cbi53cmFwLWxvZ2luMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlOyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBsb2dpbiBtb3JlIF0qL1xuLmxvZ2luMTAwLW1vcmUge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNTYwcHgpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTsgfVxuXG4ubG9naW4xMDAtbW9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBGb3JtIF0qL1xuLmxvZ2luMTAwLWZvcm0ge1xuICB3aWR0aDogNTYwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgcGFkZGluZzogMTczcHggNTVweCA1NXB4IDU1cHg7IH1cblxuLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgSW5wdXQgXSovXG4ud3JhcC1pbnB1dDEwMCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4ubGFiZWwtaW5wdXQxMDAge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgbGVmdDogMDtcbiAgdG9wOiA5cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40czsgfVxuXG4uaW5wdXQxMDAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdC1SZWd1bGFyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNTU1NTU1O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBwYWRkaW5nOiAwIDI2cHg7IH1cblxuaW5wdXQuaW5wdXQxMDAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40czsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uZm9jdXMtaW5wdXQxMDAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDAlICsgMnB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAycHgpO1xuICB0b3A6IC0xcHg7XG4gIGxlZnQ6IC0xcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY3NWRmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxLjEpIHNjYWxlWSgxLjMpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGVYKDEuMSkgc2NhbGVZKDEuMyk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlWCgxLjEpIHNjYWxlWSgxLjMpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlWCgxLjEpIHNjYWxlWSgxLjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxLjEpIHNjYWxlWSgxLjMpOyB9XG5cbi5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuXG4uZWZmLWZvY3VzLXNlbGVjdGlvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxuXG4uaW5wdXQxMDA6Zm9jdXMge1xuICBoZWlnaHQ6IDQ4cHg7IH1cblxuLmlucHV0MTAwOmZvY3VzICsgLmZvY3VzLWlucHV0MTAwICsgLmxhYmVsLWlucHV0MTAwIHtcbiAgdG9wOiAxNHB4O1xuICBmb250LXNpemU6IDEzcHg7IH1cblxuLmhhcy12YWwge1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDsgfVxuXG4uaGFzLXZhbCArIC5mb2N1cy1pbnB1dDEwMCArIC5sYWJlbC1pbnB1dDEwMCB7XG4gIHRvcDogMTRweDtcbiAgZm9udC1zaXplOiAxM3B4OyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgWyBSZXN0eWxlIENoZWNrYm94IF0qL1xuLmlucHV0LWNoZWNrYm94MTAwIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4ubGFiZWwtY2hlY2tib3gxMDAge1xuICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4ubGFiZWwtY2hlY2tib3gxMDA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY3NWRmO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxuXG4uaW5wdXQtY2hlY2tib3gxMDA6Y2hlY2tlZCArIC5sYWJlbC1jaGVja2JveDEwMDo6YmVmb3JlIHtcbiAgY29sb3I6ICM2Njc1ZGY7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEJ1dHRvbiBdKi9cbi5jb250YWluZXItbG9naW4xMDAtZm9ybS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5sb2dpbjEwMC1mb3JtLWJ0biB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogIzY2NzVkZjtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQtQm9sZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzOyB9XG5cbi5sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIFJlc3BvbnNpdmUgXSovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7IH1cbiAgLmxvZ2luMTAwLW1vcmUge1xuICAgIHdpZHRoOiA1MCU7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5sb2dpbjEwMC1tb3JlIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5sb2dpbjEwMC1mb3JtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogNzBweDsgfSB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBBbGVydCB2YWxpZGF0ZSBdKi9cbi52YWxpZGF0ZS1pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS12YWxpZGF0ZSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4MDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA0cHggMjVweCA0cHggMTBweDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiAxMnB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgY29sb3I6ICNjODAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzOyB9XG5cbi5hbGVydC12YWxpZGF0ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZjEyYVwiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDExMDtcbiAgY29sb3I6ICNjODAwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiAxOHB4OyB9XG5cbi5hbGVydC12YWxpZGF0ZTpob3ZlcjpiZWZvcmUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBbIFNvY2lhbCBdKi9cbi5sb2dpbjEwMC1mb3JtLXNvY2lhbC1pdGVtIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG5cbi5sb2dpbjEwMC1mb3JtLXNvY2lhbC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgY29sb3I6ICNmZmY7IH1cblxuLmZvcmdvdC1saW5rIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cblxuLmxvYWRlciB7XG4gIGZvbnQtc2l6ZTogNHB4O1xuICBtYXJnaW46IDAgMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkNCAxLjNzIGluZmluaXRlIGxpbmVhcjsgfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDQge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDAuMmVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMGVtICNmZmZmZmYsIDNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAwZW0gM2VtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIC0zZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDBlbSAjZmZmZmZmOyB9XG4gIDEyLjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gMGVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMC4yZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAyZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIDBlbSAzZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmY7IH1cbiAgMjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICNmZmZmZmYsIDJlbSAtMmVtIDAgMGVtICNmZmZmZmYsIDNlbSAwZW0gMCAwLjJlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMGVtICNmZmZmZmYsIDBlbSAzZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmY7IH1cbiAgMzcuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gI2ZmZmZmZiwgMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMC4yZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIDBlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZjsgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gI2ZmZmZmZiwgMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAyZW0gMmVtIDAgMGVtICNmZmZmZmYsIDBlbSAzZW0gMCAwLjJlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZjsgfVxuICA2Mi41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmLCAzZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIDJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIDBlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDAuMmVtICNmZmZmZmYsIC0zZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmOyB9XG4gIDc1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmLCAzZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIDJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIDAuMmVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDBlbSAjZmZmZmZmOyB9XG4gIDg3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gMGVtICNmZmZmZmYsIDJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmYsIDNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAwZW0gM2VtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gMmVtIDAgMGVtICNmZmZmZmYsIC0zZW0gMGVtIDAgMGVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIDAuMmVtICNmZmZmZmY7IH0gfVxuXG5Aa2V5ZnJhbWVzIGxvYWQ0IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAwLjJlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIDBlbSAjZmZmZmZmLCAzZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIDJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAwZW0gI2ZmZmZmZjsgfVxuICAxMi41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDBlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIDAuMmVtICNmZmZmZmYsIDNlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIC0wLjVlbSAjZmZmZmZmLCAwZW0gM2VtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIC0zZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmOyB9XG4gIDI1JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIC0wLjVlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIDBlbSAjZmZmZmZmLCAzZW0gMGVtIDAgMC4yZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAwZW0gM2VtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIC0zZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIC0yZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmOyB9XG4gIDM3LjUlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICNmZmZmZmYsIDJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmYsIDNlbSAwZW0gMCAwZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIDAuMmVtICNmZmZmZmYsIDBlbSAzZW0gMCAwZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmY7IH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwZW0gLTNlbSAwZW0gLTAuNWVtICNmZmZmZmYsIDJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmYsIDNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAwZW0gM2VtIDAgMC4yZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAwZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAtMmVtIDAgLTAuNWVtICNmZmZmZmY7IH1cbiAgNjIuNSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gI2ZmZmZmZiwgMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAyZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIDBlbSAzZW0gMCAwZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAwLjJlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZjsgfVxuICA3NSUge1xuICAgIGJveC1zaGFkb3c6IDBlbSAtM2VtIDBlbSAtMC41ZW0gI2ZmZmZmZiwgMmVtIC0yZW0gMCAtMC41ZW0gI2ZmZmZmZiwgM2VtIDBlbSAwIC0wLjVlbSAjZmZmZmZmLCAyZW0gMmVtIDAgLTAuNWVtICNmZmZmZmYsIDBlbSAzZW0gMCAtMC41ZW0gI2ZmZmZmZiwgLTJlbSAyZW0gMCAwZW0gI2ZmZmZmZiwgLTNlbSAwZW0gMCAwLjJlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAwZW0gI2ZmZmZmZjsgfVxuICA4Ny41JSB7XG4gICAgYm94LXNoYWRvdzogMGVtIC0zZW0gMGVtIDBlbSAjZmZmZmZmLCAyZW0gLTJlbSAwIC0wLjVlbSAjZmZmZmZmLCAzZW0gMGVtIDAgLTAuNWVtICNmZmZmZmYsIDJlbSAyZW0gMCAtMC41ZW0gI2ZmZmZmZiwgMGVtIDNlbSAwIC0wLjVlbSAjZmZmZmZmLCAtMmVtIDJlbSAwIDBlbSAjZmZmZmZmLCAtM2VtIDBlbSAwIDBlbSAjZmZmZmZmLCAtMmVtIC0yZW0gMCAwLjJlbSAjZmZmZmZmOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*SERVICIOS*/


var SigninComponent = /** @class */ (function () {
    function SigninComponent(_authService, toasterService, _router) {
        this._authService = _authService;
        this.toasterService = toasterService;
        this._router = _router;
        this.email = '';
        this.password = '';
        this.remember = false;
        this.requesting = false;
        this.isInvalid = false;
        this.isAccessInvalid = true;
        /*
            this._authService.isAuth().subscribe(
              data=>{
                //console.log(data.email);
                this.onLoginRedirect();
           
              },
              error=>{
                console.log(error);
              }
    
            );
            */
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onLogin = function () {
        var _this = this;
        this.isInvalid = true;
        this._authService.loginEmailUser(this.email, this.password)
            .then(function (res) {
            console.log(res);
            _this.getTipoUser();
        }).catch(function (err) {
            console.log('error:', err.message);
            var msg = 'Email o Password que ingresaste no son validos';
            _this.toasterService.Error(msg);
            _this.isInvalid = false;
        });
    };
    SigninComponent.prototype.onLogout = function () {
        return this._authService.logoutUser();
    };
    SigninComponent.prototype.onLoginRedirect = function () {
        console.log('onLoginRedirect');
        var rol = localStorage.getItem('rol');
        if (rol === 'super') {
            this._router.navigate(['/sadmin/inicio']);
        }
        else if (rol === 'admin') {
            this._router.navigate(['/admin/dashboard']);
        }
        //this.isInvalid=false;
    };
    SigninComponent.prototype.getTipoUser = function () {
        var _this = this;
        var long = 0;
        this._authService.getTipoUser()
            .snapshotChanges()
            .subscribe(function (item) {
            item.forEach(function (element) {
                long++;
                var data = element.payload.toJSON();
                if (data['email'] == _this.email) {
                    console.log(data['rol']);
                    _this.isAccessInvalid = false;
                    localStorage.setItem('rol', data['rol']);
                    _this.onLoginRedirect();
                }
            });
            if (item.length == long && _this.isAccessInvalid == true) {
                var msg = 'No tiene Acceso al sistema';
                _this.toasterService.Error(msg);
                _this.isInvalid = false;
            }
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\r\n    <div class=\"container-fluid\">\r\n        <!--<nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com\">\r\n                        Creative Tim\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://creative-tim.com/about-us\">\r\n                        About Us\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://blog.creative-tim.com\">\r\n                        Blog\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.creative-tim.com/license\">\r\n                        Licenses\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>-->\r\n        <div class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}, made with love by Tatiana Montenegro and Raul Bastidas\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\r\n    <div class=\"container-fluid\">\r\n        <!--<div class=\"navbar-wrapper\">\r\n          <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n        </div>-->\r\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\r\n            <!--<form class=\"navbar-form\">\r\n                <div class=\"input-group no-border\">\r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i>\r\n                        <div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </div>\r\n            </form>-->\r\n            <ul class=\"navbar-nav\">\r\n                <!--<li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#pablo\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                        </p>\r\n                    </a>\r\n                </li>-->\r\n                <!--<li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p>\r\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                        </p>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n                    </div>\r\n                </li>-->\r\n                <li class=\"nav-item dropdown\">\r\n                        <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                            <i class=\"material-icons\">person</i>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                            <a class=\"dropdown-item\" data-toggle=\"modal\" data-target=\"#exampleModal\" >Cerrar sesion</a>                           \r\n                        </div>\r\n                </li>\r\n          \r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<!--Comfirm Modal-->\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Esta seguro de cerrar sesion?</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onLogout()\">Si</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\"  data-dismiss=\"modal\" >No</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, _authService, _afsAuth) {
        this.element = element;
        this.router = router;
        this._authService = _authService;
        this._afsAuth = _afsAuth;
        this.mobile_menu_visible = 0;
        this.isLogged = false;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this._authService.isAuth().subscribe(function (auth) {
            if (auth) {
                console.log("user logged");
                _this.isLogged = true;
            }
            else {
                console.log("NOT user logged");
                _this.isLogged = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this._authService.logoutUser();
        this.router.navigate(['/signin']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-wrapper li.active > a {\r\n    background-color: #9830b0;\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgb(151, 55, 176);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixpRkFBaUY7QUFDckYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItd3JhcHBlciBsaS5hY3RpdmUgPiBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ODMwYjA7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiKDE1MSwgNTUsIDE3Nik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a target=\"_blank\" href=\"https://raviddx.github.io/sportlifecoach/\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img [src]='about.imagen'/>\r\n        </div>\r\n       {{name}}\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <div *ngIf=\"isMobileMenu()\">\r\n    <form class=\"navbar-form\">\r\n      <span class=\"bmd-form-group\">\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </form>\r\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#pablo\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"material-icons\">notifications</i>\r\n                <span class=\"notification\">5</span>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n                </p>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\r\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\r\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"#pablo\">\r\n                <i class=\"material-icons\">person</i>\r\n                <p>\r\n                    <span class=\"d-lg-none d-md-block\">Account</span>\r\n                </p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n  </div>\r\n    <ul class=\"nav\">\r\n        <div *ngFor=\"let menuItem of menuItems\" >\r\n            <li *ngIf=\"menuItem.rol === rol\" routerLinkActive=\"active\" class=\"{{menuItem.class}} nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\" >\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p>{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </div>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_onepage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/onepage.service */ "./src/app/services/onepage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*sERVICIOS */

var ROUTES = [
    { path: '/admin/dashboard', title: 'Dashboard', icon: 'dashboard', class: '', rol: 'admin' },
    { path: '/admin/deportista-list', title: 'Deportistas', icon: 'format_list_bulleted', class: '', rol: 'admin' },
    { path: '/admin/ejercicios', title: 'Ejercicios', icon: 'directions_run', class: '', rol: 'admin' },
    { path: '/admin/rutinas', title: 'Rutinas', icon: 'fitness_center', class: '', rol: 'admin' },
    { path: '/admin/entrenamientos', title: 'Entrenamientos', icon: 'today', class: '', rol: 'admin' },
    { path: '/admin/dietas', title: 'Recetas', icon: 'restaurant_menu', class: '', rol: 'admin' },
    // { path: '/admin/promociones', title: 'Promociones',  icon: 'local_offer', class: '',rol:'admin' },
    { path: '/admin/user-profile', title: 'Mi Perfil', icon: 'person', class: '', rol: 'admin' },
    { path: '/admin/categorias', title: 'Categorias', icon: 'sort', class: '', rol: 'admin' },
    { path: '/sadmin/inicio', title: 'Inicio', icon: 'home', class: '', rol: 'super' },
    { path: '/sadmin/about', title: 'Acerca de', icon: 'account_circle', class: '', rol: 'super' },
    { path: '/sadmin/services', title: 'Servicios', icon: 'favorite', class: '', rol: 'super' },
    { path: '/sadmin/portafolio', title: 'Portafolio', icon: 'work', class: '', rol: 'super' },
    // { path: '/sadmin/posts', title: 'Posts',  icon:'event', class: '',rol:'super' },
    { path: '/sadmin/contacto', title: 'Contacto', icon: 'settings_phone', class: '', rol: 'super' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_onepageService) {
        this._onepageService = _onepageService;
        this.about = {
            titulo: "",
            nombre: "",
            experiencia: "",
            servicios: "",
            imagen: "",
        };
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.rol = localStorage.getItem('rol');
        if (this.rol === 'admin') {
            this.name = 'Admin Fit';
            this.getAbouts();
        }
        else {
            this.name = 'Super Admin';
            this.about.imagen = "assets/images/icon.png";
        }
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    /*Obtener data de about*/
    SidebarComponent.prototype.getAbouts = function () {
        var _this = this;
        this._onepageService.getAbouts()
            .subscribe(function (data) {
            _this.about.imagen = data[0].imagen;
        }, function (error) {
            console.log(error);
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_onepage_service__WEBPACK_IMPORTED_MODULE_1__["OnepageService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (authState) { return !!authState; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (auth) {
            if (!auth) {
                _this.router.navigate(['/signin']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.html":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.nombre}}</h1>\r\n<div mat-dialog-content>\r\n \r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  \r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/modal/modal.component.scss":
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/modal/modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/pages/content/content.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/content/content.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"section section-1 animated-row \" data-section=\"slide01\">\r\n  <div class=\"section-inner\">\r\n      <div class=\"welcome-box\">\r\n\r\n        <span class=\"welcome-first animate\" data-animate=\"fadeInUp\">Hola, Bienvenido a</span>\r\n          <h1 class=\"welcome-title animate\" data-animate=\"fadeInUp\">sport & life coach</h1>\r\n          <p class=\"animate\" data-animate=\"fadeInUp\">Se parte de esta gran familia. <br>“Para cumplir un objetivo se necesita de un plan, trazar una estrategia, accionar paso a paso y no detenerse hasta lograrlo”</p>\r\n          <div class=\"scroll-down next-section animate data-animate='fadeInUp'\"><img src=\"assets/images/mouse-scroll.png\" alt=\"\"><span>Scroll Down</span></div>\r\n    \r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"section section-2 animated-row\" data-section=\"slide02\">\r\n  <div class=\"section-inner\">\r\n      <div class=\"about-section\">\r\n          <div class=\"row justify-content-center\">\r\n              <div class=\"col-lg-10 wide-col-laptop\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6 col-lg-6\">\r\n                          <div class=\"about-contentbox\">\r\n                              <div class=\"animate\" data-animate=\"fadeInUp\">\r\n                                  <!--<span>Acerca de mi</span>-->\r\n                                  <br><br>\r\n                                  <h2>Quien soy yo?</h2>\r\n                                  <p><strong>Lcdo. Alberto Orozco</strong> (Docente/Facilitador/Instructor). <br><strong>Preparador físico deportivo</strong> y <strong>Personal Trainer </strong> <br>\"Eterno estudiante, eterno aprendiz\" escucha, observa, ríe, lucha con disciplina, valora y se feliz.</p>                                \r\n\r\n                              </div>\r\n                              <div class=\"facts-list owl-carousel\">\r\n                                  <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                                      <div class=\"counter-box\">\r\n                                          <i class=\"fas fa-running counter-icon\" aria-hidden=\"true\"></i><span class=\"count-number\">----</span> Preparador Fisico\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                                      <div class=\"counter-box\">\r\n                                          <i class=\"fas fa-id-badge counter-icon\" aria-hidden=\"true\"></i><span class=\"count-number\">----</span> Director/Coach\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                                      <div class=\"counter-box\">\r\n                                          <i class=\"fa fa-graduation-cap counter-icon\" aria-hidden=\"true\"></i><span class=\"count-number\">----</span> Profesor Universitario\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                                      <div class=\"counter-box\">\r\n                                          <i class=\"fa fa-support counter-icon\" aria-hidden=\"true\"></i><span class=\"count-number\">----</span> Team Sport/Couch\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                                      <div class=\"counter-box\">\r\n\r\n                                          <i class=\"fas fa-medal counter-icon\" aria-hidden=\"true\"></i><span class=\"count-number\">----</span> Personal Trainer\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-6 col-lg-6\">\r\n                          <figure class=\"about-img animate\" data-animate=\"fadeInUp\" id=\"about-01\"><img src=\"assets/images/about/01.jpg\" class=\"rounded\" alt=\"\"></figure>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"section section-3 animated-row\" data-section=\"slide03\">\r\n  <div class=\"section-inner\">\r\n      <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-8 col-lg-11 col-xl-8 wide-col-laptop\">\r\n              <div class=\"title-block animate\" data-animate=\"fadeInUp\">\r\n                  <br>\r\n                  <h2>Servicios</h2>\r\n              </div>\r\n              <div class=\"gallery-section\">\r\n                  <div class=\"gallery-list owl-carousel\">\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/01.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Servicio deportivo empresarial</h4>\r\n                                  <p>Programas integrales deportivos, recreativos, de salud dirigido a fortalecer la salud ocupacional.</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/02.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Entrenamiento Personalizado</h4>\r\n                                  <p> - Evaluacion de la condición física y de salud. <br> - Programa de ejercicios adaptados a los objetivos de la persona. <br> - Atención personalizada durante cada sesión. <br> - Asesorías on-line y presencial. <br> - Seguimiento</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/03.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Preparación física deportiva</h4>\r\n                                  <p>Preparación física deportiva dirigida a: <br> - Atletas élites o amateurs. <br> - Equipos deportivos profesionales o amateurs. <br> - Escuelas deportivas. <br> - Evaluacion del rendimiento. <br> - Programa preventivo de lesiones</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/04.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Docente, Facilitador, Instructor</h4>\r\n                                  <p>Temas de: Coaching deportivo, Deporte, entrenamiento deportivo, salud, preparación física deportiva, educación física. <br> Dirigido a eventos académicos, Seminarios,Talleres,Cursos,Certificaciones.</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/05.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Clases de Acondicionamiento Fisico</h4>\r\n                                  <p>Clases grupales de entrenamiento funcional:<br> - Al aire libre o en gimnasios. <br> - Mejorar capacidades físicas de forma integral. <br> - Potencia la salud. <br> - previene lesiones. <br> - Mejora peso corporal, postura, medidas.</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/06.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Asesoria on-line</h4>\r\n                                  <p>Permiteme ayudarte a lograr tus objetivos, motivarte y darte herramientas e información veraz para ponerte en forma.</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/07.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Recomendación nutricional</h4>\r\n                                  <p>Lo ideal para nuestra salud es llevar una dieta equilibrada, que se adapte a las necesidades de nuestro cuerpo y a la energía que consumimos.</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/09.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Seguimiento de las metas</h4>\r\n                                  <p>Es de vital importancia programar ejercicios preventivos (core, propiocepción, trabajo estabilizador, lumbar etc) para disminuir el riesgo de lesiones en los deportistas.</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"portfolio-item\">\r\n                              <div class=\"thumb\">\r\n                                  <img src=\"assets/images/servicios/10.png\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"thumb-inner animate\" data-animate=\"fadeInUp\">\r\n                                  <h4>Liderazgo y Autoestima</h4>\r\n                                  <p>Para triunfar o fracasar es necesario tomar riesgos. Quedarte en tu zona de confort hará que tu vida sea aburrida y monótona.</p>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"section section-4 animated-row\" data-section=\"slide04\">\r\n  <div class=\"section-inner\">\r\n      <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-8 col-lg-10 col-xl-8 wide-col-laptop\">\r\n              <div class=\"title-block animate\" data-animate=\"fadeInUp\">\r\n                  <br>\r\n                  <h2>Experiencia</h2>\r\n              </div>\r\n              <div class=\"services-section\">\r\n                  <div class=\"services-list owl-carousel\">\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"service-box\">\r\n                              <span class=\"service-icon\"><i class=\"fas fa-running counter-icon\" aria-hidden=\"true\"></i></span>\r\n                              <h3>Preparador Físico</h3>\r\n                              <p>Liga Deportiva Universitaria Femenino. <br>Coordinador General de la preparación física del equipo femenino temporada 2016-2018. <br> Quito - Ecuador</p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"service-box\">\r\n                              <span class=\"service-icon\"><i class=\"fas fa-medal counter-icon\" aria-hidden=\"true\"></i></span>\r\n                              <h3>Director/Coach</h3>\r\n                              <p>En Sport & Life Coach <br> Desde el 1 de octubre de 2017 hasta la fecha. <br>Quito - Ecuador</p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"service-box\">\r\n                              <span class=\"service-icon\"><i class=\"fas fa-trophy\" aria-hidden=\"true\"></i></span>\r\n                              <h3>Coach Deportivo</h3>\r\n                              <p>En Axxis Sports. Coach a cargo de las sesiones de entrenamiento. <br>Quito - Ecuador</p>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"service-box\">\r\n                              <span class=\"service-icon\"><i class=\"fa fa-graduation-cap counter-icon\" aria-hidden=\"true\"></i></span>\r\n                              <h3>Profesor Universitario</h3>\r\n                              <p>En Universidad Politécnica Territorial Arístides Bastidas - UPTAB.<br>  De 27 de abril de 2015 a 15 de octubre de 2016· <br>San Felipe - Venezuela </p>\r\n                          </div>\r\n                      </div>\r\n    \r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"section section-5 animated-row\" data-section=\"slide05\">\r\n  <div class=\"section-inner\">\r\n      <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-8 col-lg-11 col-xl-8 wide-col-laptop\">\r\n              <div class=\"title-block animate\" data-animate=\"fadeInUp\">\r\n                  <br>\r\n                  <h2>Testimonios</h2>\r\n              </div>\r\n              <div class=\"col-md-8 offset-md-2\">\r\n                  <div class=\"testimonials-section\">\r\n                      <div class=\"testimonials-slider owl-carousel\">\r\n                          <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                              <div class=\"testimonial-item\">\r\n                                  <div class=\"client-row\">\r\n                                      <img src=\"assets/images/profile/01.jpg\" class=\"rounded-circle\" alt=\"profile 1\">\r\n                                  </div>\r\n                                  <div class=\"testimonial-content\">\r\n                                      <h4>Veronica Romero</h4>\r\n                                      <p>\"Excelente Servicio, 100% profesional y efectivo. me ha ayudado a mejorar mi estilo de vida. Me siento en mejor condición física y trabajo en base a mis objetivos.\"</p>\r\n                                      <span>16 de julio de 2018</span>\r\n                                  </div>                                           \r\n                              </div>\r\n                          </div>\r\n                          <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                              <div class=\"testimonial-item\">\r\n                                  <div class=\"client-row\">\r\n                                      <img src=\"assets/images/profile/02.jpg\" class=\"rounded-circle\" alt=\"profile 2\">\r\n                                  </div>\r\n                                  <div class=\"testimonial-content\">\r\n                                      <h4>Marlyn Cariño</h4>\r\n                                      <p>\"Buen Coach y excelente entrenador,  te ajusta un plan de entrenamiento según tu nivel de forma, tu objetivo, tus características físicas y tu habilidad técnica.\"</p>\r\n                                      <span>11 de febrero de 2018</span>\r\n                                  </div>                                           \r\n                              </div>\r\n                          </div>\r\n                          <div class=\"item animate\" data-animate=\"fadeInUp\">\r\n                              <div class=\"testimonial-item\">\r\n                                  <div class=\"client-row\">\r\n                                      <img src=\"assets/images/profile/03.jpg\" class=\"rounded-circle\" alt=\"profile 3\">\r\n                                  </div>\r\n                                  <div class=\"testimonial-content\">\r\n                                      <h4>Vargas Vergara </h4>\r\n                                      <p>\"Excelente servicio el que ofrece. Realmente se ven los resultados!!!.\"</p>\r\n                                      <span>29 de noviembre de 2018</span>\r\n                                  </div>                                           \r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"section section-6 animated-row\" data-section=\"slide06\">\r\n  <div class=\"section-inner\">\r\n      <div class=\"row justify-content-center\">\r\n          <div class=\"col-md-7 col-lg-11 col-xl-8  wide-col-laptop\">\r\n              <div class=\"title-block animate\" data-animate=\"fadeInUp\">\r\n                  <br>\r\n                  <h2>Contactos</h2>\r\n              </div>\r\n              <div class=\"contact-section\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-md-6 animate\" data-animate=\"fadeInUp\">\r\n                          <div class=\"contact-box\">\r\n                              <div class=\"contact-row\">\r\n                                  <i class=\"fa fa-map-marker\"></i> Parque la Carlina, Norte de Quito\r\n                              </div>\r\n                              <div class=\"contact-row\">\r\n                                  <i class=\"fa fa-phone\"></i> 098 659 8287\r\n                              </div>\r\n                              <div class=\"contact-row\">\r\n                                  <i class=\"fa fa-envelope\"></i> alberto18.ao@gmail.com\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-md-6 animate\" data-animate=\"fadeInUp\">\r\n                          <form id=\"ajax-contact\" method=\"post\" action=\"#\">\r\n                              <div class=\"input-field\">\r\n                                  <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" required placeholder=\"Name\">\r\n                              </div>\r\n                              <div class=\"input-field\">\r\n                                  <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" required placeholder=\"Email\">\r\n                              </div>\r\n                              <div class=\"input-field\">\r\n                                  <textarea class=\"form-control\" name=\"message\" id=\"message\" rows=\"5\" required placeholder=\"Message\"></textarea>\r\n                              </div>\r\n                              <button class=\"btn btn-lg\" type=\"submit\" id=\"btn-submit\">Submit</button>\r\n                          </form>\r\n                          <div id=\"form-messages\" class=\"mt-3\"></div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/content/content.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/content/content.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================================\r\n00. GENERAL\r\n================================================*/\n.section-1, .section-2, .section-3, .section-4, .section-5, .section-6 {\n  color: white;\n  text-align: center; }\n/*==============================================\r\n01. WELCOME BLOCK CSS\r\n================================================*/\n.welcome-box {\n  font-size: 20px;\n  line-height: 1.7; }\n.welcome-first {\n  font-size: 32px;\n  display: block;\n  text-transform: uppercase;\n  font-weight: 300;\n  line-height: 1.2;\n  letter-spacing: 0.02em; }\n.welcome-box p {\n  max-width: 620px;\n  width: 100%;\n  margin: 0 auto 30px;\n  color: #fff; }\n.welcome-title {\n  font-weight: 700;\n  font-size: 9vw;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  letter-spacing: 0.02em; }\n.welcome-title span {\n  font-size: 36px;\n  display: block;\n  font-weight: 300;\n  line-height: 1.2; }\n.welcome-box .btn {\n  margin-top: 10px; }\n.next-section {\n  display: inline-block;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  bottom: 30px;\n  cursor: pointer;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease; }\n.next-section span {\n  margin-top: 15px;\n  display: block;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 500; }\n.next-section i:hover {\n  opacity: 1; }\n/*==============================================\r\n02. ABOUT ME\r\n================================================*/\n.about-img {\n  margin: 0 auto 40px;\n  position: relative; }\n.about-img img {\n  border-radius: 10px;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3); }\n.about-contentbox {\n  margin-top: 80px;\n  text-align: left;\n  line-height: 1.8; }\n.about-contentbox span {\n  font-size: 24px;\n  text-transform: uppercase;\n  font-weight: 300; }\n.about-contentbox h2 {\n  font-size: 32px;\n  text-transform: uppercase;\n  font-weight: 700; }\n.facts-list {\n  margin-top: 30px; }\n.facts-list .item {\n  overflow: hidden;\n  text-align: center;\n  border-radius: 10px;\n  width: 100%;\n  display: inline-block;\n  text-transform: capitalize;\n  font-size: 14px;\n  padding: 30px 0px;\n  background: rgba(0, 0, 0, 0.25); }\n.counter-box span {\n  font-size: 26px;\n  font-weight: 700; }\n.counter-icon {\n  font-size: 30px;\n  margin-bottom: 10px;\n  opacity: 0.75; }\n.facts-list .item:hover {\n  background: #fff;\n  color: #1e1e1e; }\n.facts-list .owl-dots {\n  margin-bottom: 30px; }\n.count-number, .counted {\n  display: block;\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 10px; }\n/*==============================================\r\n03. SERVICES BLOCK CSS\r\n================================================*/\n.section-3 p {\n  font-weight: 500;\n  line-height: 18px;\n  font-size: smaller; }\n.section-3 h4 {\n  font-weight: bold; }\n.gallery-section {\n  text-align: center; }\n.portfolio-item img {\n  max-width: 100%;\n  overflow: hidden;\n  position: relative;\n  z-index: 9;\n  border-radius: 10px; }\n.portfolio-item .thumb-inner {\n  position: absolute;\n  z-index: 99;\n  bottom: 0;\n  text-align: left;\n  padding: 20px;\n  background-color: rgba(250, 250, 250, 0.25);\n  width: 100%;\n  height: 60px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  -webkit-transition: all 0.4s ease;\n  transition: all 0.4s ease; }\n.portfolio-item .thumb-inner h4 {\n  margin-bottom: 0;\n  font-size: 16px;\n  margin-top: -5px; }\n.portfolio-item .thumb-inner p {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  margin-bottom: 0px; }\n.portfolio-item:hover .thumb-inner p {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  color: #4a4a4a; }\n.portfolio-item:hover .thumb-inner {\n  border-radius: 10px;\n  height: 100%;\n  background-color: rgba(250, 250, 250, 0.9); }\n.portfolio-item:hover .thumb-inner h4 {\n  margin-top: 30%;\n  color: #1e1e1e;\n  margin-bottom: 20px; }\n/*==============================================\r\n05. TESTIMONOALS BLOCK CSS\r\n================================================*/\n.testimonials-section .item {\n  background-color: rgba(250, 250, 250, 0.25);\n  padding: 40px;\n  border-radius: 10px; }\n.testimonials-section .item img {\n  width: 140px;\n  height: 140px;\n  margin: 0 auto; }\n.testimonials-section .item h4 {\n  margin-top: 40px;\n  font-size: 22px;\n  text-transform: capitalize;\n  font-weight: 700; }\n.testimonials-section .item p {\n  font-size: 17px;\n  font-style: italic; }\n/*==============================================\r\n06. CONTACT BLOCK CSS\r\n================================================*/\n::-webkit-input-placeholder {\n  color: #fff !important;\n  opacity: 1; }\n::-moz-placeholder {\n  color: #fff !important;\n  opacity: 1; }\n:-ms-input-placeholder {\n  color: #fff !important;\n  opacity: 1; }\n:-moz-placeholder {\n  color: #fff !important;\n  opacity: 1; }\n.input-field {\n  margin-bottom: 15px; }\n.form-control {\n  height: 50px;\n  color: #fff;\n  border: none;\n  background: rgba(250, 250, 250, 0.05);\n  border: 1px solid rgba(250, 250, 250, 0.5);\n  border-radius: 10px;\n  padding: 4px 22px;\n  font-size: 14px;\n  margin-bottom: 30px; }\n.form-control:focus {\n  box-shadow: none;\n  outline: none;\n  background: rgba(0, 0, 0, 0.05);\n  border: 1px solid #fafafa;\n  color: #fff; }\n.index .form-control.form-control-dark {\n  background: rgba(250, 250, 250, 0.75);\n  color: #fff; }\n.index .form-control.form-control-dark:focus {\n  background: rgba(54, 40, 158, 0.85);\n  color: #fff; }\n.index .form-control.form-control-dark::-webkit-input-placeholder {\n  color: #fff !important; }\n.index .form-control.form-control-dark::-moz-placeholder {\n  color: #fff !important; }\n.index .form-control.form-control-dark:-ms-input-placeholder {\n  color: #fff !important; }\n.index .form-control.form-control-dark:-moz-placeholder {\n  color: #fff !important; }\n.form-control.form-control-dark:focus {\n  background: rgba(0, 0, 0, 0.2); }\n.form-control.form-control-dark {\n  background: rgba(0, 0, 0, 0.1);\n  color: #222;\n  border: none; }\n.form-control.form-control-dark::-webkit-input-placeholder {\n  color: #222 !important;\n  opacity: 0.7; }\n.form-control.form-control-dark::-moz-placeholder {\n  color: #222 !important;\n  opacity: 0.7; }\n.form-control.form-control-dark:-ms-input-placeholder {\n  color: #222 !important;\n  opacity: 0.7; }\n.form-control.form-control-dark:-moz-placeholder {\n  color: #222 !important;\n  opacity: 0.7; }\ntextarea.form-control {\n  height: 123px;\n  padding-top: 15px; }\n.contact-section .btn {\n  width: 100%; }\n.contact-box {\n  text-align: left; }\n.contact-box h4 {\n  font-size: 24px; }\n.contact-box h4:after {\n  content: '';\n  display: block;\n  width: 50px;\n  height: 2px;\n  background: #fff;\n  margin: 12px 0; }\n.contact-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  margin-bottom: 30px;\n  background: rgba(250, 250, 250, 0.25);\n  border-radius: 10px;\n  padding: 30px;\n  font-weight: 700; }\n.contact-row i {\n  width: 55px;\n  font-size: 30px;\n  display: block; }\n.contact-row i.fa-envelope {\n  font-size: 25px; }\n#btn-submit {\n  background-color: white;\n  color: black;\n  border-radius: 13px; }\n#btn-submit:hover {\n  background-color: #00bcd4b8;\n  color: white;\n  border-color: white; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC9FOlxcVGVzaXNcXGFkbWluc3BvcnRsaWZlY29hY2gvc3JjXFxhcHBcXHBhZ2VzXFxjb250ZW50XFxjb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lEQ0VpRDtBRENqRDtFQUNDLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtBQUluQjs7aURDQWlEO0FER2pEO0VBQ0MsZUFBYztFQUNkLGdCQUFlLEVBQUE7QUFFZDtFQUNELGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7QUFFckI7RUFDRCxnQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFFVjtFQUNELGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBcUIsRUFBQTtBQUVwQjtFQUNELGVBQWM7RUFDZCxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixnQkFBZSxFQUFBO0FBRWQ7RUFDRCxnQkFBZ0IsRUFBQTtBQUVmO0VBQ0QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlDQUFpQztFQUNqQyx5QkFBeUIsRUFBQTtBQUV4QjtFQUNELGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUVmO0VBQ0QsVUFBVSxFQUFBO0FBSVg7O2lEQ0ZpRDtBREtqRDtFQUNDLG1CQUFtQjtFQUNuQixrQkFBaUIsRUFBQTtBQUVoQjtFQUNELG1CQUFtQjtFQUVuQix1Q0FBbUMsRUFBQTtBQUVsQztFQUNELGdCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGdCQUFlLEVBQUE7QUFFZDtFQUNELGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFFZjtFQUNELGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7QUFFZjtFQUNELGdCQUFnQixFQUFBO0FBRWY7RUFDRCxnQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDBCQUF5QjtFQUN6QixlQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLCtCQUE0QixFQUFBO0FBRTNCO0VBQ0QsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBRWY7RUFDRCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTtBQUVaO0VBQ0QsZ0JBQWU7RUFDZixjQUFhLEVBQUE7QUFFWjtFQUNELG1CQUFtQixFQUFBO0FBRWxCO0VBQ0QsY0FBYTtFQUNiLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGNBQWE7RUFDYixtQkFBa0IsRUFBQTtBQUluQjs7aURDSmlEO0FET2pEO0VBQ0MsZ0JBQWdCO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBRXRCO0VBQ0MsaUJBQWlCLEVBQUE7QUFHakI7RUFDQSxrQkFBa0IsRUFBQTtBQUVsQjtFQUNBLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUIsRUFBQTtBQUVuQjtFQUNBLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkNBQXdDO0VBQ3hDLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMseUJBQXlCLEVBQUE7QUFFdkI7RUFDRixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBRWQ7RUFDRixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUVoQjtFQUNGLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTtBQUViO0VBQ0QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwwQ0FBdUMsRUFBQTtBQUVyQztFQUNELGVBQWU7RUFDaEIsY0FBYztFQUNkLG1CQUFtQixFQUFBO0FBS3BCOztpRENSaUQ7QURXakQ7RUFDRSwyQ0FBd0M7RUFDeEMsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjLEVBQUE7QUFFaEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUlwQjs7aURDVmlEO0FEYWpEO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVMsRUFBQTtBQUVYO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVMsRUFBQTtBQUVYO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVMsRUFBQTtBQUVYO0VBQ0Usc0JBQXFCO0VBQ3JCLFVBQVMsRUFBQTtBQUVYO0VBQ0UsbUJBQWtCLEVBQUE7QUFFcEI7RUFDRSxZQUFZO0VBQ1osV0FBVTtFQUNWLFlBQVk7RUFDWixxQ0FBaUM7RUFDakMsMENBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixpQkFBZ0I7RUFDaEIsZUFBYztFQUNkLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0UsZ0JBQWU7RUFDZixhQUFZO0VBQ1osK0JBQTJCO0VBQzNCLHlCQUFxQztFQUNyQyxXQUFVLEVBQUE7QUFFWjtFQUNFLHFDQUFtQztFQUNuQyxXQUFXLEVBQUE7QUFFYjtFQUNFLG1DQUFtQztFQUNuQyxXQUFXLEVBQUE7QUFFYjtFQUNFLHNCQUFzQixFQUFBO0FBRXhCO0VBQ0Usc0JBQXFCLEVBQUE7QUFFdkI7RUFDRSxzQkFBcUIsRUFBQTtBQUV2QjtFQUNFLHNCQUFxQixFQUFBO0FBRXZCO0VBQ0UsOEJBQThCLEVBQUE7QUFFaEM7RUFDRSw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUVkO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVcsRUFBQTtBQUViO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVcsRUFBQTtBQUViO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVcsRUFBQTtBQUViO0VBQ0Usc0JBQXFCO0VBQ3JCLFlBQVcsRUFBQTtBQUViO0VBQ0UsYUFBWTtFQUNaLGlCQUFnQixFQUFBO0FBRWxCO0VBQ0UsV0FBVSxFQUFBO0FBRVo7RUFDRSxnQkFBZSxFQUFBO0FBRWpCO0VBQ0UsZUFBYyxFQUFBO0FBRWhCO0VBQ0UsV0FBVTtFQUNWLGNBQWE7RUFDYixXQUFVO0VBQ1YsV0FBVTtFQUNWLGdCQUFlO0VBQ2YsY0FBYSxFQUFBO0FBRWY7RUFDRSxvQkFBb0I7RUFHcEIsYUFBYTtFQUNiLHlCQUF5QjtFQUd6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0UsV0FBVTtFQUNWLGVBQWU7RUFDZixjQUFhLEVBQUE7QUFFZjtFQUNFLGVBQWUsRUFBQTtBQUVqQjtFQUNDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7QUFHcEI7RUFDQywyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjAwLiBHRU5FUkFMXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5zZWN0aW9uLTEsIC5zZWN0aW9uLTIgLCAuc2VjdGlvbi0zLCAuc2VjdGlvbi00LCAuc2VjdGlvbi01LC5zZWN0aW9uLTZ7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4wMS4gV0VMQ09NRSBCTE9DSyBDU1NcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLndlbGNvbWUtYm94IHtcclxuXHRmb250LXNpemU6MjBweDtcclxuXHRsaW5lLWhlaWdodDoxLjc7XHJcbiAgfVxyXG4gIC53ZWxjb21lLWZpcnN0e1xyXG5cdGZvbnQtc2l6ZTogMzJweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIH1cclxuICAud2VsY29tZS1ib3ggcCB7XHJcblx0bWF4LXdpZHRoOiA2MjBweDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdG1hcmdpbjowIGF1dG8gMzBweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLndlbGNvbWUtdGl0bGUge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0Zm9udC1zaXplOiA5dnc7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGxldHRlci1zcGFjaW5nOjAuMDJlbTtcclxuICB9XHJcbiAgLndlbGNvbWUtdGl0bGUgc3BhbiB7XHJcblx0Zm9udC1zaXplOjM2cHg7XHJcblx0ZGlzcGxheTpibG9jaztcclxuXHRmb250LXdlaWdodDozMDA7XHJcblx0bGluZS1oZWlnaHQ6MS4yO1xyXG4gIH1cclxuICAud2VsY29tZS1ib3ggLmJ0biB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLm5leHQtc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdGJvdHRvbTogMzBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgfVxyXG4gIC5uZXh0LXNlY3Rpb24gc3BhbiB7XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAubmV4dC1zZWN0aW9uIGk6aG92ZXIge1xyXG5cdG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjAyLiBBQk9VVCBNRVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4uYWJvdXQtaW1nIHtcclxuXHRtYXJnaW46IDAgYXV0byA0MHB4O1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIH1cclxuICAuYWJvdXQtaW1nIGltZyB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwwLDAsLjMpO1xyXG5cdGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwwLDAsLjMpO1xyXG4gIH1cclxuICAuYWJvdXQtY29udGVudGJveCB7XHJcblx0bWFyZ2luLXRvcDogODBweDtcclxuXHR0ZXh0LWFsaWduOmxlZnQ7XHJcblx0bGluZS1oZWlnaHQ6MS44O1xyXG4gIH1cclxuICAuYWJvdXQtY29udGVudGJveCBzcGFuIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAuYWJvdXQtY29udGVudGJveCBoMiB7XHJcblx0Zm9udC1zaXplOiAzMnB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLmZhY3RzLWxpc3Qge1xyXG5cdG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5mYWN0cy1saXN0IC5pdGVtIHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHRleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0cGFkZGluZzogMzBweCAwcHg7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjI1KTtcclxuICB9XHJcbiAgLmNvdW50ZXItYm94IHNwYW4ge1xyXG5cdGZvbnQtc2l6ZTogMjZweDtcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAuY291bnRlci1pY29uIHtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRvcGFjaXR5OiAwLjc1O1xyXG4gIH1cclxuICAuZmFjdHMtbGlzdCAuaXRlbTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDojZmZmO1xyXG5cdGNvbG9yOiMxZTFlMWU7XHJcbiAgfVxyXG4gIC5mYWN0cy1saXN0IC5vd2wtZG90cyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbiAgLmNvdW50LW51bWJlciwgLmNvdW50ZWQge1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0Zm9udC1zaXplOjM2cHg7XHJcblx0Zm9udC13ZWlnaHQ6NzAwO1xyXG5cdGxpbmUtaGVpZ2h0OjE7XHJcblx0bWFyZ2luLWJvdHRvbToxMHB4O1xyXG4gIH1cclxuICBcclxuXHJcbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4wMy4gU0VSVklDRVMgQkxPQ0sgQ1NTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5zZWN0aW9uLTMgcHtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbn1cclxuLnNlY3Rpb24tMyBoNHtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHQvL21hcmdpbi10b3A6IDBweDtcclxufVxyXG4gLmdhbGxlcnktc2VjdGlvbiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiAucG9ydGZvbGlvLWl0ZW0gaW1nIHtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogOTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiAucG9ydGZvbGlvLWl0ZW0gLnRodW1iLWlubmVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogOTk7XHJcblx0Ym90dG9tOiAwO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwyNTAsMjUwLDAuMjUpO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICB9XHJcbiAgIC5wb3J0Zm9saW8taXRlbSAudGh1bWItaW5uZXIgaDQge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdG1hcmdpbi10b3A6IC01cHg7XHJcbiAgfVxyXG4gICAucG9ydGZvbGlvLWl0ZW0gLnRodW1iLWlubmVyIHAge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gICAucG9ydGZvbGlvLWl0ZW06aG92ZXIgLnRodW1iLWlubmVyIHAge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0Y29sb3I6ICM0YTRhNGE7XHJcbiAgfVxyXG4gIC5wb3J0Zm9saW8taXRlbTpob3ZlciAudGh1bWItaW5uZXIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLDI1MCwyNTAsMC45KVxyXG4gIH1cclxuICAgLnBvcnRmb2xpby1pdGVtOmhvdmVyIC50aHVtYi1pbm5lciBoNCB7XHJcblx0IG1hcmdpbi10b3A6IDMwJTtcclxuXHRjb2xvcjogIzFlMWUxZTtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuMDUuIFRFU1RJTU9OT0FMUyBCTE9DSyBDU1NcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIC5pdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwyNTAsMjUwLDAuMjUpO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udGVzdGltb25pYWxzLXNlY3Rpb24gLml0ZW0gaW1nIHtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4udGVzdGltb25pYWxzLXNlY3Rpb24gLml0ZW0gaDQge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnRlc3RpbW9uaWFscy1zZWN0aW9uIC5pdGVtIHAge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuMDYuIENPTlRBQ1QgQkxPQ0sgQ1NTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG46Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG46LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG4uaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDI1MCwyNTAsMjUwLDAuMDUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUwLDI1MCwyNTAsMC41KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6NHB4IDIycHg7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3gtc2hhZG93Om5vbmU7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjA1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MCwyNTAsMjUwLDEpO1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuLmluZGV4IC5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLWRhcmsge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLDI1MCwyNTAsIDAuNzUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5pbmRleCAuZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDU0LCA0MCwgMTU4LCAwLjg1KTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaW5kZXggLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyazo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uaW5kZXggLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyazo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5pbmRleCAuZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5pbmRleCAuZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyayB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjojMjIyICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTowLjc7XHJcbn1cclxuLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyazo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IzIyMiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6MC43O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLWRhcms6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjojMjIyICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTowLjc7XHJcbn1cclxuLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyazotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjojMjIyICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTowLjc7XHJcbn1cclxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcclxuICBoZWlnaHQ6MTIzcHg7XHJcbiAgcGFkZGluZy10b3A6MTVweDtcclxufVxyXG4uY29udGFjdC1zZWN0aW9uIC5idG4ge1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLmNvbnRhY3QtYm94IHtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbn1cclxuLmNvbnRhY3QtYm94IGg0IHtcclxuICBmb250LXNpemU6MjRweDtcclxufVxyXG4uY29udGFjdC1ib3ggaDQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6Jyc7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDo1MHB4O1xyXG4gIGhlaWdodDoycHg7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG4gIG1hcmdpbjoxMnB4IDA7XHJcbn1cclxuLmNvbnRhY3Qtcm93IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwyNTAsMjUwLDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5jb250YWN0LXJvdyBpIHtcclxuICB3aWR0aDo1NXB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbi5jb250YWN0LXJvdyBpLmZhLWVudmVsb3BlIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuI2J0bi1zdWJtaXR7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbn1cclxuXHJcbiNidG4tc3VibWl0OmhvdmVye1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDRiODtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn0iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuMDAuIEdFTkVSQUxcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5zZWN0aW9uLTEsIC5zZWN0aW9uLTIsIC5zZWN0aW9uLTMsIC5zZWN0aW9uLTQsIC5zZWN0aW9uLTUsIC5zZWN0aW9uLTYge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuMDEuIFdFTENPTUUgQkxPQ0sgQ1NTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4ud2VsY29tZS1ib3gge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7IH1cblxuLndlbGNvbWUtZmlyc3Qge1xuICBmb250LXNpemU6IDMycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtOyB9XG5cbi53ZWxjb21lLWJveCBwIHtcbiAgbWF4LXdpZHRoOiA2MjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi53ZWxjb21lLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA5dnc7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07IH1cblxuLndlbGNvbWUtdGl0bGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7IH1cblxuLndlbGNvbWUtYm94IC5idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG5cbi5uZXh0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvdHRvbTogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7IH1cblxuLm5leHQtc2VjdGlvbiBzcGFuIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubmV4dC1zZWN0aW9uIGk6aG92ZXIge1xuICBvcGFjaXR5OiAxOyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4wMi4gQUJPVVQgTUVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5hYm91dC1pbWcge1xuICBtYXJnaW46IDAgYXV0byA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmFib3V0LWltZyBpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpOyB9XG5cbi5hYm91dC1jb250ZW50Ym94IHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDEuODsgfVxuXG4uYWJvdXQtY29udGVudGJveCBzcGFuIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwOyB9XG5cbi5hYm91dC1jb250ZW50Ym94IGgyIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi5mYWN0cy1saXN0IHtcbiAgbWFyZ2luLXRvcDogMzBweDsgfVxuXG4uZmFjdHMtbGlzdCAuaXRlbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMzBweCAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7IH1cblxuLmNvdW50ZXItYm94IHNwYW4ge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLmNvdW50ZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3BhY2l0eTogMC43NTsgfVxuXG4uZmFjdHMtbGlzdCAuaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMWUxZTFlOyB9XG5cbi5mYWN0cy1saXN0IC5vd2wtZG90cyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cblxuLmNvdW50LW51bWJlciwgLmNvdW50ZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuMDMuIFNFUlZJQ0VTIEJMT0NLIENTU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnNlY3Rpb24tMyBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjsgfVxuXG4uc2VjdGlvbi0zIGg0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLmdhbGxlcnktc2VjdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ucG9ydGZvbGlvLWl0ZW0gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cblxuLnBvcnRmb2xpby1pdGVtIC50aHVtYi1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIGJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjI1KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7IH1cblxuLnBvcnRmb2xpby1pdGVtIC50aHVtYi1pbm5lciBoNCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogLTVweDsgfVxuXG4ucG9ydGZvbGlvLWl0ZW0gLnRodW1iLWlubmVyIHAge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4OyB9XG5cbi5wb3J0Zm9saW8taXRlbTpob3ZlciAudGh1bWItaW5uZXIgcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgY29sb3I6ICM0YTRhNGE7IH1cblxuLnBvcnRmb2xpby1pdGVtOmhvdmVyIC50aHVtYi1pbm5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjkpOyB9XG5cbi5wb3J0Zm9saW8taXRlbTpob3ZlciAudGh1bWItaW5uZXIgaDQge1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIGNvbG9yOiAjMWUxZTFlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4wNS4gVEVTVElNT05PQUxTIEJMT0NLIENTU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLnRlc3RpbW9uaWFscy1zZWN0aW9uIC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjI1KTtcbiAgcGFkZGluZzogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG4udGVzdGltb25pYWxzLXNlY3Rpb24gLml0ZW0gaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4udGVzdGltb25pYWxzLXNlY3Rpb24gLml0ZW0gaDQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNzAwOyB9XG5cbi50ZXN0aW1vbmlhbHMtc2VjdGlvbiAuaXRlbSBwIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbjA2LiBDT05UQUNUIEJMT0NLIENTU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTsgfVxuXG46Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxOyB9XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxOyB9XG5cbjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTsgfVxuXG4uaW5wdXQtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XG5cbi5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4wNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDIycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZhZmFmYTtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmluZGV4IC5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNzUpO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uaW5kZXggLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTQsIDQwLCAxNTgsIDAuODUpO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uaW5kZXggLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyazo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cblxuLmluZGV4IC5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLWRhcms6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyB9XG5cbi5pbmRleCAuZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cblxuLmluZGV4IC5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLWRhcms6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cblxuLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyazpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuXG4uZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjb2xvcjogIzIyMjtcbiAgYm9yZGVyOiBub25lOyB9XG5cbi5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLWRhcms6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzIyMiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjc7IH1cblxuLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtZGFyazo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNzsgfVxuXG4uZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNzsgfVxuXG4uZm9ybS1jb250cm9sLmZvcm0tY29udHJvbC1kYXJrOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzIyMiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjc7IH1cblxudGV4dGFyZWEuZm9ybS1jb250cm9sIHtcbiAgaGVpZ2h0OiAxMjNweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7IH1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuYnRuIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmNvbnRhY3QtYm94IHtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4uY29udGFjdC1ib3ggaDQge1xuICBmb250LXNpemU6IDI0cHg7IH1cblxuLmNvbnRhY3QtYm94IGg0OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMTJweCAwOyB9XG5cbi5jb250YWN0LXJvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cblxuLmNvbnRhY3Qtcm93IGkge1xuICB3aWR0aDogNTVweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uY29udGFjdC1yb3cgaS5mYS1lbnZlbG9wZSB7XG4gIGZvbnQtc2l6ZTogMjVweDsgfVxuXG4jYnRuLXN1Ym1pdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7IH1cblxuI2J0bi1zdWJtaXQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0Yjg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/content/content.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/content/content.component.ts ***!
  \****************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/pages/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/pages/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/pages/single/single.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/single/single.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video autoplay muted loop id=\"myVideo\">\r\n  <source src=\"assets/video/video-motivacion.mp4\" type=\"video/mp4\">\r\n</video>\r\n\r\n\r\n\r\n<div id=\"video\">\r\n\r\n    <div class=\"preloader\">\r\n        <div class=\"preloader-bounce\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <app-header></app-header>\r\n\r\n\r\n    <div id=\"fullpage\" class=\"fullpage-default\">\r\n        \r\n        <app-content></app-content>\r\n    </div>\r\n\r\n    <app-social></app-social>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/single/single.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/single/single.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #333; }\n\nli {\n  float: left; }\n\nli a {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none; }\n\nli a:hover {\n  background-color: #111; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2luZ2xlL0U6XFxUZXNpc1xcYWRtaW5zcG9ydGxpZmVjb2FjaC9zcmNcXGFwcFxccGFnZXNcXHNpbmdsZVxcc2luZ2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxubGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5saSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/single/single.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/single/single.component.ts ***!
  \**************************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleComponent = /** @class */ (function () {
    function SingleComponent() {
    }
    SingleComponent.prototype.ngOnInit = function () {
    };
    SingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(/*! ./single.component.html */ "./src/app/pages/single/single.component.html"),
            styles: [__webpack_require__(/*! ./single.component.scss */ "./src/app/pages/single/single.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SingleComponent);
    return SingleComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afAuth, _firebase) {
        this.afAuth = afAuth;
        this._firebase = _firebase;
    }
    AuthService.prototype.registerUser = function () { };
    AuthService.prototype.loginEmailUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginFacebookUser = function () { };
    AuthService.prototype.loginGoogleUser = function () { };
    AuthService.prototype.logoutUser = function () {
        console.log('logoutUser');
        this.clear();
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        console.log('isAuth');
        console.log(localStorage.getItem('rol'));
        //localStorage.setItem('rol',data['rol']);
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.getTipoUser = function () {
        return this.userList = this._firebase.list('usuarios');
    };
    /**
     * this is used to clear anything that needs to be removed
     */
    AuthService.prototype.clear = function () {
        localStorage.clear();
    };
    /**
     * check for expiration and if token is still existing or not
     * @return {boolean}
     */
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('token') != null && !this.isTokenExpired();
    };
    // simulate jwt token is valid
    // https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
    AuthService.prototype.isTokenExpired = function () {
        return false;
    };
    AuthService.prototype.loginAdmin = function () {
        localStorage.setItem('token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJyb2xlIjoiQWRtaW4ifQ.rEkg53_IeCLzGHlmaHTEO8KF5BNfl6NEJ8w-VEq2PkE");
        // this._router.navigate(['/dashboard']);
    };
    AuthService.prototype.login = function () {
        localStorage.setItem('token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.GA0Y9gYIjmx1jLwuRHuBgZ8m6o-NgkD84nO0ym68CWo");
        //this._router.navigate(['/dashboard']);
    };
    /**
     * this is used to clear local storage and also the route to login
     */
    AuthService.prototype.logout = function () {
        this.clear();
        //this._router.navigate(['/login']);
    };
    /*
    *Registro con email
    */
    AuthService.prototype.signUpWithEmail = function (email, pass) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, pass);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/deportista.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/deportista.service.ts ***!
  \************************************************/
/*! exports provided: DeportistaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeportistaService", function() { return DeportistaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//version nueva para servicos resfult

var DeportistaService = /** @class */ (function () {
    function DeportistaService(_http) {
        this._http = _http;
        //deportistasUrl="https://api-tesis-ravid87.c9users.io:8080/api/deportistas";
        //deportistaUrl="https://api-tesis-ravid87.c9users.io:8080/api/deportista";
        //deportistasUrl="http://port-3000.api-tesis-geovascorpioncool972402.codeanyapp.com/api/deportistas";
        //deportistaUrl="http://port-3000.api-tesis-geovascorpioncool972402.codeanyapp.com/api/deportista";
        //deportistasUrl="http://node27.codenvy.io:42334/api/deportistas";
        //deportistaUrl="http://node27.codenvy.io:42334/api/deportista";;
        //deportistasUrl="https://ca07c33860904ca2acd454193de1766a.vfs.cloud9.us-east-2.amazonaws.com/api/deportistas";
        //deportistaUrl="https://ca07c33860904ca2acd454193de1766a.vfs.cloud9.us-east-2.amazonaws.com/api/deportista";
        //url = window['urlApi'];
        this.url = window['urlFirebase'];
        //deportistasUrl=this.url+":8080/api/deportistas";
        //deportistaUrl=this.url+":8080/api/deportista";
        this.deportistasUrl = this.url + 'deportistas.json';
        this.deportistaUrl = this.url + 'deportistas';
    }
    DeportistaService.prototype.nuevoDeportista = function (nuevo) {
        return this._http.post(this.deportistasUrl, nuevo);
    };
    DeportistaService.prototype.consultarDesportistas = function () {
        return this._http.get(this.deportistasUrl);
    };
    DeportistaService.prototype.editarDeportista = function (deportista, indice) {
        var url = this.deportistaUrl + "/" + indice + ".json";
        return this._http.put(url, deportista);
    };
    DeportistaService.prototype.eliminarDeportista = function (indice) {
        var url = this.deportistaUrl + "/" + indice;
        return this._http.delete(url);
    };
    DeportistaService.prototype.darBajaDeportista = function (deportista, indice) {
        var url = this.deportistaUrl + "/" + indice + ".json";
        return this._http.put(url, deportista);
    };
    DeportistaService.prototype.verDeportista = function (indice) {
        var url = this.deportistaUrl + "/" + indice + ".json";
        return this._http.get(url);
    };
    DeportistaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeportistaService);
    return DeportistaService;
}());



/***/ }),

/***/ "./src/app/services/onepage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/onepage.service.ts ***!
  \*********************************************/
/*! exports provided: OnepageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnepageService", function() { return OnepageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//version nueva para servicos resfult


//storage firebase

var OnepageService = /** @class */ (function () {
    function OnepageService(firebase, _http, storage) {
        this.firebase = firebase;
        this._http = _http;
        this.storage = storage;
        this.url = window['urlFirebase'];
        this.slidersUrl = this.url + 'home.json';
        this.sliderUrl = this.url + 'home';
        this.aboutsUrl = this.url + 'about.json';
        this.aboutUrl = this.url + 'about';
        this.servicesUrl = this.url + 'servicios.json';
        this.serviceUrl = this.url + 'servicios';
        this.portafoliosUrl = this.url + 'portafolio.json';
        this.portafolioUrl = this.url + 'portafolio';
        this.noticiasUrl = this.url + 'noticias.json';
        this.noticiaUrl = this.url + 'noticias';
        this.contactosUrl = this.url + 'contacto.json';
        this.contactoUrl = this.url + 'contacto';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'secret-key'
            })
        };
    }
    OnepageService.prototype.getSliders = function () {
        return this._http.get(this.slidersUrl);
    };
    OnepageService.prototype.updateSilder = function (slider, id) {
        var url = this.sliderUrl + "/" + id + ".json";
        return this._http.put(url, slider);
    };
    OnepageService.prototype.getAbouts = function () {
        return this._http.get(this.aboutsUrl);
    };
    OnepageService.prototype.updateAbout = function (about, id) {
        var url = this.aboutUrl + "/" + id + ".json";
        return this._http.put(url, about);
    };
    /*service */
    OnepageService.prototype.getServices = function () {
        return this._http.get(this.servicesUrl);
    };
    OnepageService.prototype.updateService = function (service, id) {
        var url = this.serviceUrl + "/" + id + ".json";
        return this._http.put(url, service);
    };
    OnepageService.prototype.nuevaService = function (nuevo) {
        return this._http.post(this.servicesUrl, nuevo);
    };
    OnepageService.prototype.deletedService = function (id) {
        var url = this.serviceUrl + "/" + id + ".json";
        return this._http.delete(url);
    };
    /*Portafolio */
    OnepageService.prototype.getPortafolio = function () {
        return this._http.get(this.portafoliosUrl);
    };
    OnepageService.prototype.updatePortafolio = function (portafolio, id) {
        var url = this.portafolioUrl + "/" + id + ".json";
        return this._http.put(url, portafolio);
    };
    /*Noticias*/
    OnepageService.prototype.getNoticias = function () {
        return this._http.get(this.noticiasUrl);
    };
    OnepageService.prototype.updateNoticia = function (noticia, id) {
        var url = this.noticiaUrl + "/" + id + ".json";
        return this._http.put(url, noticia);
    };
    /*contato*/
    OnepageService.prototype.getContactos = function () {
        return this._http.get(this.contactosUrl);
    };
    OnepageService.prototype.updateContacto = function (contacto, id) {
        var url = this.contactoUrl + "/" + id + ".json";
        return this._http.put(url, contacto);
    };
    OnepageService.prototype.onUpload = function (data, id) {
        var _this = this;
        var file = data;
        var filePath = "paginaweb/sliders/" + id;
        var ref = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // Observe percentage changes
        this.uploadProgress = task.percentageChanges();
        // Get notified when the download URL is available
        return task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return _this.uploadURL = ref.getDownloadURL();
        }));
    };
    OnepageService.prototype.downloadUrl = function (id) {
        var filePath = "paginaweb/sliders/" + id;
        var imgRef = this.storage.ref(filePath);
        return imgRef.getDownloadURL();
    };
    OnepageService.prototype.onUploadAbout = function (data, id) {
        var _this = this;
        var file = data;
        var filePath = "paginaweb/about/" + id;
        var ref = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // Observe percentage changes
        this.uploadProgress = task.percentageChanges();
        // Get notified when the download URL is available
        return task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return _this.uploadURL = ref.getDownloadURL();
        }));
    };
    OnepageService.prototype.downloadAboutUrl = function (id) {
        var filePath = "paginaweb/about/" + id;
        var imgRef = this.storage.ref(filePath);
        return imgRef.getDownloadURL();
    };
    OnepageService.prototype.onUploadPortafolio = function (data, id) {
        var _this = this;
        var file = data;
        var filePath = "paginaweb/portafolio/" + id;
        var ref = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        // Observe percentage changes
        this.uploadProgress = task.percentageChanges();
        // Get notified when the download URL is available
        return task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return _this.uploadURL = ref.getDownloadURL();
        }));
    };
    OnepageService.prototype.downloadPortafolioUrl = function (id) {
        var filePath = "paginaweb/portafolio/" + id;
        var imgRef = this.storage.ref(filePath);
        return imgRef.getDownloadURL();
    };
    OnepageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], OnepageService);
    return OnepageService;
}());



/***/ }),

/***/ "./src/app/services/toaster.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/toaster.service.ts ***!
  \*********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToasterService = /** @class */ (function () {
    function ToasterService() {
    }
    ToasterService.prototype.Success = function (title, meassage) {
        //toastr.Success(title,meassage)
        //this.toastr.success("Hello, I'm the toastr message.")
        toastr.success(title);
    };
    ToasterService.prototype.Info = function (title, meassage) {
        //toastr.Success(title,meassage)
        toastr.info(title);
    };
    ToasterService.prototype.Warning = function (title, meassage) {
        //toastr.Success(title,meassage)
        toastr.warning(title);
    };
    ToasterService.prototype.Error = function (title, meassage) {
        //toastr.Success(title,meassage)
        toastr.error(title);
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\" id=\"myTopnav\">\r\n\t<a href=\"#slide01\" class=\"active\">Home</a>\r\n\t<a href=\"#slide02\">About Me</a>\r\n\t<a href=\"#slide03\">Services</a>\r\n\t<a href=\"#slide04\">My Work</a>\r\n\t<a href=\"#slide05\">Testimonials</a>\r\n\t<a href=\"#slide06\">Contact Me</a>\r\n\t<a [routerLink]=\"['/signin']\" target=\"_blank\" >Iniciar sesión</a>\r\n\t<a href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\r\n\t\t<i class=\"fa fa-bars\"></i>\r\n\t</a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a black background color to the top navigation */\n.topnav {\n  background-color: #3172b3;\n  overflow: hidden; }\n/* Style the links inside the navigation bar */\n.topnav a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px; }\n/* Change the color of links on hover */\n.topnav a:hover {\n  background-color: #ddd;\n  color: black; }\n/* Add an active class to highlight the current page */\n.active {\n  background-color: #26527f;\n  color: white; }\n/* Hide the link that should open and close the topnav on small screens */\n.topnav .icon {\n  display: none; }\n#myTopnav {\n  z-index: 100;\n  position: fixed;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9FOlxcVGVzaXNcXGFkbWluc3BvcnRsaWZlY29hY2gvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQUE7QUFDQTtFQUNDLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdmLDhDQUFBO0FBQ0E7RUFDRCxXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7QUFHZCx1Q0FBQTtBQUNBO0VBQ0Qsc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTtBQUdYLHNEQUFBO0FBQ0E7RUFDRCx5QkFBeUI7RUFDekIsWUFBWSxFQUFBO0FBR1gseUVBQUE7QUFDQTtFQUNELGFBQWEsRUFBQTtBQUdkO0VBQ0MsWUFBWTtFQUNULGVBQWU7RUFDZixRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcbi50b3BuYXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMzMTcyYjM7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuICAudG9wbmF2IGEge1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGNvbG9yOiAjZjJmMmYyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAxNHB4IDE2cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2hhbmdlIHRoZSBjb2xvciBvZiBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC50b3BuYXYgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuXHRjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhbiBhY3RpdmUgY2xhc3MgdG8gaGlnaGxpZ2h0IHRoZSBjdXJyZW50IHBhZ2UgKi9cclxuICAuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjY1MjdmO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSB0aGUgbGluayB0aGF0IHNob3VsZCBvcGVuIGFuZCBjbG9zZSB0aGUgdG9wbmF2IG9uIHNtYWxsIHNjcmVlbnMgKi9cclxuICAudG9wbmF2IC5pY29uIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiNteVRvcG5hdntcclxuXHR6LWluZGV4OiAxMDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $('#myTopnav a').on('click', function () {
            console.log("clickkkk");
            $('a.active').removeClass('active');
            $(this).addClass('active');
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/social/social.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/social/social.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"social-icons\">\r\n  <div class=\"text-right\">\r\n      <ul class=\"social-icons\">\r\n          <li><a href=\"#\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n          <li><a href=\"#\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\r\n          <li><a href=\"#\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n          <li><a href=\"#\" title=\"Instagram\"><i class=\"fa fa-behance\"></i></a></li>\r\n      </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/social/social.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/social/social.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================================\r\n  SOCIAL ICONS CSS\r\n================================================*/\n#social-icons {\n  padding: 0;\n  position: fixed;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 0;\n  z-index: 199; }\n.social-icons {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n.social-icons li {\n  display: block;\n  margin: 1px 0px; }\n.social-icons li a {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  line-height: 50px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  font-size: 18px; }\n.social-icons li a:hover {\n  color: #1e1e1e;\n  background-color: #fff; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NvY2lhbC9FOlxcVGVzaXNcXGFkbWluc3BvcnRsaWZlY29hY2gvc3JjXFxhcHBcXHNoYXJlZFxcc29jaWFsXFxzb2NpYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpRENFaUQ7QURDakQ7RUFDSSxVQUFTO0VBQ1QsZUFBZTtFQUNmLFFBQVE7RUFDUixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFFBQU87RUFDUCxZQUFZLEVBQUE7QUFFZDtFQUNFLFNBQVE7RUFDUixVQUFTO0VBQ1QsZ0JBQWUsRUFBQTtBQUVqQjtFQUNFLGNBQWM7RUFDZCxlQUFlLEVBQUE7QUFFakI7RUFDRSxXQUFVO0VBQ1YsWUFBVztFQUNYLHFCQUFvQjtFQUNwQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxZQUEwQjtFQUMxQixlQUFjLEVBQUE7QUFFaEI7RUFDRSxjQUFhO0VBQ2Isc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFNPQ0lBTCBJQ09OUyBDU1NcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuI3NvY2lhbC1pY29ucyB7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB6LWluZGV4OiAxOTk7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDFweCAwcHg7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMgbGkgYSB7XHJcbiAgICB3aWR0aDo1MHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgfVxyXG4gIC5zb2NpYWwtaWNvbnMgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjojMWUxZTFlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgU09DSUFMIElDT05TIENTU1xyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuI3NvY2lhbC1pY29ucyB7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE5OTsgfVxuXG4uc29jaWFsLWljb25zIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbi5zb2NpYWwtaWNvbnMgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxcHggMHB4OyB9XG5cbi5zb2NpYWwtaWNvbnMgbGkgYSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDsgfVxuXG4uc29jaWFsLWljb25zIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzFlMWUxZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/social/social.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/social/social.component.ts ***!
  \***************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/shared/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.scss */ "./src/app/shared/social/social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
//initialize firebase
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBjyWK7eorJaa7oIEwKAeW6rQ3WzLaq1Vo",
        authDomain: "miapp-158221.firebaseapp.com",
        databaseURL: "https://miapp-158221.firebaseio.com",
        projectId: "miapp-158221",
        storageBucket: "gs://miapp-158221.appspot.com/",
        messagingSenderId: "231674641543"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




//import 'hammerjs';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Tesis\adminsportlifecoach\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map