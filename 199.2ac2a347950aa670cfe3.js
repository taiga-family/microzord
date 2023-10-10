"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[199],{

/***/ 8727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AssetMapModule: () => (/* binding */ AssetMapModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2015/router.js)
var router_js_ = __webpack_require__(2541);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js + 166 modules
var taiga_ui_addon_doc = __webpack_require__(6154);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(2847);
// EXTERNAL MODULE: ./apps/demo/src/app/shared/host-child-warning/host-child-warning.module.ts
var host_child_warning_module = __webpack_require__(6099);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(8312);
// EXTERNAL MODULE: ./apps/demo/src/app/shared/host-child-warning/host-child-warning.component.ts
var host_child_warning_component = __webpack_require__(5773);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/asset-map/asset-map.component.ts





let AssetMapComponent = /*#__PURE__*/(() => {
  class AssetMapComponent {}
  AssetMapComponent.ɵfac = function AssetMapComponent_Factory(t) {
    return new (t || AssetMapComponent)();
  };
  AssetMapComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: AssetMapComponent,
    selectors: [["asset-map"]],
    decls: 19,
    vars: 0,
    consts: [["header", "What is an asset map"], [1, "tui-space_top-4"], ["tuiLink", "", "routerLink", "/native-child"], ["tuiLink", "", "routerLink", "/angular-child"], ["tuiLink", "", "routerLink", "/react-child"]],
    template: function AssetMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵelementStart"](0, "tui-doc-page", 0);
        core_js_["ɵɵelementStart"](1, "p");
        core_js_["ɵɵtext"](2, " Asset map is a simple JSON file that contains an array of all files included into child app. Child app is an application that you can insert into other application that is called host application. ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelement"](3, "host-child-warning", 1);
        core_js_["ɵɵelementStart"](4, "section");
        core_js_["ɵɵelementStart"](5, "h2");
        core_js_["ɵɵtext"](6, "How to make an asset map");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](7, "p");
        core_js_["ɵɵtext"](8, " Asset maps are generated automatically by microzord in your usual building process. See instructions for a framework that you use to make a child app: ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](9, "ul");
        core_js_["ɵɵelementStart"](10, "li");
        core_js_["ɵɵelementStart"](11, "a", 2);
        core_js_["ɵɵtext"](12, "Native JS app as a child");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](13, "li");
        core_js_["ɵɵelementStart"](14, "a", 3);
        core_js_["ɵɵtext"](15, "Angular app as a child");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](16, "li");
        core_js_["ɵɵelementStart"](17, "a", 4);
        core_js_["ɵɵtext"](18, "React app as a child");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
      }
    },
    directives: [taiga_ui_addon_doc/* TuiDocPageComponent */.qo, host_child_warning_component/* HostChildWarningComponent */.v, taiga_ui_core_components_link/* TuiLinkComponent */.V, router_js_.RouterLinkWithHref],
    styles: [""],
    changeDetection: 0
  });
  return AssetMapComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/asset-map/asset-map.module.ts







let AssetMapModule = /*#__PURE__*/(() => {
  class AssetMapModule {}
  AssetMapModule.ɵfac = function AssetMapModule_Factory(t) {
    return new (t || AssetMapModule)();
  };
  AssetMapModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: AssetMapModule
  });
  AssetMapModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[taiga_ui_core_components_link/* TuiLinkModule */.j, taiga_ui_addon_doc/* TuiAddonDocModule */.fV, host_child_warning_module/* HostChildWarningModule */.$, router_js_.RouterModule.forChild((0,taiga_ui_addon_doc/* generateRoutes */.iY)(AssetMapComponent))]]
  });
  return AssetMapModule;
})();

/***/ })

}]);