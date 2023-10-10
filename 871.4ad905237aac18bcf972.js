"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[871],{

/***/ 4871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AngularHostModule: () => (/* binding */ AngularHostModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2015/router.js)
var router_js_ = __webpack_require__(2541);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js + 73 modules
var taiga_ui_addon_doc = __webpack_require__(9052);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(2847);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(8312);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-host/angular-host.component.ts




const HOST_CONNECTION = `import {MicrozordHostModule} from '@microzord/angular';

@NgModule({
  imports: [
    MicrozordHostModule.register({
      apps: [
        {
          name: 'my-header',
          assetMap: '/react-header/microzord.json',
        },
        {
          name: 'new-footer',
          assetMap: '/vue-footer/microzord.json',
        },
      ],
    }),
  ],
})
export class AppModule {}`;
const ADDING_MODULE = `import {MicrozordModule} from '@microzord/angular';

@NgModule({
    imports: [
      MicrozordModule,
    ],
})
export class SomeModule {}`;
const ADDING_INTO_TEMPLATE = `<header microzord="my-header"></header>

<div>Any content</div>

<footer microzord="new-footer" (hook)="onFooterLifecycleEvent($event)"></footer>`;
let AngularHostComponent = /*#__PURE__*/(() => {
  class AngularHostComponent {
    constructor() {
      this.hostConnection = HOST_CONNECTION;
      this.addingModule = ADDING_MODULE;
      this.addingIntoTemplate = ADDING_INTO_TEMPLATE;
    }
  }
  AngularHostComponent.ɵfac = function AngularHostComponent_Factory(t) {
    return new (t || AngularHostComponent)();
  };
  AngularHostComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: AngularHostComponent,
    selectors: [["angular-host"]],
    decls: 55,
    vars: 3,
    consts: [["header", "Angular Host"], ["tuiLink", "", "routerLink", "/angular-child"], ["tuiLink", "", "routerLink", "/angular-installation"], ["tuiLink", "", "routerLink", "/asset-map"], ["filename", "app.module.ts", 3, "code"], ["filename", "some.module.ts", 3, "code"], ["filename", "some.component.html", 3, "code"], ["tuiLink", "", "routerLink", "/application"]],
    template: function AngularHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵelementStart"](0, "tui-doc-page", 0);
        core_js_["ɵɵelementStart"](1, "p");
        core_js_["ɵɵtext"](2, " Here you can read how to setup your Angular application as a host to insert other applications in it. ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](3, "p");
        core_js_["ɵɵtext"](4, " If you want your application to be inserted into another app, see ");
        core_js_["ɵɵelementStart"](5, "a", 1);
        core_js_["ɵɵtext"](6, "Angular as a child");
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
        core_js_["ɵɵtext"](15, "Register child apps");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](16, "p");
        core_js_["ɵɵtext"](17, " First of all, you need microzord asset maps of applications that you want to insert. ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](18, "p");
        core_js_["ɵɵtext"](19, " If you do not have them, see \"");
        core_js_["ɵɵelementStart"](20, "a", 3);
        core_js_["ɵɵtext"](21, "What is an asset map");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](22, "\" ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](23, "p");
        core_js_["ɵɵtext"](24, "Connect asset maps the following way:");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelement"](25, "tui-doc-code", 4);
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](26, "section");
        core_js_["ɵɵelementStart"](27, "h2");
        core_js_["ɵɵtext"](28, "Insert apps in your template");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](29, "p");
        core_js_["ɵɵtext"](30, "Add ");
        core_js_["ɵɵelementStart"](31, "code");
        core_js_["ɵɵtext"](32, "MicrozordModule");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](33, " to your current Angular module.");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelement"](34, "tui-doc-code", 5);
        core_js_["ɵɵelementStart"](35, "p");
        core_js_["ɵɵtext"](36, "Use ");
        core_js_["ɵɵelementStart"](37, "code");
        core_js_["ɵɵtext"](38, "microzord");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](39, " directive in your template:");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelement"](40, "tui-doc-code", 6);
        core_js_["ɵɵelementStart"](41, "p");
        core_js_["ɵɵtext"](42, "The following outputs are available:");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](43, "ul");
        core_js_["ɵɵelementStart"](44, "li");
        core_js_["ɵɵelementStart"](45, "code");
        core_js_["ɵɵtext"](46, "(hook)");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](47, " emits lifecycle events");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](48, "li");
        core_js_["ɵɵelementStart"](49, "code");
        core_js_["ɵɵtext"](50, "(application)");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](51, " emits an ");
        core_js_["ɵɵelementStart"](52, "a", 7);
        core_js_["ɵɵtext"](53, "Application");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](54, " entity that you can handle manually. Be careful, if you need this in Angular, something probably is going wrong. ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        core_js_["ɵɵadvance"](25);
        core_js_["ɵɵproperty"]("code", ctx.hostConnection);
        core_js_["ɵɵadvance"](9);
        core_js_["ɵɵproperty"]("code", ctx.addingModule);
        core_js_["ɵɵadvance"](6);
        core_js_["ɵɵproperty"]("code", ctx.addingIntoTemplate);
      }
    },
    directives: [taiga_ui_addon_doc/* TuiDocPageComponent */.qo, taiga_ui_core_components_link/* TuiLinkComponent */.V, router_js_.RouterLinkWithHref, taiga_ui_addon_doc/* TuiDocCodeComponent */.c0],
    styles: [""],
    changeDetection: 0
  });
  return AngularHostComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-host/angular-host.module.ts






let AngularHostModule = /*#__PURE__*/(() => {
  class AngularHostModule {}
  AngularHostModule.ɵfac = function AngularHostModule_Factory(t) {
    return new (t || AngularHostModule)();
  };
  AngularHostModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: AngularHostModule
  });
  AngularHostModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[taiga_ui_core_components_link/* TuiLinkModule */.j, taiga_ui_addon_doc/* TuiAddonDocModule */.fV, router_js_.RouterModule.forChild((0,taiga_ui_addon_doc/* generateRoutes */.iY)(AngularHostComponent))]]
  });
  return AngularHostModule;
})();

/***/ })

}]);