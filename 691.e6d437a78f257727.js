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

// EXTERNAL MODULE: consume shared module (default) @angular/router@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(3010);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(1316);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2022/taiga-ui-addon-doc-components.mjs + 101 modules
var taiga_ui_addon_doc_components = __webpack_require__(3358);
;// ./apps/demo/src/app/modules/native-installation/native-installation.component.ts


let NativeInstallationComponent = /*#__PURE__*/(() => {
  var _NativeInstallationComponent;
  class NativeInstallationComponent {}
  _NativeInstallationComponent = NativeInstallationComponent;
  _NativeInstallationComponent.ɵfac = function NativeInstallationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeInstallationComponent)();
  };
  _NativeInstallationComponent.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
    type: _NativeInstallationComponent,
    selectors: [["native-installation"]],
    standalone: false,
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
    dependencies: [taiga_ui_addon_doc_components/* TuiDocPage */.e3],
    encapsulation: 2,
    changeDetection: 0
  });
  return NativeInstallationComponent;
})();
;// ./apps/demo/src/app/modules/native-installation/native-installation.module.ts






let NativeInstallationModule = /*#__PURE__*/(() => {
  var _NativeInstallationModule;
  class NativeInstallationModule {}
  _NativeInstallationModule = NativeInstallationModule;
  _NativeInstallationModule.ɵfac = function NativeInstallationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeInstallationModule)();
  };
  _NativeInstallationModule.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
    type: _NativeInstallationModule
  });
  _NativeInstallationModule.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
    imports: [taiga_ui_addon_doc_components/* TuiDocAPI */.mh, taiga_ui_addon_doc_components/* TuiDocAPIItem */.sN, taiga_ui_addon_doc_components/* TuiDocCopy */.ye, taiga_ui_addon_doc_components/* TuiDocTab */.mg, taiga_ui_addon_doc_components/* TuiDocDemo */.aD, taiga_ui_addon_doc_components/* TuiDocCode */.MN, taiga_ui_addon_doc_components/* TuiDocExample */.FS, taiga_ui_addon_doc_components/* TuiDocPage */.e3, taiga_ui_addon_doc_components/* TuiDocNavigation */.pz, taiga_ui_addon_doc_components/* TuiDocMain */.gf, router_mjs_.RouterModule.forChild([{
      path: '',
      component: NativeInstallationComponent
    }])]
  });
  return NativeInstallationModule;
})();

/***/ })

}]);