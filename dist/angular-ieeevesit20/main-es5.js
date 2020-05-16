function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'IEEEVESIT20';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 209,
      vars: 0,
      consts: [["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "description", "content", "An interactive getting started guide for Brackets."], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0/css/all.min.css", "rel", "stylesheet", "type", "text/css", "media", "all"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css", "rel", "stylesheet"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/ionicons/5.0.1/collection/components/icon/icon.min.css", "rel", "stylesheet"], ["href", "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.1/css/lightbox.min.css", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"], [1, "image"], [1, "row", 2, "margin-bottom", "50px"], ["id", "navbar", 1, ""], ["src", "assets/img/logo1.png", 1, "img-fluid", "logo"], ["href", "#", "id", "symbol"], ["href", "#", 1, "active"], ["href", "#"], [1, "menu-toggle"], ["aria-hidden", "true", 1, "fa", "fa-bars", "icon"], [1, "container"], [1, "row"], ["id", "slider"], ["src", "assets/img/vivekanand4.png", "alt", "v1"], ["src", "assets/img/council2.jpg", "alt", "council"], ["src", "assets/img/vivekanand3.png", "alt", "v2"], [1, "ieee", "col-md-12"], ["id", "about_ieee"], [1, "ieee", "col-md-12", "ieee_animate"], [1, "container", "counter-section"], [1, "our_statistics"], [1, "row", "text-center"], [1, "col-md-4"], [1, "icon-box"], [1, "fa", "fa-users"], [1, "counter"], [2, "font-size", "30px"], [1, "fa", "fa-gears"], [1, "fa", "fa-user"], [1, "container", "slide_up"], [1, "our_teams"], [1, "even"], [1, "hex"], [1, "content"], ["aria-hidden", "true", 1, "fa", "fa-pencil"], [1, "centralizer"], [1, "centralized", 2, "margin-top", "-50%"], [1, "fas", "fa-code", "fa-fw", "hvr-icon"], [1, "odd"], ["aria-hidden", "true", 1, "fa", "fa-wrench"], ["aria-hidden", "true", 1, "fa", "fa-lightbulb-o"], ["aria-hidden", "true", 1, "fas", "fa-paint-brush", "fa-fw", "hvr-icon"], ["aria-hidden", "true", 1, "fa", "fa-microphone", "fa-fw", "hvr-icon"], ["aria-hidden", "true", 1, "fas", "fa-rupee-sign", "fa-fw", "hvr-icon"], ["id", "footer"], [1, "footer-top"], [1, "col-md-2", "col-md-offset-1", "col-xs-12", "footer-logo"], ["src", "assets/img/footer_logo.png", "alt", "IEEE LOGO"], [1, "col-md-2", "col-md-offset-2", "col-xs-12", "footer-links"], [1, "ion-ios-arrow-right"], ["href", "home.html"], ["href", "events.html"], ["href", "our_council.html"], ["href", "ieee_tv.html"], ["href", "sponsors.html"], ["href", "contact_us.html"], [1, "col-md-4", "col-md-offset-1", "col-xs-12", "footer-contact"], [1, "social-links"], ["href", "#", 1, "instagram"], [1, "fa", "fa-instagram"], [1, "copyright"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "IEEE VESIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "link", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "link", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "link", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "link", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "header", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "IEEE VESIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "OUR COUNCIL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "IEEE TV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "SPONSORS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "CONTACT US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " ABOUT IEEE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " The Institute of Electrical and Electronics Engineers (IEEE) is a professional association for electronic engineering and electrical engineering (and associated disciplines) with its corporate office in New York City and its operations center in Piscataway, New Jersey. It was formed in 1963 from the amalgamation of the American Institute of Electrical Engineers and the Institute of Radio Engineers. Due to its expansion of scope into so many related fields, it is simply referred to by the letters I-E-E-E (pronounced Eye-triple-E), except on legal business documents. As of 2020, it is the world's largest association of technical professionals with more than 423,000 members in over 160 countries around the world. Its objectives are the educational and technical advancement of electrical and electronic engineering, telecommunications, computer engineering and allied disciplines ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " IEEE VESIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " IEEE-VESIT is the leading student branch of the IEEE Mumbai section, having over 1000 student members. We've been awarded several prestigious international acclaims for spreading technological developments at the local level. Sailing through smoothly as ever, our motto \"Excellence through Innovation\" keeps the mast high as we mould students into technically sound professionals by conducting quality workshops, competitions and events for our members every year. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "OUR STATISTICS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 600");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "MEMBERSHIPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " 25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " 47");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "COUNCIL MEMBERS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " OUR TEAMS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ol", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "EDITORIAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "WEB DEVELOPER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "ol", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "TECH TEAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "EXECUTIVE COMMITEE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "AESTHETIC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ol", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "PUBLICITY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "SPONSORSHIP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "footer", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Useful Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Our Council");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "IEEE TV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Sponsors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Vivekanand Education Society's Institute of Technology,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Hashu Adwani Memorial Complex,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Collector's Colony");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Chembur, Mumbai - 400074.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Phone: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "022-61532532 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "ieee.vesit@ves.ac.in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Follow Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "a", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " \xA9 2019-20 Copyright: IEEE-VESIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-image: url(\"/assets/img/bg3.jpg\");\n  overflow-x: auto;\n  background-attachment: fixed;\n}\n#symbol[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  text-decoration: none;\n  color: white;\n  padding: 14px 12px;\n  margin-right: 50px;\n  margin-left: 100px;\n  font-size: 1.2em;\n}\n#symbol[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #66FCF1;\n  color: #0B0C10;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 45px;\n  position: absolute;\n  margin-left: 25px;\n  margin-top: 4px;\n  display: block;\n}\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 0px;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n  z-index: 1;\n  transition: background-color 1s;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  float: right;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 20px;\n  color: #fff;\n  text-decoration: none;\n  display: block;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0B0C10;\n  background: #66FCF1;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  line-height: 50px;\n  font-size: 24px;\n  cursor: pointer;\n  display: none;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #0B0C10;\n}\n.bg-dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 991px) {\n  header[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: calc(100vh-50px);\n    background: #333;\n    top: 50px;\n    left: -100%;\n    transition: 0.5s;\n  }\n\n  header[_ngcontent-%COMP%]   nav.active[_ngcontent-%COMP%] {\n    left: 0;\n    margin-bottom: 100px;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n}\n\n\n#slider[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n#slider[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500%;\n  margin: 0;\n  left: 0;\n  -webkit-animation: 30s slider infinite;\n          animation: 30s slider infinite;\n}\n#slider[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20%;\n  float: left;\n}\n@-webkit-keyframes slider {\n  0% {\n    left: 0;\n  }\n  20% {\n    left: 0;\n  }\n  25% {\n    left: -100%;\n  }\n  45% {\n    left: -100%;\n  }\n  50% {\n    left: -200%;\n  }\n  70% {\n    left: -200%;\n  }\n  75% {\n    left: -300%;\n  }\n  95% {\n    left: -300%;\n  }\n  100% {\n    left: -400%;\n  }\n}\n@keyframes slider {\n  0% {\n    left: 0;\n  }\n  20% {\n    left: 0;\n  }\n  25% {\n    left: -100%;\n  }\n  45% {\n    left: -100%;\n  }\n  50% {\n    left: -200%;\n  }\n  70% {\n    left: -200%;\n  }\n  75% {\n    left: -300%;\n  }\n  95% {\n    left: -300%;\n  }\n  100% {\n    left: -400%;\n  }\n}\n#slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2em;\n  color: white;\n  opacity: 0;\n}\n#slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\n.container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.3;\n  margin: 0 auto;\n  padding: 1vw;\n  text-align: center;\n  width: 90vw;\n}\n.our_teams[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #66FCF1;\n  text-decoration: underline;\n  text-underline-position: under;\n}\n.slide_up[_ngcontent-%COMP%] {\n  -webkit-animation: hex_slide_up 2s ease;\n          animation: hex_slide_up 2s ease;\n}\nol.even[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\nol.odd[_ngcontent-%COMP%] {\n  margin-top: -4.5vw;\n  margin-bottom: -4.5vw;\n  position: relative;\n}\n.hex[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 2vw auto;\n  margin-right: 5.83333vw;\n  width: 7vw;\n  height: 11.9vw;\n  background: #fff;\n  transform: rotate(-90deg);\n  display: inline-block;\n  text-align: left;\n  transition: all 150ms ease-in-out;\n  opacity: 0.4;\n  border-radius: 1vw/0.5vw;\n}\n.hex[_ngcontent-%COMP%]:hover {\n  transform: rotate(-90deg) scale(1.2);\n  z-index: 9;\n}\n.hex[_ngcontent-%COMP%]:before, .hex[_ngcontent-%COMP%]:after {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  background: inherit;\n  content: \"\";\n}\n.hex[_ngcontent-%COMP%]:before {\n  transform: rotate(60deg);\n}\n.hex[_ngcontent-%COMP%]:after {\n  transform: rotate(-60deg);\n}\n.hex[_ngcontent-%COMP%]:hover {\n  background: #66fcf1;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2), -2px -2px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  opacity: 1;\n}\n.content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 50%;\n  width: 150%;\n  left: -25%;\n  top: 25%;\n  transform: rotate(90deg);\n  z-index: 400;\n  text-align: center;\n  font-size: 4vw;\n  text-align: auto;\n}\n.content[_ngcontent-%COMP%]   .centralizer[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 1vw;\n  position: relative;\n  width: 100%;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .centralized[_ngcontent-%COMP%] {\n  height: auto;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  opacity: 0;\n}\n.hex[_ngcontent-%COMP%]:hover   .centralized[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.hex[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.ieee[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-family: sans-serif;\n  font-size: 1em;\n  color: white;\n}\n.ieee_animate[_ngcontent-%COMP%] {\n  -webkit-animation: Slide_Up 0.822s linear;\n          animation: Slide_Up 0.822s linear;\n}\n#about_ieee[_ngcontent-%COMP%] {\n  color: #66FCF1;\n  text-decoration: underline;\n  text-underline-position: under;\n  padding-bottom: 10px;\n  font-family: monospace;\n  font-size: 2em;\n}\n@-webkit-keyframes Slide_Up {\n  0% {\n    transform: translateY(70px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes Slide_Up {\n  0% {\n    transform: translateY(70px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes hex_slide_up {\n  0% {\n    transform: translateY(70px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n@keyframes hex_slide_up {\n  0% {\n    transform: translateY(70px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n\n.counter-section[_ngcontent-%COMP%] {\n  color: aqua;\n  margin: 10% auto;\n  -webkit-animation: Slide_Up 0.822s linear;\n          animation: Slide_Up 0.822s linear;\n}\n.icon-box[_ngcontent-%COMP%] {\n  border: 1px solid aqua;\n  height: 100px;\n  width: 100px;\n  margin: 20px auto;\n  transform: rotate(45deg);\n}\n.icon-box[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: aqua;\n  font-size: 40px;\n  margin-top: 25px;\n  margin-left: 0px;\n  align-items: center;\n  transform: rotate(-45deg);\n}\n.counter[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.border[_ngcontent-%COMP%] {\n  border-right: 1px solid aqua;\n}\n.our_statistics[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #66FCF1;\n  text-decoration: underline;\n  text-underline-position: under;\n}\n@media screen and (max-width: 768px) {\n  .border[_ngcontent-%COMP%] {\n    border-right: transparent;\n  }\n}\n\n\n.light_wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: url(\"/assets/img/bg3.jpg\");\n  z-index: 999999;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 6em;\n  color: #333;\n  font-weight: 500;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-animation: animate 2s linear infinite;\n          animation: animate 2s linear infinite;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(9) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n@-webkit-keyframes animate {\n  0%, 80% {\n    color: #333;\n    text-shadow: none;\n  }\n  100% {\n    color: #fff;\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #fff;\n  }\n}\n@keyframes animate {\n  0%, 80% {\n    color: #333;\n    text-shadow: none;\n  }\n  100% {\n    color: #fff;\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #fff;\n  }\n}\n\n\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n#footer[_ngcontent-%COMP%] {\n  background: #0b0c10;\n  padding: 0 0 10px 0;\n  color: #eee;\n  font-size: 14px;\n  position: relative;\n  width: 100%;\n  bottom: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  background: #1f2833;\n  padding: 10px 0 0 0;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: contents;\n  transition: 0.9s;\n  color: #fff;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #66fcf1;\n  text-decoration: none;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #66fcf1;\n  text-transform: uppercase;\n  position: relative;\n  padding-bottom: 12px;\n  text-decoration: underline;\n  text-underline-position: under;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  right: 0;\n  background: #1f2833;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  color: #f5f3ee;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #aaaaaa;\n  padding: 10px 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #eee;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #66FCF1;\n  text-decoration: none;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  background-color: #0b0c10;\n}\n.container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.3;\n  margin: 0 auto;\n  padding: 1vw;\n  text-align: center;\n  width: 90vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx2aW5vZFxcRGVza3RvcFxcSUVFRVZFU0lUMjBcXGFuZ3VsYXItaWVlZXZlc2l0MjAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtBQ0NKO0FEQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNFSjtBREFBO0VBQ0ksZ0JBQUE7QUNHSjtBRERBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNJSjtBREZBOztFQUVJLGNBQUE7RUFDQSxtQkFBQTtBQ0tKO0FERkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS0o7QURGQTtFQUNJLHlCQUFBO0FDS0o7QUREQTtFQUNJLFlBQUE7QUNJSjtBRERBO0VBRUk7SUFDSSxlQUFBO0VDR047O0VEREU7SUFDSSxjQUFBO0VDSU47O0VERkU7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O0FEMkJBO0VBQ0ksY0FBQTtBQ3hCSjtBRDJCQTtFQUNJLFdBQUE7QUN4Qko7QUQyQkE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUN4Qko7QUQyQkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUN4Qko7QUQyQkE7RUFDSSxpQkFBQTtBQ3hCSjtBRDJCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ3hCSjtBRDJCQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDBCQSwwQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tTmF2YmFyLS0tLS0tLS0qL1xyXG5ib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmczLmpwZycpO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbiNzeW1ib2x7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuI3N5bWJvbCBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2RkNGMTtcclxuICAgIGNvbG9yOiAjMEIwQzEwO1xyXG59XHJcblxyXG4ubG9nb3sgICAgICAgICAgICAgICAgICBcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyeyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2eyAgICAgICAgICAgICAgICAgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuaGVhZGVyIG5hdiB1bHsgICAgICAgICAgICAgICBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGl7ICAgICAgICAgICAgXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGkgYSB7ICAgICAgICAgXHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGkgYS5hY3RpdmUsICAgICBcclxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6IzBCMEMxMDtcclxuICAgIGJhY2tncm91bmQ6ICM2NkZDRjE7XHJcbn1cclxuXHJcbi5tZW51LXRvZ2dsZXsgICAgICAgICAgICAgICAgXHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iZy1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjBDMTA7XHJcbiAgICBcclxufVxyXG5cclxuLmJnLWRhcmsgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSAgICAgICAgICAgXHJcbntcclxuICAgIGhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGV7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXZ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoLTUwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgdG9wOjUwcHg7XHJcbiAgICAgICAgbGVmdDotMTAwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIG5hdi5hY3RpdmV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXYgdWx7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgbmF2IHVsIGxpIGF7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIH1cclxufVxyXG4vKi0tLS0tLS0tLS1OYXZiYXIgZW5kLS0tLS0tLS0qL1xyXG5cclxuLyotLS0tLS0tLS0tU0xJREVSLS0tLS0tLS0tLS0tKi9cclxuI3NsaWRlcntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4jc2xpZGVyIGZpZ3VyZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYW5pbWF0aW9uOiAzMHMgc2xpZGVyIGluZmluaXRlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNzbGlkZXIgZmlndXJlIGltZ3tcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZXJ7XHJcbiAgICAwJXtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgMjAle1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAyNSV7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICB9XHJcbiAgICA0NSV7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgbGVmdDogLTIwMCU7XHJcbiAgICB9XHJcbiAgICA3MCV7XHJcbiAgICAgICAgbGVmdDogLTIwMCU7ICAgXHJcbiAgICB9XHJcbiAgICA3NSV7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICB9XHJcbiAgICA5NSV7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGxlZnQ6IC00MDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jc2xpZGVyIHB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbiNzbGlkZXIgcDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8qLS0tLS0tLS0tLUhFWEFHT05TLS0tLS0tLS0tLS0qL1xyXG4uY29udGFpbmVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTB2dztcclxufVxyXG5cclxuLm91cl90ZWFtc3tcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICM2NkZDRjE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcclxufVxyXG5cclxuLnNsaWRlX3Vwe1xyXG4gICAgYW5pbWF0aW9uOiBoZXhfc2xpZGVfdXAgMnMgZWFzZTtcclxufVxyXG5cclxub2wuZXZlbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbm9sLm9kZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNC41dnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNC41dnc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZXgge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAydncgYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogNS44MzMzM3Z3O1xyXG4gICAgd2lkdGg6IDd2dztcclxuICAgIGhlaWdodDogMTEuOXZ3O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogLjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxdncvLjV2dztcclxufVxyXG5cclxuLmhleDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDEuMik7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uaGV4OmJlZm9yZSxcclxuLmhleDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbi5oZXg6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxufVxyXG5cclxuLmhleDphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG59XHJcblxyXG4uaGV4OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2NmZjZjE7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGxlZnQ6IC0yNSU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIHotaW5kZXg6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgdGV4dC1hbGlnbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQgLmNlbnRyYWxpemVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IC5jZW50cmFsaXplZCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uaGV4OmhvdmVyIC5jZW50cmFsaXplZCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaGV4OmhvdmVyIGkge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uaWVlZXtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjFlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgXHJcbn1cclxuXHJcbi5pZWVlX2FuaW1hdGV7XHJcbiAgICAgYW5pbWF0aW9uOiBTbGlkZV9VcCAwLjgyMnMgbGluZWFyO1xyXG59XHJcblxyXG4jYWJvdXRfaWVlZVxyXG57XHJcbiAgICBjb2xvcjogIzY2RkNGMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IHVuZGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTptb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBTbGlkZV9VcHtcclxuICAgIDAlXHJcbiAgICB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJVxyXG4gICAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoZXhfc2xpZGVfdXB7XHJcbiAgICAwJVxyXG4gICAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcclxuICAgIH1cclxuICAgIDEwMCVcclxuICAgIHtcclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKi0tLS0tLS0tLS1DT1VOVEVSLS0tLS0tLS0tLS0tKi9cclxuLmNvdW50ZXItc2VjdGlvbntcclxuXHRjb2xvcjogYXF1YTtcclxuXHRtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiAgU2xpZGVfVXAgMC44MjJzIGxpbmVhcjtcclxufVxyXG5cclxuLmljb24tYm94e1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGFxdWE7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRtYXJnaW46IDIwcHggYXV0bztcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5pY29uLWJveCAuZmF7XHJcblx0Y29sb3I6YXF1YTtcclxuXHRmb250LXNpemU6IDQwcHg7XHJcblx0bWFyZ2luLXRvcDogMjVweDtcclxuXHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmNvdW50ZXJ7XHJcblx0Zm9udC1zaXplOiAyN3B4O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCBhcXVhO1xyXG59XHJcblxyXG4ub3VyX3N0YXRpc3RpY3N7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjNjZGQ0YxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KVxyXG57XHJcbiAgICAuYm9yZGVye1xyXG4gICAgICAgICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8qLS0tLS0tLS0tUFJFTE9BREVSLS0tLS0tLS0tLS0qL1xyXG4ubGlnaHRfd3JhcHBlcntcclxucG9zaXRpb246IGZpeGVkO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDA7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206IDA7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JnMy5qcGdcIik7XHJcbnotaW5kZXg6IDk5OTk5OTtcclxufVxyXG5cclxuLmxpZ2h0X3dyYXBwZXIgaDJ7XHJcbiAgICBmb250LXNpemU6IDZlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFue1xyXG5cdGFuaW1hdGlvbjogYW5pbWF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcblxyXG59XHJcblxyXG5cclxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoMSlcclxue1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoMilcclxue1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxufVxyXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCgzKVxyXG57XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDQpXHJcbntcclxuXHRhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoNSlcclxue1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCg2KVxyXG57XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAxLjBzO1xyXG59XHJcbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDcpXHJcbntcclxuXHRhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbn1cclxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoOClcclxue1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMS40cztcclxufVxyXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCg5KVxyXG57XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXtcclxuICAgIDAlLDgwJVxyXG4gICAge1xyXG4gICAgXHRjb2xvcjogIzMzMztcclxuICAgIFx0dGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAxMDAlXHJcbiAgICB7XHJcbiAgICBcdGNvbG9yOiAjZmZmO1xyXG4gICAgXHR0ZXh0LXNoYWRvdzogXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCAxMHB4ICNmZmYsXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCAyMHB4ICNmZmYsXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCA0MHB4ICNmZmYsXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCA4MHB4ICNmZmYsXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCAxMjBweCAjZmZmO1xyXG4gICAgXHQgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKi0tLS0tZm9vdGVyLS0tLS0tKi9cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzBiMGMxMDtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjI4MzM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgdHJhbnNpdGlvbjogMC45cztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5zb2NpYWwtbGlua3MgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY2ZmNmMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgaDQ6OmJlZm9yZSB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjI4MzM7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbG9nbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBjb2xvcjogcmdiKDI0NSwgMjQzLCAyMzgpO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYSB7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2NkZDRjE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjBjMTA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG59XHJcbi8qIC0tLS0tLS0tLS1mb290ZXIgZW5kLS0tLS0tLS0tLS0tLS0tLS0gKi8iLCIvKi0tLS0tLS0tLS0tLS0tLU5hdmJhci0tLS0tLS0tKi9cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JnMy5qcGdcIik7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbiNzeW1ib2wge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4jc3ltYm9sIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZGQ0YxO1xuICBjb2xvcjogIzBCMEMxMDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcbn1cblxuaGVhZGVyIG5hdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuaGVhZGVyIG5hdiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaGVhZGVyIG5hdiB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmhlYWRlciBuYXYgdWwgbGkgYS5hY3RpdmUsXG5oZWFkZXIgbmF2IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzBCMEMxMDtcbiAgYmFja2dyb3VuZDogIzY2RkNGMTtcbn1cblxuLm1lbnUtdG9nZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQjBDMTA7XG59XG5cbi5iZy1kYXJrIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxuXG4gIC5tZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBoZWFkZXIgbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoLTUwcHgpO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBoZWFkZXIgbmF2LmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIGhlYWRlciBuYXYgdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGhlYWRlciBuYXYgdWwgbGkgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxufVxuLyotLS0tLS0tLS0tTmF2YmFyIGVuZC0tLS0tLS0tKi9cbi8qLS0tLS0tLS0tLVNMSURFUi0tLS0tLS0tLS0tLSovXG4jc2xpZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3NsaWRlciBmaWd1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDAlO1xuICBtYXJnaW46IDA7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogMzBzIHNsaWRlciBpbmZpbml0ZTtcbn1cblxuI3NsaWRlciBmaWd1cmUgaW1nIHtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVyIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMjAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgbGVmdDogLTEwMCU7XG4gIH1cbiAgNDUlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC0yMDAlO1xuICB9XG4gIDcwJSB7XG4gICAgbGVmdDogLTIwMCU7XG4gIH1cbiAgNzUlIHtcbiAgICBsZWZ0OiAtMzAwJTtcbiAgfVxuICA5NSUge1xuICAgIGxlZnQ6IC0zMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IC00MDAlO1xuICB9XG59XG4jc2xpZGVyIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNzbGlkZXIgcDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyotLS0tLS0tLS0tSEVYQUdPTlMtLS0tLS0tLS0tLSovXG4uY29udGFpbmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDF2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTB2dztcbn1cblxuLm91cl90ZWFtcyB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzY2RkNGMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcbn1cblxuLnNsaWRlX3VwIHtcbiAgYW5pbWF0aW9uOiBoZXhfc2xpZGVfdXAgMnMgZWFzZTtcbn1cblxub2wuZXZlbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5vbC5vZGQge1xuICBtYXJnaW4tdG9wOiAtNC41dnc7XG4gIG1hcmdpbi1ib3R0b206IC00LjV2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGV4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDJ2dyBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDUuODMzMzN2dztcbiAgd2lkdGg6IDd2dztcbiAgaGVpZ2h0OiAxMS45dnc7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDF2dy8wLjV2dztcbn1cblxuLmhleDpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgc2NhbGUoMS4yKTtcbiAgei1pbmRleDogOTtcbn1cblxuLmhleDpiZWZvcmUsXG4uaGV4OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uaGV4OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbn1cblxuLmhleDphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XG59XG5cbi5oZXg6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjZmY2YxO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDE1MCU7XG4gIGxlZnQ6IC0yNSU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHotaW5kZXg6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDR2dztcbiAgdGV4dC1hbGlnbjogYXV0bztcbn1cblxuLmNvbnRlbnQgLmNlbnRyYWxpemVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDF2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudCAuY2VudHJhbGl6ZWQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5oZXg6aG92ZXIgLmNlbnRyYWxpemVkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhleDpob3ZlciBpIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmllZWUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmllZWVfYW5pbWF0ZSB7XG4gIGFuaW1hdGlvbjogU2xpZGVfVXAgMC44MjJzIGxpbmVhcjtcbn1cblxuI2Fib3V0X2llZWUge1xuICBjb2xvcjogIzY2RkNGMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5Aa2V5ZnJhbWVzIFNsaWRlX1VwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGV4X3NsaWRlX3VwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tLS0tLS1DT1VOVEVSLS0tLS0tLS0tLS0tKi9cbi5jb3VudGVyLXNlY3Rpb24ge1xuICBjb2xvcjogYXF1YTtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbiAgYW5pbWF0aW9uOiBTbGlkZV9VcCAwLjgyMnMgbGluZWFyO1xufVxuXG4uaWNvbi1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCBhcXVhO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5pY29uLWJveCAuZmEge1xuICBjb2xvcjogYXF1YTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uY291bnRlciB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGFxdWE7XG59XG5cbi5vdXJfc3RhdGlzdGljcyB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzY2RkNGMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJvcmRlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tLS0tLVBSRUxPQURFUi0tLS0tLS0tLS0tKi9cbi5saWdodF93cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JnMy5qcGdcIik7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmxpZ2h0X3dyYXBwZXIgaDIge1xuICBmb250LXNpemU6IDZlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5saWdodF93cmFwcGVyIGgyIHNwYW4ge1xuICBhbmltYXRpb246IGFuaW1hdGUgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xufVxuXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS40cztcbn1cblxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoOSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlLCA4MCUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgNDBweCAjZmZmLCAwIDAgODBweCAjZmZmLCAwIDAgMTIwcHggI2ZmZjtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tZm9vdGVyLS0tLS0tKi9cbi5mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMGIwYzEwO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3Age1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICMxZjI4MzM7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuc29jaWFsLWxpbmtzIGEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB0cmFuc2l0aW9uOiAwLjlzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuc29jaWFsLWxpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogIzY2ZmNmMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIGg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2NmZjZjE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgaDQ6OmJlZm9yZSB7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMWYyODMzO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3Mge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbG9nbyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBpIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBjb2xvcjogI2Y1ZjNlZTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWFhYWE7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBhIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBhOmhvdmVyIHtcbiAgY29sb3I6ICM2NkZDRjE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWNvbnRhY3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHAge1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2Zvb3RlciAuY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGMxMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwdnc7XG59XG5cbi8qIC0tLS0tLS0tLS1mb290ZXIgZW5kLS0tLS0tLS0tLS0tLS0tLS0gKi8iXX0= */", "body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-image: url(\"/assets/img/bg3.jpg\");\n  overflow-x: auto;\n  background-attachment: fixed;\n}\n#symbol[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  text-decoration: none;\n  color: white;\n  padding: 14px 12px;\n  margin-right: 50px;\n  margin-left: 100px;\n  font-size: 1.2em;\n}\n#symbol[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #66FCF1;\n  color: #0B0C10;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 45px;\n  position: absolute;\n  margin-left: 25px;\n  margin-top: 4px;\n  display: block;\n}\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 0px;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n  z-index: 1;\n  transition: background-color 1s;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  float: right;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 20px;\n  color: #fff;\n  text-decoration: none;\n  display: block;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0B0C10;\n  background: #66FCF1;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  line-height: 50px;\n  font-size: 24px;\n  cursor: pointer;\n  display: none;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #0B0C10;\n}\n.bg-dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 991px) {\n  header[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: calc(100vh-50px);\n    background: #333;\n    top: 50px;\n    left: -100%;\n    transition: 0.5s;\n  }\n\n  header[_ngcontent-%COMP%]   nav.active[_ngcontent-%COMP%] {\n    left: 0;\n    margin-bottom: 100px;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n}\n\n\n#slider[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n#slider[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500%;\n  margin: 0;\n  left: 0;\n  -webkit-animation: 30s slider infinite;\n          animation: 30s slider infinite;\n}\n#slider[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20%;\n  float: left;\n}\n@-webkit-keyframes slider {\n  0% {\n    left: 0;\n  }\n  20% {\n    left: 0;\n  }\n  25% {\n    left: -100%;\n  }\n  45% {\n    left: -100%;\n  }\n  50% {\n    left: -200%;\n  }\n  70% {\n    left: -200%;\n  }\n  75% {\n    left: -300%;\n  }\n  95% {\n    left: -300%;\n  }\n  100% {\n    left: -400%;\n  }\n}\n@keyframes slider {\n  0% {\n    left: 0;\n  }\n  20% {\n    left: 0;\n  }\n  25% {\n    left: -100%;\n  }\n  45% {\n    left: -100%;\n  }\n  50% {\n    left: -200%;\n  }\n  70% {\n    left: -200%;\n  }\n  75% {\n    left: -300%;\n  }\n  95% {\n    left: -300%;\n  }\n  100% {\n    left: -400%;\n  }\n}\n#slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2em;\n  color: white;\n  opacity: 0;\n}\n#slider[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n\n.container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.3;\n  margin: 0 auto;\n  padding: 1vw;\n  text-align: center;\n  width: 90vw;\n}\n.our_teams[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #66FCF1;\n  text-decoration: underline;\n  text-underline-position: under;\n}\n.slide_up[_ngcontent-%COMP%] {\n  -webkit-animation: hex_slide_up 2s ease;\n          animation: hex_slide_up 2s ease;\n}\nol.even[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\nol.odd[_ngcontent-%COMP%] {\n  margin-top: -4.5vw;\n  margin-bottom: -4.5vw;\n  position: relative;\n}\n.hex[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 2vw auto;\n  margin-right: 5.83333vw;\n  width: 7vw;\n  height: 11.9vw;\n  background: #fff;\n  transform: rotate(-90deg);\n  display: inline-block;\n  text-align: left;\n  transition: all 150ms ease-in-out;\n  opacity: 0.4;\n  border-radius: 1vw/0.5vw;\n}\n.hex[_ngcontent-%COMP%]:hover {\n  transform: rotate(-90deg) scale(1.2);\n  z-index: 9;\n}\n.hex[_ngcontent-%COMP%]:before, .hex[_ngcontent-%COMP%]:after {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  background: inherit;\n  content: \"\";\n}\n.hex[_ngcontent-%COMP%]:before {\n  transform: rotate(60deg);\n}\n.hex[_ngcontent-%COMP%]:after {\n  transform: rotate(-60deg);\n}\n.hex[_ngcontent-%COMP%]:hover {\n  background: #66fcf1;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2), -2px -2px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  opacity: 1;\n}\n.content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 50%;\n  width: 150%;\n  left: -25%;\n  top: 25%;\n  transform: rotate(90deg);\n  z-index: 400;\n  text-align: center;\n  font-size: 4vw;\n  text-align: auto;\n}\n.content[_ngcontent-%COMP%]   .centralizer[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 1vw;\n  position: relative;\n  width: 100%;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   .centralized[_ngcontent-%COMP%] {\n  height: auto;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  opacity: 0;\n}\n.hex[_ngcontent-%COMP%]:hover   .centralized[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.hex[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.ieee[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-family: sans-serif;\n  font-size: 1em;\n  color: white;\n}\n.ieee_animate[_ngcontent-%COMP%] {\n  -webkit-animation: Slide_Up 0.822s linear;\n          animation: Slide_Up 0.822s linear;\n}\n#about_ieee[_ngcontent-%COMP%] {\n  color: #66FCF1;\n  text-decoration: underline;\n  text-underline-position: under;\n  padding-bottom: 10px;\n  font-family: monospace;\n  font-size: 2em;\n}\n@-webkit-keyframes Slide_Up {\n  0% {\n    transform: translateY(70px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@keyframes Slide_Up {\n  0% {\n    transform: translateY(70px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes hex_slide_up {\n  0% {\n    transform: translateY(70px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n@keyframes hex_slide_up {\n  0% {\n    transform: translateY(70px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n\n\n.counter-section[_ngcontent-%COMP%] {\n  color: aqua;\n  margin: 10% auto;\n  -webkit-animation: Slide_Up 0.822s linear;\n          animation: Slide_Up 0.822s linear;\n}\n.icon-box[_ngcontent-%COMP%] {\n  border: 1px solid aqua;\n  height: 100px;\n  width: 100px;\n  margin: 20px auto;\n  transform: rotate(45deg);\n}\n.icon-box[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: aqua;\n  font-size: 40px;\n  margin-top: 25px;\n  margin-left: 0px;\n  align-items: center;\n  transform: rotate(-45deg);\n}\n.counter[_ngcontent-%COMP%] {\n  font-size: 27px;\n}\n.border[_ngcontent-%COMP%] {\n  border-right: 1px solid aqua;\n}\n.our_statistics[_ngcontent-%COMP%] {\n  font-size: 2em;\n  color: #66FCF1;\n  text-decoration: underline;\n  text-underline-position: under;\n}\n@media screen and (max-width: 768px) {\n  .border[_ngcontent-%COMP%] {\n    border-right: transparent;\n  }\n}\n\n\n.light_wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: url(\"/assets/img/bg3.jpg\");\n  z-index: 999999;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 6em;\n  color: #333;\n  font-weight: 500;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-animation: animate 2s linear infinite;\n          animation: animate 2s linear infinite;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(8) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n}\n.light_wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(9) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n}\n@-webkit-keyframes animate {\n  0%, 80% {\n    color: #333;\n    text-shadow: none;\n  }\n  100% {\n    color: #fff;\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #fff;\n  }\n}\n@keyframes animate {\n  0%, 80% {\n    color: #333;\n    text-shadow: none;\n  }\n  100% {\n    color: #fff;\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff, 0 0 80px #fff, 0 0 120px #fff;\n  }\n}\n\n\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n#footer[_ngcontent-%COMP%] {\n  background: #0b0c10;\n  padding: 0 0 10px 0;\n  color: #eee;\n  font-size: 14px;\n  position: relative;\n  width: 100%;\n  bottom: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  background: #1f2833;\n  padding: 10px 0 0 0;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: contents;\n  transition: 0.9s;\n  color: #fff;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #66fcf1;\n  text-decoration: none;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #66fcf1;\n  text-transform: uppercase;\n  position: relative;\n  padding-bottom: 12px;\n  text-decoration: underline;\n  text-underline-position: under;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  right: 0;\n  background: #1f2833;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  color: #f5f3ee;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #aaaaaa;\n  padding: 10px 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #eee;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #66FCF1;\n  text-decoration: none;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  background-color: #0b0c10;\n}\n.container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.3;\n  margin: 0 auto;\n  padding: 1vw;\n  text-align: center;\n  width: 90vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx2aW5vZFxcRGVza3RvcFxcSUVFRVZFU0lUMjBcXGFuZ3VsYXItaWVlZXZlc2l0MjAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFBO0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKO0FERUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtBQ0NKO0FEQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNFSjtBREFBO0VBQ0ksZ0JBQUE7QUNHSjtBRERBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNJSjtBREZBOztFQUVJLGNBQUE7RUFDQSxtQkFBQTtBQ0tKO0FERkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDS0o7QURGQTtFQUNJLHlCQUFBO0FDS0o7QUREQTtFQUNJLFlBQUE7QUNJSjtBRERBO0VBRUk7SUFDSSxlQUFBO0VDR047O0VEREU7SUFDSSxjQUFBO0VDSU47O0VERkU7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O0FEMkJBO0VBQ0ksY0FBQTtBQ3hCSjtBRDJCQTtFQUNJLFdBQUE7QUN4Qko7QUQyQkE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUN4Qko7QUQyQkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUN4Qko7QUQyQkE7RUFDSSxpQkFBQTtBQ3hCSjtBRDJCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ3hCSjtBRDJCQTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ3hCSjtBRDBCQSwwQ0FBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tTmF2YmFyLS0tLS0tLS0qL1xyXG5ib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYmczLmpwZycpO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbiNzeW1ib2x7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuI3N5bWJvbCBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2RkNGMTtcclxuICAgIGNvbG9yOiAjMEIwQzEwO1xyXG59XHJcblxyXG4ubG9nb3sgICAgICAgICAgICAgICAgICBcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyeyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2eyAgICAgICAgICAgICAgICAgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuaGVhZGVyIG5hdiB1bHsgICAgICAgICAgICAgICBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGl7ICAgICAgICAgICAgXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGkgYSB7ICAgICAgICAgXHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGkgYS5hY3RpdmUsICAgICBcclxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6IzBCMEMxMDtcclxuICAgIGJhY2tncm91bmQ6ICM2NkZDRjE7XHJcbn1cclxuXHJcbi5tZW51LXRvZ2dsZXsgICAgICAgICAgICAgICAgXHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iZy1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjBDMTA7XHJcbiAgICBcclxufVxyXG5cclxuLmJnLWRhcmsgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSAgICAgICAgICAgXHJcbntcclxuICAgIGhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGV7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXZ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoLTUwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgdG9wOjUwcHg7XHJcbiAgICAgICAgbGVmdDotMTAwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIG5hdi5hY3RpdmV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXYgdWx7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgbmF2IHVsIGxpIGF7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIH1cclxufVxyXG4vKi0tLS0tLS0tLS1OYXZiYXIgZW5kLS0tLS0tLS0qL1xyXG5cclxuLyotLS0tLS0tLS0tU0xJREVSLS0tLS0tLS0tLS0tKi9cclxuI3NsaWRlcntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4jc2xpZGVyIGZpZ3VyZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYW5pbWF0aW9uOiAzMHMgc2xpZGVyIGluZmluaXRlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNzbGlkZXIgZmlndXJlIGltZ3tcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZXJ7XHJcbiAgICAwJXtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgMjAle1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAyNSV7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICB9XHJcbiAgICA0NSV7XHJcbiAgICAgICAgbGVmdDogLTEwMCU7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgbGVmdDogLTIwMCU7XHJcbiAgICB9XHJcbiAgICA3MCV7XHJcbiAgICAgICAgbGVmdDogLTIwMCU7ICAgXHJcbiAgICB9XHJcbiAgICA3NSV7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICB9XHJcbiAgICA5NSV7XHJcbiAgICAgICAgbGVmdDogLTMwMCU7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGxlZnQ6IC00MDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jc2xpZGVyIHB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbiNzbGlkZXIgcDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8qLS0tLS0tLS0tLUhFWEFHT05TLS0tLS0tLS0tLS0qL1xyXG4uY29udGFpbmVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTB2dztcclxufVxyXG5cclxuLm91cl90ZWFtc3tcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICM2NkZDRjE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcclxufVxyXG5cclxuLnNsaWRlX3Vwe1xyXG4gICAgYW5pbWF0aW9uOiBoZXhfc2xpZGVfdXAgMnMgZWFzZTtcclxufVxyXG5cclxub2wuZXZlbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbm9sLm9kZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNC41dnc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNC41dnc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZXgge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAydncgYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogNS44MzMzM3Z3O1xyXG4gICAgd2lkdGg6IDd2dztcclxuICAgIGhlaWdodDogMTEuOXZ3O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgb3BhY2l0eTogLjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxdncvLjV2dztcclxufVxyXG5cclxuLmhleDpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDEuMik7XHJcbiAgICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG4uaGV4OmJlZm9yZSxcclxuLmhleDphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgY29udGVudDogJyc7XHJcbn1cclxuXHJcbi5oZXg6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxufVxyXG5cclxuLmhleDphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjBkZWcpO1xyXG59XHJcblxyXG4uaGV4OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM2NmZjZjE7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGxlZnQ6IC0yNSU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIHotaW5kZXg6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNHZ3O1xyXG4gICAgdGV4dC1hbGlnbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQgLmNlbnRyYWxpemVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IC5jZW50cmFsaXplZCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uaGV4OmhvdmVyIC5jZW50cmFsaXplZCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaGV4OmhvdmVyIGkge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uaWVlZXtcclxuICAgIFxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjFlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgXHJcbn1cclxuXHJcbi5pZWVlX2FuaW1hdGV7XHJcbiAgICAgYW5pbWF0aW9uOiBTbGlkZV9VcCAwLjgyMnMgbGluZWFyO1xyXG59XHJcblxyXG4jYWJvdXRfaWVlZVxyXG57XHJcbiAgICBjb2xvcjogIzY2RkNGMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IHVuZGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTptb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBTbGlkZV9VcHtcclxuICAgIDAlXHJcbiAgICB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJVxyXG4gICAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBoZXhfc2xpZGVfdXB7XHJcbiAgICAwJVxyXG4gICAge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcclxuICAgIH1cclxuICAgIDEwMCVcclxuICAgIHtcclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKi0tLS0tLS0tLS1DT1VOVEVSLS0tLS0tLS0tLS0tKi9cclxuLmNvdW50ZXItc2VjdGlvbntcclxuXHRjb2xvcjogYXF1YTtcclxuXHRtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiAgU2xpZGVfVXAgMC44MjJzIGxpbmVhcjtcclxufVxyXG5cclxuLmljb24tYm94e1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGFxdWE7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRtYXJnaW46IDIwcHggYXV0bztcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5pY29uLWJveCAuZmF7XHJcblx0Y29sb3I6YXF1YTtcclxuXHRmb250LXNpemU6IDQwcHg7XHJcblx0bWFyZ2luLXRvcDogMjVweDtcclxuXHRtYXJnaW4tbGVmdDogMHB4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmNvdW50ZXJ7XHJcblx0Zm9udC1zaXplOiAyN3B4O1xyXG59XHJcblxyXG4uYm9yZGVye1xyXG5cdFx0Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCBhcXVhO1xyXG59XHJcblxyXG4ub3VyX3N0YXRpc3RpY3N7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjNjZGQ0YxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KVxyXG57XHJcbiAgICAuYm9yZGVye1xyXG4gICAgICAgICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8qLS0tLS0tLS0tUFJFTE9BREVSLS0tLS0tLS0tLS0qL1xyXG4ubGlnaHRfd3JhcHBlcntcclxucG9zaXRpb246IGZpeGVkO1xyXG50b3A6IDA7XHJcbmxlZnQ6IDA7XHJcbnJpZ2h0OiAwO1xyXG5ib3R0b206IDA7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JnMy5qcGdcIik7XHJcbnotaW5kZXg6IDk5OTk5OTtcclxufVxyXG5cclxuLmxpZ2h0X3dyYXBwZXIgaDJ7XHJcbiAgICBmb250LXNpemU6IDZlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFue1xyXG5cdGFuaW1hdGlvbjogYW5pbWF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcblxyXG59XHJcblxyXG5cclxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoMSlcclxue1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoMilcclxue1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxufVxyXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCgzKVxyXG57XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDQpXHJcbntcclxuXHRhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoNSlcclxue1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCg2KVxyXG57XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAxLjBzO1xyXG59XHJcbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDcpXHJcbntcclxuXHRhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcbn1cclxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoOClcclxue1xyXG5cdGFuaW1hdGlvbi1kZWxheTogMS40cztcclxufVxyXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCg5KVxyXG57XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAxLjhzO1xyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZXtcclxuICAgIDAlLDgwJVxyXG4gICAge1xyXG4gICAgXHRjb2xvcjogIzMzMztcclxuICAgIFx0dGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAxMDAlXHJcbiAgICB7XHJcbiAgICBcdGNvbG9yOiAjZmZmO1xyXG4gICAgXHR0ZXh0LXNoYWRvdzogXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCAxMHB4ICNmZmYsXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCAyMHB4ICNmZmYsXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCA0MHB4ICNmZmYsXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCA4MHB4ICNmZmYsXHJcbiAgICBcdCAgICAgICAgICAgIDAgMCAxMjBweCAjZmZmO1xyXG4gICAgXHQgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKi0tLS0tZm9vdGVyLS0tLS0tKi9cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzBiMGMxMDtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjI4MzM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgdHJhbnNpdGlvbjogMC45cztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5zb2NpYWwtbGlua3MgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY2ZmNmMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgaDQ6OmJlZm9yZSB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjI4MzM7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbG9nbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBjb2xvcjogcmdiKDI0NSwgMjQzLCAyMzgpO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYSB7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2NkZDRjE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjBjMTA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG59XHJcbi8qIC0tLS0tLS0tLS1mb290ZXIgZW5kLS0tLS0tLS0tLS0tLS0tLS0gKi8iLCIvKi0tLS0tLS0tLS0tLS0tLU5hdmJhci0tLS0tLS0tKi9cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JnMy5qcGdcIik7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbiNzeW1ib2wge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4jc3ltYm9sIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZGQ0YxO1xuICBjb2xvcjogIzBCMEMxMDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcbn1cblxuaGVhZGVyIG5hdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuaGVhZGVyIG5hdiB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaGVhZGVyIG5hdiB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmhlYWRlciBuYXYgdWwgbGkgYS5hY3RpdmUsXG5oZWFkZXIgbmF2IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzBCMEMxMDtcbiAgYmFja2dyb3VuZDogIzY2RkNGMTtcbn1cblxuLm1lbnUtdG9nZ2xlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZsb2F0OiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwQjBDMTA7XG59XG5cbi5iZy1kYXJrIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxuXG4gIC5tZW51LXRvZ2dsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBoZWFkZXIgbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoLTUwcHgpO1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cblxuICBoZWFkZXIgbmF2LmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIGhlYWRlciBuYXYgdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGhlYWRlciBuYXYgdWwgbGkgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxufVxuLyotLS0tLS0tLS0tTmF2YmFyIGVuZC0tLS0tLS0tKi9cbi8qLS0tLS0tLS0tLVNMSURFUi0tLS0tLS0tLS0tLSovXG4jc2xpZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3NsaWRlciBmaWd1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDAlO1xuICBtYXJnaW46IDA7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogMzBzIHNsaWRlciBpbmZpbml0ZTtcbn1cblxuI3NsaWRlciBmaWd1cmUgaW1nIHtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVyIHtcbiAgMCUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgMjAlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIDI1JSB7XG4gICAgbGVmdDogLTEwMCU7XG4gIH1cbiAgNDUlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IC0yMDAlO1xuICB9XG4gIDcwJSB7XG4gICAgbGVmdDogLTIwMCU7XG4gIH1cbiAgNzUlIHtcbiAgICBsZWZ0OiAtMzAwJTtcbiAgfVxuICA5NSUge1xuICAgIGxlZnQ6IC0zMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIGxlZnQ6IC00MDAlO1xuICB9XG59XG4jc2xpZGVyIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNzbGlkZXIgcDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLyotLS0tLS0tLS0tSEVYQUdPTlMtLS0tLS0tLS0tLSovXG4uY29udGFpbmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDF2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogOTB2dztcbn1cblxuLm91cl90ZWFtcyB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzY2RkNGMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcbn1cblxuLnNsaWRlX3VwIHtcbiAgYW5pbWF0aW9uOiBoZXhfc2xpZGVfdXAgMnMgZWFzZTtcbn1cblxub2wuZXZlbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5vbC5vZGQge1xuICBtYXJnaW4tdG9wOiAtNC41dnc7XG4gIG1hcmdpbi1ib3R0b206IC00LjV2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGV4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDJ2dyBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDUuODMzMzN2dztcbiAgd2lkdGg6IDd2dztcbiAgaGVpZ2h0OiAxMS45dnc7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDF2dy8wLjV2dztcbn1cblxuLmhleDpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZykgc2NhbGUoMS4yKTtcbiAgei1pbmRleDogOTtcbn1cblxuLmhleDpiZWZvcmUsXG4uaGV4OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uaGV4OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbn1cblxuLmhleDphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XG59XG5cbi5oZXg6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjZmY2YxO1xuICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIC0ycHggLTJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDE1MCU7XG4gIGxlZnQ6IC0yNSU7XG4gIHRvcDogMjUlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHotaW5kZXg6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDR2dztcbiAgdGV4dC1hbGlnbjogYXV0bztcbn1cblxuLmNvbnRlbnQgLmNlbnRyYWxpemVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDF2dztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudCAuY2VudHJhbGl6ZWQge1xuICBoZWlnaHQ6IGF1dG87XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5oZXg6aG92ZXIgLmNlbnRyYWxpemVkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhleDpob3ZlciBpIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmllZWUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmllZWVfYW5pbWF0ZSB7XG4gIGFuaW1hdGlvbjogU2xpZGVfVXAgMC44MjJzIGxpbmVhcjtcbn1cblxuI2Fib3V0X2llZWUge1xuICBjb2xvcjogIzY2RkNGMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5Aa2V5ZnJhbWVzIFNsaWRlX1VwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGV4X3NsaWRlX3VwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tLS0tLS1DT1VOVEVSLS0tLS0tLS0tLS0tKi9cbi5jb3VudGVyLXNlY3Rpb24ge1xuICBjb2xvcjogYXF1YTtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbiAgYW5pbWF0aW9uOiBTbGlkZV9VcCAwLjgyMnMgbGluZWFyO1xufVxuXG4uaWNvbi1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCBhcXVhO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5pY29uLWJveCAuZmEge1xuICBjb2xvcjogYXF1YTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uY291bnRlciB7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGFxdWE7XG59XG5cbi5vdXJfc3RhdGlzdGljcyB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzY2RkNGMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uOiB1bmRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJvcmRlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tLS0tLVBSRUxPQURFUi0tLS0tLS0tLS0tKi9cbi5saWdodF93cmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2JnMy5qcGdcIik7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmxpZ2h0X3dyYXBwZXIgaDIge1xuICBmb250LXNpemU6IDZlbTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5saWdodF93cmFwcGVyIGgyIHNwYW4ge1xuICBhbmltYXRpb246IGFuaW1hdGUgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG5cbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufVxuXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5saWdodF93cmFwcGVyIGgyIHNwYW46bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xufVxuXG4ubGlnaHRfd3JhcHBlciBoMiBzcGFuOm50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMS40cztcbn1cblxuLmxpZ2h0X3dyYXBwZXIgaDIgc3BhbjpudGgtY2hpbGQoOSkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuOHM7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlLCA4MCUge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDEwMCUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgNDBweCAjZmZmLCAwIDAgODBweCAjZmZmLCAwIDAgMTIwcHggI2ZmZjtcbiAgfVxufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4vKi0tLS0tZm9vdGVyLS0tLS0tKi9cbi5mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMGIwYzEwO1xuICBwYWRkaW5nOiAwIDAgMTBweCAwO1xuICBjb2xvcjogI2VlZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3Age1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6ICMxZjI4MzM7XG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuc29jaWFsLWxpbmtzIGEge1xuICBmb250LXNpemU6IDMycHg7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB0cmFuc2l0aW9uOiAwLjlzO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuc29jaWFsLWxpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogIzY2ZmNmMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIGg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2NmZjZjE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgaDQ6OmJlZm9yZSB7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMWYyODMzO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3Mge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbG9nbyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBpIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBjb2xvcjogI2Y1ZjNlZTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhYWFhYWE7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBhIHtcbiAgY29sb3I6ICNlZWU7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBhOmhvdmVyIHtcbiAgY29sb3I6ICM2NkZDRjE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWNvbnRhY3Qge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHAge1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2Zvb3RlciAuY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMGMxMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDkwdnc7XG59XG5cbi8qIC0tLS0tLS0tLS1mb290ZXIgZW5kLS0tLS0tLS0tLS0tLS0tLS0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./events/events.component */
    "./src/app/events/events.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _council_council_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./council/council.component */
    "./src/app/council/council.component.ts");
    /* harmony import */


    var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sponsors/sponsors.component */
    "./src/app/sponsors/sponsors.component.ts");
    /* harmony import */


    var _ieeetv_ieeetv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ieeetv/ieeetv.component */
    "./src/app/ieeetv/ieeetv.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_5__["ContactusComponent"], _council_council_component__WEBPACK_IMPORTED_MODULE_6__["CouncilComponent"], _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_7__["SponsorsComponent"], _ieeetv_ieeetv_component__WEBPACK_IMPORTED_MODULE_8__["IEEETvComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_5__["ContactusComponent"], _council_council_component__WEBPACK_IMPORTED_MODULE_6__["CouncilComponent"], _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_7__["SponsorsComponent"], _ieeetv_ieeetv_component__WEBPACK_IMPORTED_MODULE_8__["IEEETvComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contactus/contactus.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/contactus/contactus.component.ts ***!
    \**************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactusComponent = /*#__PURE__*/function () {
      function ContactusComponent() {
        _classCallCheck(this, ContactusComponent);
      }

      _createClass(ContactusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactusComponent;
    }();

    ContactusComponent.ɵfac = function ContactusComponent_Factory(t) {
      return new (t || ContactusComponent)();
    };

    ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactusComponent,
      selectors: [["app-contactus"]],
      decls: 111,
      vars: 0,
      consts: [["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "description", "content", "An interactive getting started guide for Brackets."], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "row", 2, "margin-bottom", "50px"], ["id", "navbar", 1, ""], ["src", "logo1.png", 1, "img-fluid", "logo"], ["href", "#", "id", "symbol"], ["href", "#", 1, "active"], ["href", "#"], [1, "menu-toggle"], ["aria-hidden", "true", 1, "fa", "fa-bars", "icon"], [1, "container-contact100"], ["id", "google_map", 1, "contact100-map"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15085.631721665712!2d72.8892135!3d19.045794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society's%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1584372183733!5m2!1sen!2sin", "width", "100%", "height", "761vw", ";", "", "allowfullscreen", "", 2, "border", "0"], [";", "", 1, "wrap-contact100"], [1, "contact100-form-title"], [1, "contact100-form-title-1"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["src", "https://docs.google.com/forms/d/e/1FAIpQLSedVlP-QAL_2cvUJNJNMzuI65kWs2w1l55wC3FBwge0ThpXJA/viewform?embedded=true", "width", "640", "height", "545", "frameborder", "0", "marginheight", "0", "marginwidth", "0"], [1, "row"], ["id", "footer"], [1, "footer-top"], [1, "container"], [1, "col-md-2", "col-md-offset-1", "col-xs-12", "footer-logo"], ["src", "footer_logo.png", "alt", "IEEE LOGO"], [1, "col-md-2", "col-md-offset-2", "col-xs-12", "footer-links"], [1, "ion-ios-arrow-right"], ["href", "home.html"], ["href", "events.html"], ["href", "our_council.html"], ["href", "ieee_tv.html"], ["href", "sponsors.html"], ["href", "contact_us.html"], [1, "col-md-4", "col-md-offset-1", "col-xs-12", "footer-contact"], [1, "social-links"], ["href", "#", 1, "instagram"], [1, "fa", "fa-instagram"], [1, "copyright"]],
      template: function ContactusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contactus works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contact-Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "header", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "IEEE VESIT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "OUR COUNCIL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "IEEE TV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SPONSORS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "CONTACT US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "iframe", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "iframe", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Loading\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "footer", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Useful Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Our Council");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "IEEE TV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sponsors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Vivekanand Education Society's Institute of Technology,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Hashu Adwani Memorial Complex,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Collector's Colony");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Chembur, Mumbai - 400074.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Phone: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "022-61532532 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Email: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "ieee.vesit@ves.ac.in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Follow Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " \xA9 2019-20 Copyright: IEEE-VESIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-image: url(\"/assets/img/bg3.jpg\");\n  overflow-x: auto;\n  background-attachment: fixed;\n}\n#symbol[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  text-decoration: none;\n  color: white;\n  padding: 14px 12px;\n  margin-right: 50px;\n  margin-left: 100px;\n  font-size: 1.2em;\n}\n#symbol[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #66FCF1;\n  color: #0B0C10;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 45px;\n  position: absolute;\n  margin-left: 25px;\n  margin-top: 4px;\n  display: block;\n}\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 0px;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n  z-index: 1000;\n  transition: background-color 1s;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  float: right;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 20px;\n  color: #fff;\n  text-decoration: none;\n  display: block;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0B0C10;\n  background: #66FCF1;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  line-height: 50px;\n  font-size: 24px;\n  cursor: pointer;\n  display: none;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #0B0C10;\n}\n.bg-dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 991px) {\n  header[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: calc(100vh-50px);\n    background: #333;\n    top: 50px;\n    left: -100%;\n    transition: 0.5s;\n  }\n\n  header[_ngcontent-%COMP%]   nav.active[_ngcontent-%COMP%] {\n    left: 0;\n    margin-bottom: 100px;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n}\n\n\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n#footer[_ngcontent-%COMP%] {\n  background: #0b0c10;\n  padding: 0 0 10px 0;\n  color: #eee;\n  font-size: 14px;\n  position: relative;\n  width: 100%;\n  bottom: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  background: #1f2833;\n  padding: 10px 0 0 0;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: contents;\n  transition: 0.9s;\n  color: #fff;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #66fcf1;\n  text-decoration: none;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #66fcf1;\n  text-transform: uppercase;\n  position: relative;\n  padding-bottom: 12px;\n  text-decoration: underline;\n  text-underline-position: under;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  right: 0;\n  background: #1f2833;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  color: #f5f3ee;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #aaaaaa;\n  padding: 10px 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #eee;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #66FCF1;\n  text-decoration: none;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  background-color: #0b0c10;\n}\n.container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.3;\n  margin: 0 auto;\n  padding: 1vw;\n  text-align: center;\n  width: 90vw;\n}\n\n\n.container-contact100[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: transparent;\n  position: relative;\n  z-index: 1;\n  padding-top: 0px;\n}\n.contact100-map[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding-top: 0px;\n}\n.wrap-contact100[_ngcontent-%COMP%] {\n  width: 670px;\n  background: #1f2833;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  margin: auto;\n  opacity: 0.8;\n}\n\n.contact100-form-title[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  background-color: #66fcf1;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.contact100-form-title-1[_ngcontent-%COMP%] {\n  font-family: Dosis;\n  font-size: 50px;\n  color: black;\n  line-height: 1.2;\n  text-align: center;\n  padding-bottom: 7px;\n  opacity: 1;\n}\n.contact100-form-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.contact100-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 43px 88px 57px 190px;\n}\n\n@media (max-width: 576px) {\n  .contact100-form[_ngcontent-%COMP%] {\n    padding: 43px 15px 57px 117px;\n  }\n}\n@media (max-width: 480px) {\n  .contact100-form[_ngcontent-%COMP%] {\n    padding: 43px 15px 57px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL0M6XFxVc2Vyc1xcdmlub2RcXERlc2t0b3BcXElFRUVWRVNJVDIwXFxhbmd1bGFyLWllZWV2ZXNpdDIwL3NyY1xcYXBwXFxjb250YWN0dXNcXGNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUNBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7QUNDSjtBRENBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDRUo7QURBQTtFQUNJLGdCQUFBO0FDR0o7QUREQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDSUo7QURGQTs7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0tKO0FERkE7RUFDSSx5QkFBQTtBQ0tKO0FEREE7RUFDSSxZQUFBO0FDSUo7QUREQTtFQUVJ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Ijoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS1OYXZiYXItLS0tLS0tLSovXHJcbmJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnL2Fzc2V0cy9pbWcvYmczLmpwZycpO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbiNzeW1ib2x7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuI3N5bWJvbCBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2RkNGMTtcclxuICAgIGNvbG9yOiAjMEIwQzEwO1xyXG59XHJcblxyXG4ubG9nb3sgICAgICAgICAgICAgICAgICBcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyeyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2eyAgICAgICAgICAgICAgICAgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuaGVhZGVyIG5hdiB1bHsgICAgICAgICAgICAgICBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGl7ICAgICAgICAgICAgXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGkgYSB7ICAgICAgICAgXHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGkgYS5hY3RpdmUsICAgICBcclxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6IzBCMEMxMDtcclxuICAgIGJhY2tncm91bmQ6ICM2NkZDRjE7XHJcbn1cclxuXHJcbi5tZW51LXRvZ2dsZXsgICAgICAgICAgICAgICAgXHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iZy1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjBDMTA7XHJcbiAgICBcclxufVxyXG5cclxuLmJnLWRhcmsgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSAgICAgICAgICAgXHJcbntcclxuICAgIGhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGV7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXZ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoLTUwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgdG9wOjUwcHg7XHJcbiAgICAgICAgbGVmdDotMTAwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIG5hdi5hY3RpdmV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXYgdWx7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgbmF2IHVsIGxpIGF7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIH1cclxufVxyXG4vKi0tLS0tLS0tLS1OYXZiYXIgZW5kLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKi0tLS0tZm9vdGVyLS0tLS0tKi9cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzBiMGMxMDtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjI4MzM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgdHJhbnNpdGlvbjogMC45cztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5zb2NpYWwtbGlua3MgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY2ZmNmMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgaDQ6OmJlZm9yZSB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjI4MzM7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbG9nbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBjb2xvcjogcmdiKDI0NSwgMjQzLCAyMzgpO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYSB7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2NkZDRjE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjBjMTA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG59XHJcbi8qIC0tLS0tLS0tLS1mb290ZXIgZW5kLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5bIENvbnRhY3QgXSovXHJcblxyXG4uY29udGFpbmVyLWNvbnRhY3QxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmNvbnRhY3QxMDAtbWFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLndyYXAtY29udGFjdDEwMCB7XHJcbiAgICB3aWR0aDogNjcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWYyODMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5bIFRpdGxlIGZvcm0gXSovXHJcblxyXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2ZmNmMTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0MTAwLWZvcm0tdGl0bGUtMSB7XHJcbiAgICBmb250LWZhbWlseTogRG9zaXM7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5bIEZvcm0gXSovXHJcblxyXG4uY29udGFjdDEwMC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDQzcHggODhweCA1N3B4IDE5MHB4O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyBSZXNwb25zaXZlIF0qL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY29udGFjdDEwMC1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiA0M3B4IDE1cHggNTdweCAxMTdweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGFjdDEwMC1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiA0M3B4IDE1cHggNTdweCAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuWyBDb250YWN0IC0gRU5EIF0qLyIsIi8qLS0tLS0tLS0tLS0tLS0tTmF2YmFyLS0tLS0tLS0qL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYmczLmpwZ1wiKTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuI3N5bWJvbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbiNzeW1ib2wgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NkZDRjE7XG4gIGNvbG9yOiAjMEIwQzEwO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xufVxuXG5oZWFkZXIgbmF2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5oZWFkZXIgbmF2IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5oZWFkZXIgbmF2IHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaGVhZGVyIG5hdiB1bCBsaSBhLmFjdGl2ZSxcbmhlYWRlciBuYXYgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMEIwQzEwO1xuICBiYWNrZ3JvdW5kOiAjNjZGQ0YxO1xufVxuXG4ubWVudS10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCMEMxMDtcbn1cblxuLmJnLWRhcmsgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5cbiAgLm1lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGhlYWRlciBuYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgtNTBweCk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGhlYWRlciBuYXYuYWN0aXZlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICB9XG5cbiAgaGVhZGVyIG5hdiB1bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG59XG4vKi0tLS0tLS0tLS1OYXZiYXIgZW5kLS0tLS0tLS0qL1xuLyotLS0tLWZvb3Rlci0tLS0tLSovXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzBiMGMxMDtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWYyODMzO1xuICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgdHJhbnNpdGlvbjogMC45cztcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhOmhvdmVyIHtcbiAgY29sb3I6ICM2NmZjZjE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjZmY2YxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IHVuZGVyO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIGg0OjpiZWZvcmUge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzFmMjgzMztcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxvZ28ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY29sb3I6ICNmNWYzZWU7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhYWFhO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYSB7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjZGQ0YxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItY29udGFjdCBwIHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNmb290ZXIgLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjBjMTA7XG59XG5cbi5jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MHZ3O1xufVxuXG4vKiAtLS0tLS0tLS0tZm9vdGVyIGVuZC0tLS0tLS0tLS0tLS0tLS0tICovXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBDb250YWN0IF0qL1xuLmNvbnRhaW5lci1jb250YWN0MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5jb250YWN0MTAwLW1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLndyYXAtY29udGFjdDEwMCB7XG4gIHdpZHRoOiA2NzBweDtcbiAgYmFja2dyb3VuZDogIzFmMjgzMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgVGl0bGUgZm9ybSBdKi9cbi5jb250YWN0MTAwLWZvcm0tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2ZmNmMTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlLTEge1xuICBmb250LWZhbWlseTogRG9zaXM7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250YWN0MTAwLWZvcm0tdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIEZvcm0gXSovXG4uY29udGFjdDEwMC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDQzcHggODhweCA1N3B4IDE5MHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBSZXNwb25zaXZlIF0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWN0MTAwLWZvcm0ge1xuICAgIHBhZGRpbmc6IDQzcHggMTVweCA1N3B4IDExN3B4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRhY3QxMDAtZm9ybSB7XG4gICAgcGFkZGluZzogNDNweCAxNXB4IDU3cHggMTVweDtcbiAgfVxufVxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgQ29udGFjdCAtIEVORCBdKi8iXX0= */", "body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  background-image: url(\"/assets/img/bg3.jpg\");\n  overflow-x: auto;\n  background-attachment: fixed;\n}\n#symbol[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  text-decoration: none;\n  color: white;\n  padding: 14px 12px;\n  margin-right: 50px;\n  margin-left: 100px;\n  font-size: 1.2em;\n}\n#symbol[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #66FCF1;\n  color: #0B0C10;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 45px;\n  position: absolute;\n  margin-left: 25px;\n  margin-top: 4px;\n  display: block;\n}\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 0px;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n  z-index: 1000;\n  transition: background-color 1s;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  float: right;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 20px;\n  color: #fff;\n  text-decoration: none;\n  display: block;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0B0C10;\n  background: #66FCF1;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  color: #fff;\n  float: right;\n  line-height: 50px;\n  font-size: 24px;\n  cursor: pointer;\n  display: none;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #0B0C10;\n}\n.bg-dark[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 991px) {\n  header[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    height: calc(100vh-50px);\n    background: #333;\n    top: 50px;\n    left: -100%;\n    transition: 0.5s;\n  }\n\n  header[_ngcontent-%COMP%]   nav.active[_ngcontent-%COMP%] {\n    left: 0;\n    margin-bottom: 100px;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n}\n\n\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n#footer[_ngcontent-%COMP%] {\n  background: #0b0c10;\n  padding: 0 0 10px 0;\n  color: #eee;\n  font-size: 14px;\n  position: relative;\n  width: 100%;\n  bottom: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  background: #1f2833;\n  padding: 10px 0 0 0;\n  position: relative;\n  bottom: 0;\n  width: 100%;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 32px;\n  display: contents;\n  transition: 0.9s;\n  color: #fff;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #66fcf1;\n  text-decoration: none;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #66fcf1;\n  text-transform: uppercase;\n  position: relative;\n  padding-bottom: 12px;\n  text-decoration: underline;\n  text-underline-position: under;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::before {\n  right: 0;\n  background: #1f2833;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  color: #f5f3ee;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #aaaaaa;\n  padding: 10px 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #eee;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #66FCF1;\n  text-decoration: none;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 16px;\n}\n#footer[_ngcontent-%COMP%]   .footer-top[_ngcontent-%COMP%]   .footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n#footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 10px;\n  background-color: #0b0c10;\n}\n.container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.3;\n  margin: 0 auto;\n  padding: 1vw;\n  text-align: center;\n  width: 90vw;\n}\n\n\n.container-contact100[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  background: transparent;\n  position: relative;\n  z-index: 1;\n  padding-top: 0px;\n}\n.contact100-map[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding-top: 0px;\n}\n.wrap-contact100[_ngcontent-%COMP%] {\n  width: 670px;\n  background: #1f2833;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  margin: auto;\n  opacity: 0.8;\n}\n\n.contact100-form-title[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  background-color: #66fcf1;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.contact100-form-title-1[_ngcontent-%COMP%] {\n  font-family: Dosis;\n  font-size: 50px;\n  color: black;\n  line-height: 1.2;\n  text-align: center;\n  padding-bottom: 7px;\n  opacity: 1;\n}\n.contact100-form-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.contact100-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 43px 88px 57px 190px;\n}\n\n@media (max-width: 576px) {\n  .contact100-form[_ngcontent-%COMP%] {\n    padding: 43px 15px 57px 117px;\n  }\n}\n@media (max-width: 480px) {\n  .contact100-form[_ngcontent-%COMP%] {\n    padding: 43px 15px 57px 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL0M6XFxVc2Vyc1xcdmlub2RcXERlc2t0b3BcXElFRUVWRVNJVDIwXFxhbmd1bGFyLWllZWV2ZXNpdDIwL3NyY1xcYXBwXFxjb250YWN0dXNcXGNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBQTtBQUNBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDSjtBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjtBREVBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7QUNDSjtBRENBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDRUo7QURBQTtFQUNJLGdCQUFBO0FDR0o7QUREQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDSUo7QURGQTs7RUFFSSxjQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0tKO0FERkE7RUFDSSx5QkFBQTtBQ0tKO0FEREE7RUFDSSxZQUFBO0FDSUo7QUREQTtFQUVJ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Ijoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS1OYXZiYXItLS0tLS0tLSovXHJcbmJvZHl7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybCgnL2Fzc2V0cy9pbWcvYmczLmpwZycpO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbiNzeW1ib2x7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuI3N5bWJvbCBhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2RkNGMTtcclxuICAgIGNvbG9yOiAjMEIwQzEwO1xyXG59XHJcblxyXG4ubG9nb3sgICAgICAgICAgICAgICAgICBcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaGVhZGVyeyAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2eyAgICAgICAgICAgICAgICAgXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuaGVhZGVyIG5hdiB1bHsgICAgICAgICAgICAgICBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGl7ICAgICAgICAgICAgXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGkgYSB7ICAgICAgICAgXHJcbiAgICBoZWlnaHQ6NTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmhlYWRlciBuYXYgdWwgbGkgYS5hY3RpdmUsICAgICBcclxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6IzBCMEMxMDtcclxuICAgIGJhY2tncm91bmQ6ICM2NkZDRjE7XHJcbn1cclxuXHJcbi5tZW51LXRvZ2dsZXsgICAgICAgICAgICAgICAgXHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5iZy1kYXJrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjBDMTA7XHJcbiAgICBcclxufVxyXG5cclxuLmJnLWRhcmsgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSAgICAgICAgICAgXHJcbntcclxuICAgIGhlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudS10b2dnbGV7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXZ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoLTUwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICAgICAgdG9wOjUwcHg7XHJcbiAgICAgICAgbGVmdDotMTAwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIG5hdi5hY3RpdmV7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXYgdWx7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgbmF2IHVsIGxpIGF7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIH1cclxufVxyXG4vKi0tLS0tLS0tLS1OYXZiYXIgZW5kLS0tLS0tLS0qL1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKi0tLS0tZm9vdGVyLS0tLS0tKi9cclxuLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzBiMGMxMDtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4IDA7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjI4MzM7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgdHJhbnNpdGlvbjogMC45cztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5zb2NpYWwtbGlua3MgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY2ZmNmMTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjNjZmY2YxO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB0ZXh0LXVuZGVybGluZS1wb3NpdGlvbjogdW5kZXI7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgaDQ6OmJlZm9yZSB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6ICMxZjI4MzM7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbG9nbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgaSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICBjb2xvcjogcmdiKDI0NSwgMjQzLCAyMzgpO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgbGkge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNzAsIDE3MCwgMTcwKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYSB7XHJcbiAgICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2NkZDRjE7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNmb290ZXIgLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjBjMTA7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDF2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5MHZ3O1xyXG59XHJcbi8qIC0tLS0tLS0tLS1mb290ZXIgZW5kLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5bIENvbnRhY3QgXSovXHJcblxyXG4uY29udGFpbmVyLWNvbnRhY3QxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLmNvbnRhY3QxMDAtbWFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLndyYXAtY29udGFjdDEwMCB7XHJcbiAgICB3aWR0aDogNjcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWYyODMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5bIFRpdGxlIGZvcm0gXSovXHJcblxyXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2ZmNmMTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0MTAwLWZvcm0tdGl0bGUtMSB7XHJcbiAgICBmb250LWZhbWlseTogRG9zaXM7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5bIEZvcm0gXSovXHJcblxyXG4uY29udGFjdDEwMC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDQzcHggODhweCA1N3B4IDE5MHB4O1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuWyBSZXNwb25zaXZlIF0qL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY29udGFjdDEwMC1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiA0M3B4IDE1cHggNTdweCAxMTdweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGFjdDEwMC1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiA0M3B4IDE1cHggNTdweCAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuWyBDb250YWN0IC0gRU5EIF0qLyIsIi8qLS0tLS0tLS0tLS0tLS0tTmF2YmFyLS0tLS0tLS0qL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYmczLmpwZ1wiKTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cblxuI3N5bWJvbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE0cHggMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbiNzeW1ib2wgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NkZDRjE7XG4gIGNvbG9yOiAjMEIwQzEwO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xufVxuXG5oZWFkZXIgbmF2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5oZWFkZXIgbmF2IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5oZWFkZXIgbmF2IHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaGVhZGVyIG5hdiB1bCBsaSBhLmFjdGl2ZSxcbmhlYWRlciBuYXYgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMEIwQzEwO1xuICBiYWNrZ3JvdW5kOiAjNjZGQ0YxO1xufVxuXG4ubWVudS10b2dnbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5iZy1kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBCMEMxMDtcbn1cblxuLmJnLWRhcmsgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIGhlYWRlciB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG5cbiAgLm1lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIGhlYWRlciBuYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmgtNTBweCk7XG4gICAgYmFja2dyb3VuZDogIzMzMztcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIGhlYWRlciBuYXYuYWN0aXZlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICB9XG5cbiAgaGVhZGVyIG5hdiB1bCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG59XG4vKi0tLS0tLS0tLS1OYXZiYXIgZW5kLS0tLS0tLS0qL1xuLyotLS0tLWZvb3Rlci0tLS0tLSovXG4uZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzBiMGMxMDtcbiAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgY29sb3I6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWYyODMzO1xuICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgdHJhbnNpdGlvbjogMC45cztcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLnNvY2lhbC1saW5rcyBhOmhvdmVyIHtcbiAgY29sb3I6ICM2NmZjZjE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCBoNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjZmY2YxO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgdGV4dC11bmRlcmxpbmUtcG9zaXRpb246IHVuZGVyO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIGg0OjpiZWZvcmUge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzFmMjgzMztcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxvZ28ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuI2Zvb3RlciAuZm9vdGVyLXRvcCAuZm9vdGVyLWxpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgY29sb3I6ICNmNWYzZWU7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhYWFhO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1saW5rcyB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYSB7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItbGlua3MgdWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjZGQ0YxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNmb290ZXIgLmZvb3Rlci10b3AgLmZvb3Rlci1jb250YWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jZm9vdGVyIC5mb290ZXItdG9wIC5mb290ZXItY29udGFjdCBwIHtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNmb290ZXIgLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjBjMTA7XG59XG5cbi5jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMXZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA5MHZ3O1xufVxuXG4vKiAtLS0tLS0tLS0tZm9vdGVyIGVuZC0tLS0tLS0tLS0tLS0tLS0tICovXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBDb250YWN0IF0qL1xuLmNvbnRhaW5lci1jb250YWN0MTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5jb250YWN0MTAwLW1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLndyYXAtY29udGFjdDEwMCB7XG4gIHdpZHRoOiA2NzBweDtcbiAgYmFja2dyb3VuZDogIzFmMjgzMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblsgVGl0bGUgZm9ybSBdKi9cbi5jb250YWN0MTAwLWZvcm0tdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2ZmNmMTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uY29udGFjdDEwMC1mb3JtLXRpdGxlLTEge1xuICBmb250LWZhbWlseTogRG9zaXM7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jb250YWN0MTAwLWZvcm0tdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIEZvcm0gXSovXG4uY29udGFjdDEwMC1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDQzcHggODhweCA1N3B4IDE5MHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBSZXNwb25zaXZlIF0qL1xuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250YWN0MTAwLWZvcm0ge1xuICAgIHBhZGRpbmc6IDQzcHggMTVweCA1N3B4IDExN3B4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRhY3QxMDAtZm9ybSB7XG4gICAgcGFkZGluZzogNDNweCAxNXB4IDU3cHggMTVweDtcbiAgfVxufVxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgQ29udGFjdCAtIEVORCBdKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contactus',
          templateUrl: './contactus.component.html',
          styleUrls: ['./contactus.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/council/council.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/council/council.component.ts ***!
    \**********************************************/

  /*! exports provided: CouncilComponent */

  /***/
  function srcAppCouncilCouncilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CouncilComponent", function () {
      return CouncilComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CouncilComponent = /*#__PURE__*/function () {
      function CouncilComponent() {
        _classCallCheck(this, CouncilComponent);
      }

      _createClass(CouncilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CouncilComponent;
    }();

    CouncilComponent.ɵfac = function CouncilComponent_Factory(t) {
      return new (t || CouncilComponent)();
    };

    CouncilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CouncilComponent,
      selectors: [["app-council"]],
      decls: 2,
      vars: 0,
      template: function CouncilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "council works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW5jaWwvY291bmNpbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CouncilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-council',
          templateUrl: './council.component.html',
          styleUrls: ['./council.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/events/events.component.ts":
  /*!********************************************!*\
    !*** ./src/app/events/events.component.ts ***!
    \********************************************/

  /*! exports provided: EventsComponent */

  /***/
  function srcAppEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventsComponent = /*#__PURE__*/function () {
      function EventsComponent() {
        _classCallCheck(this, EventsComponent);
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventsComponent;
    }();

    EventsComponent.ɵfac = function EventsComponent_Factory(t) {
      return new (t || EventsComponent)();
    };

    EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventsComponent,
      selectors: [["app-events"]],
      decls: 2,
      vars: 0,
      template: function EventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "events works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-events',
          templateUrl: './events.component.html',
          styleUrls: ['./events.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ieeetv/ieeetv.component.ts":
  /*!********************************************!*\
    !*** ./src/app/ieeetv/ieeetv.component.ts ***!
    \********************************************/

  /*! exports provided: IEEETvComponent */

  /***/
  function srcAppIeeetvIeeetvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IEEETvComponent", function () {
      return IEEETvComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IEEETvComponent = /*#__PURE__*/function () {
      function IEEETvComponent() {
        _classCallCheck(this, IEEETvComponent);
      }

      _createClass(IEEETvComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IEEETvComponent;
    }();

    IEEETvComponent.ɵfac = function IEEETvComponent_Factory(t) {
      return new (t || IEEETvComponent)();
    };

    IEEETvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IEEETvComponent,
      selectors: [["app-ieeetv"]],
      decls: 0,
      vars: 0,
      template: function IEEETvComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2llZWV0di9pZWVldHYuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IEEETvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ieeetv',
          templateUrl: './ieeetv.component.html',
          styleUrls: ['./ieeetv.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sponsors/sponsors.component.ts":
  /*!************************************************!*\
    !*** ./src/app/sponsors/sponsors.component.ts ***!
    \************************************************/

  /*! exports provided: SponsorsComponent */

  /***/
  function srcAppSponsorsSponsorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function () {
      return SponsorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SponsorsComponent = /*#__PURE__*/function () {
      function SponsorsComponent() {
        _classCallCheck(this, SponsorsComponent);
      }

      _createClass(SponsorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SponsorsComponent;
    }();

    SponsorsComponent.ɵfac = function SponsorsComponent_Factory(t) {
      return new (t || SponsorsComponent)();
    };

    SponsorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SponsorsComponent,
      selectors: [["app-sponsors"]],
      decls: 2,
      vars: 0,
      template: function SponsorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sponsors works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SponsorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sponsors',
          templateUrl: './sponsors.component.html',
          styleUrls: ['./sponsors.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\vinod\Desktop\IEEEVESIT20\angular-ieeevesit20\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map