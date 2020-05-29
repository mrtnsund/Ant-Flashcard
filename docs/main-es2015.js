(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-notification.js");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
















function AddComponent_nz_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 16);
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r1.label)("nzValue", option_r1.value);
} }
const _c0 = function () { return { minRows: 3, maxRows: 3 }; };
class AddComponent {
    constructor(cardService, formBuilder, notification, dateService, router, authService) {
        this.cardService = cardService;
        this.formBuilder = formBuilder;
        this.notification = notification;
        this.dateService = dateService;
        this.router = router;
        this.authService = authService;
        this.listOfOption = [];
        this.size = 'default';
        this.newTags = [];
        this.addCardForm = this.formBuilder.group({
            question: '',
            answer: '',
            tags: [],
        });
    }
    ngOnInit() {
        this.cardService.getCards().subscribe(cards => {
            this.cards = cards;
            this.listOfOption = this.getExistingTags();
        });
    }
    getExistingTags() {
        const allTags = [];
        this.cards.forEach(x => x.tags.forEach(element => {
            allTags.push({ label: element, value: element });
        }));
        if (allTags.length === 0) {
            return null;
        }
        const uniqueTags = lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"](allTags, 'label');
        console.log(uniqueTags);
        return uniqueTags;
        // return Array.from(new Set(uniqueTags));
    }
    onSubmit(card) {
        const newCard = {
            question: card.question,
            answer: card.answer,
            tags: card.tags,
            date: this.dateService.transformDate(new Date()),
            success: 0,
        };
        if (card.question && card.answer) {
            this.notification.create('success', 'Card added', '', { nzPlacement: 'bottomRight' });
            this.cardService.addCard(newCard).subscribe();
            this.addCardForm.reset({
                tags: this.addCardForm.get('tags').value
            });
        }
        else {
            this.notification.create('error', 'Please enter a question and answer', '', { nzPlacement: 'bottomLeft' });
        }
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 20, vars: 7, consts: [[1, "fw"], [1, "container"], [1, "content"], [1, "greeting"], [2, "text-align", "center"], [1, "cards"], [1, "card"], [1, "upper"], ["id", "addCardForm", 3, "formGroup", "ngSubmit"], ["nz-input", "", "placeholder", "Question", "formControlName", "question", 1, "question", 2, "height", "100px", 3, "nzAutosize"], ["nz-input", "", "placeholder", "Answer", "formControlName", "answer", 1, "answer", 3, "nzAutosize"], ["nzMode", "tags", "nzPlaceHolder", "Select tags", "formControlName", "tags", 1, "test", 3, "nzSize"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["id", "submitBtn", "nz-button", "", "nzType", "default", "type", "submit", 2, "display", "none"], [1, "lower"], ["onclick", "document.getElementById('submitBtn').click()", 1, "revealButton"], [3, "nzLabel", "nzValue"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add new card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(ctx.addCardForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddComponent_nz_option_13_Template, 1, 2, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " ADD CARD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addCardForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzAutosizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  margin-top: 15px;\r\n  width: 90%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotc2VsZWN0IHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn0iXX0= */", ".question[_ngcontent-%COMP%] {\n    margin-left: 5%;\n    margin-right: 5%;\n    margin-top: 15px;\n    width: 90%;\n  }\n  .answer[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    margin-left: 5%;\n    margin-right: 5%;\n    width: 90%;\n  }\n\n    .revealButton[_ngcontent-%COMP%] {\n    text-align: center;\n    box-sizing: border-box;\n    border-top: 1px solid #F3F4F5;\n    height: 50px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    background-color: #34DA74;\n    color: white;\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n  }\n  .revealButton[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n  }\n  .revealButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    padding-top: 15px;\n  }\n    .cards[_ngcontent-%COMP%] {\n    text-align: center;\n    display: flex;\n    flex-direction: row;\n  }\n  .card[_ngcontent-%COMP%] {\n    position: relative;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: white;\n    width: 600px;\n    height: 300px;\n  }\n  .upper[_ngcontent-%COMP%] {\n    height: 95px;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n  }\n  .lower[_ngcontent-%COMP%] {\n    height: 50px;\n    background-color: white;\n  }\n  .lower[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: -10px;\n  }\n  .lower[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding-top: 10px;\n  }\n\n  .greeting[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    padding-bottom: 30px;\n  }\n  .greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: -15px;\n  }\n  .greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    display: flex; \n    justify-content: center;\n    flex-wrap: wrap;\n    background-color: #EBEFF5 !important;\n    width: 100vw;\n    height: calc(100vh - 100px);\n  }\n\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    background-color: white;\n    height: 10vh;\n    align-content: center;\n  }\n  .left[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-top: 30px;\n    font-size: 20px;\n    justify-self: flex-start;\n  }\n  .right[_ngcontent-%COMP%] {\n    padding-right: 50px;\n    font-size: 20px;\n    padding-top: 30px;\n    float:right;\n  }\n  .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  @media only screen and (max-width: 700px) {\n    .greeting[_ngcontent-%COMP%] {\n      padding-bottom: 10px;\n    }\n    .card[_ngcontent-%COMP%] {\n      width: 450px;\n      height: 390px;\n      margin: 5px;\n    }\n  }\n  @media only screen and (max-width: 500px) {\n    .card[_ngcontent-%COMP%] {\n      width: 360px;\n      height: 312px;\n      margin: 2px;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.css']
            }]
    }], function () { return [{ type: _services_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_4__["NzNotificationService"] }, { type: _services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _review_custom_custom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review/custom/custom.component */ "./src/app/review/custom/custom.component.ts");
/* harmony import */ var _review_random_random_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./review/random/random.component */ "./src/app/review/random/random.component.ts");













const routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'review', component: _review_review_component__WEBPACK_IMPORTED_MODULE_8__["ReviewComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'shuffle', component: _review_random_random_component__WEBPACK_IMPORTED_MODULE_10__["RandomComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'custom', component: _review_custom_custom_component__WEBPACK_IMPORTED_MODULE_9__["CustomComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '404', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.isCollapsed = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"], ["clas", "fw"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5hcHAtbGF5b3V0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */", ".container[_ngcontent-%COMP%] {\n    width: 100vh;\n    display: flex;\n    flex-wrap: wrap;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/menu */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_nb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/nb */ "./node_modules/@angular/common/locales/nb.js");
/* harmony import */ var _angular_common_locales_nb__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_nb__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/tag */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-notification.js");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var _review_random_random_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./review/random/random.component */ "./src/app/review/random/random.component.ts");
/* harmony import */ var _review_custom_custom_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./review/custom/custom.component */ "./src/app/review/custom/custom.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");








































Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_nb__WEBPACK_IMPORTED_MODULE_12___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["nb_NO"] },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__["AuthInterceptor"],
            multi: true
        },
        _services_card_service__WEBPACK_IMPORTED_MODULE_21__["CardService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"],
        _services_date_service__WEBPACK_IMPORTED_MODULE_28__["DateService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            angular2_hotkeys__WEBPACK_IMPORTED_MODULE_34__["HotkeyModule"].forRoot(),
            // NG ZORRO
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
            ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__["NzSelectModule"],
            ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
            ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_27__["NzNotificationModule"],
            ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_29__["NzProgressModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_30__["NzSpinModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_35__["NzToolTipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
        _auth_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
        _review_review_component__WEBPACK_IMPORTED_MODULE_23__["ReviewComponent"],
        _add_add_component__WEBPACK_IMPORTED_MODULE_24__["AddComponent"],
        _review_random_random_component__WEBPACK_IMPORTED_MODULE_31__["RandomComponent"],
        _review_custom_custom_component__WEBPACK_IMPORTED_MODULE_32__["CustomComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_36__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], angular2_hotkeys__WEBPACK_IMPORTED_MODULE_34__["HotkeyModule"], 
        // NG ZORRO
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__["NzSelectModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
        ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_27__["NzNotificationModule"],
        ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_29__["NzProgressModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_30__["NzSpinModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_35__["NzToolTipModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                    _auth_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                    _review_review_component__WEBPACK_IMPORTED_MODULE_23__["ReviewComponent"],
                    _add_add_component__WEBPACK_IMPORTED_MODULE_24__["AddComponent"],
                    _review_random_random_component__WEBPACK_IMPORTED_MODULE_31__["RandomComponent"],
                    _review_custom_custom_component__WEBPACK_IMPORTED_MODULE_32__["CustomComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_36__["HeaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_4__["IconsProviderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    angular2_hotkeys__WEBPACK_IMPORTED_MODULE_34__["HotkeyModule"].forRoot(),
                    // NG ZORRO
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_6__["NzMenuModule"],
                    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_17__["NzFormModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__["NzSelectModule"],
                    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_26__["NzTagModule"],
                    ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_27__["NzNotificationModule"],
                    ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_29__["NzProgressModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_30__["NzSpinModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_35__["NzToolTipModule"]
                ],
                providers: [
                    { provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["nb_NO"] },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__["AuthInterceptor"],
                        multi: true
                    },
                    _services_card_service__WEBPACK_IMPORTED_MODULE_21__["CardService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"],
                    _services_date_service__WEBPACK_IMPORTED_MODULE_28__["DateService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService.isLoggedIn() === true) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const cloned = req.clone({
            setHeaders: {
                Authorization: `bearer ${this.authService.getAccessToken()}`
            }
        });
        return next.handle(cloned);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-notification.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");















const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(fb, authService, router, notification) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.notification = notification;
        this.error = '';
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
    }
    submitForm() {
        // tslint:disable-next-line: forin
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        if (this.validateForm.controls.email.value && this.validateForm.controls.password.value) {
            this.authService
                .login(this.validateForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(5000))
                .subscribe((res) => {
                localStorage.setItem('authorization', res.token);
                this.router.navigate(['/home']);
            }, err => {
                if (err instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {
                    this.notification.create('error', 'Server taking too long to respond', '', { nzPlacement: 'bottomRight' });
                }
                else {
                    this.notification.create('error', `${err.message}`, '', { nzPlacement: 'bottomRight' });
                }
            });
        }
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 4, consts: [[1, "background"], [1, "container"], ["nz-typography", ""], ["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your email!"], ["nzPrefixIcon", "user"], ["type", "text", "nz-input", "", "formControlName", "email", "placeholder", "Email", "required", ""], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "Password", "required", ""], ["nz-button", "", "nzBlock", "", 1, "login-form-button", "login-form-margin", 3, "nzType"], [1, "bottomText"], [3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign in below to start reviewing your cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-control", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-input-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-form-control", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-input-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".background[_ngcontent-%COMP%] {\r\n  background-color: #EBEFF5 !important;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin-top: 300px;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 35vw;\r\n  left: 50%;\r\n  right: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  color: #A5A5A5;\r\n  font-size: 16px;\r\n  margin-bottom: 5%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #4BDA81;\r\n  font-weight: bold;\r\n}\r\n\r\n.login-form-button[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  background-color: #4BDA81;\r\n  border: none;\r\n}\r\n\r\n.bottomText[_ngcontent-%COMP%] {\r\n  margin-top: 5%;\r\n}\r\n\r\n@media only screen and (max-width: 40.063em) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n  }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 30em) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 90vw;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUFFLG9DQUFvQzs7QUFDdEM7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkVGRjUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMzV2dztcclxuICBsZWZ0OiA1MCU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5wIHtcclxuICBjb2xvcjogI0E1QTVBNTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICM0QkRBODE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxvZ2luLWZvcm0tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCREE4MTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJvdHRvbVRleHQge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAuMDYzZW0pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gIH1cclxufSAvKiBtaW4td2lkdGggNjQxcHgsIG1lZGl1bSBzY3JlZW5zICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzBlbSkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/notification */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-notification.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");















const _c0 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(fb, authService, router, notification) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.notification = notification;
        this.errors = '';
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            passwordRepeat: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    submitForm() {
        // tslint:disable-next-line: forin
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        const email = this.validateForm.controls.email.value;
        const password = this.validateForm.controls.password.value;
        const passwordRepeat = this.validateForm.controls.passwordRepeat.value;
        const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const passwordRegex = new RegExp(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/);
        if (email && password && passwordRepeat) {
            if ((password === passwordRepeat)) {
                const user = {
                    username: '',
                    email,
                    password,
                    cards: [],
                };
                if (emailRegex.test(email)) {
                    if (passwordRegex.test(password)) {
                        this.authService
                            .register(user)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["timeout"])(5000))
                            .subscribe((res) => {
                            localStorage.setItem('authorization', res.token);
                            this.router.navigate(['/home']);
                        }, err => {
                            if (err instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["TimeoutError"]) {
                                this.notification.create('error', 'Server taking too long to respond', '', { nzPlacement: 'bottomRight' });
                            }
                            else {
                                this.notification.create('error', `${err.message}`, '', { nzPlacement: 'bottomRight' });
                            }
                        });
                    }
                    else {
                        this.notification.create('error', 'Password must contain at least one letter, at least one number, and be longer than six charaters.', '', { nzPlacement: 'bottomRight' });
                    }
                }
                else {
                    this.notification.create('error', 'Please enter a valid email', '', { nzPlacement: 'bottomRight' });
                }
            }
            else {
                this.notification.create('error', `Password does not match`, '', { nzPlacement: 'bottomRight' });
            }
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 27, vars: 5, consts: [[1, "background"], [1, "container"], ["nz-typography", ""], [2, "color", "rgb(253, 90, 90)"], ["nz-form", "", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzErrorTip", "Please input your email!"], ["nzPrefixIcon", "user"], ["type", "text", "nz-input", "", "formControlName", "email", "placeholder", "Email", "required", ""], ["nzErrorTip", "Please input your Password!"], ["nzPrefixIcon", "lock"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "Password", "required", ""], ["nzErrorTip", "Please repeat your Password!"], ["type", "password", "nz-input", "", "formControlName", "passwordRepeat", "placeholder", "Repeat your password", "required", ""], ["nz-button", "", "nzBlock", "", 1, "login-form-button", "login-form-margin", 3, "nzType"], [1, "bottomText"], [3, "routerLink"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please register an account below to start creating cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-control", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-form-control", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-input-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-form-control", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-input-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.errors, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".background[_ngcontent-%COMP%] {\r\n  background-color: #EBEFF5 !important;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  margin-top: 300px;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 35vw;\r\n  left: 50%;\r\n  right: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\np[_ngcontent-%COMP%] {\r\n  color: #A5A5A5;\r\n  font-size: 16px;\r\n  margin-bottom: 5%;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: #4BDA81;\r\n  font-weight: bold;\r\n}\r\n.login-form-button[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  background-color: #4BDA81;\r\n  border: none;\r\n}\r\n.bottomText[_ngcontent-%COMP%] {\r\n  margin-top: 5%;\r\n}\r\n@media only screen and (max-width: 40.063em) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 50vw;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 30em) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 90vw;\r\n  }\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQUUsb0NBQW9DO0FBQ3RDO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFRkY1ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMzV2dztcclxuICBsZWZ0OiA1MCU7XHJcbiAgcmlnaHQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5wIHtcclxuICBjb2xvcjogI0E1QTVBNTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICM0QkRBODE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmxvZ2luLWZvcm0tYnV0dG9uIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCREE4MTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJvdHRvbVRleHQge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAuMDYzZW0pIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gIH1cclxufSAvKiBtaW4td2lkdGggNjQxcHgsIG1lZGl1bSBzY3JlZW5zICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzBlbSkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_6__["NzNotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");






const _c0 = function () { return ["/home"]; };
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 2, consts: [[1, "header"], [1, "left"], [3, "routerLink"], ["nz-icon", "", "nzType", "home", "nzTheme", "outline"], [1, "right"], [3, "click"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_5_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */", ".header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background-color: white;\n  height: 100px;\n  width: 100vw;\n}\n\n.left[_ngcontent-%COMP%] {\n  padding-left: 70px;\n  padding-top: 30px;\n  font-size: 25px;\n  justify-self: flex-start;\n}\n.right[_ngcontent-%COMP%] {\n  padding-right: 70px;\n  font-size: 25px;\n  padding-top: 30px;\n  float:right;\n}\n.left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #433F40;\n}\n.left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #34DA74;\n}\n\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #433F40;\n}\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: red;\n}\n\n.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: ponter;\n}\n\n@media only screen and (max-width: 700px) {\n    .left[_ngcontent-%COMP%] {\n    }\n    .right[_ngcontent-%COMP%] {\n      \n    }\n  }\n  @media only screen and (max-width: 500px) {\n    .left[_ngcontent-%COMP%] {\n    }\n    .right[_ngcontent-%COMP%] {\n\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");










const _c0 = function () { return ["/review"]; };
const _c1 = function () { return ["/shuffle"]; };
const _c2 = function () { return ["/custom"]; };
const _c3 = function () { return ["/add"]; };
class HomeComponent {
    constructor(authService, router, cardService, dateService) {
        this.authService = authService;
        this.router = router;
        this.cardService = cardService;
        this.dateService = dateService;
    }
    ngOnInit() {
        this.noOfDueCards = 'no';
        this.cardService.getCards().subscribe(cards => {
            this.cards = cards;
            this.getNoOfDueCards();
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    getNoOfDueCards() {
        const today = this.dateService.transformDate(new Date());
        if (this.cards.length >= 1) {
            this.noOfDueCards = this.cards.filter(card => card.date <= today).length;
        }
        if (this.noOfDueCards === 0) {
            this.noOfDueCards = 'no';
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 37, vars: 9, consts: [[1, "fw"], [1, "container"], [1, "content"], [1, "greeting"], [1, "cards"], [1, "card"], [3, "routerLink"], [1, "upper"], [1, "lower"], [1, "add"], ["nz-button", "", "nzType", "success"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Good morning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pick a study to start reviewing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Randomized study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "5 Minute Shuffle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Preparing for a test?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Custom study");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Add card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("You have ", ctx.noOfDueCards, " cards due");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */", ".greeting[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    padding-bottom: 30px;\n  }\n  .greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 15px;\n  }\n  .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: -15px;\n  }\n  .greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    background-color: white;\n    height: 10vh;\n  }\n  .right[_ngcontent-%COMP%] {\n    padding-right: 50px;\n    font-size: 20px;\n    padding-top: 30px;\n    float:right;\n  }\n  .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .container[_ngcontent-%COMP%] {\n    display: flex; \n    justify-content: center;\n    flex-wrap: wrap;\n    background-color: #EBEFF5 !important;\n    width: 100vw;\n    height: calc(100vh - 100px);\n  }\n  .cards[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n  .card[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    margin: 10px;\n    background-color: white;\n    width: 200px;\n    height: 175px;\n  }\n  .upper[_ngcontent-%COMP%] {\n    background-color: #FBBC05;\n    height: 95px;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n  }\n  .lower[_ngcontent-%COMP%] {\n    height: 50px;\n    background-color: white;\n  }\n  .lower[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n  .lower[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    margin-top: -10px;\n  }\n  .lower[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n  a[_ngcontent-%COMP%] {\n    color: #747474;\n  }\n  .add[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  .add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 70px;\n    height: 60px;\n    color: white;\n    font-weight: bold;\n    text-transform: uppercase;\n    background-color: rgb(52, 218, 116);\n    width: 300px;\n    border: none;\n    border-radius: 5px;\n  }\n  \n  @media only screen and (max-width: 700px) {\n    .greeting[_ngcontent-%COMP%] {\n      padding-bottom: 10px;\n    }\n    .card[_ngcontent-%COMP%] {\n      width: 150px;\n      height: 130px;\n      margin: 5px;\n    }\n    .upper[_ngcontent-%COMP%] {\n      height: 68px;\n    }\n    .lower[_ngcontent-%COMP%] {\n      height: 38px;\n    }\n    .lower[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 12px;\n    }\n    .add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      width: 175px;\n      height: 60px;\n    }\n    .lower[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: 14px;\n    }\n  }\n  @media only screen and (max-width: 500px) {\n    .greeting[_ngcontent-%COMP%] {\n      margin-top: 50px;\n    }\n    .cards[_ngcontent-%COMP%] {\n      flex-direction: column;\n    }\n    .card[_ngcontent-%COMP%] {\n      margin: 10px auto;\n      width: 225px;\n      height: 110px;\n    }\n    .upper[_ngcontent-%COMP%] {\n      height: 54px;\n    }\n    .lower[_ngcontent-%COMP%] {\n      height: 30px;\n    }\n    .lower[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 9px;\n      padding-left: 10px;\n    }\n    .lower[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: 12px;\n      padding-left: 10px;\n      padding-bottom: 2px;\n    }\n    .add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      margin-top: 20px;\n    }\n  }\n  @media only screen and (max-height: 720px) {\n    .container[_ngcontent-%COMP%] {\n      height: 100%;\n    }\n    .add[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n    }\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_card_service__WEBPACK_IMPORTED_MODULE_3__["CardService"] }, { type: _services_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/icons-provider.module.ts":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/__ivy_ngcc__/fesm2015/ant-design-icons-angular-icons.js");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                providers: [
                    { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/review/custom/custom.component.ts":
/*!***************************************************!*\
  !*** ./src/app/review/custom/custom.component.ts ***!
  \***************************************************/
/*! exports provided: CustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponent", function() { return CustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");



















function CustomComponent_div_2_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r4.label)("nzValue", option_r4.value);
} }
const _c0 = function () { return [","]; };
function CustomComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomComponent_div_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectTag(ctx_r5.selectTagForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomComponent_div_2_nz_option_3_Template, 1, 2, "nz-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.selectTagForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTokenSeparators", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listOfOption);
} }
function CustomComponent_ng_template_3_div_0_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r10.index + 1, " out of ", ctx_r10.dueCards.length, " cards");
} }
function CustomComponent_ng_template_3_div_0_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.cardToDisplay.answer, " ");
} }
function CustomComponent_ng_template_3_div_0_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomComponent_ng_template_3_div_0_div_7_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r18.toggleAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SEE ANSWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { "0%": "#108ee9", "100%": "#87d068" }; };
function CustomComponent_ng_template_3_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-progress", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomComponent_ng_template_3_div_0_div_7_div_6_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomComponent_ng_template_3_div_0_div_7_div_7_Template, 4, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx_r11.progressPercent)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1))("nzShowInfo", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.cardToDisplay.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.revealAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.revealAnswer)("ngIfElse", _r12);
} }
function CustomComponent_ng_template_3_div_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomComponent_ng_template_3_div_0_ng_template_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.nextCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["/home"]; };
function CustomComponent_ng_template_3_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Custom study complete! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go back?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
function CustomComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomComponent_ng_template_3_div_0_p_5_Template, 2, 2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomComponent_ng_template_3_div_0_div_7_Template, 8, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomComponent_ng_template_3_div_0_ng_template_8_Template, 4, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomComponent_ng_template_3_div_0_ng_template_10_Template, 4, 2, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.dueCards && ctx_r7.index < ctx_r7.dueCards.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.cardToDisplay)("ngIfElse", _r14);
} }
function CustomComponent_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-spin", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large");
} }
function CustomComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomComponent_ng_template_3_div_0_Template, 12, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomComponent_ng_template_3_ng_template_1_Template, 3, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loaded)("ngIfElse", _r8);
} }
class CustomComponent {
    constructor(authService, router, cardService, dateService, formBuilder, _hotkeysService) {
        this.authService = authService;
        this.router = router;
        this.cardService = cardService;
        this.dateService = dateService;
        this.formBuilder = formBuilder;
        this._hotkeysService = _hotkeysService;
        this.listOfOption = [];
        this.size2 = 'default';
        this.newTags = [];
        this.size = 'large';
        this.loaded = false;
        this.selectTagForm = this.formBuilder.group({
            tags: []
        });
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('space', (event) => {
            if (this.revealAnswer) {
                this.nextCard();
            }
            else {
                this.toggleAnswer();
            }
            return false;
        }));
    }
    ngOnInit() {
        this.cardService.getCards().subscribe(cards => {
            this.cards = cards;
            this.index = 0;
            // this.progressPercent = 1 / this.dueCards.length * 100;
            this.loaded = true;
            this.listOfOption = this.getExistingTags();
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    getDueCards() {
        return this.cards.filter(card => (card.tags.some((val) => this.selectedTags.indexOf(val) !== -1)));
    }
    nextCard() {
        this.revealAnswer = false;
        this.index++;
        this.cardToDisplay = this.dueCards[this.index];
        this.progressPercent = this.index / this.dueCards.length * 100;
    }
    toggleAnswer() {
        this.revealAnswer = true;
    }
    selectTag(tag) {
        this.selectedTags = tag.tags;
        console.log(tag.tags);
        this.dueCards = this.getDueCards();
        this.cardToDisplay = this.dueCards[this.index];
    }
    getExistingTags() {
        const allTags = [];
        if (this.cards) {
            this.cards.forEach(x => x.tags.forEach(element => {
                allTags.push({ label: element, value: element });
            }));
        }
        if (allTags.length === 0) {
            return null;
        }
        const uniqueTags = lodash__WEBPACK_IMPORTED_MODULE_2__["uniqBy"](allTags, 'label');
        console.log(uniqueTags);
        return uniqueTags;
        // return Array.from(new Set(uniqueTags));
    }
}
CustomComponent.ɵfac = function CustomComponent_Factory(t) { return new (t || CustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_card_service__WEBPACK_IMPORTED_MODULE_5__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"])); };
CustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomComponent, selectors: [["app-custom"]], decls: 5, vars: 2, consts: [[1, "fw"], [1, "container"], ["class", "select", 4, "ngIf", "ngIfElse"], ["showBlock", ""], [1, "select"], [3, "formGroup", "ngSubmit"], ["nzMode", "tags", "nzPlaceHolder", "Select tags to include in your study", "formControlName", "tags", 2, "width", "250px", 3, "nzTokenSeparators"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["id", "submitBtn", "nz-button", "", "nzType", "default", "type", "submit", 2, "margin-top", "30px"], [3, "nzLabel", "nzValue"], ["class", "container", 4, "ngIf", "ngIfElse"], ["loadingBlock", ""], [1, "content"], [1, "greeting"], [2, "text-align", "center"], ["style", "text-align: center;", 4, "ngIf"], [1, "cards"], ["class", "card", 4, "ngIf", "ngIfElse"], ["revealBlock", ""], ["elseBlock", ""], [1, "card"], [1, "upper"], [3, "nzPercent", "nzStrokeColor", "nzShowInfo"], [1, "question", "center"], ["class", "answer lower", 4, "ngIf"], ["class", "revealButton", 3, "click", 4, "ngIf", "ngIfElse"], [1, "answer", "lower"], [1, "revealButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "See answer (SPACE)", "nzTooltipPlacement", "bottom"], [1, "buttons"], [1, "button", "againButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "Next card (SPACE)", "nzTooltipPlacement", "bottom"], [2, "color", "#34DA74", "font-weight", "bold", 3, "routerLink"], [1, "loader"], ["nzSimple", "", 3, "nzSize"]], template: function CustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomComponent_div_2_Template, 6, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomComponent_ng_template_3_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedTags)("ngIfElse", _r1);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__["NzTooltipDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_16__["NzSpinComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L2N1c3RvbS9jdXN0b20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9jdXN0b20vY3VzdG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */", ".select[_ngcontent-%COMP%] {\n    padding-top: 100px;\n    width: 250px;\n    text-align: center;\n  }\n  .loader[_ngcontent-%COMP%] {\n    margin-top: 300px;\n  }\n  .tags[_ngcontent-%COMP%] {\n    margin-top: 45px;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .question[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n  .answer[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 50px;\n  }\n  .center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .ant-progress-inner[_ngcontent-%COMP%] {\n    position: absolute !important;\n    top: 0 !important;\n  }\n\n  .greeting[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    padding-bottom: 30px;\n  }\n  .greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: -15px;\n  }\n  .greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    background-color: white;\n    height: 10vh;\n    align-content: center;\n  }\n  .left[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-top: 30px;\n    font-size: 20px;\n    justify-self: flex-start;\n  }\n  .right[_ngcontent-%COMP%] {\n    padding-right: 50px;\n    font-size: 20px;\n    padding-top: 30px;\n    float:right;\n  }\n  .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .container[_ngcontent-%COMP%] {\n    display: flex; \n    justify-content: center;\n    flex-wrap: wrap;\n    background-color: #EBEFF5 !important;\n    width: 100vw;\n    height: calc(100vh - 100px);\n  }\n  .cards[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n  .card[_ngcontent-%COMP%] {\n    position: relative;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: white;\n    width: 600px;\n    height: 300px;\n  }\n  .upper[_ngcontent-%COMP%] {\n    background: #F5F5F5;  \n    height: 95px;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n  }\n  .lower[_ngcontent-%COMP%] {\n    height: 50px;\n    background-color: white;\n  }\n  .lower[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: -10px;\n  }\n  .lower[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding-top: 10px;\n  }\n  a[_ngcontent-%COMP%] {\n    color: #747474;\n  }\n  .add[_ngcontent-%COMP%] {\n    margin: 10px;\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  .buttons[_ngcontent-%COMP%] {\n    margin-top: 150px;\n    display: flex;\n    text-align: center;\n    box-sizing:content-box;\n    border-top: 1px solid #f3f4f5;\n    height: 50px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    justify-content: center;\n  }\n  .button[_ngcontent-%COMP%] {\n    padding: 15px;\n    cursor: pointer;\n  } \n  .againButton[_ngcontent-%COMP%] {\n    color: #34DA74;\n  }\n  .revealButton[_ngcontent-%COMP%] {\n    text-align: center;\n    box-sizing: border-box;\n    border-top: 1px solid #F3F4F5;\n    height: 50px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n  }\n  .revealButton[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    font-size: 16px;\n  }\n  .revealButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    padding-top: 15px;\n  }\n  \n  \n  @media only screen and (max-width: 700px) {\n    .greeting[_ngcontent-%COMP%] {\n      padding-bottom: 10px;\n    }\n    .card[_ngcontent-%COMP%] {\n      width: 450px;\n      height: 390px;\n      margin: 5px;\n    }\n  }\n  @media only screen and (max-width: 500px) {\n    .card[_ngcontent-%COMP%] {\n      width: 360px;\n      height: 312px;\n      margin: 2px;\n    }\n\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom',
                templateUrl: './custom.component.html',
                styleUrls: ['./custom.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_card_service__WEBPACK_IMPORTED_MODULE_5__["CardService"] }, { type: _services_date_service__WEBPACK_IMPORTED_MODULE_6__["DateService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }, { type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/review/random/random.component.ts":
/*!***************************************************!*\
  !*** ./src/app/review/random/random.component.ts ***!
  \***************************************************/
/*! exports provided: RandomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomComponent", function() { return RandomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");














function RandomComponent_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.index + 1, " out of ", ctx_r3.dueCards.length, " cards");
} }
function RandomComponent_div_1_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.cardToDisplay.answer, " ");
} }
function RandomComponent_div_1_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RandomComponent_div_1_div_7_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.toggleAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SEE ANSWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "0%": "#108ee9", "100%": "#87d068" }; };
function RandomComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-progress", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RandomComponent_div_1_div_7_div_6_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RandomComponent_div_1_div_7_div_7_Template, 4, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx_r4.progressPercent)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("nzShowInfo", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cardToDisplay.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.revealAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.revealAnswer)("ngIfElse", _r5);
} }
function RandomComponent_div_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RandomComponent_div_1_ng_template_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.nextCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/home"]; };
function RandomComponent_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Time's up! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go back?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function RandomComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "5 Minute Shuffle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RandomComponent_div_1_p_5_Template, 2, 2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RandomComponent_div_1_div_7_Template, 8, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RandomComponent_div_1_ng_template_8_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RandomComponent_div_1_ng_template_10_Template, 5, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dueCards && ctx_r0.index < ctx_r0.dueCards.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cardToDisplay)("ngIfElse", _r7);
} }
function RandomComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-spin", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large");
} }
class RandomComponent {
    constructor(authService, router, cardService, _hotkeysService) {
        this.authService = authService;
        this.router = router;
        this.cardService = cardService;
        this._hotkeysService = _hotkeysService;
        this.size = 'large';
        this.loaded = false;
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["Hotkey"]('space', (event) => {
            if (this.revealAnswer) {
                this.nextCard();
            }
            else {
                this.toggleAnswer();
            }
            return false;
        }));
    }
    ngOnInit() {
        this.cardService.getCards().subscribe(cards => {
            this.cards = cards;
            this.index = 0;
            this.dueCards = this.getDueCards();
            this.cardToDisplay = this.dueCards[this.index];
            this.loaded = true;
            this.totalTime = 300;
            this.progressPercent = 100;
            this.timer();
        });
    }
    timer() {
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1000);
        this.timeLeft = this.totalTime;
        source.subscribe(value => {
            if (value <= 300 && this.timeLeft >= 0) {
                this.timeLeft = this.totalTime - value;
                this.progressPercent = this.timeLeft / 3;
            }
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    getDueCards() {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["shuffle"](this.cards);
    }
    nextCard() {
        this.revealAnswer = false;
        this.index++;
        this.cardToDisplay = this.dueCards[this.index];
    }
    toggleAnswer() {
        this.revealAnswer = true;
    }
}
RandomComponent.ɵfac = function RandomComponent_Factory(t) { return new (t || RandomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_card_service__WEBPACK_IMPORTED_MODULE_6__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"])); };
RandomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RandomComponent, selectors: [["app-random"]], decls: 4, vars: 2, consts: [[1, "fw"], ["class", "container", 4, "ngIf", "ngIfElse"], ["loadingBlock", ""], [1, "container"], [1, "content"], [1, "greeting"], [2, "text-align", "center"], ["style", "text-align: center;", 4, "ngIf"], [1, "cards"], ["class", "card", 4, "ngIf", "ngIfElse"], ["revealBlock", ""], ["elseBlock", ""], [1, "card"], [1, "upper"], [3, "nzPercent", "nzStrokeColor", "nzShowInfo"], [1, "question", "center"], ["class", "answer lower", 4, "ngIf"], ["class", "revealButton", 3, "click", 4, "ngIf", "ngIfElse"], [1, "answer", "lower"], [1, "revealButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "See answer (SPACE)", "nzTooltipPlacement", "bottom"], [1, "buttons"], [1, "button", "againButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "Next card (SPACE)", "nzTooltipPlacement", "bottom"], [2, "color", "#34DA74", "font-weight", "bold", 3, "routerLink"], [1, "loader"], ["nzSimple", "", 3, "nzSize"]], template: function RandomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RandomComponent_div_1_Template, 12, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RandomComponent_ng_template_2_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r1);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_9__["NzProgressComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzTooltipDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__["NzSpinComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9yYW5kb20vcmFuZG9tLmNvbXBvbmVudC5jc3MifQ== */", ".loader[_ngcontent-%COMP%] {\n    margin-top: 300px;\n  }\n  .tags[_ngcontent-%COMP%] {\n    margin-top: 45px;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .question[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n  .answer[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 50px;\n  }\n  .center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .ant-progress-inner[_ngcontent-%COMP%] {\n    position: absolute !important;\n    top: 0 !important;\n  }\n\n  .greeting[_ngcontent-%COMP%] {\n    margin-top: 100px;\n    padding-bottom: 30px;\n  }\n  .greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: -15px;\n  }\n  .greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-weight: bold;\n  }\n  .header[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    background-color: white;\n    height: 10vh;\n    align-content: center;\n  }\n  .left[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-top: 30px;\n    font-size: 20px;\n    justify-self: flex-start;\n  }\n  .right[_ngcontent-%COMP%] {\n    padding-right: 50px;\n    font-size: 20px;\n    padding-top: 30px;\n    float:right;\n  }\n  .right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .container[_ngcontent-%COMP%] {\n    display: flex; \n    justify-content: center;\n    flex-wrap: wrap;\n    background-color: #EBEFF5 !important;\n    width: 100vw;\n    height: calc(100vh - 100px);\n  }\n  .cards[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n  }\n  .card[_ngcontent-%COMP%] {\n    position: relative;\n    border-radius: 10px;\n    margin: 10px;\n    background-color: white;\n    width: 600px;\n    height: 300px;\n  }\n  .upper[_ngcontent-%COMP%] {\n    background: #F5F5F5;  \n    height: 95px;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n  }\n  .lower[_ngcontent-%COMP%] {\n    height: 50px;\n    background-color: white;\n  }\n  .lower[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: -10px;\n  }\n  .lower[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding-top: 10px;\n  }\n  a[_ngcontent-%COMP%] {\n    color: #747474;\n  }\n  .add[_ngcontent-%COMP%] {\n    margin: 10px;\n    position: relative;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  .buttons[_ngcontent-%COMP%] {\n    margin-top: 150px;\n    display: flex;\n    text-align: center;\n    box-sizing:content-box;\n    border-top: 1px solid #f3f4f5;\n    height: 50px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    justify-content: center;\n  }\n  .button[_ngcontent-%COMP%] {\n    padding: 15px;\n    cursor: pointer;\n  } \n  .againButton[_ngcontent-%COMP%] {\n    color: #34DA74;\n  }\n  .revealButton[_ngcontent-%COMP%] {\n    text-align: center;\n    box-sizing: border-box;\n    border-top: 1px solid #F3F4F5;\n    height: 50px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n  }\n  .revealButton[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    font-size: 16px;\n  }\n  .revealButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-weight: 600;\n    padding-top: 15px;\n  }\n  \n  \n  @media only screen and (max-width: 700px) {\n    .greeting[_ngcontent-%COMP%] {\n      padding-bottom: 10px;\n    }\n    .card[_ngcontent-%COMP%] {\n      width: 450px;\n      height: 390px;\n      margin: 5px;\n    }\n  }\n  @media only screen and (max-width: 500px) {\n    .card[_ngcontent-%COMP%] {\n      width: 360px;\n      height: 312px;\n      margin: 2px;\n    }\n\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RandomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-random',
                templateUrl: './random.component.html',
                styleUrls: ['./random.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_card_service__WEBPACK_IMPORTED_MODULE_6__["CardService"] }, { type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_2__["HotkeysService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/__ivy_ngcc__/fesm2015/angular2-hotkeys.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/card.service */ "./src/app/services/card.service.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/date.service */ "./src/app/services/date.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");













function ReviewComponent_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.index + 1, " out of ", ctx_r3.dueCards.length, " cards");
} }
function ReviewComponent_div_1_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.cardToDisplay.answer, " ");
} }
function ReviewComponent_div_1_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_div_1_div_7_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.toggleAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SEE ANSWER");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "0%": "#108ee9", "100%": "#87d068" }; };
function ReviewComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-progress", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReviewComponent_div_1_div_7_div_6_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReviewComponent_div_1_div_7_div_7_Template, 4, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPercent", ctx_r4.progressPercent)("nzStrokeColor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("nzShowInfo", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.cardToDisplay.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.revealAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.revealAnswer)("ngIfElse", _r5);
} }
function ReviewComponent_div_1_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_div_1_ng_template_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.againClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AGAIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_div_1_ng_template_8_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.easyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "EASY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_div_1_ng_template_8_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.mediumClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "MEDIUM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_div_1_ng_template_8_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.hardClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/home"]; };
function ReviewComponent_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "You're all caught up, good job! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go back?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function ReviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewComponent_div_1_p_5_Template, 2, 2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReviewComponent_div_1_div_7_Template, 8, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReviewComponent_div_1_ng_template_8_Template, 13, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReviewComponent_div_1_ng_template_10_Template, 4, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dueCards && ctx_r0.index < ctx_r0.dueCards.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cardToDisplay)("ngIfElse", _r7);
} }
function ReviewComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-spin", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large");
} }
class ReviewComponent {
    constructor(authService, router, cardService, dateService, _hotkeysService) {
        this.authService = authService;
        this.router = router;
        this.cardService = cardService;
        this.dateService = dateService;
        this._hotkeysService = _hotkeysService;
        this.size = 'large';
        this.loaded = false;
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('1', (event) => {
            this.againClick();
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('2', (event) => {
            this.easyClick();
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('3', (event) => {
            this.mediumClick();
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('4', (event) => {
            this.hardClick();
            return false;
        }));
        this._hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["Hotkey"]('space', (event) => {
            if (this.revealAnswer) {
                this.easyClick();
            }
            else {
                this.toggleAnswer();
            }
            return false;
        }));
    }
    ngOnInit() {
        this.cardService.getCards().subscribe(cards => {
            this.cards = cards;
            this.index = 0;
            this.today = this.dateService.transformDate(new Date());
            this.dueCards = this.getDueCards();
            this.cardToDisplay = this.dueCards[this.index];
            this.progressPercent = 1 / this.dueCards.length * 100;
            this.loaded = true;
        });
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    getDueCards() {
        return this.cards.filter(card => (card.date <= this.today));
    }
    againClick() {
        // const card = this.dueCards[this.index];
        // this.dueCards.push(card);
        this.nextCard();
    }
    easyClick() {
        const card = this.dueCards[this.index];
        const newDate = new Date();
        card.date = this.dateService.transformDate(newDate.setDate(newDate.getDate() + 4));
        this.cardService.updateCard(card).subscribe();
        this.nextCard();
    }
    mediumClick() {
        const card = this.dueCards[this.index];
        const newDate = new Date();
        card.date = this.dateService.transformDate(newDate.setDate(newDate.getDate() + 3));
        this.cardService.updateCard(card).subscribe();
        this.nextCard();
    }
    hardClick() {
        const card = this.dueCards[this.index];
        const newDate = new Date();
        card.date = this.dateService.transformDate(newDate.setDate(newDate.getDate() + 1));
        this.cardService.updateCard(card).subscribe();
        this.nextCard();
    }
    nextCard() {
        this.revealAnswer = false;
        this.index++;
        this.cardToDisplay = this.dueCards[this.index];
        this.progressPercent = this.index / this.dueCards.length * 100;
    }
    toggleAnswer() {
        this.revealAnswer = true;
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"])); };
ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], decls: 4, vars: 2, consts: [[1, "fw"], ["class", "container", 4, "ngIf", "ngIfElse"], ["loadingBlock", ""], [1, "container"], [1, "content"], [1, "greeting"], [2, "text-align", "center"], ["style", "text-align: center;", 4, "ngIf"], [1, "cards"], ["class", "card", 4, "ngIf", "ngIfElse"], ["revealBlock", ""], ["elseBlock", ""], [1, "card"], [1, "upper"], [3, "nzPercent", "nzStrokeColor", "nzShowInfo"], [1, "question", "center"], ["class", "answer lower", 4, "ngIf"], ["class", "revealButton", 3, "click", 4, "ngIf", "ngIfElse"], [1, "answer", "lower"], [1, "revealButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "See answer (SPACE)", "nzTooltipPlacement", "bottom"], [1, "buttons"], [1, "button", "againButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "Try again (1)", "nzTooltipPlacement", "bottomLeft"], [1, "button", "easyButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "Effortless (SPACE || 2)", "nzTooltipPlacement", "bottom"], [1, "button", "mediumButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "Could be better (3)", "nzTooltipPlacement", "bottom"], [1, "button", "hardButton", 3, "click"], ["nz-tooltip", "", "nzTooltipTitle", "Need to freshen up (4)", "nzTooltipPlacement", "bottomRight"], [2, "color", "#34DA74", "font-weight", "bold", 3, "routerLink"], [1, "loader"], ["nzSimple", "", 3, "nzSize"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReviewComponent_div_1_Template, 12, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReviewComponent_ng_template_2_Template, 3, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded)("ngIfElse", _r1);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_8__["NzProgressComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_9__["NzTooltipDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_10__["NzSpinComponent"]], styles: [".loader[_ngcontent-%COMP%] {\r\n  margin-top: 300px;\r\n}\r\n.tags[_ngcontent-%COMP%] {\r\n  margin-top: 45px;\r\n  margin-bottom: 10px;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n}\r\n.question[_ngcontent-%COMP%] {\r\n  padding-top: 15px;\r\n}\r\n.answer[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding-top: 50px;\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.ant-progress-inner[_ngcontent-%COMP%] {\r\n  position: absolute !important;\r\n  top: 0 !important;\r\n}\r\n.greeting[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n  padding-bottom: 30px;\r\n}\r\n.greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n.greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: -15px;\r\n}\r\n.greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: white;\r\n  height: 10vh;\r\n  align-content: center;\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n  padding-left: 50px;\r\n  padding-top: 30px;\r\n  font-size: 20px;\r\n  justify-self: flex-start;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  padding-right: 50px;\r\n  font-size: 20px;\r\n  padding-top: 30px;\r\n  float:right;\r\n}\r\n.right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  display: flex; \r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  background-color: #EBEFF5 !important;\r\n  width: 100vw;\r\n  height: calc(100vh - 100px);\r\n}\r\n.cards[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  border-radius: 10px;\r\n  margin: 10px;\r\n  background-color: white;\r\n  width: 600px;\r\n  height: 300px;\r\n}\r\n.upper[_ngcontent-%COMP%] {\r\n  background: #F5F5F5;  \r\n  height: 95px;\r\n  border-top-right-radius: 10px;\r\n  border-top-left-radius: 10px;\r\n}\r\n.lower[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  background-color: white;\r\n}\r\n.lower[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin-top: -10px;\r\n}\r\n.lower[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding-top: 10px;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: #747474;\r\n}\r\n.add[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n  margin-top: 150px;\r\n  display: flex;\r\n  text-align: center;\r\n  box-sizing:content-box;\r\n  border-top: 1px solid #f3f4f5;\r\n  height: 50px;\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  justify-content: center;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  cursor: pointer;\r\n}\r\n.againButton[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.mediumButton[_ngcontent-%COMP%] {\r\n  color: #FFC400;\r\n}\r\n.hardButton[_ngcontent-%COMP%] {\r\n  color: #FF9100;\r\n}\r\n.revealButton[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n  border-top: 1px solid #F3F4F5;\r\n  height: 50px;\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n.revealButton[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  font-size: 16px;\r\n}\r\n.revealButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  padding-top: 15px;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n  .greeting[_ngcontent-%COMP%] {\r\n    padding-bottom: 10px;\r\n  }\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 450px;\r\n    height: 390px;\r\n    margin: 5px;\r\n  }\r\n}\r\n@media only screen and (max-width: 500px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 360px;\r\n    height: 312px;\r\n    margin: 2px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxtQkFBbUIsR0FBRyw4QkFBOEI7RUFDcEQsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBR0E7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7RUFDYjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xyXG4gIG1hcmdpbi10b3A6IDMwMHB4O1xyXG59XHJcbi50YWdzIHtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ucXVlc3Rpb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi5hbnN3ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFudC1wcm9ncmVzcy1pbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmVldGluZyB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmdyZWV0aW5nIGgxLCAuZ3JlZXRpbmcgcCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uZ3JlZXRpbmcgcCB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuLmdyZWV0aW5nIGgxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5sZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcclxufVxyXG4ucmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcbi5yaWdodCBwIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxlZnQgcCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFRkY1ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxufVxyXG4uY2FyZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbi51cHBlciB7XHJcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICBoZWlnaHQ6IDk1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG4ubG93ZXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubG93ZXIgaDMge1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5sb3dlciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6ICM3NDc0NzQ7XHJcbn1cclxuLmFkZCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idXR0b25zIHtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOmNvbnRlbnQtYm94O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjNmNGY1O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59IFxyXG4uYWdhaW5CdXR0b24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLm1lZGl1bUJ1dHRvbiB7XHJcbiAgY29sb3I6ICNGRkM0MDA7XHJcbn1cclxuLmhhcmRCdXR0b24ge1xyXG4gIGNvbG9yOiAjRkY5MTAwO1xyXG59XHJcbi5yZXZlYWxCdXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRjNGNEY1O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5yZXZlYWxCdXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnJldmVhbEJ1dHRvbiBwIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5ncmVldGluZyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiAzOTBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMTJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gIH1cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review',
                templateUrl: './review.component.html',
                styleUrls: ['./review.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_card_service__WEBPACK_IMPORTED_MODULE_4__["CardService"] }, { type: _services_date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"] }, { type: angular2_hotkeys__WEBPACK_IMPORTED_MODULE_1__["HotkeysService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.configUrl = 'https://pi-7a130fdb.localhost.run/user'; //RASPBERRY PI
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.currentUser = {};
    }
    register(user) {
        return this.http.post(`${this.configUrl}/signup`, user);
    }
    login(user) {
        return this.http.post(`${this.configUrl}/login`, user);
    }
    getAccessToken() {
        const token = localStorage.getItem('authorization');
        return token;
    }
    isLoggedIn() {
        const authToken = this.getAccessToken();
        return (authToken !== null) ? true : false;
    }
    logout() {
        if (localStorage.removeItem('authorization') === null) {
            this.router.navigate(['/login']);
        }
    }
    isAuthenticated() {
        const userData = localStorage.getItem('userInfo');
        if (userData && JSON.parse(userData)) {
            return true;
        }
        return false;
    }
    handleError(error) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            msg = `Client Error: ${error.error.message}`;
        }
        else {
            msg = `Server Error code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/card.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/card.service.ts ***!
  \******************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




class CardService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.configUrl = 'https://pi-7a130fdb.localhost.run/api/flashcards'; //RASPBERRY PI
    }
    getCards() {
        return this.http.get(this.configUrl);
    }
    addCard(newCard) {
        if (newCard.tags === null) {
            newCard.tags = [];
        }
        newCard.user = this.authService.getAccessToken();
        return this.http.post(this.configUrl, newCard);
    }
    updateCard(updatedCard) {
        const url = `${this.configUrl}/${updatedCard.id}`;
        return this.http.put(url, updatedCard);
    }
    deleteCard(cardToDelete) {
        const url = `${this.configUrl}/${cardToDelete.id}`;
        return this.http.delete(url);
    }
}
CardService.ɵfac = function CardService_Factory(t) { return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
CardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CardService, factory: CardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/date.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/date.service.ts ***!
  \******************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DateService {
    constructor(datePipe) {
        this.datePipe = datePipe;
    }
    transformDate(date) {
        return this.datePipe.transform(date, 'dd-MM-yyyy');
    }
}
DateService.ɵfac = function DateService_Factory(t) { return new (t || DateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"])); };
DateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DateService, factory: DateService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mrtns\Documents\GitHub\Ant-Flashcard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map