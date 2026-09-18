"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[835],{

/***/ 5835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ApplicationModule: () => (/* binding */ ApplicationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(3010);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(1316);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var taiga_ui_core_components_link = __webpack_require__(4724);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs + 1 modules
var taiga_ui_core_components_notification = __webpack_require__(5331);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2022/taiga-ui-addon-doc-components.mjs + 101 modules
var taiga_ui_addon_doc_components = __webpack_require__(3358);
;// ./apps/demo/src/app/modules/application/application.component.ts




function ApplicationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵelementStart"](0, "p")(1, "code");
    core_mjs_["ɵɵtext"](2, "Application");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵtext"](3, " is an abstract class that contains a set of properties and methods for imperative working with microzord child apps. ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](4, "p");
    core_mjs_["ɵɵtext"](5, "It can give you more flexability in interaction between complex apps if needed.");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](6, "div", 3);
    core_mjs_["ɵɵtext"](7, " Be careful, if you need this in your not native application, something probably is going wrong. ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](8, "section")(9, "h2");
    core_mjs_["ɵɵtext"](10, "How to get the entity");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](11, "p");
    core_mjs_["ɵɵtext"](12, " Every time you add microzord child app with ");
    core_mjs_["ɵɵelementStart"](13, "code");
    core_mjs_["ɵɵtext"](14, "bootstrapApp");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵtext"](15, " function or with any framework ideomatic component, you can get the application entity. ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](16, "p");
    core_mjs_["ɵɵtext"](17, "See host guides of your framework:");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](18, "ul")(19, "li")(20, "a", 4);
    core_mjs_["ɵɵtext"](21, " Angular as a host ");
    core_mjs_["ɵɵelementEnd"]()();
    core_mjs_["ɵɵelementStart"](22, "li")(23, "a", 5);
    core_mjs_["ɵɵtext"](24, " React as a host ");
    core_mjs_["ɵɵelementEnd"]()()()();
    core_mjs_["ɵɵelementStart"](25, "section")(26, "h2");
    core_mjs_["ɵɵtext"](27, "See also");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](28, "a", 6);
    core_mjs_["ɵɵtext"](29, " Application class source code ");
    core_mjs_["ɵɵelementEnd"]()();
  }
}
function ApplicationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵelementStart"](0, "table", 7)(1, "tr", 8);
    core_mjs_["ɵɵtext"](2, " Application was rendered at least once. ");
    core_mjs_["ɵɵelementStart"](3, "p")(4, "code");
    core_mjs_["ɵɵtext"](5, "false");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵtext"](6, " by default. ");
    core_mjs_["ɵɵelementEnd"]()();
    core_mjs_["ɵɵelementStart"](7, "tr", 9);
    core_mjs_["ɵɵtext"](8, " Application is not on the page. ");
    core_mjs_["ɵɵelementStart"](9, "p")(10, "code");
    core_mjs_["ɵɵtext"](11, "true");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵtext"](12, " by default. ");
    core_mjs_["ɵɵelementEnd"]()();
    core_mjs_["ɵɵelementStart"](13, "tr", 10);
    core_mjs_["ɵɵtext"](14, " DOM element or selector string of DOM element with an application ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](15, "tr", 11);
    core_mjs_["ɵɵtext"](16, " Readonly unique name of the application ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](17, "tr", 12);
    core_mjs_["ɵɵtext"](18, " Register a callback to be called when an application gets a message ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](19, "tr", 13);
    core_mjs_["ɵɵtext"](20, " Emit message to call all onMessage listeners ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](21, "tr", 14);
    core_mjs_["ɵɵtext"](22, " Register a callback to be called when an application changes state emitting life cycle event ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](23, "tr", 15);
    core_mjs_["ɵɵtext"](24, " Emit life cycle event of the application to call all onHook listeners ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](25, "tr", 16);
    core_mjs_["ɵɵtext"](26, " Destroy an application, remove all listeners ");
    core_mjs_["ɵɵelementEnd"]()();
  }
}
let ApplicationComponent = /*#__PURE__*/(() => {
  var _ApplicationComponent;
  class ApplicationComponent {}
  _ApplicationComponent = ApplicationComponent;
  _ApplicationComponent.ɵfac = function ApplicationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicationComponent)();
  };
  _ApplicationComponent.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
    type: _ApplicationComponent,
    selectors: [["application"]],
    standalone: false,
    decls: 3,
    vars: 0,
    consts: [["header", "Application entity", "package", "CORE"], ["pageTab", "Description"], ["pageTab", "Props & methods"], ["appearance", "warning", "size", "m", "tuiNotification", "", 1, "tui-space_top-8"], ["routerLink", "/angular-host", "tuiLink", ""], ["routerLink", "/react-host", "tuiLink", ""], ["href", "https://github.com/taiga-family/microzord/blob/main/libs/core/src/lib/models/application.ts", "target", "_blank", "tuiLink", ""], ["tuiDocAPI", ""], ["name", "isBootstrapped", "tuiDocAPIItem", "", "type", "boolean"], ["name", "isDestroyed", "tuiDocAPIItem", "", "type", "boolean"], ["name", "container", "tuiDocAPIItem", "", "type", "Element | string"], ["name", "name", "tuiDocAPIItem", "", "type", "string"], ["name", "onMessage(fn: Listener<MicrozordMessageEvent>)", "tuiDocAPIItem", "", "type", "() => void"], ["name", "emitMessage(event: MicrozordMessageEvent)", "tuiDocAPIItem", "", "type", "void"], ["name", "onHook(fn: Listener<MicrozordMessageEvent>)", "tuiDocAPIItem", "", "type", "() => void"], ["name", "emitHook(event: MicrozordMessageEvent)", "tuiDocAPIItem", "", "type", "void"], ["name", "destroy()", "tuiDocAPIItem", "", "type", "void"]],
    template: function ApplicationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0);
        core_mjs_["ɵɵtemplate"](1, ApplicationComponent_ng_template_1_Template, 30, 0, "ng-template", 1)(2, ApplicationComponent_ng_template_2_Template, 27, 0, "ng-template", 2);
        core_mjs_["ɵɵelementEnd"]();
      }
    },
    dependencies: [taiga_ui_core_components_link/* TuiLink */.Jc, taiga_ui_addon_doc_components/* TuiDocAPI */.mh, taiga_ui_addon_doc_components/* TuiDocAPIItem */.sN, taiga_ui_addon_doc_components/* TuiDocPage */.e3, taiga_ui_addon_doc_components/* TuiDocPageTabConnector */.ic, taiga_ui_core_components_notification/* TuiNotificationDirective */.xb, router_mjs_.RouterLink],
    encapsulation: 2,
    changeDetection: 0
  });
  return ApplicationComponent;
})();
;// ./apps/demo/src/app/modules/application/application.module.ts







let ApplicationModule = /*#__PURE__*/(() => {
  var _ApplicationModule;
  class ApplicationModule {}
  _ApplicationModule = ApplicationModule;
  _ApplicationModule.ɵfac = function ApplicationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplicationModule)();
  };
  _ApplicationModule.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
    type: _ApplicationModule
  });
  _ApplicationModule.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
    imports: [taiga_ui_addon_doc_components/* TuiDocAPI */.mh, taiga_ui_addon_doc_components/* TuiDocAPIItem */.sN, taiga_ui_addon_doc_components/* TuiDocCopy */.ye, taiga_ui_addon_doc_components/* TuiDocTab */.mg, taiga_ui_addon_doc_components/* TuiDocDemo */.aD, taiga_ui_addon_doc_components/* TuiDocCode */.MN, taiga_ui_addon_doc_components/* TuiDocExample */.FS, taiga_ui_addon_doc_components/* TuiDocPage */.e3, taiga_ui_addon_doc_components/* TuiDocNavigation */.pz, taiga_ui_addon_doc_components/* TuiDocMain */.gf, router_mjs_.RouterModule.forChild([{
      path: '',
      component: ApplicationComponent
    }])]
  });
  return ApplicationModule;
})();

/***/ })

}]);