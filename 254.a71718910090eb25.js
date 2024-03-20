"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[254],{

/***/ 254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AngularInstallationModule: () => (/* binding */ AngularInstallationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=17.3.1 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(8223);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js
var taiga_ui_addon_doc = __webpack_require__(8508);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-utils.js + 76 modules
var taiga_ui_addon_doc_utils = __webpack_require__(1583);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(1974);
// EXTERNAL MODULE: ./apps/demo/src/app/shared/host-child-warning/host-child-warning.module.ts
var host_child_warning_module = __webpack_require__(16);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=17.3.1 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(1717);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-components.js + 92 modules
var taiga_ui_addon_doc_components = __webpack_require__(348);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-notification.js
var taiga_ui_core_components_notification = __webpack_require__(8821);
;// CONCATENATED MODULE: ./apps/demo/src/app/shared/host-child-warning/host-child-warning.component.ts


let HostChildWarningComponent = /*#__PURE__*/(() => {
  class HostChildWarningComponent {
    static #_ = this.ɵfac = function HostChildWarningComponent_Factory(t) {
      return new (t || HostChildWarningComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
      type: HostChildWarningComponent,
      selectors: [["host-child-warning"]],
      decls: 2,
      vars: 0,
      template: function HostChildWarningComponent_Template(rf, ctx) {
        if (rf & 1) {
          core_mjs_["ɵɵelementStart"](0, "tui-notification");
          core_mjs_["ɵɵtext"](1, " The application can be a host and a child at the same time\n");
          core_mjs_["ɵɵelementEnd"]();
        }
      },
      dependencies: [taiga_ui_core_components_notification/* TuiNotificationComponent */.v],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}"],
      changeDetection: 0
    });
  }
  return HostChildWarningComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-installation/angular-installation.component.ts





let AngularInstallationComponent = /*#__PURE__*/(() => {
  class AngularInstallationComponent {
    static #_ = this.ɵfac = function AngularInstallationComponent_Factory(t) {
      return new (t || AngularInstallationComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
      type: AngularInstallationComponent,
      selectors: [["angular-installation"]],
      decls: 34,
      vars: 0,
      consts: [["header", "Angular Installation"], ["tuiLink", "", "routerLink", "/angular-host"], ["tuiLink", "", "routerLink", "/angular-child"], [1, "tui-space_top-4"], ["tuiLink", "", "target", "_blank", "href", "https://github.com/taiga-family/microzord/tree/main/libs/angular"]],
      template: function AngularInstallationComponent_Template(rf, ctx) {
        if (rf & 1) {
          core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p")(2, "strong");
          core_mjs_["ɵɵtext"](3, "microzord");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵtext"](4, " has a great semantic integration with Angular framework. ");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](5, "section")(6, "h2");
          core_mjs_["ɵɵtext"](7, "Package installation");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](8, "p");
          core_mjs_["ɵɵtext"](9, "Install the core package if you do not have it yet:");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](10, "code");
          core_mjs_["ɵɵtext"](11, "npm i @microzord/core");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](12, "p");
          core_mjs_["ɵɵtext"](13, " Install Angular package for ideomatic working with Angular (supported versions are 11 and later): ");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](14, "code");
          core_mjs_["ɵɵtext"](15, "npm i @microzord/angular");
          core_mjs_["ɵɵelementEnd"]()();
          core_mjs_["ɵɵelementStart"](16, "section")(17, "h2");
          core_mjs_["ɵɵtext"](18, "What is next");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](19, "p");
          core_mjs_["ɵɵtext"](20, "You can use microzord with Angular both ways:");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](21, "ul")(22, "li")(23, "a", 1);
          core_mjs_["ɵɵtext"](24, "As a host to insert other application in Angular app");
          core_mjs_["ɵɵelementEnd"]()();
          core_mjs_["ɵɵelementStart"](25, "li")(26, "a", 2);
          core_mjs_["ɵɵtext"](27, "As a child to prepare application to be inserted in another app");
          core_mjs_["ɵɵelementEnd"]()()();
          core_mjs_["ɵɵelement"](28, "host-child-warning", 3);
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](29, "section")(30, "h2");
          core_mjs_["ɵɵtext"](31, "See also");
          core_mjs_["ɵɵelementEnd"]();
          core_mjs_["ɵɵelementStart"](32, "a", 4);
          core_mjs_["ɵɵtext"](33, " Angular library source code ");
          core_mjs_["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [taiga_ui_core_components_link/* TuiLinkComponent */.E, taiga_ui_addon_doc_components/* TuiDocPageComponent */.Pt, HostChildWarningComponent, router_mjs_.RouterLink],
      changeDetection: 0
    });
  }
  return AngularInstallationComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-installation/angular-installation.module.ts







let AngularInstallationModule = /*#__PURE__*/(() => {
  class AngularInstallationModule {
    static #_ = this.ɵfac = function AngularInstallationModule_Factory(t) {
      return new (t || AngularInstallationModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
      type: AngularInstallationModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
      imports: [taiga_ui_core_components_link/* TuiLinkModule */.l, taiga_ui_addon_doc.TuiAddonDocModule, host_child_warning_module/* HostChildWarningModule */.T, router_mjs_.RouterModule.forChild((0,taiga_ui_addon_doc_utils/* tuiGenerateRoutes */.CC)(AngularInstallationComponent))]
    });
  }
  return AngularInstallationModule;
})();

/***/ })

}]);