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
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/react-installation/react-installation.component.ts


let ReactInstallationComponent = /*#__PURE__*/(() => {
  class ReactInstallationComponent {
    static {
      this.ɵfac = function ReactInstallationComponent_Factory(t) {
        return new (t || ReactInstallationComponent)();
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
        type: ReactInstallationComponent,
        selectors: [["react-installation"]],
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
        dependencies: [taiga_ui_addon_doc_components/* TuiDocPageComponent */.Pt],
        changeDetection: 0
      });
    }
  }
  return ReactInstallationComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/react-installation/react-installation.module.ts






let ReactInstallationModule = /*#__PURE__*/(() => {
  class ReactInstallationModule {
    static {
      this.ɵfac = function ReactInstallationModule_Factory(t) {
        return new (t || ReactInstallationModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
        type: ReactInstallationModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
        imports: [taiga_ui_core_components_link/* TuiLinkModule */.l, taiga_ui_addon_doc.TuiAddonDocModule, router_mjs_.RouterModule.forChild((0,taiga_ui_addon_doc_utils/* tuiGenerateRoutes */.CC)(ReactInstallationComponent))]
      });
    }
  }
  return ReactInstallationModule;
})();

/***/ })

}]);