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

// EXTERNAL MODULE: consume shared module (default) @angular/router@=17.3.9 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(2999);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js
var taiga_ui_addon_doc = __webpack_require__(8508);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-utils.js + 76 modules
var taiga_ui_addon_doc_utils = __webpack_require__(1583);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(1974);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=17.3.9 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(6525);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-components.js + 93 modules
var taiga_ui_addon_doc_components = __webpack_require__(3170);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/react-child/react-child.component.ts




let ReactChildComponent = /*#__PURE__*/(() => {
  class ReactChildComponent {
    static #_ = this.ɵfac = function ReactChildComponent_Factory(t) {
      return new (t || ReactChildComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
      type: ReactChildComponent,
      selectors: [["react-child"]],
      decls: 9,
      vars: 0,
      consts: [["header", "React Child"], ["tuiLink", "", "routerLink", "/react-installation"]],
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
          core_mjs_["ɵɵtext"](8, "React package installation");
          core_mjs_["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [taiga_ui_core_components_link/* TuiLinkComponent */.E, taiga_ui_addon_doc_components/* TuiDocPageComponent */.Pt, router_mjs_.RouterLink],
      changeDetection: 0
    });
  }
  return ReactChildComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/react-child/react-child.module.ts






let ReactChildModule = /*#__PURE__*/(() => {
  class ReactChildModule {
    static #_ = this.ɵfac = function ReactChildModule_Factory(t) {
      return new (t || ReactChildModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
      type: ReactChildModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
      imports: [taiga_ui_core_components_link/* TuiLinkModule */.l, taiga_ui_addon_doc.TuiAddonDocModule, router_mjs_.RouterModule.forChild((0,taiga_ui_addon_doc_utils/* tuiGenerateRoutes */.CC)(ReactChildComponent))]
    });
  }
  return ReactChildModule;
})();

/***/ })

}]);