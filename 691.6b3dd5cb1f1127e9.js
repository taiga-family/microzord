"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[691],{

/***/ 4691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NativeInstallationModule: () => (/* binding */ NativeInstallationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=17.3.12 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(7397);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js
var taiga_ui_addon_doc = __webpack_require__(8508);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-utils.js + 76 modules
var taiga_ui_addon_doc_utils = __webpack_require__(1583);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(1974);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=17.3.12 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(9131);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-components.js + 93 modules
var taiga_ui_addon_doc_components = __webpack_require__(3170);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/native-installation/native-installation.component.ts


let NativeInstallationComponent = /*#__PURE__*/(() => {
  var _NativeInstallationComponent;
  class NativeInstallationComponent {}
  _NativeInstallationComponent = NativeInstallationComponent;
  _NativeInstallationComponent.ɵfac = function NativeInstallationComponent_Factory(t) {
    return new (t || _NativeInstallationComponent)();
  };
  _NativeInstallationComponent.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
    type: _NativeInstallationComponent,
    selectors: [["native-installation"]],
    decls: 8,
    vars: 0,
    consts: [["header", "Native JS Installation"]],
    template: function NativeInstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "section")(2, "h2");
        core_mjs_["ɵɵtext"](3, "Package installation");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](4, "p");
        core_mjs_["ɵɵtext"](5, "Install the core package:");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](6, "code");
        core_mjs_["ɵɵtext"](7, "npm i @microzord/core");
        core_mjs_["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [taiga_ui_addon_doc_components/* TuiDocPageComponent */.Pt],
    encapsulation: 2,
    changeDetection: 0
  });
  return NativeInstallationComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/native-installation/native-installation.module.ts






let NativeInstallationModule = /*#__PURE__*/(() => {
  var _NativeInstallationModule;
  class NativeInstallationModule {}
  _NativeInstallationModule = NativeInstallationModule;
  _NativeInstallationModule.ɵfac = function NativeInstallationModule_Factory(t) {
    return new (t || _NativeInstallationModule)();
  };
  _NativeInstallationModule.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
    type: _NativeInstallationModule
  });
  _NativeInstallationModule.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
    imports: [taiga_ui_core_components_link/* TuiLinkModule */.l, taiga_ui_addon_doc.TuiAddonDocModule, router_mjs_.RouterModule.forChild((0,taiga_ui_addon_doc_utils/* tuiGenerateRoutes */.CC)(NativeInstallationComponent))]
  });
  return NativeInstallationModule;
})();

/***/ })

}]);