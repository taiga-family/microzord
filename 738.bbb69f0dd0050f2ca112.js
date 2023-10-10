"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[738],{

/***/ 9738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AngularInstallationModule: () => (/* binding */ AngularInstallationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2015/router.js)
var router_js_ = __webpack_require__(2541);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js + 73 modules
var taiga_ui_addon_doc = __webpack_require__(9052);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(2847);
// EXTERNAL MODULE: ./apps/demo/src/app/shared/host-child-warning/host-child-warning.module.ts
var host_child_warning_module = __webpack_require__(6099);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=12.2.17 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2015/core.js)
var core_js_ = __webpack_require__(8312);
// EXTERNAL MODULE: ./apps/demo/src/app/shared/host-child-warning/host-child-warning.component.ts
var host_child_warning_component = __webpack_require__(5773);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-installation/angular-installation.component.ts





let AngularInstallationComponent = /*#__PURE__*/(() => {
  class AngularInstallationComponent {}
  AngularInstallationComponent.ɵfac = function AngularInstallationComponent_Factory(t) {
    return new (t || AngularInstallationComponent)();
  };
  AngularInstallationComponent.ɵcmp = /*@__PURE__*/core_js_["ɵɵdefineComponent"]({
    type: AngularInstallationComponent,
    selectors: [["angular-installation"]],
    decls: 34,
    vars: 0,
    consts: [["header", "Angular Installation"], ["tuiLink", "", "routerLink", "/angular-host"], ["tuiLink", "", "routerLink", "/angular-child"], [1, "tui-space_top-4"], ["tuiLink", "", "target", "_blank", "href", "https://github.com/TinkoffCreditSystems/microzord/tree/alpha/libs/angular"]],
    template: function AngularInstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_js_["ɵɵelementStart"](0, "tui-doc-page", 0);
        core_js_["ɵɵelementStart"](1, "p");
        core_js_["ɵɵelementStart"](2, "strong");
        core_js_["ɵɵtext"](3, "microzord");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵtext"](4, " has a great semantic integration with Angular framework. ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](5, "section");
        core_js_["ɵɵelementStart"](6, "h2");
        core_js_["ɵɵtext"](7, "Package installation");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](8, "p");
        core_js_["ɵɵtext"](9, "Install the core package if you do not have it yet:");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](10, "code");
        core_js_["ɵɵtext"](11, "npm i @microzord/core");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](12, "p");
        core_js_["ɵɵtext"](13, " Install Angular package for ideomatic working with Angular (supported versions are 11 and later): ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](14, "code");
        core_js_["ɵɵtext"](15, "npm i @microzord/angular");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](16, "section");
        core_js_["ɵɵelementStart"](17, "h2");
        core_js_["ɵɵtext"](18, "What is next");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](19, "p");
        core_js_["ɵɵtext"](20, "You can use microzord with Angular both ways:");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](21, "ul");
        core_js_["ɵɵelementStart"](22, "li");
        core_js_["ɵɵelementStart"](23, "a", 1);
        core_js_["ɵɵtext"](24, "As a host to insert other application in Angular app");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](25, "li");
        core_js_["ɵɵelementStart"](26, "a", 2);
        core_js_["ɵɵtext"](27, "As a child to prepare application to be inserted in another app");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelement"](28, "host-child-warning", 3);
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](29, "section");
        core_js_["ɵɵelementStart"](30, "h2");
        core_js_["ɵɵtext"](31, "See also");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementStart"](32, "a", 4);
        core_js_["ɵɵtext"](33, " Angular library source code ");
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
        core_js_["ɵɵelementEnd"]();
      }
    },
    directives: [taiga_ui_addon_doc/* TuiDocPageComponent */.qo, taiga_ui_core_components_link/* TuiLinkComponent */.V, router_js_.RouterLinkWithHref, host_child_warning_component/* HostChildWarningComponent */.v],
    styles: [""],
    changeDetection: 0
  });
  return AngularInstallationComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/angular-installation/angular-installation.module.ts







let AngularInstallationModule = /*#__PURE__*/(() => {
  class AngularInstallationModule {}
  AngularInstallationModule.ɵfac = function AngularInstallationModule_Factory(t) {
    return new (t || AngularInstallationModule)();
  };
  AngularInstallationModule.ɵmod = /*@__PURE__*/core_js_["ɵɵdefineNgModule"]({
    type: AngularInstallationModule
  });
  AngularInstallationModule.ɵinj = /*@__PURE__*/core_js_["ɵɵdefineInjector"]({
    imports: [[taiga_ui_core_components_link/* TuiLinkModule */.j, taiga_ui_addon_doc/* TuiAddonDocModule */.fV, host_child_warning_module/* HostChildWarningModule */.$, router_js_.RouterModule.forChild((0,taiga_ui_addon_doc/* generateRoutes */.iY)(AngularInstallationComponent))]]
  });
  return AngularInstallationModule;
})();

/***/ })

}]);