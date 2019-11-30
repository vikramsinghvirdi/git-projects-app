var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-search-search-module"], {
        /***/ "./node_modules/ngx-content-loading/esm2015/ngx-content-loading.js": 
        /*!*************************************************************************!*\
          !*** ./node_modules/ngx-content-loading/esm2015/ngx-content-loading.js ***!
          \*************************************************************************/
        /*! exports provided: NgxContentLoadingModule, ɵi, ɵd, ɵh, ɵf, ɵg, ɵj, ɵa, ɵb, ɵc, ɵe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxContentLoadingModule", function () { return NgxContentLoadingModule; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function () { return BulletListPresetComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function () { return CircleComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function () { return CodePresetComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function () { return FacebookPresetComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function () { return InstagramPresetComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function () { return ListPresetComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function () { return NgxContentLoadingComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function () { return RectComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function () { return SvgElementComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function () { return SvgStopComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            /** @enum {string} */
            var Defaults = {
                PrimaryColor: '#f3f3f3',
                SecondaryColor: '#ecebeb',
                PreserveAspectRatio: 'xMidYMid meet',
                Classes: '',
                Speed: '1000ms',
                Width: '400',
                Height: '130',
                Rx: '0',
                Ry: '1',
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var NgxContentLoadingComponent = /** @class */ (function () {
                function NgxContentLoadingComponent() {
                    this.width = Defaults.Width;
                    this.height = Defaults.Height;
                    this.primaryColor = Defaults.PrimaryColor;
                    this.secondaryColor = Defaults.SecondaryColor;
                    this.speed = Defaults.Speed;
                    this.preserveAspectRatio = Defaults.PreserveAspectRatio;
                }
                Object.defineProperty(NgxContentLoadingComponent.prototype, "viewBox", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "0 0 " + this.width + " " + this.height;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                NgxContentLoadingComponent.prototype.ngOnInit = function () { };
                return NgxContentLoadingComponent;
            }());
            NgxContentLoadingComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngx-content-loading',
                            template: "<ng-content select=\"[before-svg]\"></ng-content>\n<svg version=\"1.1\"\n    [attr.preserveAspectRatio]=\"preserveAspectRatio\"\n    [attr.viewBox]=\"viewBox\">\n        <ng-content></ng-content>\n</svg>\n<ng-content select=\"[after-svg]\"></ng-content>\n",
                            styles: [""],
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            NgxContentLoadingComponent.ctorParameters = function () { return []; };
            NgxContentLoadingComponent.propDecorators = {
                "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "primaryColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "secondaryColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "speed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "preserveAspectRatio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var SvgElementComponent = /** @class */ (function () {
                /**
                 * @param {?} content
                 */
                function SvgElementComponent(content) {
                    this.content = content;
                    this.clipPathId = getId();
                    this.linearGradientId = getId();
                }
                Object.defineProperty(SvgElementComponent.prototype, "clipPathUrl", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "url(#" + this.clipPathId + ")";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SvgElementComponent.prototype, "linearGradientUrl", {
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "url(#" + this.linearGradientId + ")";
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * @return {?}
                 */
                SvgElementComponent.prototype.ngOnInit = function () {
                };
                return SvgElementComponent;
            }());
            SvgElementComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: 'ngx-svg-element',
                            template: "",
                            styles: [""],
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            SvgElementComponent.ctorParameters = function () { return [
                { type: NgxContentLoadingComponent, },
            ]; };
            /**
             * @return {?}
             */
            function getId() {
                var /** @type {?} */ id = performance.now() * Math.random();
                return id.toString();
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var RectComponent = /** @class */ (function (_super) {
                __extends(RectComponent, _super);
                /**
                 * @param {?} content
                 */
                function RectComponent(content) {
                    var _this = _super.call(this, content) || this;
                    _this.content = content;
                    _this.rx = Defaults.Rx;
                    _this.ry = Defaults.Ry;
                    return _this;
                }
                return RectComponent;
            }(SvgElementComponent));
            RectComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngx-rect]',
                            template: "<svg:rect\n        [attr.x]=\"x\"\n        [attr.y]=\"y\"\n        [attr.rx]=\"rx\"\n        [attr.ry]=\"ry\"\n        [attr.width]=\"width\"\n        [attr.fill]=\"linearGradientUrl\"\n        [attr.clipPath]=\"clipPathUrl\"\n        [attr.height]=\"height\">\n</svg:rect>\n<svg:defs>\n    <svg:clipPath [attr.id]=\"clipPathId\"></svg:clipPath>\n    <svg:linearGradient [attr.id]=\"linearGradientId\">\n        <svg:stop ngx-svg-stop\n            [offset]=\"'0%'\"\n            [values]=\"'-2; 1'\"\n            [speed]=\"content.speed\"\n            [color]=\"content.primaryColor\">\n        </svg:stop>\n        <svg:stop ngx-svg-stop\n            [offset]=\"'50%'\"\n            [values]=\"'-1.5; 1.5'\"\n            [speed]=\"content.speed\"\n            [color]=\"content.secondaryColor\">\n        </svg:stop>\n        <svg:stop ngx-svg-stop\n            [offset]=\"'100%'\"\n            [values]=\"'-1; 2'\"\n            [speed]=\"content.speed\"\n            [color]=\"content.primaryColor\">\n        </svg:stop>\n    </svg:linearGradient>\n</svg:defs>\n",
                            styles: [""]
                        },] },
            ];
            /** @nocollapse */
            RectComponent.ctorParameters = function () { return [
                { type: NgxContentLoadingComponent, },
            ]; };
            RectComponent.propDecorators = {
                "y": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "x": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "rx": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "ry": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "primaryColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "secondaryColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "speed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var SvgStopComponent = /** @class */ (function () {
                function SvgStopComponent() {
                }
                /**
                 * @return {?}
                 */
                SvgStopComponent.prototype.ngOnInit = function () {
                };
                return SvgStopComponent;
            }());
            SvgStopComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngx-svg-stop]',
                            template: "<svg:animate\n    attributeName=\"offset\"\n    [attr.values]=\"values\"\n    [attr.dur]=\"speed\"\n    repeatCount=\"indefinite\"\n/>\n",
                            styles: [""],
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            SvgStopComponent.ctorParameters = function () { return []; };
            SvgStopComponent.propDecorators = {
                "speed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "values": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "offset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.offset',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.stop-color',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var FacebookPresetComponent = /** @class */ (function () {
                function FacebookPresetComponent() {
                }
                /**
                 * @return {?}
                 */
                FacebookPresetComponent.prototype.ngOnInit = function () {
                };
                return FacebookPresetComponent;
            }());
            FacebookPresetComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngx-facebook-preset]',
                            template: "<svg:g ngx-circle cx=\"25\" cy=\"25\" r=\"25\"></svg:g>\n<svg:g ngx-rect width=\"100\" height=\"5\" y=\"15\" x=\"60\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"60\" height=\"5\" y=\"30\" x=\"60\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"170\" height=\"5\" y=\"65\" x=\"0\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"220\" height=\"5\" y=\"80\" x=\"0\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"130\" height=\"5\" y=\"95\" x=\"0\" rx=\"5\" ry=\"5\"></svg:g>\n",
                            styles: [""],
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            FacebookPresetComponent.ctorParameters = function () { return []; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var InstagramPresetComponent = /** @class */ (function () {
                function InstagramPresetComponent() {
                }
                /**
                 * @return {?}
                 */
                InstagramPresetComponent.prototype.ngOnInit = function () {
                };
                return InstagramPresetComponent;
            }());
            InstagramPresetComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngx-instagram-preset]',
                            template: "<svg:g ngx-circle cx=\"25\" cy=\"25\" r=\"25\"></svg:g>\n<svg:g ngx-rect width=\"120\" height=\"10\" y=\"10\" x=\"60\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"40\" height=\"5\" y=\"30\" x=\"60\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"250\" height=\"250\" y=\"60\" x=\"0\" rx=\"5\" ry=\"5\"></svg:g>\n",
                            styles: [""],
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            InstagramPresetComponent.ctorParameters = function () { return []; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var CircleComponent = /** @class */ (function (_super) {
                __extends(CircleComponent, _super);
                /**
                 * @param {?} content
                 */
                function CircleComponent(content) {
                    var _this = _super.call(this, content) || this;
                    _this.content = content;
                    return _this;
                }
                return CircleComponent;
            }(SvgElementComponent));
            CircleComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngx-circle]',
                            template: "<svg:circle\n        [attr.cx]=\"cx\"\n        [attr.cy]=\"cy\"\n        [attr.r]=\"r\"\n        [attr.fill]=\"linearGradientUrl\"\n        [attr.clipPath]=\"clipPathUrl\">\n</svg:circle>\n<svg:defs>\n    <svg:clipPath [attr.id]=\"clipPathId\"></svg:clipPath>\n    <svg:linearGradient [attr.id]=\"linearGradientId\">\n        <svg:stop ngx-svg-stop\n            [offset]=\"'0%'\"\n            [values]=\"'-2; 1'\"\n            [speed]=\"content.speed\"\n            [color]=\"content.primaryColor\">\n        </svg:stop>\n        <svg:stop ngx-svg-stop\n            [offset]=\"'50%'\"\n            [values]=\"'-1.5; 1.5'\"\n            [speed]=\"content.speed\"\n            [color]=\"content.secondaryColor\">\n        </svg:stop>\n        <svg:stop ngx-svg-stop\n            [offset]=\"'100%'\"\n            [values]=\"'-1; 2'\"\n            [speed]=\"content.speed\"\n            [color]=\"content.primaryColor\">\n        </svg:stop>\n    </svg:linearGradient>\n</svg:defs>\n",
                            styles: [""]
                        },] },
            ];
            /** @nocollapse */
            CircleComponent.ctorParameters = function () { return [
                { type: NgxContentLoadingComponent, },
            ]; };
            CircleComponent.propDecorators = {
                "r": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "cx": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
                "cy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var CodePresetComponent = /** @class */ (function () {
                function CodePresetComponent() {
                }
                /**
                 * @return {?}
                 */
                CodePresetComponent.prototype.ngOnInit = function () {
                };
                return CodePresetComponent;
            }());
            CodePresetComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngx-code-preset]',
                            template: "<svg:g ngx-rect width=\"60\" height=\"10\" y=\"15\" x=\"0\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"90\" height=\"10\" y=\"15\" x=\"70\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"20\" height=\"10\" y=\"15\" x=\"170\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"100\" height=\"10\" y=\"35\" x=\"9\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"120\" height=\"10\" y=\"35\" x=\"120\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"90\" height=\"10\" y=\"55\" x=\"5\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"90\" height=\"10\" y=\"55\" x=\"105\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"70\" height=\"10\" y=\"55\" x=\"205\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"30\" height=\"10\" y=\"75\" x=\"0\" rx=\"5\" ry=\"5\"></svg:g>\n",
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            CodePresetComponent.ctorParameters = function () { return []; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var BulletListPresetComponent = /** @class */ (function () {
                function BulletListPresetComponent() {
                }
                /**
                 * @return {?}
                 */
                BulletListPresetComponent.prototype.ngOnInit = function () {
                };
                return BulletListPresetComponent;
            }());
            BulletListPresetComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngx-bullet-list-preset]',
                            template: "<svg:g ngx-circle cx=\"7\" cy=\"7\" r=\"7\"></svg:g>\n<svg:g ngx-circle cx=\"7\" cy=\"37\" r=\"7\"></svg:g>\n<svg:g ngx-circle cx=\"7\" cy=\"67\" r=\"7\"></svg:g>\n<svg:g ngx-circle cx=\"7\" cy=\"97\" r=\"7\"></svg:g>\n<svg:g ngx-rect width=\"200\" height=\"12\" y=\"2\" x=\"20\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"200\" height=\"12\" y=\"32\" x=\"20\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"200\" height=\"12\" y=\"62\" x=\"20\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"200\" height=\"12\" y=\"92\" x=\"20\" rx=\"5\" ry=\"5\"></svg:g>\n",
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            BulletListPresetComponent.ctorParameters = function () { return []; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var ListPresetComponent = /** @class */ (function () {
                function ListPresetComponent() {
                }
                /**
                 * @return {?}
                 */
                ListPresetComponent.prototype.ngOnInit = function () {
                };
                return ListPresetComponent;
            }());
            ListPresetComponent.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                            selector: '[ngx-list-preset]',
                            template: "<svg:g ngx-rect width=\"200\" height=\"10\" y=\"0\" x=\"0\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"180\" height=\"10\" y=\"20\" x=\"20\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"160\" height=\"10\" y=\"40\" x=\"20\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"200\" height=\"10\" y=\"60\" x=\"0\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"180\" height=\"10\" y=\"80\" x=\"20\" rx=\"5\" ry=\"5\"></svg:g>\n<svg:g ngx-rect width=\"60\" height=\"10\" y=\"100\" x=\"20\" rx=\"5\" ry=\"5\"></svg:g>\n",
                            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
                        },] },
            ];
            /** @nocollapse */
            ListPresetComponent.ctorParameters = function () { return []; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            var NgxContentLoadingModule = /** @class */ (function () {
                function NgxContentLoadingModule() {
                }
                return NgxContentLoadingModule;
            }());
            NgxContentLoadingModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            imports: [
                                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                            ],
                            declarations: [
                                NgxContentLoadingComponent,
                                RectComponent,
                                CircleComponent,
                                SvgElementComponent,
                                SvgStopComponent,
                                FacebookPresetComponent,
                                InstagramPresetComponent,
                                CodePresetComponent,
                                BulletListPresetComponent,
                                ListPresetComponent
                            ],
                            exports: [
                                NgxContentLoadingComponent,
                                RectComponent,
                                CircleComponent,
                                FacebookPresetComponent,
                                InstagramPresetComponent,
                                CodePresetComponent,
                                BulletListPresetComponent,
                                ListPresetComponent
                            ]
                        },] },
            ];
            /** @nocollapse */
            NgxContentLoadingModule.ctorParameters = function () { return []; };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=ngx-content-loading.js.map
            /***/ 
        }),
        /***/ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js": 
        /*!*************************************************************************!*\
          !*** ./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js ***!
          \*************************************************************************/
        /*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function () { return InfiniteScrollDirective; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function () { return InfiniteScrollModule; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} selector
             * @param {?} scrollWindow
             * @param {?} defaultElement
             * @param {?} fromRoot
             * @return {?}
             */
            function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
                /** @type {?} */
                var hasWindow = window && !!window.document && window.document.documentElement;
                /** @type {?} */
                var container = hasWindow && scrollWindow ? window : defaultElement;
                if (selector) {
                    /** @type {?} */
                    var containerIsString = selector && hasWindow && typeof selector === 'string';
                    container = containerIsString
                        ? findElement(selector, defaultElement.nativeElement, fromRoot)
                        : selector;
                    if (!container) {
                        throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
                    }
                }
                return container;
            }
            /**
             * @param {?} selector
             * @param {?} customRoot
             * @param {?} fromRoot
             * @return {?}
             */
            function findElement(selector, customRoot, fromRoot) {
                /** @type {?} */
                var rootEl = fromRoot ? window.document : customRoot;
                return rootEl.querySelector(selector);
            }
            /**
             * @param {?} prop
             * @return {?}
             */
            function inputPropChanged(prop) {
                return prop && !prop.firstChange;
            }
            /**
             * @return {?}
             */
            function hasWindowDefined() {
                return typeof window !== 'undefined';
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /** @type {?} */
            var VerticalProps = {
                clientHeight: "clientHeight",
                offsetHeight: "offsetHeight",
                scrollHeight: "scrollHeight",
                pageYOffset: "pageYOffset",
                offsetTop: "offsetTop",
                scrollTop: "scrollTop",
                top: "top"
            };
            /** @type {?} */
            var HorizontalProps = {
                clientHeight: "clientWidth",
                offsetHeight: "offsetWidth",
                scrollHeight: "scrollWidth",
                pageYOffset: "pageXOffset",
                offsetTop: "offsetLeft",
                scrollTop: "scrollLeft",
                top: "left"
            };
            var AxisResolver = /** @class */ (function () {
                /**
                 * @param {?=} vertical
                 */
                function AxisResolver(vertical) {
                    if (vertical === void 0) { vertical = true; }
                    this.vertical = vertical;
                    this.propsMap = vertical ? VerticalProps : HorizontalProps;
                }
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.clientHeightKey = function () {
                    return this.propsMap.clientHeight;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.offsetHeightKey = function () {
                    return this.propsMap.offsetHeight;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.scrollHeightKey = function () {
                    return this.propsMap.scrollHeight;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.pageYOffsetKey = function () {
                    return this.propsMap.pageYOffset;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.offsetTopKey = function () {
                    return this.propsMap.offsetTop;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.scrollTopKey = function () {
                    return this.propsMap.scrollTop;
                };
                /**
                 * @return {?}
                 */
                AxisResolver.prototype.topKey = function () {
                    return this.propsMap.top;
                };
                return AxisResolver;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @record
             */
            /**
             * @record
             */
            /**
             * @record
             */
            /**
             * @record
             */
            /**
             * @param {?} alwaysCallback
             * @param {?} shouldFireScrollEvent
             * @param {?} isTriggeredCurrentTotal
             * @return {?}
             */
            function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
                if (alwaysCallback && shouldFireScrollEvent) {
                    return true;
                }
                if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
                    return true;
                }
                return false;
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} __0
             * @return {?}
             */
            function createResolver(_a) {
                var windowElement = _a.windowElement, axis = _a.axis;
                return createResolverWithContainer({ axis: axis, isWindow: isElementWindow(windowElement) }, windowElement);
            }
            /**
             * @param {?} resolver
             * @param {?} windowElement
             * @return {?}
             */
            function createResolverWithContainer(resolver, windowElement) {
                /** @type {?} */
                var container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
                    ? windowElement
                    : windowElement.nativeElement;
                return Object.assign({}, resolver, { container: container });
            }
            /**
             * @param {?} windowElement
             * @return {?}
             */
            function isElementWindow(windowElement) {
                /** @type {?} */
                var isWindow = ['Window', 'global'].some(function (obj) { return Object.prototype.toString.call(windowElement).includes(obj); });
                return isWindow;
            }
            /**
             * @param {?} isContainerWindow
             * @param {?} windowElement
             * @return {?}
             */
            function getDocumentElement(isContainerWindow, windowElement) {
                return isContainerWindow ? windowElement.document.documentElement : null;
            }
            /**
             * @param {?} element
             * @param {?} resolver
             * @return {?}
             */
            function calculatePoints(element, resolver) {
                /** @type {?} */
                var height = extractHeightForElement(resolver);
                return resolver.isWindow
                    ? calculatePointsForWindow(height, element, resolver)
                    : calculatePointsForElement(height, element, resolver);
            }
            /**
             * @param {?} height
             * @param {?} element
             * @param {?} resolver
             * @return {?}
             */
            function calculatePointsForWindow(height, element, resolver) {
                var axis = resolver.axis, container = resolver.container, isWindow = resolver.isWindow;
                var _a = extractHeightPropKeys(axis), offsetHeightKey = _a.offsetHeightKey, clientHeightKey = _a.clientHeightKey;
                // scrolled until now / current y point
                /** @type {?} */
                var scrolled = height +
                    getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
                // total height / most bottom y point
                /** @type {?} */
                var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
                /** @type {?} */
                var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
                    nativeElementHeight;
                return { height: height, scrolled: scrolled, totalToScroll: totalToScroll, isWindow: isWindow };
            }
            /**
             * @param {?} height
             * @param {?} element
             * @param {?} resolver
             * @return {?}
             */
            function calculatePointsForElement(height, element, resolver) {
                var axis = resolver.axis, container = resolver.container;
                // perhaps use container.offsetTop instead of 'scrollTop'
                /** @type {?} */
                var scrolled = container[axis.scrollTopKey()];
                /** @type {?} */
                var totalToScroll = container[axis.scrollHeightKey()];
                return { height: height, scrolled: scrolled, totalToScroll: totalToScroll, isWindow: false };
            }
            /**
             * @param {?} axis
             * @return {?}
             */
            function extractHeightPropKeys(axis) {
                return {
                    offsetHeightKey: axis.offsetHeightKey(),
                    clientHeightKey: axis.clientHeightKey()
                };
            }
            /**
             * @param {?} __0
             * @return {?}
             */
            function extractHeightForElement(_a) {
                var container = _a.container, isWindow = _a.isWindow, axis = _a.axis;
                var _b = extractHeightPropKeys(axis), offsetHeightKey = _b.offsetHeightKey, clientHeightKey = _b.clientHeightKey;
                return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
            }
            /**
             * @param {?} elem
             * @param {?} isWindow
             * @param {?} offsetHeightKey
             * @param {?} clientHeightKey
             * @return {?}
             */
            function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
                if (isNaN(elem[offsetHeightKey])) {
                    /** @type {?} */
                    var docElem = getDocumentElement(isWindow, elem);
                    return docElem ? docElem[clientHeightKey] : 0;
                }
                else {
                    return elem[offsetHeightKey];
                }
            }
            /**
             * @param {?} elem
             * @param {?} axis
             * @param {?} isWindow
             * @return {?}
             */
            function getElementOffsetTop(elem, axis, isWindow) {
                /** @type {?} */
                var topKey = axis.topKey();
                // elem = elem.nativeElement;
                if (!elem.getBoundingClientRect) {
                    // || elem.css('none')) {
                    return;
                }
                return (elem.getBoundingClientRect()[topKey] +
                    getElementPageYOffset(elem, axis, isWindow));
            }
            /**
             * @param {?} elem
             * @param {?} axis
             * @param {?} isWindow
             * @return {?}
             */
            function getElementPageYOffset(elem, axis, isWindow) {
                /** @type {?} */
                var pageYOffset = axis.pageYOffsetKey();
                /** @type {?} */
                var scrollTop = axis.scrollTopKey();
                /** @type {?} */
                var offsetTop = axis.offsetTopKey();
                if (isNaN(window[pageYOffset])) {
                    return getDocumentElement(isWindow, elem)[scrollTop];
                }
                else if (elem.ownerDocument) {
                    return elem.ownerDocument.defaultView[pageYOffset];
                }
                else {
                    return elem[offsetTop];
                }
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} container
             * @param {?} distance
             * @param {?} scrollingDown
             * @return {?}
             */
            function shouldFireScrollEvent(container, distance, scrollingDown) {
                /** @type {?} */
                var remaining;
                /** @type {?} */
                var containerBreakpoint;
                if (container.totalToScroll <= 0) {
                    return false;
                }
                /** @type {?} */
                var scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
                if (scrollingDown) {
                    remaining =
                        (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
                    containerBreakpoint = distance.down / 10;
                }
                else {
                    /** @type {?} */
                    var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
                    remaining = container.scrolled / totalHiddenContentHeight;
                    containerBreakpoint = distance.up / 10;
                }
                /** @type {?} */
                var shouldFireEvent = remaining <= containerBreakpoint;
                return shouldFireEvent;
            }
            /**
             * @param {?} lastScrollPosition
             * @param {?} container
             * @return {?}
             */
            function isScrollingDownwards(lastScrollPosition, container) {
                return lastScrollPosition < container.scrolled;
            }
            /**
             * @param {?} lastScrollPosition
             * @param {?} container
             * @param {?} distance
             * @return {?}
             */
            function getScrollStats(lastScrollPosition, container, distance) {
                /** @type {?} */
                var scrollDown = isScrollingDownwards(lastScrollPosition, container);
                return {
                    fire: shouldFireScrollEvent(container, distance, scrollDown),
                    scrollDown: scrollDown
                };
            }
            /**
             * @param {?} position
             * @param {?} scrollState
             * @return {?}
             */
            /**
             * @param {?} totalToScroll
             * @param {?} scrollState
             * @return {?}
             */
            /**
             * @param {?} scrollState
             * @return {?}
             */
            /**
             * @param {?} scroll
             * @param {?} scrollState
             * @param {?} triggered
             * @param {?} isScrollingDown
             * @return {?}
             */
            /**
             * @param {?} totalToScroll
             * @param {?} scrollState
             * @param {?} isScrollingDown
             * @return {?}
             */
            /**
             * @param {?} scrollState
             * @param {?} scrolledUntilNow
             * @param {?} totalToScroll
             * @return {?}
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var ScrollState = /** @class */ (function () {
                /**
                 * @param {?} __0
                 */
                function ScrollState(_a) {
                    var totalToScroll = _a.totalToScroll;
                    this.lastScrollPosition = 0;
                    this.lastTotalToScroll = 0;
                    this.totalToScroll = 0;
                    this.triggered = {
                        down: 0,
                        up: 0
                    };
                    this.totalToScroll = totalToScroll;
                }
                /**
                 * @param {?} position
                 * @return {?}
                 */
                ScrollState.prototype.updateScrollPosition = function (position) {
                    return (this.lastScrollPosition = position);
                };
                /**
                 * @param {?} totalToScroll
                 * @return {?}
                 */
                ScrollState.prototype.updateTotalToScroll = function (totalToScroll) {
                    if (this.lastTotalToScroll !== totalToScroll) {
                        this.lastTotalToScroll = this.totalToScroll;
                        this.totalToScroll = totalToScroll;
                    }
                };
                /**
                 * @param {?} scrolledUntilNow
                 * @param {?} totalToScroll
                 * @return {?}
                 */
                ScrollState.prototype.updateScroll = function (scrolledUntilNow, totalToScroll) {
                    this.updateScrollPosition(scrolledUntilNow);
                    this.updateTotalToScroll(totalToScroll);
                };
                /**
                 * @param {?} scroll
                 * @param {?} isScrollingDown
                 * @return {?}
                 */
                ScrollState.prototype.updateTriggeredFlag = function (scroll, isScrollingDown) {
                    if (isScrollingDown) {
                        this.triggered.down = scroll;
                    }
                    else {
                        this.triggered.up = scroll;
                    }
                };
                /**
                 * @param {?} totalToScroll
                 * @param {?} isScrollingDown
                 * @return {?}
                 */
                ScrollState.prototype.isTriggeredScroll = function (totalToScroll, isScrollingDown) {
                    return isScrollingDown
                        ? this.triggered.down === totalToScroll
                        : this.triggered.up === totalToScroll;
                };
                return ScrollState;
            }());
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @param {?} config
             * @return {?}
             */
            function createScroller(config) {
                var scrollContainer = config.scrollContainer, scrollWindow = config.scrollWindow, element = config.element, fromRoot = config.fromRoot;
                /** @type {?} */
                var resolver = createResolver({
                    axis: new AxisResolver(!config.horizontal),
                    windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
                });
                /** @type {?} */
                var scrollState = new ScrollState({
                    totalToScroll: calculatePoints(element, resolver)
                });
                /** @type {?} */
                var options = {
                    container: resolver.container,
                    throttle: config.throttle
                };
                /** @type {?} */
                var distance = {
                    up: config.upDistance,
                    down: config.downDistance
                };
                return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (positionStats) { return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
                    var stats = _a.stats;
                    return scrollState.updateScroll(stats.scrolled, stats.totalToScroll);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
                    var fire = _a.fire, scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
                    return shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown));
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_a) {
                    var scrollDown = _a.scrollDown, totalToScroll = _a.stats.totalToScroll;
                    scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
            }
            /**
             * @param {?} options
             * @return {?}
             */
            function attachScrollEvent(options) {
                /** @type {?} */
                var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll');
                // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
                // Let's avoid calling the function unless needed.
                // See https://github.com/orizens/ngx-infinite-scroll/issues/198
                if (options.throttle) {
                    obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sampleTime"])(options.throttle));
                }
                return obs;
            }
            /**
             * @param {?} lastScrollPosition
             * @param {?} stats
             * @param {?} distance
             * @return {?}
             */
            function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
                var _a = getScrollStats(lastScrollPosition, stats, distance), scrollDown = _a.scrollDown, fire = _a.fire;
                return {
                    scrollDown: scrollDown,
                    fire: fire,
                    stats: stats
                };
            }
            /** @type {?} */
            var InfiniteScrollActions = {
                DOWN: '[NGX_ISE] DOWN',
                UP: '[NGX_ISE] UP'
            };
            /**
             * @param {?} response
             * @return {?}
             */
            function toInfiniteScrollAction(response) {
                var scrollDown = response.scrollDown, currentScrollPosition = response.stats.scrolled;
                return {
                    type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
                    payload: {
                        currentScrollPosition: currentScrollPosition
                    }
                };
            }
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var InfiniteScrollDirective = /** @class */ (function () {
                /**
                 * @param {?} element
                 * @param {?} zone
                 */
                function InfiniteScrollDirective(element, zone) {
                    this.element = element;
                    this.zone = zone;
                    this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    this.infiniteScrollDistance = 2;
                    this.infiniteScrollUpDistance = 1.5;
                    this.infiniteScrollThrottle = 150;
                    this.infiniteScrollDisabled = false;
                    this.infiniteScrollContainer = null;
                    this.scrollWindow = true;
                    this.immediateCheck = false;
                    this.horizontal = false;
                    this.alwaysCallback = false;
                    this.fromRoot = false;
                }
                /**
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.ngAfterViewInit = function () {
                    if (!this.infiniteScrollDisabled) {
                        this.setup();
                    }
                };
                /**
                 * @param {?} __0
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.ngOnChanges = function (_a) {
                    var infiniteScrollContainer = _a.infiniteScrollContainer, infiniteScrollDisabled = _a.infiniteScrollDisabled, infiniteScrollDistance = _a.infiniteScrollDistance;
                    /** @type {?} */
                    var containerChanged = inputPropChanged(infiniteScrollContainer);
                    /** @type {?} */
                    var disabledChanged = inputPropChanged(infiniteScrollDisabled);
                    /** @type {?} */
                    var distanceChanged = inputPropChanged(infiniteScrollDistance);
                    /** @type {?} */
                    var shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
                        (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
                    if (containerChanged || disabledChanged || distanceChanged) {
                        this.destroyScroller();
                        if (shouldSetup) {
                            this.setup();
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.setup = function () {
                    var _this = this;
                    if (hasWindowDefined()) {
                        this.zone.runOutsideAngular(function () {
                            _this.disposeScroller = createScroller({
                                fromRoot: _this.fromRoot,
                                alwaysCallback: _this.alwaysCallback,
                                disable: _this.infiniteScrollDisabled,
                                downDistance: _this.infiniteScrollDistance,
                                element: _this.element,
                                horizontal: _this.horizontal,
                                scrollContainer: _this.infiniteScrollContainer,
                                scrollWindow: _this.scrollWindow,
                                throttle: _this.infiniteScrollThrottle,
                                upDistance: _this.infiniteScrollUpDistance
                            }).subscribe(function (payload) { return _this.zone.run(function () { return _this.handleOnScroll(payload); }); });
                        });
                    }
                };
                /**
                 * @param {?} __0
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.handleOnScroll = function (_a) {
                    var type = _a.type, payload = _a.payload;
                    switch (type) {
                        case InfiniteScrollActions.DOWN:
                            return this.scrolled.emit(payload);
                        case InfiniteScrollActions.UP:
                            return this.scrolledUp.emit(payload);
                        default:
                            return;
                    }
                };
                /**
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.ngOnDestroy = function () {
                    this.destroyScroller();
                };
                /**
                 * @return {?}
                 */
                InfiniteScrollDirective.prototype.destroyScroller = function () {
                    if (this.disposeScroller) {
                        this.disposeScroller.unsubscribe();
                    }
                };
                return InfiniteScrollDirective;
            }());
            InfiniteScrollDirective.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                            selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
                        },] },
            ];
            /** @nocollapse */
            InfiniteScrollDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
            ]; };
            InfiniteScrollDirective.propDecorators = {
                scrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                scrolledUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
                infiniteScrollDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                infiniteScrollUpDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                infiniteScrollThrottle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                infiniteScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                infiniteScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                scrollWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                immediateCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                alwaysCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
                fromRoot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
            };
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            var InfiniteScrollModule = /** @class */ (function () {
                function InfiniteScrollModule() {
                }
                return InfiniteScrollModule;
            }());
            InfiniteScrollModule.decorators = [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                            declarations: [InfiniteScrollDirective],
                            exports: [InfiniteScrollDirective],
                            imports: [],
                            providers: []
                        },] },
            ];
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Angular library starter.
             * Build an Angular library compatible with AoT compilation & Tree shaking.
             * Written by Roberto Simonetti.
             * MIT license.
             * https://github.com/robisim74/angular-library-starter
             */
            /**
             * Entry point for all public APIs of the package.
             */
            /**
             * @fileoverview added by tsickle
             * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
             */
            /**
             * Generated bundle index. Do not edit.
             */
            //# sourceMappingURL=ngx-infinite-scroll.js.map
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.html": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.html ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngx-content-loading [speed]=\"'1500ms'\" [width]=\"228\" [height]=\"335\" [primaryColor]=\"'rgba(221, 221, 221, 1)'\"\n    [secondaryColor]=\"'rgba(227, 236, 238, 1)'\">\n    <svg:g ngx-rect x=\"0\" y=\"1\" rx=\"4\" ry=\"4\" width=\"117\" height=\"6\" />\n    <svg:g ngx-rect x=\"0\" y=\"42\" rx=\"3\" ry=\"3\" width=\"228\" height=\"6\" />\n    <svg:g ngx-rect x=\"0\" y=\"62\" rx=\"3\" ry=\"3\" width=\"200\" height=\"6\" />\n    <svg:g ngx-rect x=\"0\" y=\"99\" rx=\"3\" ry=\"3\" width=\"98\" height=\"27\" />\n    <svg:g ngx-rect x=\"1\" y=\"159\" rx=\"4\" ry=\"4\" width=\"20\" height=\"11\" />\n    <svg:g ngx-rect x=\"44\" y=\"159\" rx=\"4\" ry=\"4\" width=\"20\" height=\"11\" />\n    <svg:g ngx-rect x=\"90\" y=\"159\" rx=\"4\" ry=\"4\" width=\"20\" height=\"11\" />\n    <svg:g ngx-rect x=\"0\" y=\"210\" rx=\"4\" ry=\"4\" width=\"117\" height=\"12\" />\n    <svg:g ngx-rect x=\"0\" y=\"192\" rx=\"3\" ry=\"3\" width=\"343\" height=\"1\" />\n</ngx-content-loading>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-card/repo-card.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-card/repo-card.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<article class=\"repo-card\">\n    <div class=\"card\">\n        <div class=\"card-block\">\n            <div class=\"card-title\">\n                {{data?.name | truncate: [20]}}\n            </div>\n            <div class=\"card-text\">\n                <p class=\"p1\" *ngIf=\"data?.description\">{{data?.description | truncate: [70]}}</p>\n                \n                <span class=\"label language\" *ngIf=\"data?.language\">{{data?.language}}</span>\n                <div class=\"status\">\n                    <span *ngIf=\"data?.stargazers_count\">\n                            <clr-icon shape=\"star\" class=\"is-solid\"></clr-icon>\n                            {{data?.stargazers_count}}\n                    </span>\n                    <span *ngIf=\"data?.forks\">\n                            <clr-icon shape=\"share\" class=\"fork-icon\"></clr-icon>\n                            {{data?.forks}}\n                    </span>\n                    <span *ngIf=\"data?.watchers_count\">\n                            <clr-icon shape=\"eye\" class=\"is-solid\"></clr-icon>\n                            {{data?.watchers_count}}\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <a [href]=\"data?.url\" target=\"_blank\" class=\"btn btn-sm btn-link\">More Info <clr-icon shape=\"help-info\"></clr-icon>\n            </a>\n        </div>\n    </div>\n</article>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.html": 
        /*!*****************************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.html ***!
          \*****************************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngx-content-loading [speed]=\"'1500ms'\" [height]=\"40\" [primaryColor]=\"'rgba(221, 221, 221, 1)'\"\n    [secondaryColor]=\"'rgba(227, 236, 238, 1)'\">\n    <svg:g ngx-rect x=\"0\" y=\"10\" rx=\"4\" ry=\"4\" width=\"100\" height=\"2\" /> \n    <svg:g ngx-rect x=\"0\" y=\"20\" rx=\"4\" ry=\"4\" width=\"200\" height=\"2\" /> \n    <svg:g ngx-rect x=\"250\" y=\"6\" rx=\"4\" ry=\"4\" width=\"40\" height=\"10\" />\n    <svg:g ngx-rect x=\"320\" y=\"8\" rx=\"4\" ry=\"4\" width=\"7\" height=\"6\" /> \n    <svg:g ngx-rect x=\"340\" y=\"8\" rx=\"4\" ry=\"4\" width=\"7\" height=\"6\" /> \n    <svg:g ngx-rect x=\"360\" y=\"8\" rx=\"4\" ry=\"4\" width=\"7\" height=\"6\" /> \n</ngx-content-loading>");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<article class=\"repo-landscape-card\">\n        <div class=\"card\">\n            <div class=\"card-block\">\n                <div class=\"card-title\">\n                    {{data?.name}}\n                    <div class=\"status\">\n                            <span class=\"label\" *ngIf=\"data?.language\">{{data?.language}}</span>\n                            <span *ngIf=\"data?.stargazers_count\">\n                                    <clr-icon shape=\"star\" class=\"is-solid\"></clr-icon>\n                                    {{data?.stargazers_count}}\n                            </span>\n                            <span *ngIf=\"data?.forks\">\n                                    <clr-icon shape=\"share\" class=\"fork-icon\"></clr-icon>\n                                    {{data?.forks}}\n                            </span>\n                            <span *ngIf=\"data?.watchers_count\">\n                                    <clr-icon shape=\"eye\" class=\"is-solid\"></clr-icon>\n                                    {{data?.watchers_count}}\n                            </span>\n                        </div>\n                </div>\n                <div class=\"card-text\" *ngIf=\"data?.description\">\n                    <p class=\"p1\">{{data?.description | truncate: [200]}}</p>\n                </div>\n            </div>\n            <div class=\"card-footer\">\n                <button class=\"btn btn-sm btn-link\">More Info <clr-icon shape=\"help-info\"></clr-icon>\n                </button>\n                <!-- <clr-signpost>\n                    <clr-signpost-content [clrPosition]=\"'bottom-middle'\" *clrIfOpen=\"openState\">\n                        Lorem ipsum...\n                    </clr-signpost-content>\n                </clr-signpost> -->\n            </div>\n        </div>\n    </article>");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"filters\">\n    <div class=\"filters__sort-by\">\n        <h5>Sort By</h5>\n        <clr-radio-wrapper>\n            <input type=\"radio\" clrRadio value=\"created_at\" name=\"sort_by_options\" (change)=\"updateSortBy('created_at', 'date')\"\n                checked />\n            <label>Creation Date</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type=\"radio\" clrRadio value=\"updated_at\" name=\"sort_by_options\"\n                (change)=\"updateSortBy('updated_at', 'date')\" />\n            <label>Update Date</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type=\"radio\" clrRadio value=\"name\" name=\"sort_by_options\" (change)=\"updateSortBy('name', 'string')\" />\n            <label>Name</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type=\"radio\" clrRadio value=\"stargazers_count\" name=\"sort_by_options\"\n                (change)=\"updateSortBy('stargazers_count', 'number')\" />\n            <label>Stargazers Count</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type=\"radio\" clrRadio value=\"forks\" name=\"sort_by_options\" (change)=\"updateSortBy('forks', 'number')\" />\n            <label>Fork Count</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type=\"radio\" clrRadio value=\"watchers_count\" name=\"sort_by_options\"\n                (change)=\"updateSortBy('watchers_count', 'number')\" />\n            <label>Watchers Count</label>\n        </clr-radio-wrapper>\n    </div>\n    <div class=\"separator\"></div>\n    <div class=\"filters__sort-by\">\n        <h5>Sort order</h5>\n        <clr-radio-wrapper>\n            <input type=\"radio\" clrRadio value=\"asc\" name=\"sort_order_options\" (change)=\"updateSortOrder('asc')\" checked />\n            <label>Ascending</label>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <input type=\"radio\" clrRadio value=\"desc\" name=\"sort_order_options\" (change)=\"updateSortOrder('desc')\" />\n            <label>Descencding</label>\n        </clr-radio-wrapper>\n    </div>\n    <!--\n    <div class=\"filters__sort-by\">\n        <h5>Languages</h5>\n        <clr-radio-wrapper>\n                <input type=\"radio\" clrRadio value=\"name\" name=\"sort_by_options\" />\n                <label>Name</label>\n            </clr-radio-wrapper>\n            <clr-radio-wrapper>\n                <input type=\"radio\" clrRadio value=\"language\" name=\"sort_by_options\" />\n                <label>Language</label>\n            </clr-radio-wrapper>\n            <clr-radio-wrapper>\n                <input type=\"radio\" clrRadio value=\"forks\" name=\"sort_by_options\" />\n                <label>Fork Count</label>\n            </clr-radio-wrapper>\n            <clr-radio-wrapper>\n                <input type=\"radio\" clrRadio value=\"watchers_count\" name=\"sort_by_options\" />\n                <label>Watchers Count</label>\n            </clr-radio-wrapper>\n            <clr-radio-wrapper>\n                <input type=\"radio\" clrRadio value=\"created_at\" name=\"sort_by_options\" />\n                <label>Creation Date</label>\n            </clr-radio-wrapper>\n            <clr-radio-wrapper>\n                <input type=\"radio\" clrRadio value=\"updated_at\" name=\"sort_by_options\" />\n                <label>Update Date</label>\n            </clr-radio-wrapper>\n    </div>\n    <div class=\"separator\"></div> -->\n</section>");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-container\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"200\"\n    [infiniteScrollUpDistance]=\"1.5\" [infiniteScrollDisabled]=\"infiniteScrollDisabled\" (scrolled)=\"onScrollDown()\"\n    [fromRoot]=\"true\" [scrollWindow]=\"true\">\n    <div class=\"list-header\">\n        <h3>GitHub Projects</h3>\n        <p class=\"p1\">List of all Open Source projects</p>\n    </div>\n    <div class=\"list-content\">\n        <aside class=\"list-content__filters clr-hidden-sm-down\">\n            <app-filter (onSortByChange)=\"applySortBy($event)\"></app-filter>\n        </aside>\n        <section class=\"list-content__results\">\n            <div class=\"summary\">\n                <h4>Showing {{filteredRepos.length}} of {{page.total | shortNumber}} Projects</h4>\n                <app-search-bar class=\"search-bar\" (onSearchChange)=\"handleSearch($event)\"></app-search-bar>\n                <div class=\"btn-group clr-hidden-sm-down\">\n                    <div class=\"radio btn btn-icon\">\n                        <input type=\"radio\" name=\"btn-group-view-type\" id=\"btn-card\" value=\"card\"\n                            [checked]=\"defaultView == 'card'\" (click)=\"changeView($event)\">\n                        <label for=\"btn-card\">\n                            <clr-icon shape=\"grid-view\"></clr-icon>\n                        </label>\n                    </div>\n                    <div class=\"radio btn btn-icon\">\n                        <input type=\"radio\" name=\"btn-group-view-type\" id=\"btn-list\" value=\"list\"\n                            [checked]=\"defaultView == 'list'\" (click)=\"changeView($event)\">\n                        <label for=\"btn-list\">\n                            <clr-icon shape=\"view-list\"></clr-icon>\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"separator\"></div>\n            <div class=\"data-list\">\n                <div class=\"clr-row data-list__loader\" *ngIf=\"isSkeltonLoading\">\n                    <div [ngClass]=\"defaultView == 'card' ? 'clr-col-xl-3  clr-col-lg-4 clr-col-md-6 clr-col-sm-6 clr-col-sx-12 clr-col-12' : 'clr-col-12'\" *ngFor=\"let item of [1,2,3,4,5,6,7,8]\">\n                        <app-repo-card-skeleton *ngIf=\"defaultView == 'card'\"></app-repo-card-skeleton>\n                        <app-repo-landscape-card-skeleton *ngIf=\"defaultView == 'list'\">\n                        </app-repo-landscape-card-skeleton>\n                    </div>\n                </div>\n                <div class=\"clr-row data-list__items\">\n                    <div [ngClass]=\"defaultView == 'card' ? 'clr-col-xl-3  clr-col-lg-4 clr-col-md-6 clr-col-sm-6 clr-col-sx-12 clr-col-12' : 'clr-col-12'\"\n                        *ngFor=\"let repo of filteredRepos\">\n                        <app-repo-card *ngIf=\"defaultView == 'card'\" [data]=\"repo\"></app-repo-card>\n                        <app-repo-landscape-card *ngIf=\"defaultView == 'list'\" [data]=\"repo\">\n                        </app-repo-landscape-card>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</div>");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"search-form clr-form\">\n    <div class=\"clr-form-control\">\n        <div class=\"clr-control-container\">\n            <div class=\"clr-input-wrapper\">\n                <input type=\"text\" placeholder=\"Search Projects\" (keyup)=\"onTextChange($event)\" class=\"clr-input search-form__field\">\n                <clr-icon class=\"search-form__icon\" shape=\"search\"></clr-icon>\n            </div>\n        </div>\n    </div>\n</form>");
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
                    this.forks = obj && obj.forks || 0;
                    this.watchers_count = obj && obj.watchers_count || 0;
                    this.tags = obj && obj.tags || [];
                    this.url = obj && obj.svn_url || null;
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
            /* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm2015/clr-angular.js");
            /* harmony import */ var ngx_content_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-content-loading */ "./node_modules/ngx-content-loading/esm2015/ngx-content-loading.js");
            /* harmony import */ var _pipes_truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/truncate/truncate.pipe */ "./src/app/pipes/truncate/truncate.pipe.ts");
            /* harmony import */ var _components_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/repo-card/repo-card.component */ "./src/app/modules/cards/components/repo-card/repo-card.component.ts");
            /* harmony import */ var _components_repo_card_repo_card_skeleton_repo_card_skeleton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/repo-card/repo-card-skeleton/repo-card-skeleton.component */ "./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.ts");
            /* harmony import */ var _components_repo_landscape_card_repo_landscape_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/repo-landscape-card/repo-landscape-card.component */ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card.component.ts");
            /* harmony import */ var _components_repo_landscape_card_repo_landscape_card_skeleton_repo_landscape_card_skeleton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component */ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.ts");
            var CardsModule = /** @class */ (function () {
                function CardsModule() {
                }
                return CardsModule;
            }());
            CardsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_components_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_6__["RepoCardComponent"], _components_repo_landscape_card_repo_landscape_card_component__WEBPACK_IMPORTED_MODULE_8__["RepoLandscapeCardComponent"], _pipes_truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_5__["TruncatePipe"], _components_repo_card_repo_card_skeleton_repo_card_skeleton_component__WEBPACK_IMPORTED_MODULE_7__["RepoCardSkeletonComponent"], _components_repo_landscape_card_repo_landscape_card_skeleton_repo_landscape_card_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["RepoLandscapeCardSkeletonComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                        ngx_content_loading__WEBPACK_IMPORTED_MODULE_4__["NgxContentLoadingModule"]
                    ],
                    exports: [
                        _components_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_6__["RepoCardComponent"],
                        _components_repo_card_repo_card_skeleton_repo_card_skeleton_component__WEBPACK_IMPORTED_MODULE_7__["RepoCardSkeletonComponent"],
                        _components_repo_landscape_card_repo_landscape_card_component__WEBPACK_IMPORTED_MODULE_8__["RepoLandscapeCardComponent"],
                        _components_repo_landscape_card_repo_landscape_card_skeleton_repo_landscape_card_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["RepoLandscapeCardSkeletonComponent"]
                    ],
                    providers: []
                })
            ], CardsModule);
            /***/ 
        }),
        /***/ "./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.scss": 
        /*!*********************************************************************************************************!*\
          !*** ./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.scss ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FyZHMvY29tcG9uZW50cy9yZXBvLWNhcmQvcmVwby1jYXJkLXNrZWxldG9uL3JlcG8tY2FyZC1za2VsZXRvbi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: RepoCardSkeletonComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoCardSkeletonComponent", function () { return RepoCardSkeletonComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RepoCardSkeletonComponent = /** @class */ (function () {
                function RepoCardSkeletonComponent() {
                }
                RepoCardSkeletonComponent.prototype.ngOnInit = function () {
                };
                return RepoCardSkeletonComponent;
            }());
            RepoCardSkeletonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-repo-card-skeleton',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repo-card-skeleton.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repo-card-skeleton.component.scss */ "./src/app/modules/cards/components/repo-card/repo-card-skeleton/repo-card-skeleton.component.scss")).default]
                })
            ], RepoCardSkeletonComponent);
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
            /* harmony default export */ __webpack_exports__["default"] = (".repo-card .card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 335px;\n}\n.repo-card .card .card-block {\n  border-bottom: 0px;\n}\n.repo-card .card .card-block .card-text .language {\n  margin-top: 1rem;\n}\n.repo-card .card .card-block .card-text .status {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n}\n.repo-card .card .card-block .card-text .status span {\n  margin-right: 0.6rem;\n  vertical-align: top;\n}\n.repo-card .card .card-block .card-text .status .fork-icon {\n  transform: rotate(270deg);\n}\n.repo-card .card .card-footer {\n  border-top: 1px solid #ededed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJkcy9jb21wb25lbnRzL3JlcG8tY2FyZC9DOlxcUHJvamVjdHNcXEdpdEh1YlxcZ2l0LXByb2plY3RzLWFwcC9zcmNcXGFwcFxcbW9kdWxlc1xcY2FyZHNcXGNvbXBvbmVudHNcXHJlcG8tY2FyZFxccmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NhcmRzL2NvbXBvbmVudHMvcmVwby1jYXJkL3JlcG8tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0FSO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FEQ2dCO0VBQ0ksZ0JBQUE7QUNDcEI7QURDZ0I7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NwQjtBREFvQjtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUNFeEI7QURBb0I7RUFDSSx5QkFBQTtBQ0V4QjtBREdRO0VBQ0ksNkJBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FyZHMvY29tcG9uZW50cy9yZXBvLWNhcmQvcmVwby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG8tY2FyZCB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBoZWlnaHQ6IDMzNXB4O1xyXG4gICAgICAgIC5jYXJkLWJsb2Nre1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIC5jYXJkLXRleHR7XHJcbiAgICAgICAgICAgICAgICAubGFuZ3VhZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdGF0dXN7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JrLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLWZvb3RlcntcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGVkZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnJlcG8tY2FyZCAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAzMzVweDtcbn1cbi5yZXBvLWNhcmQgLmNhcmQgLmNhcmQtYmxvY2sge1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG4ucmVwby1jYXJkIC5jYXJkIC5jYXJkLWJsb2NrIC5jYXJkLXRleHQgLmxhbmd1YWdlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5yZXBvLWNhcmQgLmNhcmQgLmNhcmQtYmxvY2sgLmNhcmQtdGV4dCAuc3RhdHVzIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5yZXBvLWNhcmQgLmNhcmQgLmNhcmQtYmxvY2sgLmNhcmQtdGV4dCAuc3RhdHVzIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5yZXBvLWNhcmQgLmNhcmQgLmNhcmQtYmxvY2sgLmNhcmQtdGV4dCAuc3RhdHVzIC5mb3JrLWljb24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuLnJlcG8tY2FyZCAuY2FyZCAuY2FyZC1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VkZWRlZDtcbn0iXX0= */");
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
                    this.openState = false;
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
        /***/ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.scss": 
        /*!***************************************************************************************************************************************!*\
          !*** ./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.scss ***!
          \***************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FyZHMvY29tcG9uZW50cy9yZXBvLWxhbmRzY2FwZS1jYXJkL3JlcG8tbGFuZHNjYXBlLWNhcmQtc2tlbGV0b24vcmVwby1sYW5kc2NhcGUtY2FyZC1za2VsZXRvbi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.ts": 
        /*!*************************************************************************************************************************************!*\
          !*** ./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.ts ***!
          \*************************************************************************************************************************************/
        /*! exports provided: RepoLandscapeCardSkeletonComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoLandscapeCardSkeletonComponent", function () { return RepoLandscapeCardSkeletonComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RepoLandscapeCardSkeletonComponent = /** @class */ (function () {
                function RepoLandscapeCardSkeletonComponent() {
                }
                RepoLandscapeCardSkeletonComponent.prototype.ngOnInit = function () {
                };
                return RepoLandscapeCardSkeletonComponent;
            }());
            RepoLandscapeCardSkeletonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-repo-landscape-card-skeleton',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./repo-landscape-card-skeleton.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./repo-landscape-card-skeleton.component.scss */ "./src/app/modules/cards/components/repo-landscape-card/repo-landscape-card-skeleton/repo-landscape-card-skeleton.component.scss")).default]
                })
            ], RepoLandscapeCardSkeletonComponent);
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
            /* harmony default export */ __webpack_exports__["default"] = (".repo-landscape-card .card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 170px;\n}\n.repo-landscape-card .card .card-block {\n  border-bottom: 0px;\n}\n.repo-landscape-card .card .card-block .card-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.repo-landscape-card .card .card-block .card-title span {\n  margin-top: 0.4em;\n}\n.repo-landscape-card .card .card-block .card-title .status {\n  font-size: 0.583333rem;\n  color: #575757;\n  padding-top: 0.1rem;\n}\n.repo-landscape-card .card .card-block .card-title .status span {\n  margin-right: 0.6rem;\n  vertical-align: top;\n}\n.repo-landscape-card .card .card-block .card-title .status .fork-icon {\n  transform: rotate(270deg);\n}\n.repo-landscape-card .card .card-footer {\n  border-top: 1px solid #ededed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJkcy9jb21wb25lbnRzL3JlcG8tbGFuZHNjYXBlLWNhcmQvQzpcXFByb2plY3RzXFxHaXRIdWJcXGdpdC1wcm9qZWN0cy1hcHAvc3JjXFxhcHBcXG1vZHVsZXNcXGNhcmRzXFxjb21wb25lbnRzXFxyZXBvLWxhbmRzY2FwZS1jYXJkXFxyZXBvLWxhbmRzY2FwZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2NhcmRzL2NvbXBvbmVudHMvcmVwby1sYW5kc2NhcGUtY2FyZC9yZXBvLWxhbmRzY2FwZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDQVI7QURDUTtFQUNJLGtCQUFBO0FDQ1o7QURBWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDRWhCO0FERGdCO0VBQ0ksaUJBQUE7QUNHcEI7QUREZ0I7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0dwQjtBREZvQjtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUNJeEI7QURGb0I7RUFDSSx5QkFBQTtBQ0l4QjtBREVRO0VBQ0ksNkJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FyZHMvY29tcG9uZW50cy9yZXBvLWxhbmRzY2FwZS1jYXJkL3JlcG8tbGFuZHNjYXBlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwby1sYW5kc2NhcGUtY2FyZCB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIC5jYXJkLWJsb2Nre1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIC5jYXJkLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN0YXR1c3tcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNTgzMzMzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU3O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZm9yay1pY29ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtZm9vdGVye1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VkZWRlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIucmVwby1sYW5kc2NhcGUtY2FyZCAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cbi5yZXBvLWxhbmRzY2FwZS1jYXJkIC5jYXJkIC5jYXJkLWJsb2NrIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xufVxuLnJlcG8tbGFuZHNjYXBlLWNhcmQgLmNhcmQgLmNhcmQtYmxvY2sgLmNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucmVwby1sYW5kc2NhcGUtY2FyZCAuY2FyZCAuY2FyZC1ibG9jayAuY2FyZC10aXRsZSBzcGFuIHtcbiAgbWFyZ2luLXRvcDogMC40ZW07XG59XG4ucmVwby1sYW5kc2NhcGUtY2FyZCAuY2FyZCAuY2FyZC1ibG9jayAuY2FyZC10aXRsZSAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiAwLjU4MzMzM3JlbTtcbiAgY29sb3I6ICM1NzU3NTc7XG4gIHBhZGRpbmctdG9wOiAwLjFyZW07XG59XG4ucmVwby1sYW5kc2NhcGUtY2FyZCAuY2FyZCAuY2FyZC1ibG9jayAuY2FyZC10aXRsZSAuc3RhdHVzIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5yZXBvLWxhbmRzY2FwZS1jYXJkIC5jYXJkIC5jYXJkLWJsb2NrIC5jYXJkLXRpdGxlIC5zdGF0dXMgLmZvcmstaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4ucmVwby1sYW5kc2NhcGUtY2FyZCAuY2FyZCAuY2FyZC1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VkZWRlZDtcbn0iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".filters {\n  line-height: 1rem;\n  max-width: 13rem;\n  min-width: 9rem;\n  width: 18%;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 1rem 1rem 1rem;\n}\n.filters h5 {\n  margin-bottom: 1rem;\n}\n.filters .separator {\n  margin-bottom: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9maWx0ZXIvQzpcXFByb2plY3RzXFxHaXRIdWJcXGdpdC1wcm9qZWN0cy1hcHAvc3JjXFxhcHBcXG1vZHVsZXNcXHNlYXJjaFxcY29tcG9uZW50c1xcZmlsdGVyXFxmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURFSTtFQUNJLG1CQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NlYXJjaC9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyc3tcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gICAgbWF4LXdpZHRoOiAxM3JlbTtcclxuICAgIG1pbi13aWR0aDogOXJlbTtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDFyZW0gMXJlbTtcclxuXHJcbiAgICBoNXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXBhcmF0b3J7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgIH1cclxufSIsIi5maWx0ZXJzIHtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIG1heC13aWR0aDogMTNyZW07XG4gIG1pbi13aWR0aDogOXJlbTtcbiAgd2lkdGg6IDE4JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMS41cmVtIDFyZW0gMXJlbSAxcmVtO1xufVxuLmZpbHRlcnMgaDUge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmZpbHRlcnMgLnNlcGFyYXRvciB7XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59Il19 */");
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
                    this.onSortByChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.sortConfig = {
                        sort_by: 'created_at',
                        type: 'date',
                        order: 'asc'
                    };
                }
                FilterComponent.prototype.ngOnInit = function () {
                };
                FilterComponent.prototype.updateSortBy = function (sort_by, type) {
                    this.sortConfig['sort_by'] = sort_by;
                    this.sortConfig['type'] = type;
                    this.onSortByChange.emit(this.sortConfig);
                };
                FilterComponent.prototype.updateSortOrder = function (sort_order) {
                    this.sortConfig['order'] = sort_order;
                    this.onSortByChange.emit(this.sortConfig);
                };
                return FilterComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FilterComponent.prototype, "onSortByChange", void 0);
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
            /* harmony default export */ __webpack_exports__["default"] = ("::ng-deep app-list {\n  display: inherit;\n  flex-direction: inherit;\n  height: inherit;\n  background: inherit;\n}\n\n.list-container {\n  background: #fafafa;\n}\n\n.list-container .list-header {\n  padding: 0rem 1rem;\n}\n\n.list-container .list-header p {\n  margin-top: 0rem;\n}\n\n.list-container .list-summary {\n  padding: 0rem 1rem;\n}\n\n.list-container .list-summary p {\n  margin-top: 0rem;\n}\n\n.list-container .list-content {\n  display: flex;\n  flex: 1 1 auto;\n  min-height: 1px;\n}\n\n.list-container .list-content .list-content__filters {\n  flex: 0 0 auto;\n  order: -1;\n  overflow: hidden;\n}\n\n.list-container .list-content .list-content__results {\n  flex: 1 1 auto;\n  padding: 1rem;\n  overflow-y: hidden;\n}\n\n.list-container .list-content .list-content__results .summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\n.list-container .list-content .list-content__results .summary h4 {\n  margin-top: 0rem;\n}\n\n.list-container .list-content .list-content__results .summary .search-bar {\n  margin-left: auto;\n  margin-right: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9saXN0L0M6XFxQcm9qZWN0c1xcR2l0SHViXFxnaXQtcHJvamVjdHMtYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxzZWFyY2hcXGNvbXBvbmVudHNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURBSTtFQUNJLGtCQUFBO0FDRVI7O0FEQVE7RUFDSSxnQkFBQTtBQ0VaOztBREVJO0VBQ0ksa0JBQUE7QUNBUjs7QURFUTtFQUNJLGdCQUFBO0FDQVo7O0FESUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNGUjs7QURJUTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNGWjs7QURLUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNIWjs7QURLWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDSGhCOztBREtnQjtFQUNJLGdCQUFBO0FDSHBCOztBRE1nQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNKcEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NlYXJjaC9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBhcHAtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIC5saXN0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMHJlbSAxcmVtO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3Qtc3VtbWFyeSB7XHJcbiAgICAgICAgcGFkZGluZzogMHJlbSAxcmVtO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxpc3QtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XHJcblxyXG4gICAgICAgIC5saXN0LWNvbnRlbnRfX2ZpbHRlcnMge1xyXG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICAgICAgb3JkZXI6IC0xO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3QtY29udGVudF9fcmVzdWx0cyB7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAuc3VtbWFyeSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNlYXJjaC1iYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiOjpuZy1kZWVwIGFwcC1saXN0IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLmxpc3QtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3QtaGVhZGVyIHAge1xuICBtYXJnaW4tdG9wOiAwcmVtO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0LXN1bW1hcnkge1xuICBwYWRkaW5nOiAwcmVtIDFyZW07XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3Qtc3VtbWFyeSBwIHtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdC1jb250ZW50IC5saXN0LWNvbnRlbnRfX2ZpbHRlcnMge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgb3JkZXI6IC0xO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxpc3QtY29udGFpbmVyIC5saXN0LWNvbnRlbnQgLmxpc3QtY29udGVudF9fcmVzdWx0cyB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAxcmVtO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3QtY29udGVudCAubGlzdC1jb250ZW50X19yZXN1bHRzIC5zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4ubGlzdC1jb250YWluZXIgLmxpc3QtY29udGVudCAubGlzdC1jb250ZW50X19yZXN1bHRzIC5zdW1tYXJ5IGg0IHtcbiAgbWFyZ2luLXRvcDogMHJlbTtcbn1cbi5saXN0LWNvbnRhaW5lciAubGlzdC1jb250ZW50IC5saXN0LWNvbnRlbnRfX3Jlc3VsdHMgLnN1bW1hcnkgLnNlYXJjaC1iYXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufSJdfQ== */");
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
                    this.filteredRepos = [];
                    this.page = {
                        per_page: 30,
                        page: 1,
                        total: 0
                    };
                    this.scrollCount = 1;
                    this.infiniteScrollDisabled = false;
                    this.loading = false;
                    this.scrollTop = false;
                    this.defaultView = 'card';
                    this.isSkeltonLoading = true;
                    this.searchString = '';
                }
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var me = this;
                    this.isSkeltonLoading = true;
                    this.searchService.getOrgInfo().subscribe(function (res) {
                        _this.org = res;
                        _this.page['total'] = _this.org.repos_count;
                        me.getRepos(_this.page, function (data) {
                            me.repos = data;
                            me.filteredRepos = data;
                        });
                    }, function (err) {
                        _this.error = err.message;
                    });
                };
                ListComponent.prototype.handlePageChange = function (page) {
                    console.log(page);
                };
                ListComponent.prototype.getRepos = function (page, callback) {
                    var _this = this;
                    this.isSkeltonLoading = true;
                    this.searchService.getListOfAllRepos(page).subscribe(function (res) {
                        _this.isSkeltonLoading = false;
                        callback(res);
                    }, function (err) {
                        _this.error = err.message;
                    });
                };
                ListComponent.prototype.changeView = function (event) {
                    if (event && event.target.value)
                        this.defaultView = event.target.value;
                };
                ListComponent.prototype.handleSearch = function (event) {
                    var _this = this;
                    this.isSkeltonLoading = true;
                    this.searchString = event.value;
                    if (event.value == '') {
                        this.filteredRepos = this.repos; //Using already cached repos list instead of fetching it again
                        this.isSkeltonLoading = false;
                    }
                    else
                        this.searchService.doSearch(this.repos, event.value).then(function (res) {
                            _this.filteredRepos = res;
                            _this.isSkeltonLoading = false;
                        }).catch(function (error) { });
                };
                ListComponent.prototype.applySortBy = function (event) {
                    var _this = this;
                    this.isSkeltonLoading = true;
                    if (event.value == '') {
                        this.filteredRepos = this.repos; //Using already cached repos list instead of fetching it again
                        this.isSkeltonLoading = false;
                    }
                    else {
                        this.searchService.sortRepos(this.repos, event).then(function (res) {
                            _this.repos = res;
                            _this.filteredRepos = res;
                            _this.isSkeltonLoading = false;
                        }).catch(function (error) { });
                    }
                    //If search string exists apply search over sorted list
                    if (this.searchString !== '')
                        this.handleSearch({ value: this.searchString });
                };
                /**
               * Infinite scroll loading cards based on NGX Infinite scroll
               * Function must be called on parent container with root true
               * On scroll search called, scrollcount is increased by 1
               *
               * If results have hit last page disable scroll
               */
                ListComponent.prototype.onScrollDown = function () {
                    var me = this;
                    this.scrollCount++;
                    this.loading = true;
                    // this.isSkeltonLoading = true;
                    this.infiniteScrollDisabled = false;
                    if (this.repos && this.repos.length !== this.page.total) {
                        this.page['page'] = this.scrollCount;
                        this.getRepos(this.page, function (data) {
                            me.repos = __spread(me.repos, data);
                            me.filteredRepos = __spread(me.filteredRepos, data);
                        });
                    }
                    else {
                        this.loading = false;
                        this.infiniteScrollDisabled = true;
                        this.scrollTop = true;
                    }
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
            /* harmony default export */ __webpack_exports__["default"] = (".search-form {\n  padding: 0.25rem 0.25rem 0rem 0rem;\n}\n.search-form .search-form__field {\n  padding-right: 20px;\n}\n.search-form .search-form__icon {\n  margin-left: -17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZWFyY2gvY29tcG9uZW50cy9zZWFyY2gtYmFyL0M6XFxQcm9qZWN0c1xcR2l0SHViXFxnaXQtcHJvamVjdHMtYXBwL3NyY1xcYXBwXFxtb2R1bGVzXFxzZWFyY2hcXGNvbXBvbmVudHNcXHNlYXJjaC1iYXJcXHNlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUNDSjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBREVJO0VBQ0ksa0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VhcmNoL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1mb3Jte1xyXG4gICAgcGFkZGluZzowLjI1cmVtIDAuMjVyZW0gMHJlbSAwcmVtO1xyXG5cclxuICAgIC5zZWFyY2gtZm9ybV9fZmllbGR7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWZvcm1fX2ljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG4gICAgfVxyXG59IiwiLnNlYXJjaC1mb3JtIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjI1cmVtIDByZW0gMHJlbTtcbn1cbi5zZWFyY2gtZm9ybSAuc2VhcmNoLWZvcm1fX2ZpZWxkIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5zZWFyY2gtZm9ybSAuc2VhcmNoLWZvcm1fX2ljb24ge1xuICBtYXJnaW4tbGVmdDogLTE3cHg7XG59Il19 */");
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
                    this.onSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                SearchBarComponent.prototype.ngOnInit = function () {
                };
                SearchBarComponent.prototype.onTextChange = function (event) {
                    this.onSearchChange.emit({
                        value: event.target.value
                    });
                };
                return SearchBarComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], SearchBarComponent.prototype, "onSearchChange", void 0);
            SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search-bar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/search/components/search-bar/search-bar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/modules/search/components/search-bar/search-bar.component.scss")).default]
                })
            ], SearchBarComponent);
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
            /* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
            /* harmony import */ var _cards_cards_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cards/cards.module */ "./src/app/modules/cards/cards.module.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/modules/search/components/list/list.component.ts");
            /* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/modules/search/components/search-bar/search-bar.component.ts");
            /* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/modules/search/components/filter/filter.component.ts");
            /* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/search.service */ "./src/app/modules/search/services/search.service.ts");
            /* harmony import */ var _pipes_shortnumber_shortnumber_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/shortnumber/shortnumber.pipe */ "./src/app/pipes/shortnumber/shortnumber.pipe.ts");
            var routes = [{
                    path: '',
                    component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                    pathMatch: 'full'
                }];
            var SearchModule = /** @class */ (function () {
                function SearchModule() {
                }
                return SearchModule;
            }());
            SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _components_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_9__["FilterComponent"],
                        _pipes_shortnumber_shortnumber_pipe__WEBPACK_IMPORTED_MODULE_11__["ShortNumberPipe"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                        _cards_cards_module__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
                        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
                    ],
                    exports: [],
                    providers: [_services_search_service__WEBPACK_IMPORTED_MODULE_10__["SearchService"]]
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
                SearchService.prototype.doSearch = function (data, searchString) {
                    return new Promise(function (resolve, reject) {
                        resolve(data.filter(function (eachObj) {
                            return eachObj['name'].indexOf(searchString) != -1;
                        }));
                    });
                };
                SearchService.prototype.sortRepos = function (data, sortConfig) {
                    var sortBy = sortConfig['sort_by'];
                    var fieldType = sortConfig['type'];
                    return new Promise(function (resolve, reject) {
                        resolve(data.sort(function (a, b) {
                            var itemA = a[sortBy];
                            var itemB = b[sortBy];
                            if (fieldType === 'string') {
                                // Use toUpperCase() to ignore character casing
                                // And fallback to '' incase there is no value present
                                itemA = itemA ? '' : itemA.toUpperCase();
                                itemB = itemA ? '' : itemB.toUpperCase();
                            }
                            else if (fieldType === 'date') {
                                itemA = new Date(itemA);
                                itemB = new Date(itemB);
                            }
                            var comparison = 0;
                            if (sortConfig['order'] === 'asc') {
                                if (itemA > itemB) {
                                    comparison = 1;
                                }
                                else if (itemA < itemB) {
                                    comparison = -1;
                                }
                            }
                            if (sortConfig['order'] === 'desc') {
                                if (itemA < itemB) {
                                    comparison = 1;
                                }
                                else if (itemA > itemB) {
                                    comparison = -1;
                                }
                            }
                            return comparison;
                        }));
                    });
                };
                SearchService.prototype.compare = function (a, b) {
                    // Use toUpperCase() to ignore character casing
                    var itemA = a.band.toUpperCase();
                    var itemB = b.band.toUpperCase();
                    var comparison = 0;
                    if (itemA > itemB) {
                        comparison = 1;
                    }
                    else if (itemA < itemB) {
                        comparison = -1;
                    }
                    return comparison;
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
        }),
        /***/ "./src/app/pipes/shortnumber/shortnumber.pipe.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/pipes/shortnumber/shortnumber.pipe.ts ***!
          \*******************************************************/
        /*! exports provided: ShortNumberPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortNumberPipe", function () { return ShortNumberPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ShortNumberPipe = /** @class */ (function () {
                function ShortNumberPipe() {
                }
                ShortNumberPipe.prototype.transform = function (number, args) {
                    if (isNaN(number))
                        return null; // will only work value is a number
                    if (number === null)
                        return null;
                    if (number === 0)
                        return null;
                    var abs = Math.abs(number);
                    var rounder = Math.pow(10, 1);
                    var isNegative = number < 0; // will also work for Negetive numbers
                    var key = '';
                    var powers = [
                        { key: 'Q', value: Math.pow(10, 15) },
                        { key: 'T', value: Math.pow(10, 12) },
                        { key: 'B', value: Math.pow(10, 9) },
                        { key: 'M', value: Math.pow(10, 6) },
                        { key: 'K', value: 1000 }
                    ];
                    for (var i = 0; i < powers.length; i++) {
                        var reduced = abs / powers[i].value;
                        reduced = Math.round(reduced * rounder) / rounder;
                        if (reduced >= 1) {
                            abs = reduced;
                            key = powers[i].key;
                            break;
                        }
                    }
                    return (isNegative ? '-' : '') + abs + key;
                };
                return ShortNumberPipe;
            }());
            ShortNumberPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'shortNumber'
                })
            ], ShortNumberPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/truncate/truncate.pipe.ts": 
        /*!*************************************************!*\
          !*** ./src/app/pipes/truncate/truncate.pipe.ts ***!
          \*************************************************/
        /*! exports provided: TruncatePipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () { return TruncatePipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TruncatePipe = /** @class */ (function () {
                function TruncatePipe() {
                }
                TruncatePipe.prototype.transform = function (value, args) {
                    if (value) {
                        var limit = args.length > 0 ? parseInt(args[0], 10) : 10;
                        var trail = args.length > 1 ? args[1] : '...';
                        var trimString = value.length > limit ? value.substring(0, limit) : value;
                        return value.length > limit ? trimString + trail : value;
                    }
                    return value;
                };
                return TruncatePipe;
            }());
            TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'truncate'
                })
            ], TruncatePipe);
            /***/ 
        })
    }]);
//# sourceMappingURL=modules-search-search-module-es2015.js.map
//# sourceMappingURL=modules-search-search-module-es5.js.map
//# sourceMappingURL=modules-search-search-module-es5.js.map