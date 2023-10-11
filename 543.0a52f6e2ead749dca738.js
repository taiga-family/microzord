"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[543],{

/***/ 6543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReactChildModule: () => (/* binding */ ReactChildModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2015/router.js)
var router_js_ = __webpack_require__(2541);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js + 166 modules
var taiga_ui_addon_doc = __webpack_require__(6154);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(2847);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(8312);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/react-child/react-child.component.ts




let ReactChildComponent = /*#__PURE__*/(() => {
  class ReactChildComponent {}
  ReactChildComponent.ɵfac = function ReactChildComponent_Factory(t) {
    return new (t || ReactChildComponent)();
  };
  ReactChildComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: ReactChildComponent,
    selectors: [["react-child"]],
    decls: 9,
    vars: 0,
    consts: [["header", "React Child"], ["tuiLink", "", "routerLink", "/react-installation"]],
    template: function ReactChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵelementStart"](0, "tui-doc-page", 0);
        core_js_["ɵɵelementStart"](1, "p");
        core_js_["ɵɵtext"](2, "Here you can read how to setup your application to be inserted into another app.");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](3, "section");
        core_js_["ɵɵelementStart"](4, "h2");
        core_js_["ɵɵtext"](5, "Installation");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](6, " See ");
        core_js_["ɵɵelementStart"](7, "a", 1);
        core_js_["ɵɵtext"](8, "React package installation");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
      }
    },
    directives: [taiga_ui_addon_doc/* TuiDocPageComponent */.qo, taiga_ui_core_components_link/* TuiLinkComponent */.V, router_js_.RouterLinkWithHref],
    styles: [""],
    changeDetection: 0
  });
  return ReactChildComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/react-child/react-child.module.ts






let ReactChildModule = /*#__PURE__*/(() => {
  class ReactChildModule {}
  ReactChildModule.ɵfac = function ReactChildModule_Factory(t) {
    return new (t || ReactChildModule)();
  };
  ReactChildModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: ReactChildModule
  });
  ReactChildModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[taiga_ui_core_components_link/* TuiLinkModule */.j, taiga_ui_addon_doc/* TuiAddonDocModule */.fV, router_js_.RouterModule.forChild((0,taiga_ui_addon_doc/* generateRoutes */.iY)(ReactChildComponent))]]
  });
  return ReactChildModule;
})();

/***/ })

}]);