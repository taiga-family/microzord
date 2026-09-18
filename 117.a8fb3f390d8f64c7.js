"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[117],{

/***/ 3117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReactInstallationModule: () => (/* binding */ ReactInstallationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(3010);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(1316);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2022/taiga-ui-addon-doc-components.mjs + 101 modules
var taiga_ui_addon_doc_components = __webpack_require__(3358);
;// ./apps/demo/src/app/modules/react-installation/react-installation.component.ts


let ReactInstallationComponent = /*#__PURE__*/(() => {
  var _ReactInstallationComponent;
  class ReactInstallationComponent {}
  _ReactInstallationComponent = ReactInstallationComponent;
  _ReactInstallationComponent.ɵfac = function ReactInstallationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactInstallationComponent)();
  };
  _ReactInstallationComponent.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
    type: _ReactInstallationComponent,
    selectors: [["react-installation"]],
    standalone: false,
    decls: 12,
    vars: 0,
    consts: [["header", "React Installation"]],
    template: function ReactInstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "section")(2, "h2");
        core_mjs_["ɵɵtext"](3, "Package installation");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](4, "p");
        core_mjs_["ɵɵtext"](5, "Install the core package if you do not have it yet:");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](6, "code");
        core_mjs_["ɵɵtext"](7, "npm i @microzord/core");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](8, "p");
        core_mjs_["ɵɵtext"](9, "Install React package for simplifying working with React:");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](10, "code");
        core_mjs_["ɵɵtext"](11, "npm i @microzord/react");
        core_mjs_["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [taiga_ui_addon_doc_components/* TuiDocPage */.e3],
    encapsulation: 2,
    changeDetection: 0
  });
  return ReactInstallationComponent;
})();
;// ./apps/demo/src/app/modules/react-installation/react-installation.module.ts






let ReactInstallationModule = /*#__PURE__*/(() => {
  var _ReactInstallationModule;
  class ReactInstallationModule {}
  _ReactInstallationModule = ReactInstallationModule;
  _ReactInstallationModule.ɵfac = function ReactInstallationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactInstallationModule)();
  };
  _ReactInstallationModule.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
    type: _ReactInstallationModule
  });
  _ReactInstallationModule.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
    imports: [taiga_ui_addon_doc_components/* TuiDocAPI */.mh, taiga_ui_addon_doc_components/* TuiDocAPIItem */.sN, taiga_ui_addon_doc_components/* TuiDocCopy */.ye, taiga_ui_addon_doc_components/* TuiDocTab */.mg, taiga_ui_addon_doc_components/* TuiDocDemo */.aD, taiga_ui_addon_doc_components/* TuiDocCode */.MN, taiga_ui_addon_doc_components/* TuiDocExample */.FS, taiga_ui_addon_doc_components/* TuiDocPage */.e3, taiga_ui_addon_doc_components/* TuiDocNavigation */.pz, taiga_ui_addon_doc_components/* TuiDocMain */.gf, router_mjs_.RouterModule.forChild([{
      path: '',
      component: ReactInstallationComponent
    }])]
  });
  return ReactInstallationModule;
})();

/***/ })

}]);