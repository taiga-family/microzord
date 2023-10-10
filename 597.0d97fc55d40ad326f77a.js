"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[597],{

/***/ 9597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NativeInstallationModule: () => (/* binding */ NativeInstallationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2015/router.js)
var router_js_ = __webpack_require__(2541);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js + 73 modules
var taiga_ui_addon_doc = __webpack_require__(9052);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(2847);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(8312);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/native-installation/native-installation.component.ts


let NativeInstallationComponent = /*#__PURE__*/(() => {
  class NativeInstallationComponent {}
  NativeInstallationComponent.ɵfac = function NativeInstallationComponent_Factory(t) {
    return new (t || NativeInstallationComponent)();
  };
  NativeInstallationComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: NativeInstallationComponent,
    selectors: [["native-installation"]],
    decls: 8,
    vars: 0,
    consts: [["header", "Native JS Installation"]],
    template: function NativeInstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵelementStart"](0, "tui-doc-page", 0);
        core_js_["ɵɵelementStart"](1, "section");
        core_js_["ɵɵelementStart"](2, "h2");
        core_js_["ɵɵtext"](3, "Package installation");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](4, "p");
        core_js_["ɵɵtext"](5, "Install the core package:");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](6, "code");
        core_js_["ɵɵtext"](7, "npm i @microzord/core");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
      }
    },
    directives: [taiga_ui_addon_doc/* TuiDocPageComponent */.qo],
    styles: [""],
    changeDetection: 0
  });
  return NativeInstallationComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/native-installation/native-installation.module.ts






let NativeInstallationModule = /*#__PURE__*/(() => {
  class NativeInstallationModule {}
  NativeInstallationModule.ɵfac = function NativeInstallationModule_Factory(t) {
    return new (t || NativeInstallationModule)();
  };
  NativeInstallationModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: NativeInstallationModule
  });
  NativeInstallationModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[taiga_ui_core_components_link/* TuiLinkModule */.j, taiga_ui_addon_doc/* TuiAddonDocModule */.fV, router_js_.RouterModule.forChild((0,taiga_ui_addon_doc/* generateRoutes */.iY)(NativeInstallationComponent))]]
  });
  return NativeInstallationModule;
})();

/***/ })

}]);