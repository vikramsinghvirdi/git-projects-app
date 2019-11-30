(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-search-search-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-card/repo-card.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-card/repo-card.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<article>\n    <div class=\"card\">\n        <div class=\"card-header\">\n            Header\n        </div>\n        <div class=\"card-block\">\n            <div class=\"card-title\">\n                Block\n            </div>\n            <div class=\"card-text\">\n                ...\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <button class=\"btn btn-sm btn-link\">Footer Action 1</button>\n            <button class=\"btn btn-sm btn-link\">Footer Action 2</button>\n        </div>\n    </div>\n</article>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.html": 
        /*!***************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.html ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<article>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                Header\n            </div>\n            <div class=\"card-block\">\n                <div class=\"card-title\">\n                    Block\n                </div>\n                <div class=\"card-text\">\n                    ...\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-link\">Footer Action 1</button>\n                <button class=\"btn btn-sm btn-link\">Footer Action 2</button>\n            </div>\n        </div>\n    </article>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/filter/filter.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/filter/filter.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"filters\">\n    <clr-checkbox-wrapper>\n        <input type=\"checkbox\" clrCheckbox value=\"option1\" name=\"options\" />\n        <label>Option 1</label>\n    </clr-checkbox-wrapper>\n    <clr-checkbox-wrapper>\n        <input type=\"checkbox\" clrCheckbox value=\"option2\" name=\"options\" />\n        <label>Option 2</label>\n    </clr-checkbox-wrapper>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/list/list.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/list/list.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"list-content\">\n    <aside class=\"list-content__filters\">\n        <app-filter></app-filter>\n    </aside>\n    <section class=\"list-content__results\">\n\n    </section>\n</div> -->\n<!-- \n<nav class=\"sidenav\">\n    <section class=\"sidenav-content\">\n        <a href=\"...\" class=\"nav-link active\">\n            Nav Element 1\n        </a>\n        <a href=\"...\" class=\"nav-link\">\n            Nav Element 2\n        </a>\n        <section class=\"nav-group collapsible\">\n            <input id=\"tabexample1\" type=\"checkbox\">\n            <label for=\"tabexample1\">Collapsible Nav Element</label>\n            <ul class=\"nav-list\">\n                <li><a class=\"nav-link\">Link 1</a></li>\n                <li><a class=\"nav-link\">Link 2</a></li>\n            </ul>\n        </section>\n        <section class=\"nav-group\">\n            <input id=\"tabexample2\" type=\"checkbox\">\n            <label for=\"tabexample2\">Default Nav Element</label>\n            <ul class=\"nav-list\">\n                <li><a class=\"nav-link\">Link 1</a></li>\n                <li><a class=\"nav-link\">Link 2</a></li>\n                <li><a class=\"nav-link active\">Link 3</a></li>\n                <li><a class=\"nav-link\">Link 4</a></li>\n                <li><a class=\"nav-link\">Link 5</a></li>\n                <li><a class=\"nav-link\">Link 6</a></li>\n            </ul>\n        </section>\n    </section>\n</nav> -->\n<!-- <div class=\"content-area\">\n    <section class=\"content-area__header\">\n        <div class=\"heading\">\n            <h3>GitHub Projects List</h3>\n        </div>\n        <div class=\"options\">\n            <clr-dropdown>\n                <button class=\"dropdown-toggle btn btn-link\" clrDropdownTrigger>\n                    Sort By\n                    <clr-icon shape=\"caret down\"></clr-icon>\n                </button>\n                <clr-dropdown-menu clrPosition=\"bottom-right\" *clrIfOpen>\n                    <div aria-label=\"Name\" clrDropdownItem>Name</div>\n                    <div aria-label=\"Name\" clrDropdownItem>Language</div>\n                    <div aria-label=\"Name\" clrDropdownItem>Fork</div>\n                    <div aria-label=\"Name\" clrDropdownItem>Updated At</div>\n                </clr-dropdown-menu>\n            </clr-dropdown>\n        </div>\n    </section>\n    <section class=\"content-area__datagrid\">\n        <clr-datagrid>\n            <clr-dg-column [clrDgField]=\"'repo.name'\" [clrDgSortBy]=\"repoNameComparator\">Name</clr-dg-column>\n            <clr-dg-column>Description</clr-dg-column>\n            <clr-dg-column>Language</clr-dg-column>\n            <clr-dg-column>Fork</clr-dg-column>\n            <clr-dg-column>Creation At</clr-dg-column>\n            <clr-dg-column>Updated At</clr-dg-column>\n\n            <clr-dg-row *ngFor=\"let repo of repos\">\n                <clr-dg-cell>{{repo.name}}</clr-dg-cell>\n                <clr-dg-cell>{{repo.description}}</clr-dg-cell>\n                <clr-dg-cell>{{repo.language}}</clr-dg-cell>\n                <clr-dg-cell>{{repo.fork}}</clr-dg-cell>\n                <clr-dg-cell>{{repo.created_at | date}}</clr-dg-cell>\n                <clr-dg-cell>{{repo.updated_at | date}}</clr-dg-cell>\n            </clr-dg-row>\n\n            <clr-dg-footer>\n                <clr-dg-pagination #pagination clrDgPageSize=\"page.per_page\" next previous>\n                    <clr-dg-page-size [clrPageSizeOptions]=\"[20,50,100]\" (change)=\"handlePageChange($event)\">Repos per\n                        page\n                    </clr-dg-page-size>\n                    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n                    of {{repos.length}} repos\n                </clr-dg-pagination>\n            </clr-dg-footer>\n        </clr-datagrid>\n    </section>\n</div> -->\n<div class=\"list-container\">\n    <div class=\"list-header\">\n        <h3>GitHub Projects</h3>\n        <p class=\"p1\">List of all Open Source projects</p>\n    </div>\n    <div class=\"list-content\">\n        <aside class=\"list-content__filters\">\n            <app-filter></app-filter>\n        </aside>\n        <section class=\"list-content__results\">\n            <div class=\"summary\">\n                <h4>Showing {{repos.length}} of {{page.total}} Repos</h4>\n                <!-- <div class=\"btn-group\">\n                        <div class=\"radio btn btn-icon\">\n                            <input type=\"radio\" name=\"btn-group-view-type\" id=\"btn-card\" value=\"card\" checked (click)=\"changeView($event)\">\n                            <clr-icon shape=\"home\" for=\"btn-card\"></clr-icon>\n                        </div>\n                        <div class=\"radio btn btn-icon\">\n                            <input type=\"radio\" name=\"btn-group-view-type\" id=\"btn-list\" value=\"list\" (click)=\"changeView($event)\">\n                            <label for=\"btn-list\">List</label>\n                        </div>\n                    </div> -->\n                <div class=\"btn-group btn-primary btn-icon\">\n                    <button class=\"btn\">\n                        <clr-icon shape=\"home\"></clr-icon>\n                        <span class=\"clr-icon-title\">Home</span>\n                    </button>\n                    <button class=\"btn\">\n                        <clr-icon shape=\"cog\"></clr-icon>\n                        <span class=\"clr-icon-title\">Settings</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"separator\"></div>\n            <div class=\"clr-row\">\n                <div [ngClass]=\"defaultView == 'card' ? 'clr-col-md-4 clr-col-sm-12 clr-col-6' : 'clr-col-12'\"\n                    *ngFor=\"let repo of repos\">\n                    <app-repo-card *ngIf=\"defaultView == 'card'\" [data]=\"repo\"></app-repo-card>\n                    <app-repo-landscape-card *ngIf=\"defaultView == 'list'\" [data]=\"repo\"></app-repo-landscape-card>\n                </div>\n            </div>\n        </section>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/search-bar/search-bar.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/search-bar/search-bar.component.html ***!
          \**********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>search-bar works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/summary-bar/summary-bar.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/summary-bar/summary-bar.component.html ***!
          \************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>summary-bar works!</p>\n");
            /***/ 
        }),
        /***/ "./src/app/models/Org/org.model.ts": 
        /*!*****************************************!*\
          !*** ./src/app/models/Org/org.model.ts ***!
          \*****************************************/
        /*! exports provided: Org */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Org", function () { return Org; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Org = /** @class */ (function () {
                function Org(obj) {
                    this.id = obj && obj.id || null;
                    this.name = obj && obj.name || null;
                    this.repos_count = obj && obj.public_repos || 0;
                    this.avatar = obj && obj.avatar || null;
                    this.url = obj && obj.url || null;
                    this.created_at = obj && new Date(obj.created_at) || null;
                    this.updated_at = obj && new Date(obj.updated_at) || null;
                }
                return Org;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/Repo/repo.model.ts": 
        /*!*******************************************!*\
          !*** ./src/app/models/Repo/repo.model.ts ***!
          \*******************************************/
        /*! exports provided: Repo */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repo", function () { return Repo; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Repo = /** @class */ (function () {
                function Repo(obj) {
                    this.id = obj && obj.id || null;
                    this.name = obj && obj.name || null;
                    this.description = obj && obj.description || null;
                    this.language = obj && obj.language || null;
                    this.stargazers_count = obj && obj.stargazers_count || 0;
                    this.fork = obj && obj.fork || 0;
                    this.watchers_count = obj && obj.watchers_count || 0;
                    this.tags = obj && obj.tags || [];
                    this.url = obj && obj.url || null;
                    this.created_at = obj && new Date(obj.created_at) || null;
                    this.updated_at = obj && new Date(obj.updated_at) || null;
                }
                return Repo;
            }());
            /***/ 
        }),
        /***/ "./src/app/modules/cards/cards.module.ts": 
        /*!***********************************************!*\
          !*** ./src/app/modules/cards/cards.module.ts ***!
          \***********************************************/
        /*! exports provided: CardsModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsModule", function () { return CardsModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/repo-card/repo-card.component */ "./src/app/modules/cards/components/repo-card/repo-card.component.ts");
            /* harmony import */ var _components_repo_landscape_card_repo_landscape_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/repo-landscape-card/repo-landscape-card.component */ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.ts");
            var CardsModule = /** @class */ (function () {
                function CardsModule() {
                }
                return CardsModule;
            }());
            CardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_components_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_3__["RepoCardComponent"], _components_repo_landscape_card_repo_landscape_card_component__WEBPACK_IMPORTED_MODULE_4__["RepoLandscapeCardComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    exports: [
                        _components_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_3__["RepoCardComponent"],
                        _components_repo_landscape_card_repo_landscape_card_component__WEBPACK_IMPORTED_MODULE_4__["RepoLandscapeCardComponent"]
                    ]
                })
            ], CardsModule);
            /***/ 
        }),
        /***/ "./src/app/modules/cards/components/repo-card/repo-card.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/modules/cards/components/repo-card/repo-card.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FyZHMvY29tcG9uZW50cy9yZXBvLWNhcmQvcmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/cards/components/repo-card/repo-card.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/modules/cards/components/repo-card/repo-card.component.ts ***!
          \***************************************************************************/
        /*! exports provided: RepoCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoCardComponent", function () { return RepoCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RepoCardComponent = /** @class */ (function () {
                function RepoCardComponent() {
                }
                RepoCardComponent.prototype.ngOnInit = function () {
                };
                return RepoCardComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], RepoCardComponent.prototype, "data", void 0);
            RepoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-repo-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repo-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-card/repo-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repo-card.component.scss */ "./src/app/modules/cards/components/repo-card/repo-card.component.scss")).default]
                })
            ], RepoCardComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.scss": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.scss ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FyZHMvY29tcG9uZW50cy9yZXBvLWxhbmRzY2FwZS1jYXJkL3JlcG8tbGFuZHNjYXBlLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.ts": 
        /*!***********************************************************************************************!*\
          !*** ./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.ts ***!
          \***********************************************************************************************/
        /*! exports provided: RepoLandscapeCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoLandscapeCardComponent", function () { return RepoLandscapeCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RepoLandscapeCardComponent = /** @class */ (function () {
                function RepoLandscapeCardComponent() {
                }
                RepoLandscapeCardComponent.prototype.ngOnInit = function () {
                };
                return RepoLandscapeCardComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], RepoLandscapeCardComponent.prototype, "data", void 0);
            RepoLandscapeCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-repo-landscape-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repo-landscape-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repo-landscape-card.component.scss */ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.scss")).default]
                })
            ], RepoLandscapeCardComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/search/components/filter/filter.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/modules/search/components/filter/filter.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".filters {\n  line-height: 1rem;\n  max-width: 13rem;\n  min-width: 9rem;\n  width: 18%;\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1rem 1rem 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9maWx0ZXIvQzpcXFByb2plY3RzXFxHaXRIdWJcXGdpdC1wcm9qZWN0cy1hcHAvc3JjXFxhcHBcXG1vZHVsZXNcXHNlYXJjaFxcY29tcG9uZW50c1xcZmlsdGVyXFxmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NlYXJjaC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyc3tcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxM3JlbTtcclxuICAgIG1pbi13aWR0aDogOXJlbTtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDFyZW07XHJcbn0iLCIuZmlsdGVycyB7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBtYXgtd2lkdGg6IDEzcmVtO1xuICBtaW4td2lkdGg6IDlyZW07XG4gIHdpZHRoOiAxOCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDFyZW07XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/modules/search/components/filter/filter.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/modules/search/components/filter/filter.component.ts ***!
          \**********************************************************************/
        /*! exports provided: FilterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function () { return FilterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FilterComponent = /** @class */ (function () {
                function FilterComponent() {
                }
                FilterComponent.prototype.ngOnInit = function () {
                };
                return FilterComponent;
            }());
            FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-filter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/filter/filter.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.component.scss */ "./src/app/modules/search/components/filter/filter.component.scss")).default]
                })
            ], FilterComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/search/components/list/list.component.scss": 
        /*!********************************************************************!*\
          !*** ./src/app/modules/search/components/list/list.component.scss ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("::ng-deep app-list {\n  display: inherit;\n  flex-direction: inherit;\n  height: inherit;\n  background: inherit;\n}\n\n.list-container .list-header {\n  padding: 0rem 1rem;\n}\n\n.list-container .list-header p {\n  margin-top: 0rem;\n}\n\n.list-container .list-summary {\n  padding: 0rem 1rem;\n}\n\n.list-container .list-summary p {\n  margin-top: 0rem;\n}\n\n.list-container .list-content {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 1px;\n}\n\n.list-container .list-content .list-content__filters {\n  flex: 0 0 auto;\n  order: -1;\n  overflow: hidden;\n}\n\n.list-container .list-content .list-content__results {\n  flex: 1 1 auto;\n  padding: 1rem;\n  overflow-y: hidden;\n}\n\n.list-container .list-content .list-content__results .summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9saXN0L0M6XFxQcm9qZWN0c1xcR2l0SHViXFxnaXQtcHJvamVjdHMtYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxzZWFyY2hcXGNvbXBvbmVudHNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdJO0VBQ0ksa0JBQUE7QUNBUjs7QURFUTtFQUNJLGdCQUFBO0FDQVo7O0FESUk7RUFDSSxrQkFBQTtBQ0ZSOztBRElRO0VBQ0ksZ0JBQUE7QUNGWjs7QURNSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0pSOztBRE1RO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0paOztBRE9RO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRE9ZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUNMaEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NlYXJjaC9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBhcHAtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gICAgLmxpc3QtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1zdW1tYXJ5IHtcclxuICAgICAgICBwYWRkaW5nOiAwcmVtIDFyZW07XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuXHJcbiAgICAgICAgLmxpc3QtY29udGVudF9fZmlsdGVycyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICBvcmRlcjogLTE7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC1jb250ZW50X19yZXN1bHRzIHtcclxuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgIC5zdW1tYXJ5e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCI6Om5nLWRlZXAgYXBwLWxpc3Qge1xuICBkaXNwbGF5OiBpbmhlcml0O1xuICBmbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubGlzdC1jb250YWluZXIgLmxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZzogMHJlbSAxcmVtO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0LWhlYWRlciBwIHtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdC1zdW1tYXJ5IHtcbiAgcGFkZGluZzogMHJlbSAxcmVtO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0LXN1bW1hcnkgcCB7XG4gIG1hcmdpbi10b3A6IDByZW07XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3QtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAxcHg7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3QtY29udGVudCAubGlzdC1jb250ZW50X19maWx0ZXJzIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG9yZGVyOiAtMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdC1jb250ZW50IC5saXN0LWNvbnRlbnRfX3Jlc3VsdHMge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMXJlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0LWNvbnRlbnQgLmxpc3QtY29udGVudF9fcmVzdWx0cyAuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/search/components/list/list.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/modules/search/components/list/list.component.ts ***!
          \******************************************************************/
        /*! exports provided: ListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function () { return ListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search.service */ "./src/app/modules/search/services/search.service.ts");
            var ListComponent = /** @class */ (function () {
                function ListComponent(searchService) {
                    this.searchService = searchService;
                    this.repos = [];
                    this.page = {
                        per_page: 20,
                        page: 1,
                        total: 0
                    };
                    this.defaultView = 'card';
                }
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var me = this;
                    this.searchService.getOrgInfo().subscribe(function (res) {
                        _this.org = res;
                        _this.page['total'] = _this.org.repos_count;
                        me.getRepos(function (data) {
                            me.repos = data;
                        });
                    }, function (err) {
                        _this.error = err.message;
                    });
                };
                ListComponent.prototype.handlePageChange = function (page) {
                    console.log(page);
                };
                ListComponent.prototype.getRepos = function (callback) {
                    var _this = this;
                    this.searchService.getListOfAllRepos(this.page).subscribe(function (res) {
                        callback(res);
                    }, function (err) {
                        _this.error = err.message;
                    });
                };
                ListComponent.prototype.changeView = function (event) {
                    if (event && event.target.value)
                        this.defaultView = event.target.value;
                };
                return ListComponent;
            }());
            ListComponent.ctorParameters = function () { return [
                { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
            ]; };
            ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/list/list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/modules/search/components/list/list.component.scss")).default]
                })
            ], ListComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/search/components/search-bar/search-bar.component.scss": 
        /*!********************************************************************************!*\
          !*** ./src/app/modules/search/components/search-bar/search-bar.component.scss ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/modules/search/components/search-bar/search-bar.component.ts": 
        /*!******************************************************************************!*\
          !*** ./src/app/modules/search/components/search-bar/search-bar.component.ts ***!
          \******************************************************************************/
        /*! exports provided: SearchBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function () { return SearchBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SearchBarComponent = /** @class */ (function () {
                function SearchBarComponent() {
                }
                SearchBarComponent.prototype.ngOnInit = function () {
                };
                return SearchBarComponent;
            }());
            SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/search-bar/search-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/modules/search/components/search-bar/search-bar.component.scss")).default]
                })
            ], SearchBarComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/search/components/summary-bar/summary-bar.component.scss": 
        /*!**********************************************************************************!*\
          !*** ./src/app/modules/search/components/summary-bar/summary-bar.component.scss ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc3VtbWFyeS1iYXIvc3VtbWFyeS1iYXIuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/modules/search/components/summary-bar/summary-bar.component.ts": 
        /*!********************************************************************************!*\
          !*** ./src/app/modules/search/components/summary-bar/summary-bar.component.ts ***!
          \********************************************************************************/
        /*! exports provided: SummaryBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryBarComponent", function () { return SummaryBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SummaryBarComponent = /** @class */ (function () {
                function SummaryBarComponent() {
                }
                SummaryBarComponent.prototype.ngOnInit = function () {
                };
                return SummaryBarComponent;
            }());
            SummaryBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-summary-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/summary-bar/summary-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary-bar.component.scss */ "./src/app/modules/search/components/summary-bar/summary-bar.component.scss")).default]
                })
            ], SummaryBarComponent);
            /***/ 
        }),
        /***/ "./src/app/modules/search/search.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/modules/search/search.module.ts ***!
          \*************************************************/
        /*! exports provided: SearchModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function () { return SearchModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
            /* harmony import */ var _cards_cards_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/cards.module */ "./src/app/modules/cards/cards.module.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/modules/search/components/list/list.component.ts");
            /* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/modules/search/components/search-bar/search-bar.component.ts");
            /* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/modules/search/components/filter/filter.component.ts");
            /* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/search.service */ "./src/app/modules/search/services/search.service.ts");
            /* harmony import */ var _components_summary_bar_summary_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/summary-bar/summary-bar.component */ "./src/app/modules/search/components/summary-bar/summary-bar.component.ts");
            var routes = [{
                    path: '',
                    component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
                    pathMatch: 'full'
                }];
            var SearchModule = /** @class */ (function () {
                function SearchModule() {
                }
                return SearchModule;
            }());
            SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_components_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_7__["SearchBarComponent"], _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_8__["FilterComponent"], _components_summary_bar_summary_bar_component__WEBPACK_IMPORTED_MODULE_10__["SummaryBarComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconModule"],
                        _cards_cards_module__WEBPACK_IMPORTED_MODULE_4__["CardsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                    ],
                    exports: [],
                    providers: [_services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"]]
                })
            ], SearchModule);
            /***/ 
        }),
        /***/ "./src/app/modules/search/services/search.service.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/modules/search/services/search.service.ts ***!
          \***********************************************************/
        /*! exports provided: SearchService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function () { return SearchService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _models_Repo_repo_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/Repo/repo.model */ "./src/app/models/Repo/repo.model.ts");
            /* harmony import */ var _models_Org_org_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/Org/org.model */ "./src/app/models/Org/org.model.ts");
            var SearchService = /** @class */ (function () {
                function SearchService(http) {
                    this.http = http;
                }
                SearchService.prototype.getOrgInfo = function () {
                    var _this = this;
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'accept': 'application/vnd.github.baptiste-preview+json'
                    });
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].orgDetail, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                        return new _models_Org_org_model__WEBPACK_IMPORTED_MODULE_7__["Org"](res);
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                        return _this.handleError(error);
                    }));
                };
                SearchService.prototype.getListOfAllRepos = function (page) {
                    var _this = this;
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'accept': 'application/vnd.github.baptiste-preview+json'
                    });
                    var queryString = Object.keys(page).map(function (key) { return key + '=' + page[key]; }).join('&');
                    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].listOfRepos + '&' + queryString, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                        return res.map(function (r) {
                            return new _models_Repo_repo_model__WEBPACK_IMPORTED_MODULE_6__["Repo"](r);
                        });
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                        return _this.handleError(error);
                    }));
                };
                SearchService.prototype.handleError = function (error) {
                    var errMsg;
                    if (Error && error instanceof Error) {
                        errMsg = error['error']; // || error.toString()
                    }
                    else {
                        errMsg = error.error ? error.error : error.toString();
                    }
                    try {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(new Error(error.status && error.status === 500 ? 'Internal server error' : errMsg));
                    }
                    catch (e) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
                    }
                };
                return SearchService;
            }());
            SearchService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], SearchService);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-search-search-module-es2015.js.map
//# sourceMappingURL=modules-search-search-module-es5.js.map
//# sourceMappingURL=modules-search-search-module-es5.js.map