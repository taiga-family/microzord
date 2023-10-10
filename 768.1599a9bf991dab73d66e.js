"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[768],{

/***/ 5768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReactInstallationModule: () => (/* binding */ ReactInstallationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2015/router.js)
var router_js_ = __webpack_require__(2541);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js + 166 modules
var taiga_ui_addon_doc = __webpack_require__(6154);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(2847);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(8312);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/react-installation/react-installation.component.ts


let ReactInstallationComponent = /*#__PURE__*/(() => {
  class ReactInstallationComponent {}
  ReactInstallationComponent.ɵfac = function ReactInstallationComponent_Factory(t) {
    return new (t || ReactInstallationComponent)();
  };
  ReactInstallationComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: ReactInstallationComponent,
    selectors: [["react-installation"]],
    decls: 12,
    vars: 0,
    consts: [["header", "React Installation"]],
    template: function ReactInstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵelementStart"](0, "tui-doc-page", 0);
        core_js_["ɵɵelementStart"](1, "section");
        core_js_["ɵɵelementStart"](2, "h2");
        core_js_["ɵɵtext"](3, "Package installation");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](4, "p");
        core_js_["ɵɵtext"](5, "Install the core package if you do not have it yet:");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](6, "code");
        core_js_["ɵɵtext"](7, "npm i @microzord/core");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](8, "p");
        core_js_["ɵɵtext"](9, "Install React package for simplifying working with React:");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](10, "code");
        core_js_["ɵɵtext"](11, "npm i @microzord/react");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
      }
    },
    directives: [taiga_ui_addon_doc/* TuiDocPageComponent */.qo],
    styles: [""],
    changeDetection: 0
  });
  return ReactInstallationComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/react-installation/react-installation.module.ts






let ReactInstallationModule = /*#__PURE__*/(() => {
  class ReactInstallationModule {}
  ReactInstallationModule.ɵfac = function ReactInstallationModule_Factory(t) {
    return new (t || ReactInstallationModule)();
  };
  ReactInstallationModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: ReactInstallationModule
  });
  ReactInstallationModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[taiga_ui_core_components_link/* TuiLinkModule */.j, taiga_ui_addon_doc/* TuiAddonDocModule */.fV, router_js_.RouterModule.forChild((0,taiga_ui_addon_doc/* generateRoutes */.iY)(ReactInstallationComponent))]]
  });
  return ReactInstallationModule;
})();

/***/ })

}]);