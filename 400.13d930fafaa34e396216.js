"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[400],{

/***/ 4400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AngularChildModule: () => (/* binding */ AngularChildModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2015/router.js)
var router_js_ = __webpack_require__(2541);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js + 73 modules
var taiga_ui_addon_doc = __webpack_require__(9052);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(2847);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(8312);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-child/angular-child.component.ts




const REPLACING_PLATFORM = `import {platformMicrozordChild} from '@microzord/angular/child';
import {enableProdMode} from '@microzord/angular/child';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformMicrozordChild('microzord-app-name', 'app-root-tag')
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
`;
let AngularChildComponent = /*#__PURE__*/(() => {
  class AngularChildComponent {
    constructor() {
      this.replacingPlatform = REPLACING_PLATFORM;
    }
  }
  AngularChildComponent.ɵfac = function AngularChildComponent_Factory(t) {
    return new (t || AngularChildComponent)();
  };
  AngularChildComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: AngularChildComponent,
    selectors: [["angular-child"]],
    decls: 36,
    vars: 1,
    consts: [["header", "Angular Child"], ["tuiLink", "", "routerLink", "/angular-host"], ["tuiLink", "", "routerLink", "/angular-installation"], ["tuiLink", "", "target", "_blank", "routerLink", "/asset-map"], ["filename", "app.module.ts", 3, "code"], [1, "tui-list", "tui-list_large"], [1, "tui-list__item"]],
    template: function AngularChildComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵelementStart"](0, "tui-doc-page", 0);
        core_js_["ɵɵelementStart"](1, "p");
        core_js_["ɵɵtext"](2, "Here you can read how to setup your application to be inserted into another app.");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](3, "p");
        core_js_["ɵɵtext"](4, " If you want to make your Angular application a host of other applications, see ");
        core_js_["ɵɵelementStart"](5, "a", 1);
        core_js_["ɵɵtext"](6, "Angular as a host");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](7, "section");
        core_js_["ɵɵelementStart"](8, "h2");
        core_js_["ɵɵtext"](9, "Installation");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](10, " See ");
        core_js_["ɵɵelementStart"](11, "a", 2);
        core_js_["ɵɵtext"](12, "Angular package installation");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](13, "section");
        core_js_["ɵɵelementStart"](14, "h2");
        core_js_["ɵɵtext"](15, "Replace the platform");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](16, "p");
        core_js_["ɵɵtext"](17, " Microzord provides its own Angular platform and ");
        core_js_["ɵɵelementStart"](18, "code");
        core_js_["ɵɵtext"](19, "enableProdMode");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](20, " functions. It does not change default platform behaviour, so you can still build and use your application separately, but adds ");
        core_js_["ɵɵelementStart"](21, "a", 3);
        core_js_["ɵɵtext"](22, "asset maps");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](23, " for microzord. ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelement"](24, "tui-doc-code", 4);
        core_js_["ɵɵelementStart"](25, "p");
        core_js_["ɵɵtext"](26, " Now you can build your application as usual and dist folder of your app will contain ");
        core_js_["ɵɵelementStart"](27, "strong");
        core_js_["ɵɵtext"](28, "microzord.json");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](29, " assets map. ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](30, "section");
        core_js_["ɵɵelementStart"](31, "h2");
        core_js_["ɵɵtext"](32, "What to do with the map");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](33, "ul", 5);
        core_js_["ɵɵelementStart"](34, "li", 6);
        core_js_["ɵɵtext"](35, "You can integrate a child app ...");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        core_js_["ɵɵadvance"](24);
        core_js_["ɵɵproperty"]("code", ctx.replacingPlatform);
      }
    },
    directives: [taiga_ui_addon_doc/* TuiDocPageComponent */.qo, taiga_ui_core_components_link/* TuiLinkComponent */.V, router_js_.RouterLinkWithHref, taiga_ui_addon_doc/* TuiDocCodeComponent */.c0],
    styles: [""],
    changeDetection: 0
  });
  return AngularChildComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-child/angular-child.module.ts






let AngularChildModule = /*#__PURE__*/(() => {
  class AngularChildModule {}
  AngularChildModule.ɵfac = function AngularChildModule_Factory(t) {
    return new (t || AngularChildModule)();
  };
  AngularChildModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: AngularChildModule
  });
  AngularChildModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[taiga_ui_core_components_link/* TuiLinkModule */.j, taiga_ui_addon_doc/* TuiAddonDocModule */.fV, router_js_.RouterModule.forChild((0,taiga_ui_addon_doc/* generateRoutes */.iY)(AngularChildComponent))]]
  });
  return AngularChildModule;
})();

/***/ })

}]);