(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _first_tab_first_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./first-tab/first-tab.component */ "./src/app/first-tab/first-tab.component.ts");
/* harmony import */ var _second_tab_second_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./second-tab/second-tab.component */ "./src/app/second-tab/second-tab.component.ts");
/* harmony import */ var _third_tab_third_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./third-tab/third-tab.component */ "./src/app/third-tab/third-tab.component.ts");
/* harmony import */ var _thx_thx_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thx/thx.component */ "./src/app/thx/thx.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _first_tab_first_tab_component__WEBPACK_IMPORTED_MODULE_3__["FirstTabComponent"] },
    { path: 'info', component: _second_tab_second_tab_component__WEBPACK_IMPORTED_MODULE_4__["SecondTabComponent"] },
    { path: 'payment', component: _third_tab_third_tab_component__WEBPACK_IMPORTED_MODULE_5__["ThirdTabComponent"] },
    { path: 'thx', component: _thx_thx_component__WEBPACK_IMPORTED_MODULE_6__["ThxComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true }) /*ставим флаг использования #*/
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container  m-b-1\">\r\n    <div class=\"columns\">\r\n        <div class=\"column col-2\"></div>\r\n        <div class=\"column col-8\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div class=\"column col-2\"></div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'choosepay';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _first_tab_first_tab_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first-tab/first-tab.component */ "./src/app/first-tab/first-tab.component.ts");
/* harmony import */ var _second_tab_second_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./second-tab/second-tab.component */ "./src/app/second-tab/second-tab.component.ts");
/* harmony import */ var _third_tab_third_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./third-tab/third-tab.component */ "./src/app/third-tab/third-tab.component.ts");
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userData */ "./src/app/userData.ts");
/* harmony import */ var _thx_thx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./thx/thx.component */ "./src/app/thx/thx.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _first_tab_first_tab_component__WEBPACK_IMPORTED_MODULE_6__["FirstTabComponent"],
                _second_tab_second_tab_component__WEBPACK_IMPORTED_MODULE_7__["SecondTabComponent"],
                _third_tab_third_tab_component__WEBPACK_IMPORTED_MODULE_8__["ThirdTabComponent"],
                _thx_thx_component__WEBPACK_IMPORTED_MODULE_10__["ThxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_userData__WEBPACK_IMPORTED_MODULE_9__["UserData"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first-tab/first-tab.component.html":
/*!****************************************************!*\
  !*** ./src/app/first-tab/first-tab.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"tab tab-block\">\n    <li class=\"tab-item active\">\n        <a>Choise plan</a>\n    </li>\n    <li class=\"tab-item\">\n        <a>Information</a>\n    </li>\n    <li class=\"tab-item\">\n        <a>Billing</a>\n    </li>\n</ul>\n\n<div class=\"container \">\n    <h3 class=\"p-t-1\">A plan to suit you</h3>\n    <div class=\"columns\">\n        <div class=\"column col-4 col-xs-12 col-sm-12 col-md-12 cursor-pointer plan-div m-b-1\"\n             [ngClass]=\"{'active': p.id == selectedPlan.id}\"\n             (click)=\"onSelectPlan(p)\" *ngFor=\"let p of plans\">\n            <div class=\"card\">\n                <div class=\"card-image\">\n                    <!--вставил картину по умолчанию тк просто нету других картинок-->\n                    <img class=\"w-100p\" src=\"assets/bg1.jpg\" alt=\"\">\n                </div>\n                <div class=\"card-header\">\n                    <div class=\"card-title h5\">{{p.title}}</div>\n                    <div class=\"card-subtitle text-gray\">{{p.currency}}{{p.price}}</div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div *ngIf=\"selectedPlan\" class=\"p-t-1 text-right\">\n        <button (click)=\"next()\" [disabled]=\"selectedPlan.id==-1\" class=\"btn btn-primary w-7rem\">Continue</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/first-tab/first-tab.component.scss":
/*!****************************************************!*\
  !*** ./src/app/first-tab/first-tab.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plan-div.active .card {\n  border-color: #686868; }\n"

/***/ }),

/***/ "./src/app/first-tab/first-tab.component.ts":
/*!**************************************************!*\
  !*** ./src/app/first-tab/first-tab.component.ts ***!
  \**************************************************/
/*! exports provided: FirstTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstTabComponent", function() { return FirstTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userData */ "./src/app/userData.ts");
/* harmony import */ var _form_fields_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-fields.service */ "./src/app/form-fields.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirstTabComponent = /** @class */ (function () {
    function FirstTabComponent(router, userData, formFields) {
        this.router = router;
        this.userData = userData;
        this.formFields = formFields;
        this.plans = [];
    }
    FirstTabComponent.prototype.next = function () {
        if (this.selectedPlan != null) {
            /*если все выбрано записываем план в глоб перемен*/
            this.userData.selectedPlan = this.selectedPlan;
            /*следующий таб*/
            this.router.navigate(['info']);
        }
    };
    /*событие выора плана*/
    FirstTabComponent.prototype.onSelectPlan = function (p) {
        this.selectedPlan = p;
    };
    FirstTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*проверка на предыдущий выбор*/
        this.selectedPlan = this.userData.selectedPlan;
        /*планы*/
        this.formFields.getPlans().subscribe(function (data) { return _this.plans = data['plans']; });
    };
    FirstTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first-tab',
            template: __webpack_require__(/*! ./first-tab.component.html */ "./src/app/first-tab/first-tab.component.html"),
            styles: [__webpack_require__(/*! ./first-tab.component.scss */ "./src/app/first-tab/first-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _userData__WEBPACK_IMPORTED_MODULE_2__["UserData"],
            _form_fields_service__WEBPACK_IMPORTED_MODULE_3__["FormFieldsService"]])
    ], FirstTabComponent);
    return FirstTabComponent;
}());



/***/ }),

/***/ "./src/app/form-fields.service.ts":
/*!****************************************!*\
  !*** ./src/app/form-fields.service.ts ***!
  \****************************************/
/*! exports provided: FormFieldsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldsService", function() { return FormFieldsService; });
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


var FormFieldsService = /** @class */ (function () {
    function FormFieldsService(http) {
        this.http = http;
    }
    FormFieldsService.prototype.getPlans = function () {
        return this.http.get('assets/plans.json');
    };
    FormFieldsService.prototype.getInfo = function () {
        return this.http.get('assets/information.json');
    };
    FormFieldsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FormFieldsService);
    return FormFieldsService;
}());



/***/ }),

/***/ "./src/app/second-tab/second-tab.component.html":
/*!******************************************************!*\
  !*** ./src/app/second-tab/second-tab.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"tab tab-block\">\n    <li class=\"tab-item\">\n        <a name=\"routing-strategies\" href=\"#\">Choise plan</a>\n    </li>\n    <li class=\"tab-item active\">\n        <a>Information</a>\n    </li>\n    <li class=\"tab-item\">\n        <a>Billing</a>\n    </li>\n</ul>\n\n<div class=\"container\">\n    <h3 class=\"p-t-1\">Let's finish powering you up!</h3>\n\n    <div class=\"columns\" [formGroup]=\"userForm\">\n        <div *ngFor=\"let f of fields\"\n             [ngClass]=\"{'col-12': f.type == 'select', 'col-6': f.type != 'select'}\"\n             class=\"column  col-xs-12 col-sm-12 col-md-12 p-t-1\">\n            <div *ngIf=\"f.type=='text'\" class=\"form-group\">\n                <input formControlName=\"{{f.id}}\" class=\"form-input\" type=\"text\"\n                       placeholder=\"{{f.title}}\">\n            </div>\n            <div *ngIf=\"f.type=='email'\" class=\"form-group\">\n                <input formControlName=\"{{f.id}}\" class=\"form-input\" type=\"email\"\n                       placeholder=\"{{f.title}}\">\n            </div>\n            <div *ngIf=\"f.type=='phone'\" class=\"form-group\">\n                <input formControlName=\"{{f.id}}\" class=\"form-input\" type=\"phone\"\n                       placeholder=\"{{f.title}}\">\n            </div>\n            <div *ngIf=\"f.type=='select'\" class=\"form-group\">\n                <select formControlName=\"{{f.id}}\" class=\"form-select\">\n                    <option selected value=\"\">{{f.title}}</option>\n                    <option *ngFor=\"let opt of f.items\" [value]=\"opt.id\">{{opt.title}}</option>\n                </select>\n            </div>\n        </div>\n\n\n    </div>\n    <div class=\"p-t-1 text-right\">\n        <button  [disabled]=\"this.userForm.status === 'INVALID'\" (click)=\"next()\" class=\"btn btn-primary w-7rem\">Continue</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/second-tab/second-tab.component.scss":
/*!******************************************************!*\
  !*** ./src/app/second-tab/second-tab.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/second-tab/second-tab.component.ts":
/*!****************************************************!*\
  !*** ./src/app/second-tab/second-tab.component.ts ***!
  \****************************************************/
/*! exports provided: SecondTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondTabComponent", function() { return SecondTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userData */ "./src/app/userData.ts");
/* harmony import */ var _form_fields_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-fields.service */ "./src/app/form-fields.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/*вкладка Info*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SecondTabComponent = /** @class */ (function () {
    function SecondTabComponent(router, userData, formFields) {
        this.router = router;
        this.userData = userData;
        this.formFields = formFields;
        /*форма Reactive Forms*/
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
    }
    /*событие надатие кнопки далее*/
    SecondTabComponent.prototype.next = function () {
        /*если форма валидна редиректим далее*/
        if (this.userForm.status === 'VALID') {
            this.userData.fields = this.userForm.value;
            this.router.navigate(['payment']);
        }
    };
    SecondTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*проверка на предыдущий выбор*/
        if (this.userData.selectedPlan.id === -1) {
            /*если ничего не выбрано редиректив начало*/
            this.router.navigate(['']);
        }
        else {
            /*планы*/
            this.formFields.getInfo().subscribe(function (data) {
                _this.fields = data['fields'];
                _this.fields.map(function (item, key) {
                    /*значение поля*/
                    var formState = '';
                    /*если что-то есть в заполненных предыдущих дынных*/
                    if (_this.userData.fields != null) {
                        formState = _this.userData.fields[item.id];
                    }
                    /*проврка валидности полей*/
                    if (item.pattern == null) {
                        /*если не нужна*/
                        _this.userForm.addControl(item.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formState));
                    }
                    else {
                        /*если нужна валидация*/
                        _this.userForm.addControl(item.id, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formState, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                            /*убираем лишние слэши*/
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(item.pattern.replace(/\\{2,}/g, '\\'))
                        ])));
                    }
                });
            });
        }
    };
    SecondTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second-tab',
            template: __webpack_require__(/*! ./second-tab.component.html */ "./src/app/second-tab/second-tab.component.html"),
            styles: [__webpack_require__(/*! ./second-tab.component.scss */ "./src/app/second-tab/second-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _userData__WEBPACK_IMPORTED_MODULE_2__["UserData"],
            _form_fields_service__WEBPACK_IMPORTED_MODULE_3__["FormFieldsService"]])
    ], SecondTabComponent);
    return SecondTabComponent;
}());



/***/ }),

/***/ "./src/app/third-tab/third-tab.component.html":
/*!****************************************************!*\
  !*** ./src/app/third-tab/third-tab.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"tab tab-block\">\n    <li class=\"tab-item\">\n        <a name=\"routing-strategies\" href=\"#\">Choise plan</a>\n    </li>\n    <li class=\"tab-item\">\n        <a name=\"routing-strategies\" href=\"#info\">Information</a>\n    </li>\n    <li class=\"tab-item active\">\n        <a>Billing</a>\n    </li>\n</ul>\n\n<div *ngIf=\"fields\" class=\"container\">\n\n    <div class=\"columns\">\n        <div class=\"column col-6 col-xs-12 col-sm-12 col-md-12\">\n            <h3 class=\"p-t-1\">Your plan:</h3>\n            <h5 class=\"p-t-1\">{{selectedPlan.title}}</h5>\n            <h5>{{selectedPlan.currency}}{{selectedPlan.price}}</h5>\n        </div>\n        <div class=\"column col-6 col-xs-12 col-sm-12 col-md-12\">\n            <h3 class=\"p-t-1\">Information:</h3>\n            <h5 class=\"p-t-1\">{{fields['firstname']}} {{fields['lastname']}}, {{fields['email']}}</h5>\n            <h5>{{fields['phone']}}</h5>\n        </div>\n    </div>\n\n    <div class=\"columns p-t-1\" [formGroup]=\"payForm\">\n        <div class=\"column col-6 col-xs-12 col-sm-12 col-md-12 m-b-1\">\n            <div class=\"form-group\">\n                <input formControlName=\"cardNumber\" class=\"form-input\" type=\"text\" placeholder=\"Card number\">\n            </div>\n        </div>\n        <div class=\"column col-6 col-xs-12 col-sm-12 col-md-12 m-b-1\">\n            <div class=\"form-group\">\n                <input formControlName=\"CVC\" max=\"3\" class=\"form-input\" type=\"text\" placeholder=\"CVC / CVV\">\n            </div>\n        </div>\n        <div class=\"column col-6 col-xs-12 col-sm-12 col-md-12 m-b-1\">\n            <div class=\"form-group\">\n                <input formControlName=\"month\" max=\"2\" class=\"form-input\" type=\"text\" placeholder=\"Month (MM)\">\n            </div>\n        </div>\n        <div class=\"column col-6 col-xs-12 col-sm-12 col-md-12 m-b-1\">\n            <div class=\"form-group\">\n                <input formControlName=\"year\" max=\"4\" class=\"form-input\" type=\"text\" placeholder=\"Year (YYYY)\">\n            </div>\n        </div>\n    </div>\n    <div class=\"p-t-1 text-right\">\n        <button (click)=\"pay()\" [disabled]=\"this.payForm.status === 'INVALID'\" class=\"btn btn-primary w-7rem\">By\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/third-tab/third-tab.component.scss":
/*!****************************************************!*\
  !*** ./src/app/third-tab/third-tab.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/third-tab/third-tab.component.ts":
/*!**************************************************!*\
  !*** ./src/app/third-tab/third-tab.component.ts ***!
  \**************************************************/
/*! exports provided: ThirdTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThirdTabComponent", function() { return ThirdTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userData */ "./src/app/userData.ts");
/* harmony import */ var _form_fields_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-fields.service */ "./src/app/form-fields.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThirdTabComponent = /** @class */ (function () {
    function ThirdTabComponent(router, userData, formFields) {
        this.router = router;
        this.userData = userData;
        this.formFields = formFields;
        /*форма Reactive Forms*/
        this.payForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            CVC: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                /*убираем лишние слэши*/
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9][0-9][0-9]')
            ])),
            month: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                /*убираем лишние слэши*/
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-1][1-9]')
            ])),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                /*убираем лишние слэши*/
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[2][0-1][0-9][0-9]')
            ]))
        });
    }
    ThirdTabComponent.prototype.pay = function () {
        console.log(this.payForm);
        if (this.payForm.status === 'VALID') {
            this.router.navigate(['thx']);
        }
    };
    ThirdTabComponent.prototype.ngOnInit = function () {
        /*проверка на 1-й шаг*/
        if (this.userData.selectedPlan.id === -1) {
            /*если ничего не выбрано редиректив начало*/
            this.router.navigate(['']);
        }
        /*проверка на 2-й шаг*/
        if (this.userData.fields == null) {
            /*если ничего не выбрано редиректив начало*/
            this.router.navigate(['']);
        }
        this.fields = this.userData.fields;
        this.selectedPlan = this.userData.selectedPlan;
    };
    ThirdTabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-third-tab',
            template: __webpack_require__(/*! ./third-tab.component.html */ "./src/app/third-tab/third-tab.component.html"),
            styles: [__webpack_require__(/*! ./third-tab.component.scss */ "./src/app/third-tab/third-tab.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _userData__WEBPACK_IMPORTED_MODULE_2__["UserData"],
            _form_fields_service__WEBPACK_IMPORTED_MODULE_3__["FormFieldsService"]])
    ], ThirdTabComponent);
    return ThirdTabComponent;
}());



/***/ }),

/***/ "./src/app/thx/thx.component.html":
/*!****************************************!*\
  !*** ./src/app/thx/thx.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div  class=\"container\">\n <h1>Thx!</h1>\n</div>"

/***/ }),

/***/ "./src/app/thx/thx.component.scss":
/*!****************************************!*\
  !*** ./src/app/thx/thx.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thx/thx.component.ts":
/*!**************************************!*\
  !*** ./src/app/thx/thx.component.ts ***!
  \**************************************/
/*! exports provided: ThxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThxComponent", function() { return ThxComponent; });
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

var ThxComponent = /** @class */ (function () {
    function ThxComponent() {
    }
    ThxComponent.prototype.ngOnInit = function () {
    };
    ThxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thx',
            template: __webpack_require__(/*! ./thx.component.html */ "./src/app/thx/thx.component.html"),
            styles: [__webpack_require__(/*! ./thx.component.scss */ "./src/app/thx/thx.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThxComponent);
    return ThxComponent;
}());



/***/ }),

/***/ "./src/app/userData.ts":
/*!*****************************!*\
  !*** ./src/app/userData.ts ***!
  \*****************************/
/*! exports provided: UserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserData", function() { return UserData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])();
/*класс глобального состояния приложения с заполнинными данными формы*/
var UserData = /** @class */ (function () {
    function UserData() {
        /*выбраный план*/
        this.selectedPlan = {
            id: -1,
            title: '',
            price: 0,
            currency: '',
            preview: ''
        };
    }
    return UserData;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\umnPtest\choosepay\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map