"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[551],{

/***/ 4551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReactChildModule: () => (/* binding */ ReactChildModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(3010);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(1316);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var taiga_ui_core_components_link = __webpack_require__(4724);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2022/taiga-ui-addon-doc-components.mjs + 101 modules
var taiga_ui_addon_doc_components = __webpack_require__(3358);
;// ./apps/demo/src/app/modules/react-child/react-child.component.ts




let ReactChildComponent = /*#__PURE__*/(() => {
  var _ReactChildComponent;
  class ReactChildComponent {}
  _ReactChildComponent = ReactChildComponent;
  _ReactChildComponent.ɵfac = function ReactChildComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactChildComponent)();
  };
  _ReactChildComponent.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
    type: _ReactChildComponent,
    selectors: [["react-child"]],
    standalone: false,
    decls: 9,
    vars: 0,
    consts: [["header", "React Child"], ["routerLink", "/react-installation", "tuiLink", ""]],
    template: function ReactChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
        core_mjs_["ɵɵtext"](2, "Here you can read how to setup your application to be inserted into another app.");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](3, "section")(4, "h2");
        core_mjs_["ɵɵtext"](5, "Installation");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵtext"](6, " See ");
        core_mjs_["ɵɵelementStart"](7, "a", 1);
        core_mjs_["ɵɵtext"](8, " React package installation ");
        core_mjs_["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [taiga_ui_core_components_link/* TuiLink */.Jc, taiga_ui_addon_doc_components/* TuiDocPage */.e3, router_mjs_.RouterLink],
    encapsulation: 2,
    changeDetection: 0
  });
  return ReactChildComponent;
})();
;// ./apps/demo/src/app/modules/react-child/react-child.module.ts






let ReactChildModule = /*#__PURE__*/(() => {
  var _ReactChildModule;
  class ReactChildModule {}
  _ReactChildModule = ReactChildModule;
  _ReactChildModule.ɵfac = function ReactChildModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactChildModule)();
  };
  _ReactChildModule.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
    type: _ReactChildModule
  });
  _ReactChildModule.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
    imports: [taiga_ui_addon_doc_components/* TuiDocAPI */.mh, taiga_ui_addon_doc_components/* TuiDocAPIItem */.sN, taiga_ui_addon_doc_components/* TuiDocCopy */.ye, taiga_ui_addon_doc_components/* TuiDocTab */.mg, taiga_ui_addon_doc_components/* TuiDocDemo */.aD, taiga_ui_addon_doc_components/* TuiDocCode */.MN, taiga_ui_addon_doc_components/* TuiDocExample */.FS, taiga_ui_addon_doc_components/* TuiDocPage */.e3, taiga_ui_addon_doc_components/* TuiDocNavigation */.pz, taiga_ui_addon_doc_components/* TuiDocMain */.gf, router_mjs_.RouterModule.forChild([{
      path: '',
      component: ReactChildComponent
    }])]
  });
  return ReactChildModule;
})();

/***/ })

}]);