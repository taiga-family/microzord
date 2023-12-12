"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[825],{

/***/ 5825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AngularHostModule: () => (/* binding */ AngularHostModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=17.0.6 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(4398);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js
var taiga_ui_addon_doc = __webpack_require__(5322);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-utils.js + 75 modules
var taiga_ui_addon_doc_utils = __webpack_require__(1569);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(2114);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=17.0.6 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(7460);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-components.js + 85 modules
var taiga_ui_addon_doc_components = __webpack_require__(2406);
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
    static #_ = this.ɵfac = function AngularHostComponent_Factory(t) {
      return new (t || AngularHostComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
      type: AngularHostComponent,
      selectors: [["angular-host"]],
      decls: 55,
      vars: 3,
      consts: [["header", "Angular Host"], ["tuiLink", "", "routerLink", "/angular-child"], ["tuiLink", "", "routerLink", "/angular-installation"], ["tuiLink", "", "routerLink", "/asset-map"], ["filename", "app.module.ts", 3, "code"], ["filename", "some.module.ts", 3, "code"], ["filename", "some.component.html", 3, "code"], ["tuiLink", "", "routerLink", "/application"]],
      template: function AngularHostComponent_Template(rf, ctx) {
        if (rf & 1) {
          core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p");
          core_mjs_["ɵɵtext"](2, " Here you can read how to setup your Angular application as a host to insert other applications in it. ");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](3, "p");
          core_mjs_["ɵɵtext"](4, " If you want your application to be inserted into another app, see ");
          core_mjs_["ɵɵelementStart"](5, "a", 1);
          core_mjs_["ɵɵtext"](6, "Angular as a child");
          core_mjs_["ɵɵelementEnd"]()();
          core_mjs_["ɵɵelementStart"](7, "section")(8, "h2");
          core_mjs_["ɵɵtext"](9, "Installation");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵtext"](10, " See ");
          core_mjs_["ɵɵelementStart"](11, "a", 2);
          core_mjs_["ɵɵtext"](12, "Angular package installation");
          core_mjs_["ɵɵelementEnd"]()();
          core_mjs_["ɵɵelementStart"](13, "section")(14, "h2");
          core_mjs_["ɵɵtext"](15, "Register child apps");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](16, "p");
          core_mjs_["ɵɵtext"](17, " First of all, you need microzord asset maps of applications that you want to insert. ");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](18, "p");
          core_mjs_["ɵɵtext"](19, " If you do not have them, see \"");
          core_mjs_["ɵɵelementStart"](20, "a", 3);
          core_mjs_["ɵɵtext"](21, "What is an asset map");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵtext"](22, "\" ");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](23, "p");
          core_mjs_["ɵɵtext"](24, "Connect asset maps the following way:");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelement"](25, "tui-doc-code", 4);
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](26, "section")(27, "h2");
          core_mjs_["ɵɵtext"](28, "Insert apps in your template");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](29, "p");
          core_mjs_["ɵɵtext"](30, "Add ");
          core_mjs_["ɵɵelementStart"](31, "code");
          core_mjs_["ɵɵtext"](32, "MicrozordModule");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵtext"](33, " to your current Angular module.");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelement"](34, "tui-doc-code", 5);
          core_mjs_["ɵɵelementStart"](35, "p");
          core_mjs_["ɵɵtext"](36, "Use ");
          core_mjs_["ɵɵelementStart"](37, "code");
          core_mjs_["ɵɵtext"](38, "microzord");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵtext"](39, " directive in your template:");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelement"](40, "tui-doc-code", 6);
          core_mjs_["ɵɵelementStart"](41, "p");
          core_mjs_["ɵɵtext"](42, "The following outputs are available:");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](43, "ul")(44, "li")(45, "code");
          core_mjs_["ɵɵtext"](46, "(hook)");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵtext"](47, " emits lifecycle events");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](48, "li")(49, "code");
          core_mjs_["ɵɵtext"](50, "(application)");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵtext"](51, " emits an ");
          core_mjs_["ɵɵelementStart"](52, "a", 7);
          core_mjs_["ɵɵtext"](53, "Application");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵtext"](54, " entity that you can handle manually. Be careful, if you need this in Angular, something probably is going wrong. ");
          core_mjs_["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          core_mjs_["ɵɵadvance"](25);
          core_mjs_["ɵɵproperty"]("code", ctx.hostConnection);
          core_mjs_["ɵɵadvance"](9);
          core_mjs_["ɵɵproperty"]("code", ctx.addingModule);
          core_mjs_["ɵɵadvance"](6);
          core_mjs_["ɵɵproperty"]("code", ctx.addingIntoTemplate);
        }
      },
      dependencies: [taiga_ui_core_components_link/* TuiLinkComponent */.V, taiga_ui_addon_doc_components/* TuiDocCodeComponent */.c0, taiga_ui_addon_doc_components/* TuiDocPageComponent */.qo, router_mjs_.RouterLink],
      changeDetection: 0
    });
  }
  return AngularHostComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-host/angular-host.module.ts






let AngularHostModule = /*#__PURE__*/(() => {
  class AngularHostModule {
    static #_ = this.ɵfac = function AngularHostModule_Factory(t) {
      return new (t || AngularHostModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
      type: AngularHostModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
      imports: [taiga_ui_core_components_link/* TuiLinkModule */.j, taiga_ui_addon_doc.TuiAddonDocModule, router_mjs_.RouterModule.forChild((0,taiga_ui_addon_doc_utils/* tuiGenerateRoutes */.Ve)(AngularHostComponent))]
    });
  }
  return AngularHostModule;
})();

/***/ })

}]);