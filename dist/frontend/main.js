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

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: routingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingModule", function() { return routingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resume_swiper_resume_swiper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume-swiper/resume-swiper.component */ "./src/app/resume-swiper/resume-swiper.component.ts");
/* harmony import */ var _recruiting_details_recruiting_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recruiting-details/recruiting-details.component */ "./src/app/recruiting-details/recruiting-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'swiper', component: _resume_swiper_resume_swiper_component__WEBPACK_IMPORTED_MODULE_2__["ResumeSwiperComponent"] },
    { path: 'details/:job', component: _recruiting_details_recruiting_details_component__WEBPACK_IMPORTED_MODULE_3__["RecruitingDetailsComponent"] },
    { path: '', redirectTo: '/swiper', pathMatch: 'full' }
];
var routingModule = /** @class */ (function () {
    function routingModule() {
    }
    routingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], routingModule);
    return routingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <router-outlet></router-outlet>\n</div>"

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
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_swiper_resume_swiper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume-swiper/resume-swiper.component */ "./src/app/resume-swiper/resume-swiper.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _recruiting_details_recruiting_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recruiting-details/recruiting-details.component */ "./src/app/recruiting-details/recruiting-details.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _resume_swiper_resume_swiper_component__WEBPACK_IMPORTED_MODULE_5__["ResumeSwiperComponent"],
                _recruiting_details_recruiting_details_component__WEBPACK_IMPORTED_MODULE_7__["RecruitingDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
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

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/recruiting-details/recruiting-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/recruiting-details/recruiting-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img { \r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\twidth: 30%;\r\n\theight: 50%;\r\n\tpadding-left: 10%;\r\n\tleft: 0px;\r\n\tright: 0px;\r\n}\r\n\r\n.header {\r\n\tcolor: #ffffff; \r\n\t-ms-grid-row-align: center; \r\n\t    align-self: center;\r\n\tposition: relative;\r\n}\r\n\r\n.imag {\r\n\twidth: 40%;\r\n}"

/***/ }),

/***/ "./src/app/recruiting-details/recruiting-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/recruiting-details/recruiting-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\" style=\"text-align: center;\">\n    <button (click)=\"goBack()\" class=\"btn btn-tertiary btn-lg\">Go back</button>\n    <ul class=\"nav justify-content-center\">\n    \t<li class=\"nav-item\">\n    \t\t<h1 style=\"color: #FFFFFF\">{{ job }}</h1>\n    \t</li>\n    </ul>\n</nav>\n\n<table class=\"table\" *ngFor=\"let user of users\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope=\"col\">Name</th>\n\t\t\t<th scope=\"col\">GPA</th>\n\t\t\t<th scope=\"col\">Graduation Year</th>\n\t\t\t<th scope=\"col\">Resume</th>\n\t\t\t<th scope=\"col\">Status</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<th scope=\"row\">{{ user.name }}</th>\n\t\t\t<td>{{ user.GPA }}</td>\n\t\t\t<td>{{ user.gradYear }}</td>\n\t\t\t<td class=\"col imag\"><img [src]=\"user.ResumeLink\"></td>\n\t\t\t<td>{{ user.status }}</td>\n\t\t</tr>\n\t</tbody>\n</table>"

/***/ }),

/***/ "./src/app/recruiting-details/recruiting-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/recruiting-details/recruiting-details.component.ts ***!
  \********************************************************************/
/*! exports provided: RecruitingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruitingDetailsComponent", function() { return RecruitingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecruitingDetailsComponent = /** @class */ (function () {
    function RecruitingDetailsComponent(userService, activatedRoute) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.users = [{ "GPA": 3.6,
                "gradYear": 1997,
                "ResumeLink": 'https://images.unsplash.com/photo-1481930703900-9007d48152b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=affcda687d4c6140a87cc4fb6c86df05&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
                "name": 'm',
                "status": "Undecided" },
            { "GPA": 2.4,
                "gradYear": 1987,
                "ResumeLink": 'https://images.unsplash.com/photo-1481391145929-5bcf567d5211?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9fcb3e65f18d1da71faf0ac2013391b&w=1000&q=80',
                "name": 'n',
                "status": "Undecided" },
            { "GPA": 1.5,
                "gradYear": 2007,
                "ResumeLink": 'https://images.unsplash.com/photo-1453834190665-46ff0a1fbd5a?ixlib=rb-0.3.5&s=583ec45454c1e8c01473210feba60ad3&w=1000&q=80',
                "name": 'a',
                "status": "Undecided" },
            { "GPA": 6.8,
                "gradYear": 2091,
                "ResumeLink": 'https://images.unsplash.com/photo-1480480213546-c79a7c9f0904?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd37190b52c1780bd316adeae57bcbcb&w=1000&q=80',
                "name": 't',
                "status": "Undecided" },
            { "GPA": 3.4,
                "gradYear": 1375,
                "ResumeLink": 'https://images.unsplash.com/photo-1483333312588-7f53835a19dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98d1880f74bbaa86bf1506aba56a63dc&w=1000&q=80',
                "name": 'aw',
                "status": "Undecided" },
            { "GPA": .8,
                "gradYear": 1776,
                "ResumeLink": 'https://images.unsplash.com/photo-1481834752827-ff7693aced74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a68288e696f3e004ef9e40bd7ccbbc24&w=1000&q=80',
                "name": 'w',
                "status": "Undecided" }
        ];
    }
    RecruitingDetailsComponent.prototype.ngOnInit = function () {
        this.job = this.activatedRoute.snapshot.params['job'];
        this.getUsers();
    };
    RecruitingDetailsComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    RecruitingDetailsComponent.prototype.goBack = function () {
        console.log("DebugBack");
        var response;
        this.userService.returnToMenu(this.users).subscribe(function (res) { return response = res; });
        console.log(response);
    };
    RecruitingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recruiting-details',
            template: __webpack_require__(/*! ./recruiting-details.component.html */ "./src/app/recruiting-details/recruiting-details.component.html"),
            styles: [__webpack_require__(/*! ./recruiting-details.component.css */ "./src/app/recruiting-details/recruiting-details.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RecruitingDetailsComponent);
    return RecruitingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/resume-swiper/resume-swiper.component.css":
/*!***********************************************************!*\
  !*** ./src/app/resume-swiper/resume-swiper.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n\tmargin-left: 10px;\r\n}\r\n\r\nimg.Undecided { \r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n\twidth: 30%;\r\n\theight: 50%;\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\tright: 0px;\r\n}\r\n\r\nimg.Rejections {\r\n\tposition: absolute;\r\n\t-webkit-animation-name: rejected; /* Safari 4.0 - 8.0 */\r\n    -webkit-animation-duration: .2s; /* Safari 4.0 - 8.0 */\r\n    -webkit-animation-direction: linear; /* Safari 4.0 - 8.0 */\r\n    animation-name: rejected;\r\n    animation-duration: .2s;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n\twidth: 30%;\r\n\theight: 50%;\r\n\tright: 68%;\r\n}\r\n\r\nimg.Accepted {\r\n    position: absolute;\r\n    -webkit-animation-name: accepted; /* Safari 4.0 - 8.0 */\r\n    -webkit-animation-duration: .2s; /* Safari 4.0 - 8.0 */\r\n    -webkit-animation-direction: linear; /* Safari 4.0 - 8.0 */\r\n    animation-name: accepted;\r\n    animation-duration: .2s;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n\twidth: 30%;\r\n\theight: 50%;\r\n\tleft: 68%;\r\n}\r\n\r\n/* Standard syntax */\r\n\r\n@keyframes rejected {\r\n    0%   {right:55%;}\r\n    25%  {right:58%;}\r\n    50%  {right:61%; }\r\n    75%  {right:64%;}\r\n    100% {right:68%;}\r\n}\r\n\r\n/* Safari syntax */\r\n\r\n@-webkit-keyframes rejected {\r\n    0%   {right:55%;}\r\n    25%  {right:58%;}\r\n    50%  {right:61%; }\r\n    75%  {right:64%;}\r\n    100% {right:68%;}\r\n}\r\n\r\n/* Standard syntax */\r\n\r\n@keyframes accepted {\r\n    0%   {left:55%;}\r\n    25%  {left:58%;}\r\n    50%  {left:61%; }\r\n    75%  {left:64%;}\r\n    100% {left:68%;}\r\n}\r\n\r\n/* Safari syntax */\r\n\r\n@-webkit-keyframes accepted {\r\n    0%   {left:55%;}\r\n    25%  {left:58%;}\r\n    50%  {left:61%; }\r\n    75%  {left:64%;}\r\n    100% {left:68%;}\r\n}"

/***/ }),

/***/ "./src/app/resume-swiper/resume-swiper.component.html":
/*!************************************************************!*\
  !*** ./src/app/resume-swiper/resume-swiper.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark\">\n  <form class=\"form-inline\">\n    <button (click)=\"goBack()\" class=\"btn btn-tertiary btn-lg\">Go back</button>\n    <button (click)=\"postUsers()\" class=\"btn btn-primary btn-lg\" style=\"position: absolute; margin-left: 45%\">Submit</button>\n    <button (click)=\"undo()\" [disabled]=\"isInvalid()\" class=\"btn btn-secondary btn-lg\" style=\"position: absolute; margin-left: 53%\">undo</button>\n  </form>\n</nav>\n\n<div style=\"text-align:center\">\n  <h2>\n    Quota progress: {{ judged }} / {{ quota }}\n  </h2>\n  <h3 *ngIf=\"selectedUser\">\n    {{ selectedUser.name }}'s GPA {{ selectedUser.GPA }} and graduation year {{ selectedUser.gradYear }}\n  </h3>\n  </div>\n  <div class=\"row\">\n      <div *ngFor=\"let r of rejected\">\n        <img class=\"Rejections\" [src]=\"r.ResumeLink\">\n      </div>\n      <div *ngIf=\"selectedUser as variable\">\n        <img class=\"Undecided\" [src]=\"selectedUser.ResumeLink\">\n      </div>\n      <div *ngFor=\"let a of accepted\">\n        <img class=\"Accepted\" [src]=\"a.ResumeLink\">\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/resume-swiper/resume-swiper.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resume-swiper/resume-swiper.component.ts ***!
  \**********************************************************/
/*! exports provided: ResumeSwiperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeSwiperComponent", function() { return ResumeSwiperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResumeSwiperComponent = /** @class */ (function () {
    function ResumeSwiperComponent(userService) {
        this.userService = userService;
        this.title = 'Resume grader';
        this.quota = 10;
        this.judged = 0;
        this.totalJudged = 0;
        //uniqueID, name
        this.accepted = [];
        this.rejected = [];
        this.viewed = [];
        this.users = [{ "GPA": 3.6,
                "gradYear": 1997,
                "ResumeLink": 'https://images.unsplash.com/photo-1481930703900-9007d48152b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=affcda687d4c6140a87cc4fb6c86df05&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb',
                "name": 'm',
                "status": "Undecided" },
            { "GPA": 2.4,
                "gradYear": 1987,
                "ResumeLink": 'https://images.unsplash.com/photo-1481391145929-5bcf567d5211?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9fcb3e65f18d1da71faf0ac2013391b&w=1000&q=80',
                "name": 'n',
                "status": "Undecided" },
            { "GPA": 1.5,
                "gradYear": 2007,
                "ResumeLink": 'https://images.unsplash.com/photo-1453834190665-46ff0a1fbd5a?ixlib=rb-0.3.5&s=583ec45454c1e8c01473210feba60ad3&w=1000&q=80',
                "name": 'a',
                "status": "Undecided" },
            { "GPA": 6.8,
                "gradYear": 2091,
                "ResumeLink": 'https://images.unsplash.com/photo-1480480213546-c79a7c9f0904?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd37190b52c1780bd316adeae57bcbcb&w=1000&q=80',
                "name": 't',
                "status": "Undecided" },
            { "GPA": 3.4,
                "gradYear": 1375,
                "ResumeLink": 'https://images.unsplash.com/photo-1483333312588-7f53835a19dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98d1880f74bbaa86bf1506aba56a63dc&w=1000&q=80',
                "name": 'aw',
                "status": "Undecided" },
            { "GPA": .8,
                "gradYear": 1776,
                "ResumeLink": 'https://images.unsplash.com/photo-1481834752827-ff7693aced74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a68288e696f3e004ef9e40bd7ccbbc24&w=1000&q=80',
                "name": 'w',
                "status": "Undecided" }
        ];
    }
    ResumeSwiperComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.selectedUser = this.users[0];
    };
    ResumeSwiperComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    ResumeSwiperComponent.prototype.postUsers = function () {
        console.log("DebugPost");
        var response;
        this.userService.postUsers(this.users).subscribe(function (res) { return response = res; });
        console.log(response);
    };
    ResumeSwiperComponent.prototype.goBack = function () {
        console.log("DebugBack");
        var response;
        this.userService.returnToMenu(this.users).subscribe(function (res) { return response = res; });
        console.log(response);
    };
    ResumeSwiperComponent.prototype.undo = function () {
        this.totalJudged--;
        if (this.judged > 0) {
            this.judged--;
        }
        var undone = this.viewed.pop();
        if (this.accepted.find(function (user) { return user.name == undone.name; })) {
            this.accepted.pop();
        }
        else {
            this.rejected.pop();
        }
        this.selectedUser = undone;
        this.selectedUser.status = "Undecided";
    };
    ResumeSwiperComponent.prototype.isInvalid = function () {
        return this.totalJudged == 0;
    };
    ResumeSwiperComponent.prototype.resumeJudge = function (event) {
        var _this = this;
        var code = event.code;
        if (code == "ArrowLeft" || code == "ArrowRight") {
            if (this.totalJudged < this.users.length) {
                if (!this.viewed.find(function (user) { return user.name == _this.selectedUser.name; })) {
                    this.viewed.push(this.selectedUser);
                    if (code == "ArrowLeft") {
                        this.rejectResume();
                    }
                    else if (code == "ArrowRight") {
                        this.acceptResume();
                    }
                }
                this.selectedUser = this.users[this.totalJudged];
            }
        }
    };
    ResumeSwiperComponent.prototype.acceptResume = function () {
        this.acc = 'right';
        this.accepted.push(this.selectedUser);
        this.selectedUser.status = "Accepted";
        this.judged++;
        this.totalJudged++;
    };
    ResumeSwiperComponent.prototype.rejectResume = function () {
        this.acc = 'left';
        this.rejected.push(this.selectedUser);
        this.selectedUser.status = "Rejected";
        this.totalJudged++;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _User__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], ResumeSwiperComponent.prototype, "selectedUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ResumeSwiperComponent.prototype, "resumeJudge", null);
    ResumeSwiperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume-swiper',
            template: __webpack_require__(/*! ./resume-swiper.component.html */ "./src/app/resume-swiper/resume-swiper.component.html"),
            styles: [__webpack_require__(/*! ./resume-swiper.component.css */ "./src/app/resume-swiper/resume-swiper.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ResumeSwiperComponent);
    return ResumeSwiperComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        observe: "response",
    })
};
var UserService = /** @class */ (function () {
    function UserService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.databaseURL = 'https://sd-hacks-node.herokuapp.com/createUser';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.databaseURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (users) { return console.log('fetched users'); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getUsers'))));
    };
    UserService.prototype.postUsers = function (users) {
        return this.http.post('DatabaseURLHERE', users, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postUsers', users)));
    };
    UserService.prototype.returnToMenu = function (users) {
        return this.http.post('URLHERE', users, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('returnToMenu', users)));
    };
    UserService.prototype.log = function (message) {
        this.messageService.add('HeroService: ${message}');
    };
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    UserService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], UserService);
    return UserService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mwono\Documents\Hackathons\SDHack\SDHacksFrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map