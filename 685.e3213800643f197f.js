"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[685],{

/***/ 685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AngularChildModule: () => (/* binding */ AngularChildModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(3010);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(1316);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var taiga_ui_core_components_link = __webpack_require__(4724);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2022/taiga-ui-addon-doc-components.mjs + 101 modules
var taiga_ui_addon_doc_components = __webpack_require__(3358);
;// ./apps/demo/src/app/modules/angular-child/angular-child.component.ts




const CODE = `import {createApp} from '@microzord/angular/child';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

export const myRemoteApp = createApp(
  opts => platformBrowserDynamic().bootstrapModule(AppModule, opts),
  'my-remote-app',
);
`;
let AngularChildComponent = /*#__PURE__*/(() => {
  var _AngularChildComponent;
  class AngularChildComponent {
    constructor() {
      this.code = CODE;
    }
  }
  _AngularChildComponent = AngularChildComponent;
  _AngularChildComponent.ɵfac = function AngularChildComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularChildComponent)();
  };
  _AngularChildComponent.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
    type: _AngularChildComponent,
    selectors: [["angular-child"]],
    standalone: false,
    decls: 27,
    vars: 1,
    consts: [["header", "Angular Child"], ["routerLink", "/angular-host", "tuiLink", ""], ["routerLink", "/angular-installation", "tuiLink", ""], ["filename", "my-remote-app.ts", 3, "code"]],
    template: function AngularChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
        core_mjs_["ɵɵtext"](2, "Here you can read how to setup your application to be inserted into another app.");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](3, "p");
        core_mjs_["ɵɵtext"](4, " If you want to make your Angular application a host of other applications, see ");
        core_mjs_["ɵɵelementStart"](5, "a", 1);
        core_mjs_["ɵɵtext"](6, " Angular as a host ");
        core_mjs_["ɵɵelementEnd"]()();
        core_mjs_["ɵɵelementStart"](7, "section")(8, "h2");
        core_mjs_["ɵɵtext"](9, "Installation");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵtext"](10, " See ");
        core_mjs_["ɵɵelementStart"](11, "a", 2);
        core_mjs_["ɵɵtext"](12, " Angular package installation ");
        core_mjs_["ɵɵelementEnd"]()();
        core_mjs_["ɵɵelementStart"](13, "section")(14, "h2");
        core_mjs_["ɵɵtext"](15, "Replace the platform");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](16, "p");
        core_mjs_["ɵɵtext"](17, " You should create file with an application and expose it via module federation. Microzord provides ");
        core_mjs_["ɵɵelementStart"](18, "code");
        core_mjs_["ɵɵtext"](19, "createApp");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵtext"](20, " helper to convert your application to microzord child application. ");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelement"](21, "tui-doc-code", 3);
        core_mjs_["ɵɵelementStart"](22, "p");
        core_mjs_["ɵɵtext"](23, " Now you can build your application as usual and dist folder of your app will contain ");
        core_mjs_["ɵɵelementStart"](24, "strong");
        core_mjs_["ɵɵtext"](25, "microzord.json");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵtext"](26, " assets map. ");
        core_mjs_["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        core_mjs_["ɵɵadvance"](21);
        core_mjs_["ɵɵproperty"]("code", ctx.code);
      }
    },
    dependencies: [taiga_ui_core_components_link/* TuiLink */.Jc, taiga_ui_addon_doc_components/* TuiDocCode */.MN, taiga_ui_addon_doc_components/* TuiDocPage */.e3, router_mjs_.RouterLink],
    encapsulation: 2,
    changeDetection: 0
  });
  return AngularChildComponent;
})();
;// ./apps/demo/src/app/modules/angular-child/angular-child.module.ts






let AngularChildModule = /*#__PURE__*/(() => {
  var _AngularChildModule;
  class AngularChildModule {}
  _AngularChildModule = AngularChildModule;
  _AngularChildModule.ɵfac = function AngularChildModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularChildModule)();
  };
  _AngularChildModule.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
    type: _AngularChildModule
  });
  _AngularChildModule.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
    imports: [taiga_ui_addon_doc_components/* TuiDocAPI */.mh, taiga_ui_addon_doc_components/* TuiDocAPIItem */.sN, taiga_ui_addon_doc_components/* TuiDocCopy */.ye, taiga_ui_addon_doc_components/* TuiDocTab */.mg, taiga_ui_addon_doc_components/* TuiDocDemo */.aD, taiga_ui_addon_doc_components/* TuiDocCode */.MN, taiga_ui_addon_doc_components/* TuiDocExample */.FS, taiga_ui_addon_doc_components/* TuiDocPage */.e3, taiga_ui_addon_doc_components/* TuiDocNavigation */.pz, taiga_ui_addon_doc_components/* TuiDocMain */.gf, router_mjs_.RouterModule.forChild([{
      path: '',
      component: AngularChildComponent
    }])]
  });
  return AngularChildModule;
})();

/***/ })

}]);