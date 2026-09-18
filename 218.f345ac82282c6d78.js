"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[218,301,485],{

/***/ 345:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W8: () => (/* binding */ Meta),
/* harmony export */   hE: () => (/* binding */ Title),
/* harmony export */   up: () => (/* binding */ DomSanitizer)
/* harmony export */ });
/* unused harmony exports By, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerModule, HydrationFeatureKind, VERSION, disableDebugTools, enableDebugTools, provideClientHydration, withEventReplay, withHttpTransferCacheOptions, withI18nSupport, withIncrementalHydration, withNoHttpTransferCache, ɵDomSanitizerImpl, ɵHammerGesturesPlugin */
/* harmony import */ var _home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7320);

/**
 * @license Angular v19.2.9
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */










/**
 * A service for managing HTML `<meta>` tags.
 *
 * Properties of the `MetaDefinition` object match the attributes of the
 * HTML `<meta>` tag. These tags define document metadata that is important for
 * things like configuring a Content Security Policy, defining browser compatibility
 * and security settings, setting HTTP Headers, defining rich content for social sharing,
 * and Search Engine Optimization (SEO).
 *
 * To identify specific `<meta>` tags in a document, use an attribute selection
 * string in the format `"tag_attribute='value string'"`.
 * For example, an `attrSelector` value of `"name='description'"` matches a tag
 * whose `name` attribute has the value `"description"`.
 * Selectors are used with the `querySelector()` Document method,
 * in the format `meta[{attrSelector}]`.
 *
 * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
 * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
 *
 *
 * @publicApi
 */
let Meta = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 792 == __webpack_require__.j ? ((() => {
  var _Meta;
  class Meta {
    constructor(_doc) {
      (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "_doc", void 0);
      (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "_dom", void 0);
      this._doc = _doc;
      this._dom = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])();
    }
    /**
     * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * If an existing element is found, it is returned and is not modified in any way.
     * @param tag The definition of a `<meta>` element to match or create.
     * @param forceCreation True to create a new element without checking whether one already exists.
     * @returns The existing element with the same attributes and values if found,
     * the new element if no match is found, or `null` if the tag parameter is not defined.
     */
    addTag(tag, forceCreation = false) {
      if (!tag) return null;
      return this._getOrCreateElement(tag, forceCreation);
    }
    /**
     * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * @param tags An array of tag definitions to match or create.
     * @param forceCreation True to create new elements without checking whether they already exist.
     * @returns The matching elements if found, or the new elements.
     */
    addTags(tags, forceCreation = false) {
      if (!tags) return [];
      return tags.reduce((result, tag) => {
        if (tag) {
          result.push(this._getOrCreateElement(tag, forceCreation));
        }
        return result;
      }, []);
    }
    /**
     * Retrieves a `<meta>` tag element in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching element, if any.
     */
    getTag(attrSelector) {
      if (!attrSelector) return null;
      return this._doc.querySelector(`meta[${attrSelector}]`) || null;
    }
    /**
     * Retrieves a set of `<meta>` tag elements in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching elements, if any.
     */
    getTags(attrSelector) {
      if (!attrSelector) return [];
      const list /*NodeList*/ = this._doc.querySelectorAll(`meta[${attrSelector}]`);
      return list ? [].slice.call(list) : [];
    }
    /**
     * Modifies an existing `<meta>` tag element in the current HTML document.
     * @param tag The tag description with which to replace the existing tag content.
     * @param selector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     * If not supplied, matches a tag with the same `name` or `property` attribute value as the
     * replacement tag.
     * @return The modified element.
     */
    updateTag(tag, selector) {
      if (!tag) return null;
      selector = selector || this._parseSelector(tag);
      const meta = this.getTag(selector);
      if (meta) {
        return this._setMetaElementAttributes(tag, meta);
      }
      return this._getOrCreateElement(tag, true);
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param attrSelector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     */
    removeTag(attrSelector) {
      this.removeTagElement(this.getTag(attrSelector));
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param meta The tag definition to match against to identify an existing tag.
     */
    removeTagElement(meta) {
      if (meta) {
        this._dom.remove(meta);
      }
    }
    _getOrCreateElement(meta, forceCreation = false) {
      if (!forceCreation) {
        const selector = this._parseSelector(meta);
        // It's allowed to have multiple elements with the same name so it's not enough to
        // just check that element with the same name already present on the page. We also need to
        // check if element has tag attributes
        const elem = this.getTags(selector).filter(elem => this._containsAttributes(meta, elem))[0];
        if (elem !== undefined) return elem;
      }
      const element = this._dom.createElement('meta');
      this._setMetaElementAttributes(meta, element);
      const head = this._doc.getElementsByTagName('head')[0];
      head.appendChild(element);
      return element;
    }
    _setMetaElementAttributes(tag, el) {
      Object.keys(tag).forEach(prop => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
      return el;
    }
    _parseSelector(tag) {
      const attr = tag.name ? 'name' : 'property';
      return `${attr}="${tag[attr]}"`;
    }
    _containsAttributes(tag, elem) {
      return Object.keys(tag).every(key => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
    }
    _getMetaKeyMap(prop) {
      return META_KEYS_MAP[prop] || prop;
    }
  }
  _Meta = Meta;
  (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Meta, "\u0275fac", function _Meta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Meta)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  });
  (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Meta, "\u0275prov", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _Meta,
    factory: _Meta.ɵfac,
    providedIn: 'root'
  }));
  return Meta;
})()) : null);
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Mapping for MetaDefinition properties with their correct meta attribute names
 */
const META_KEYS_MAP = {
  httpEquiv: 'http-equiv'
};

/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
let Title = /*#__PURE__*/(() => {
  var _Title;
  class Title {
    constructor(_doc) {
      (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "_doc", void 0);
      this._doc = _doc;
    }
    /**
     * Get the title of the current HTML document.
     */
    getTitle() {
      return this._doc.title;
    }
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    setTitle(newTitle) {
      this._doc.title = newTitle || '';
    }
  }
  _Title = Title;
  (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Title, "\u0275fac", function _Title_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Title)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  });
  (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Title, "\u0275prov", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _Title,
    factory: _Title.ɵfac,
    providedIn: 'root'
  }));
  return Title;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
function exportNgVar(name, value) {
  if (typeof COMPILED === 'undefined' || !COMPILED) {
    // Note: we can't export `ng` when using closure enhanced optimization as:
    // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
    // - we can't declare a closure extern as the namespace `ng` is already used within Google
    //   for typings for angularJS (via `goog.provide('ng....')`).
    const ng = _global['ng'] = _global['ng'] || {};
    ng[name] = value;
  }
}
class ChangeDetectionPerfRecord {
  constructor(msPerTick, numTicks) {
    _defineProperty(this, "msPerTick", void 0);
    _defineProperty(this, "numTicks", void 0);
    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
  }
}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
class AngularProfiler {
  constructor(ref) {
    _defineProperty(this, "appRef", void 0);
    this.appRef = ref.injector.get(ApplicationRef);
  }
  // tslint:disable:no-console
  /**
   * Exercises change detection in a loop and then prints the average amount of
   * time in milliseconds how long a single round of change detection takes for
   * the current state of the UI. It runs a minimum of 5 rounds for a minimum
   * of 500 milliseconds.
   *
   * Optionally, a user may pass a `config` parameter containing a map of
   * options. Supported options are:
   *
   * `record` (boolean) - causes the profiler to record a CPU profile while
   * it exercises the change detector. Example:
   *
   * ```ts
   * ng.profiler.timeChangeDetection({record: true})
   * ```
   */
  timeChangeDetection(config) {
    const record = config && config['record'];
    const profileName = 'Change Detection';
    // Profiler is not available in Android browsers without dev tools opened
    if (record && 'profile' in console && typeof console.profile === 'function') {
      console.profile(profileName);
    }
    const start = performance.now();
    let numTicks = 0;
    while (numTicks < 5 || performance.now() - start < 500) {
      this.appRef.tick();
      numTicks++;
    }
    const end = performance.now();
    if (record && 'profileEnd' in console && typeof console.profileEnd === 'function') {
      console.profileEnd(profileName);
    }
    const msPerTick = (end - start) / numTicks;
    console.log(`ran ${numTicks} change detection cycles`);
    console.log(`${msPerTick.toFixed(2)} ms per check`);
    return new ChangeDetectionPerfRecord(msPerTick, numTicks);
  }
}
const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
function enableDebugTools(ref) {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
function disableDebugTools() {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
class By {
  /**
   * Match all nodes.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
   */
  static all() {
    return () => true;
  }
  /**
   * Match elements by the given CSS selector.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
   */
  static css(selector) {
    return debugElement => {
      return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
    };
  }
  /**
   * Match nodes that have the given directive present.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
   */
  static directive(type) {
    return debugNode => debugNode.providerTokens.indexOf(type) !== -1;
  }
}
function elementMatches(n, selector) {
  if (_getDOM().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }
  return false;
}

/**
 * Supported HammerJS recognizer event names.
 */
const EVENT_NAMES = {
  // pan
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  // pinch
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  // press
  'press': true,
  'pressup': true,
  // rotate
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  // swipe
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  // tap
  'tap': true,
  'doubletap': true
};
/**
 * DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
 * @see {@link HammerGestureConfig}
 *
 * @ngModule HammerModule
 * @publicApi
 */
const HAMMER_GESTURE_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'HammerGestureConfig' : '');
/**
 * Injection token used to provide a HammerLoader to Angular.
 *
 * @see {@link HammerLoader}
 *
 * @publicApi
 */
const HAMMER_LOADER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'HammerLoader' : '');
/**
 * An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
let HammerGestureConfig = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  var _HammerGestureConfig;
  class HammerGestureConfig {
    constructor() {
      /**
       * A set of supported event names for gestures to be used in Angular.
       * Angular supports all built-in recognizers, as listed in
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      _defineProperty(this, "events", []);
      /**
       * Maps gesture event names to a set of configuration options
       * that specify overrides to the default values for specific properties.
       *
       * The key is a supported event name to be configured,
       * and the options object contains a set of properties, with override values
       * to be applied to the named recognizer event.
       * For example, to disable recognition of the rotate event, specify
       *  `{"rotate": {"enable": false}}`.
       *
       * Properties that are not present take the HammerJS default values.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       *
       */
      _defineProperty(this, "overrides", {});
      /**
       * Properties whose default values can be overridden for a given event.
       * Different sets of properties apply to different events.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      _defineProperty(this, "options", void 0);
    }
    /**
     * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    buildHammer(element) {
      const mc = new Hammer(element, this.options);
      mc.get('pinch').set({
        enable: true
      });
      mc.get('rotate').set({
        enable: true
      });
      for (const eventName in this.overrides) {
        mc.get(eventName).set(this.overrides[eventName]);
      }
      return mc;
    }
  }
  _HammerGestureConfig = HammerGestureConfig;
  _defineProperty(HammerGestureConfig, "\u0275fac", function _HammerGestureConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerGestureConfig)();
  });
  _defineProperty(HammerGestureConfig, "\u0275prov", /* @__PURE__ */i0.ɵɵdefineInjectable({
    token: _HammerGestureConfig,
    factory: _HammerGestureConfig.ɵfac
  }));
  return HammerGestureConfig;
})()));
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
let HammerGesturesPlugin = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  var _HammerGesturesPlugin;
  class HammerGesturesPlugin extends EventManagerPlugin {
    constructor(doc, _config, _injector, loader) {
      super(doc);
      _defineProperty(this, "_config", void 0);
      _defineProperty(this, "_injector", void 0);
      _defineProperty(this, "loader", void 0);
      _defineProperty(this, "_loaderPromise", null);
      this._config = _config;
      this._injector = _injector;
      this.loader = loader;
    }
    supports(eventName) {
      if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
        return false;
      }
      if (!window.Hammer && !this.loader) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          // Get a `Console` through an injector to tree-shake the
          // class when it is unused in production.
          const _console = this._injector.get(_Console);
          _console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` + `loaded and no custom loader has been specified.`);
        }
        return false;
      }
      return true;
    }
    addEventListener(element, eventName, handler) {
      const zone = this.manager.getZone();
      eventName = eventName.toLowerCase();
      // If Hammer is not present but a loader is specified, we defer adding the event listener
      // until Hammer is loaded.
      if (!window.Hammer && this.loader) {
        this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
        // This `addEventListener` method returns a function to remove the added listener.
        // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
        // than remove anything.
        let cancelRegistration = false;
        let deregister = () => {
          cancelRegistration = true;
        };
        zone.runOutsideAngular(() => this._loaderPromise.then(() => {
          // If Hammer isn't actually loaded when the custom loader resolves, give up.
          if (!window.Hammer) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              const _console = this._injector.get(_Console);
              _console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
            }
            deregister = () => {};
            return;
          }
          if (!cancelRegistration) {
            // Now that Hammer is loaded and the listener is being loaded for real,
            // the deregistration function changes from canceling registration to
            // removal.
            deregister = this.addEventListener(element, eventName, handler);
          }
        }).catch(() => {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            const _console = this._injector.get(_Console);
            _console.warn(`The "${eventName}" event cannot be bound because the custom ` + `Hammer.JS loader failed.`);
          }
          deregister = () => {};
        }));
        // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
        // can change the behavior of `deregister` once the listener is added. Using a closure in
        // this way allows us to avoid any additional data structures to track listener removal.
        return () => {
          deregister();
        };
      }
      return zone.runOutsideAngular(() => {
        // Creating the manager bind events, must be done outside of angular
        const mc = this._config.buildHammer(element);
        const callback = function (eventObj) {
          zone.runGuarded(function () {
            handler(eventObj);
          });
        };
        mc.on(eventName, callback);
        return () => {
          mc.off(eventName, callback);
          // destroy mc to prevent memory leak
          if (typeof mc.destroy === 'function') {
            mc.destroy();
          }
        };
      });
    }
    isCustomEvent(eventName) {
      return this._config.events.indexOf(eventName) > -1;
    }
  }
  _HammerGesturesPlugin = HammerGesturesPlugin;
  _defineProperty(HammerGesturesPlugin, "\u0275fac", function _HammerGesturesPlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerGesturesPlugin)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(HAMMER_GESTURE_CONFIG), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(HAMMER_LOADER, 8));
  });
  _defineProperty(HammerGesturesPlugin, "\u0275prov", /* @__PURE__ */i0.ɵɵdefineInjectable({
    token: _HammerGesturesPlugin,
    factory: _HammerGesturesPlugin.ɵfac
  }));
  return HammerGesturesPlugin;
})()));
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's `EventManager`.
 *
 * @publicApi
 */
let HammerModule = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  var _HammerModule;
  class HammerModule {}
  _HammerModule = HammerModule;
  _defineProperty(HammerModule, "\u0275fac", function _HammerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HammerModule)();
  });
  _defineProperty(HammerModule, "\u0275mod", /* @__PURE__ */i0.ɵɵdefineNgModule({
    type: _HammerModule
  }));
  _defineProperty(HammerModule, "\u0275inj", /* @__PURE__ */i0.ɵɵdefineInjector({
    providers: [{
      provide: EVENT_MANAGER_PLUGINS,
      useClass: HammerGesturesPlugin,
      multi: true,
      deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, Injector, [new Optional(), HAMMER_LOADER]]
    }, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }]
  }));
  return HammerModule;
})()));
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
let DomSanitizer = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 792 == __webpack_require__.j ? ((() => {
  var _DomSanitizer;
  class DomSanitizer {}
  _DomSanitizer = DomSanitizer;
  (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(DomSanitizer, "\u0275fac", function _DomSanitizer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomSanitizer)();
  });
  (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(DomSanitizer, "\u0275prov", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _DomSanitizer,
    factory: function _DomSanitizer_Factory(__ngFactoryType__) {
      let __ngConditionalFactory__ = null;
      if (__ngFactoryType__) {
        __ngConditionalFactory__ = new (__ngFactoryType__ || _DomSanitizer)();
      } else {
        __ngConditionalFactory__ = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](DomSanitizerImpl);
      }
      return __ngConditionalFactory__;
    },
    providedIn: 'root'
  }));
  return DomSanitizer;
})()) : null);
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DomSanitizerImpl = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 792 == __webpack_require__.j ? ((() => {
  var _DomSanitizerImpl;
  class DomSanitizerImpl extends DomSanitizer {
    constructor(_doc) {
      super();
      (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "_doc", void 0);
      this._doc = _doc;
    }
    sanitize(ctx, value) {
      if (value == null) return null;
      switch (ctx) {
        case _angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.NONE:
          return value;
        case _angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.HTML:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵallowSanitizationBypassAndThrow"])(value, "HTML" /* BypassType.Html */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunwrapSafeValue"])(value);
          }
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵ_sanitizeHtml"])(this._doc, String(value)).toString();
        case _angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.STYLE:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵallowSanitizationBypassAndThrow"])(value, "Style" /* BypassType.Style */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunwrapSafeValue"])(value);
          }
          return value;
        case _angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.SCRIPT:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵallowSanitizationBypassAndThrow"])(value, "Script" /* BypassType.Script */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunwrapSafeValue"])(value);
          }
          throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](5200 /* RuntimeErrorCode.SANITIZATION_UNSAFE_SCRIPT */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'unsafe value used in a script context');
        case _angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.URL:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵallowSanitizationBypassAndThrow"])(value, "URL" /* BypassType.Url */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunwrapSafeValue"])(value);
          }
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵ_sanitizeUrl"])(String(value));
        case _angular_core__WEBPACK_IMPORTED_MODULE_2__.SecurityContext.RESOURCE_URL:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵallowSanitizationBypassAndThrow"])(value, "ResourceURL" /* BypassType.ResourceUrl */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunwrapSafeValue"])(value);
          }
          throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](5201 /* RuntimeErrorCode.SANITIZATION_UNSAFE_RESOURCE_URL */, (typeof ngDevMode === 'undefined' || ngDevMode) && `unsafe value used in a resource URL context (see ${_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵXSS_SECURITY_URL"]})`);
        default:
          throw new _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵRuntimeError"](5202 /* RuntimeErrorCode.SANITIZATION_UNEXPECTED_CTX */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵXSS_SECURITY_URL"]})`);
      }
    }
    bypassSecurityTrustHtml(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵbypassSanitizationTrustHtml"])(value);
    }
    bypassSecurityTrustStyle(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵbypassSanitizationTrustStyle"])(value);
    }
    bypassSecurityTrustScript(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵbypassSanitizationTrustScript"])(value);
    }
    bypassSecurityTrustUrl(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵbypassSanitizationTrustUrl"])(value);
    }
    bypassSecurityTrustResourceUrl(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵbypassSanitizationTrustResourceUrl"])(value);
    }
  }
  _DomSanitizerImpl = DomSanitizerImpl;
  (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(DomSanitizerImpl, "\u0275fac", function _DomSanitizerImpl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomSanitizerImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
  });
  (0,_home_runner_work_microzord_microzord_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(DomSanitizerImpl, "\u0275prov", /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: _DomSanitizerImpl,
    factory: _DomSanitizerImpl.ɵfac,
    providedIn: 'root'
  }));
  return DomSanitizerImpl;
})()) : null);
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The list of features as an enum to uniquely type each `HydrationFeature`.
 * @see {@link HydrationFeature}
 *
 * @publicApi
 */
var HydrationFeatureKind = /*#__PURE__*/function (HydrationFeatureKind) {
  HydrationFeatureKind[HydrationFeatureKind["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind[HydrationFeatureKind["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
  HydrationFeatureKind[HydrationFeatureKind["I18nSupport"] = 2] = "I18nSupport";
  HydrationFeatureKind[HydrationFeatureKind["EventReplay"] = 3] = "EventReplay";
  HydrationFeatureKind[HydrationFeatureKind["IncrementalHydration"] = 4] = "IncrementalHydration";
  return HydrationFeatureKind;
}(HydrationFeatureKind || {});
/**
 * Helper function to create an object that represents a Hydration feature.
 */
function hydrationFeature(ɵkind, ɵproviders = [], ɵoptions = {}) {
  return {
    ɵkind,
    ɵproviders
  };
}
/**
 * Disables HTTP transfer cache. Effectively causes HTTP requests to be performed twice: once on the
 * server and other one on the browser.
 *
 * @publicApi
 */
function withNoHttpTransferCache() {
  // This feature has no providers and acts as a flag that turns off
  // HTTP transfer cache (which otherwise is turned on by default).
  return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
/**
 * The function accepts an object, which allows to configure cache parameters,
 * such as which headers should be included (no headers are included by default),
 * whether POST requests should be cached or a callback function to determine if a
 * particular request should be cached.
 *
 * @publicApi
 */
function withHttpTransferCacheOptions(options) {
  // This feature has no providers and acts as a flag to pass options to the HTTP transfer cache.
  return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, _withHttpTransferCache(options));
}
/**
 * Enables support for hydrating i18n blocks.
 *
 * @developerPreview
 * @publicApi
 */
function withI18nSupport() {
  return hydrationFeature(HydrationFeatureKind.I18nSupport, _withI18nSupport());
}
/**
 * Enables support for replaying user events (e.g. `click`s) that happened on a page
 * before hydration logic has completed. Once an application is hydrated, all captured
 * events are replayed and relevant event listeners are executed.
 *
 * @usageNotes
 *
 * Basic example of how you can enable event replay in your application when
 * `bootstrapApplication` function is used:
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideClientHydration(withEventReplay())]
 * });
 * ```
 * @publicApi
 * @see {@link provideClientHydration}
 */
function withEventReplay() {
  return hydrationFeature(HydrationFeatureKind.EventReplay, _withEventReplay());
}
/**
 * Enables support for incremental hydration using the `hydrate` trigger syntax.
 *
 * @usageNotes
 *
 * Basic example of how you can enable incremental hydration in your application when
 * the `bootstrapApplication` function is used:
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideClientHydration(withIncrementalHydration())]
 * });
 * ```
 * @experimental
 * @publicApi
 * @see {@link provideClientHydration}
 */
function withIncrementalHydration() {
  return hydrationFeature(HydrationFeatureKind.IncrementalHydration, _withIncrementalHydration());
}
/**
 * Returns an `ENVIRONMENT_INITIALIZER` token setup with a function
 * that verifies whether compatible ZoneJS was used in an application
 * and logs a warning in a console if it's not the case.
 */
function provideZoneJsCompatibilityDetector() {
  return [{
    provide: ENVIRONMENT_INITIALIZER,
    useValue: () => {
      const ngZone = inject(NgZone);
      const isZoneless = inject(_ZONELESS_ENABLED);
      // Checking `ngZone instanceof NgZone` would be insufficient here,
      // because custom implementations might use NgZone as a base class.
      if (!isZoneless && ngZone.constructor !== NgZone) {
        const console = inject(_Console);
        const message = _formatRuntimeError(-5e3 /* RuntimeErrorCode.UNSUPPORTED_ZONEJS_INSTANCE */, 'Angular detected that hydration was enabled for an application ' + 'that uses a custom or a noop Zone.js implementation. ' + 'This is not yet a fully supported configuration.');
        console.warn(message);
      }
    },
    multi: true
  }];
}
/**
 * Sets up providers necessary to enable hydration functionality for the application.
 *
 * By default, the function enables the recommended set of features for the optimal
 * performance for most of the applications. It includes the following features:
 *
 * * Reconciling DOM hydration. Learn more about it [here](guide/hydration).
 * * [`HttpClient`](api/common/http/HttpClient) response caching while running on the server and
 * transferring this cache to the client to avoid extra HTTP requests. Learn more about data caching
 * [here](guide/ssr#caching-data-when-using-httpclient).
 *
 * These functions allow you to disable some of the default features or enable new ones:
 *
 * * {@link withNoHttpTransferCache} to disable HTTP transfer cache
 * * {@link withHttpTransferCacheOptions} to configure some HTTP transfer cache options
 * * {@link withI18nSupport} to enable hydration support for i18n blocks
 * * {@link withEventReplay} to enable support for replaying user events
 *
 * @usageNotes
 *
 * Basic example of how you can enable hydration in your application when
 * `bootstrapApplication` function is used:
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideClientHydration()]
 * });
 * ```
 *
 * Alternatively if you are using NgModules, you would add `provideClientHydration`
 * to your root app module's provider list.
 * ```ts
 * @NgModule({
 *   declarations: [RootCmp],
 *   bootstrap: [RootCmp],
 *   providers: [provideClientHydration()],
 * })
 * export class AppModule {}
 * ```
 *
 * @see {@link withNoHttpTransferCache}
 * @see {@link withHttpTransferCacheOptions}
 * @see {@link withI18nSupport}
 * @see {@link withEventReplay}
 *
 * @param features Optional features to configure additional hydration behaviors.
 * @returns A set of providers to enable hydration.
 *
 * @publicApi
 */
function provideClientHydration(...features) {
  const providers = [];
  const featuresKind = new Set();
  for (const {
    ɵproviders,
    ɵkind
  } of features) {
    featuresKind.add(ɵkind);
    if (ɵproviders.length) {
      providers.push(ɵproviders);
    }
  }
  const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
  if (typeof ngDevMode !== 'undefined' && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
    // TODO: Make this a runtime error
    throw new Error('Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.');
  }
  return makeEnvironmentProviders([typeof ngDevMode !== 'undefined' && ngDevMode ? provideZoneJsCompatibilityDetector() : [], _withDomHydration(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : _withHttpTransferCache({}), providers]);
}

/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser package.
 */
/**
 * @publicApi
 */
const VERSION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.Version('19.2.9');

//# sourceMappingURL=platform-browser.mjs.map

/***/ }),

/***/ 941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5225);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4360);



function observeOn(scheduler, delay = 0) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_0__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.next(value), delay), () => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_0__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.complete(), delay), err => (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_0__/* .executeSchedule */ .N)(subscriber, scheduler, () => subscriber.error(err), delay)));
  });
}
//# sourceMappingURL=observeOn.js.map

/***/ }),

/***/ 980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ finalize)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9974);

function finalize(callback) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
//# sourceMappingURL=finalize.js.map

/***/ }),

/***/ 983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1985);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 1413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Subject)
});

// UNUSED EXPORTS: AnonymousSubject

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = __webpack_require__(1985);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(8359);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/createErrorClass.js
var createErrorClass = __webpack_require__(1853);
;// ./node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js

const ObjectUnsubscribedError = (0,createErrorClass/* createErrorClass */.L)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/arrRemove.js
var arrRemove = __webpack_require__(7908);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/errorContext.js
var errorContext = __webpack_require__(9786);
;// ./node_modules/rxjs/dist/esm/internal/Subject.js





let Subject = /*#__PURE__*/(() => {
  class Subject extends Observable/* Observable */.c {
    constructor() {
      super();
      this.closed = false;
      this.currentObservers = null;
      this.observers = [];
      this.isStopped = false;
      this.hasError = false;
      this.thrownError = null;
    }
    lift(operator) {
      const subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    }
    _throwIfClosed() {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      }
    }
    next(value) {
      (0,errorContext/* errorContext */.Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          if (!this.currentObservers) {
            this.currentObservers = Array.from(this.observers);
          }
          for (const observer of this.currentObservers) {
            observer.next(value);
          }
        }
      });
    }
    error(err) {
      (0,errorContext/* errorContext */.Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.hasError = this.isStopped = true;
          this.thrownError = err;
          const {
            observers
          } = this;
          while (observers.length) {
            observers.shift().error(err);
          }
        }
      });
    }
    complete() {
      (0,errorContext/* errorContext */.Y)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.isStopped = true;
          const {
            observers
          } = this;
          while (observers.length) {
            observers.shift().complete();
          }
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    }
    get observed() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    _trySubscribe(subscriber) {
      this._throwIfClosed();
      return super._trySubscribe(subscriber);
    }
    _subscribe(subscriber) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(subscriber);
      return this._innerSubscribe(subscriber);
    }
    _innerSubscribe(subscriber) {
      const {
        hasError,
        isStopped,
        observers
      } = this;
      if (hasError || isStopped) {
        return Subscription/* EMPTY_SUBSCRIPTION */.Kn;
      }
      this.currentObservers = null;
      observers.push(subscriber);
      return new Subscription/* Subscription */.yU(() => {
        this.currentObservers = null;
        (0,arrRemove/* arrRemove */.o)(observers, subscriber);
      });
    }
    _checkFinalizedStatuses(subscriber) {
      const {
        hasError,
        thrownError,
        isStopped
      } = this;
      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped) {
        subscriber.complete();
      }
    }
    asObservable() {
      const observable = new Observable/* Observable */.c();
      observable.source = this;
      return observable;
    }
  }
  Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
  };
  return Subject;
})();
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription/* EMPTY_SUBSCRIPTION */.Kn;
  }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ 2806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ from)
});

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/innerFrom.js
var innerFrom = __webpack_require__(8750);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/observeOn.js
var observeOn = __webpack_require__(941);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/lift.js
var lift = __webpack_require__(9974);
;// ./node_modules/rxjs/dist/esm/internal/operators/subscribeOn.js

function subscribeOn(scheduler, delay = 0) {
  return (0,lift/* operate */.N)((source, subscriber) => {
    subscriber.add(scheduler.schedule(() => source.subscribe(subscriber), delay));
  });
}
//# sourceMappingURL=subscribeOn.js.map
;// ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleObservable.js



function scheduleObservable(input, scheduler) {
  return (0,innerFrom/* innerFrom */.Tg)(input).pipe(subscribeOn(scheduler), (0,observeOn/* observeOn */.Q)(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map
;// ./node_modules/rxjs/dist/esm/internal/scheduled/schedulePromise.js



function schedulePromise(input, scheduler) {
  return (0,innerFrom/* innerFrom */.Tg)(input).pipe(subscribeOn(scheduler), (0,observeOn/* observeOn */.Q)(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = __webpack_require__(1985);
;// ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleArray.js

function scheduleArray(input, scheduler) {
  return new Observable/* Observable */.c(subscriber => {
    let i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}
//# sourceMappingURL=scheduleArray.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/symbol/iterator.js
var symbol_iterator = __webpack_require__(4761);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/isFunction.js
var isFunction = __webpack_require__(8071);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/executeSchedule.js
var executeSchedule = __webpack_require__(5225);
;// ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleIterable.js




function scheduleIterable(input, scheduler) {
  return new Observable/* Observable */.c(subscriber => {
    let iterator;
    (0,executeSchedule/* executeSchedule */.N)(subscriber, scheduler, () => {
      iterator = input[symbol_iterator/* iterator */.l]();
      (0,executeSchedule/* executeSchedule */.N)(subscriber, scheduler, () => {
        let value;
        let done;
        try {
          ({
            value,
            done
          } = iterator.next());
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return () => (0,isFunction/* isFunction */.T)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
  });
}
//# sourceMappingURL=scheduleIterable.js.map
;// ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleAsyncIterable.js


function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }
  return new Observable/* Observable */.c(subscriber => {
    (0,executeSchedule/* executeSchedule */.N)(subscriber, scheduler, () => {
      const iterator = input[Symbol.asyncIterator]();
      (0,executeSchedule/* executeSchedule */.N)(subscriber, scheduler, () => {
        iterator.next().then(result => {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js
var isInteropObservable = __webpack_require__(5055);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/isPromise.js
var isPromise = __webpack_require__(9858);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/isArrayLike.js
var isArrayLike = __webpack_require__(7441);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/isIterable.js
var isIterable = __webpack_require__(5397);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js
var isAsyncIterable = __webpack_require__(7953);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js
var throwUnobservableError = __webpack_require__(591);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js
var isReadableStreamLike = __webpack_require__(5196);
;// ./node_modules/rxjs/dist/esm/internal/scheduled/scheduleReadableStreamLike.js


function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable((0,isReadableStreamLike/* readableStreamLikeToAsyncGenerator */.C)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map
;// ./node_modules/rxjs/dist/esm/internal/scheduled/scheduled.js













function scheduled(input, scheduler) {
  if (input != null) {
    if ((0,isInteropObservable/* isInteropObservable */.l)(input)) {
      return scheduleObservable(input, scheduler);
    }
    if ((0,isArrayLike/* isArrayLike */.X)(input)) {
      return scheduleArray(input, scheduler);
    }
    if ((0,isPromise/* isPromise */.y)(input)) {
      return schedulePromise(input, scheduler);
    }
    if ((0,isAsyncIterable/* isAsyncIterable */.T)(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if ((0,isIterable/* isIterable */.x)(input)) {
      return scheduleIterable(input, scheduler);
    }
    if ((0,isReadableStreamLike/* isReadableStreamLike */.U)(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw (0,throwUnobservableError/* createInvalidObservableTypeError */.L)(input);
}
//# sourceMappingURL=scheduled.js.map
;// ./node_modules/rxjs/dist/esm/internal/observable/from.js


function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : (0,innerFrom/* innerFrom */.Tg)(input);
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ 3028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6354);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8750);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9974);
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5412);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8071);





function mergeMap(project, resultSelector, concurrent = Infinity) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__/* .isFunction */ .T)(resultSelector)) {
    return mergeMap((a, i) => (0,_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .T)((b, ii) => resultSelector(a, b, i, ii))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(project(a, i))), concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_2__/* .operate */ .N)((source, subscriber) => (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_3__/* .mergeInternals */ .h)(source, subscriber, project, concurrent));
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ 3073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ argsArgArrayOrObject)
/* harmony export */ });
const {
  isArray
} = Array;
const {
  getPrototypeOf,
  prototype: objectProto,
  keys: getKeys
} = Object;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    const first = args[0];
    if (isArray(first)) {
      return {
        args: first,
        keys: null
      };
    }
    if (isPOJO(first)) {
      const keys = getKeys(first);
      return {
        args: keys.map(key => first[key]),
        keys
      };
    }
  }
  return {
    args: args,
    keys: null
  };
}
function isPOJO(obj) {
  return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}
//# sourceMappingURL=argsArgArrayOrObject.js.map

/***/ }),

/***/ 4412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1413);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .B {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const {
      hasError,
      thrownError,
      _value
    } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
  }
}
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ 4572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1985);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3073);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2806);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3669);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6450);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9326);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8496);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4360);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5225);









function combineLatest(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_5__/* .popScheduler */ .lI)(args);
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_5__/* .popResultSelector */ .ms)(args);
  const {
    args: observables,
    keys
  } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__/* .argsArgArrayOrObject */ .D)(args);
  if (observables.length === 0) {
    return (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)([], scheduler);
  }
  const result = new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(combineLatestInit(observables, scheduler, keys ? values => (0,_util_createObject__WEBPACK_IMPORTED_MODULE_6__/* .createObject */ .e)(keys, values) : _util_identity__WEBPACK_IMPORTED_MODULE_3__/* .identity */ .D));
  return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_4__/* .mapOneOrManyArgs */ .I)(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = _util_identity__WEBPACK_IMPORTED_MODULE_3__/* .identity */ .D) {
  return subscriber => {
    maybeSchedule(scheduler, () => {
      const {
        length
      } = observables;
      const values = new Array(length);
      let active = length;
      let remainingFirstValues = length;
      for (let i = 0; i < length; i++) {
        maybeSchedule(scheduler, () => {
          const source = (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .H)(observables[i], scheduler);
          let hasFirstValue = false;
          source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__/* .createOperatorSubscriber */ ._)(subscriber, value => {
            values[i] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, () => {
            if (! --active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__/* .executeSchedule */ .N)(subscription, scheduler, execute);
  } else {
    execute();
  }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 5225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ executeSchedule)
/* harmony export */ });
function executeSchedule(parentSubscription, scheduler, work, delay = 0, repeat = false) {
  const scheduleSubscription = scheduler.schedule(function () {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}
//# sourceMappingURL=executeSchedule.js.map

/***/ }),

/***/ 5412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8750);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5225);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4360);



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  const buffer = [];
  let active = 0;
  let index = 0;
  let isComplete = false;
  const checkComplete = () => {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  const outerNext = value => active < concurrent ? doInnerSub(value) : buffer.push(value);
  const doInnerSub = value => {
    expand && subscriber.next(value);
    active++;
    let innerComplete = false;
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(project(value, index++)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, innerValue => {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, () => {
      innerComplete = true;
    }, undefined, () => {
      if (innerComplete) {
        try {
          active--;
          while (buffer.length && active < concurrent) {
            const bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_1__/* .executeSchedule */ .N)(subscriber, innerSubScheduler, () => doInnerSub(bufferedValue));
            } else {
              doInnerSub(bufferedValue);
            }
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, outerNext, () => {
    isComplete = true;
    checkComplete();
  }));
  return () => {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}
//# sourceMappingURL=mergeInternals.js.map

/***/ }),

/***/ 5558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8750);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4360);



function switchMap(project, resultSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let innerSubscriber = null;
    let index = 0;
    let isComplete = false;
    const checkComplete = () => isComplete && !innerSubscriber && subscriber.complete();
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      let innerIndex = 0;
      const outerIndex = index++;
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(project(value, outerIndex)).subscribe(innerSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, innerValue => subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue), () => {
        innerSubscriber = null;
        checkComplete();
      }));
    }, () => {
      isComplete = true;
      checkComplete();
    }));
  });
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 5964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4360);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 6354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4360);


function map(project, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 6365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3028);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3669);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .D, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ 6450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6354);

const {
  isArray
} = Array;
function callOrApply(fn, args) {
  return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return (0,_operators_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .T)(args => callOrApply(fn, args));
}
//# sourceMappingURL=mapOneOrManyArgs.js.map

/***/ }),

/***/ 6697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(983);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4360);



function take(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY */ .w : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    let seen = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 6977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4360);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8750);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5343);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .l));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9326);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2806);


function of(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .lI)(args);
  return (0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .H)(args, scheduler);
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 8141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8071);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4360);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3669);




function tap(observerOrNext, error, complete) {
  const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error,
    complete
  } : observerOrNext;
  return tapObserver ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .N)((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      var _a;
      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, err => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a, _b;
      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : _util_identity__WEBPACK_IMPORTED_MODULE_3__/* .identity */ .D;
}
//# sourceMappingURL=tap.js.map

/***/ }),

/***/ 8496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 8793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* binding */ concat)
});

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/mergeAll.js
var mergeAll = __webpack_require__(6365);
;// ./node_modules/rxjs/dist/esm/internal/operators/concatAll.js

function concatAll() {
  return (0,mergeAll/* mergeAll */.U)(1);
}
//# sourceMappingURL=concatAll.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/args.js
var util_args = __webpack_require__(9326);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/from.js + 8 modules
var from = __webpack_require__(2806);
;// ./node_modules/rxjs/dist/esm/internal/observable/concat.js



function concat(...args) {
  return concatAll()((0,from/* from */.H)(args, (0,util_args/* popScheduler */.lI)(args)));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ 8810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1985);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8071);


function throwError(errorOrErrorFactory, scheduler) {
  const errorFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .T)(errorOrErrorFactory) ? errorOrErrorFactory : () => errorOrErrorFactory;
  const init = subscriber => subscriber.error(errorFactory());
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(scheduler ? subscriber => scheduler.schedule(init, 0, subscriber) : init);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ 9030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ defer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1985);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8750);


function defer(observableFactory) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .c(subscriber => {
    (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Tg)(observableFactory()).subscribe(subscriber);
  });
}
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ 9172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ startWith)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8793);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9326);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9974);



function startWith(...values) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_1__/* .popScheduler */ .lI)(values);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_2__/* .operate */ .N)((source, subscriber) => {
    (scheduler ? (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__/* .concat */ .x)(values, source, scheduler) : (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__/* .concat */ .x)(values, source)).subscribe(subscriber);
  });
}
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ 9326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R0: () => (/* binding */ popNumber),
/* harmony export */   lI: () => (/* binding */ popScheduler),
/* harmony export */   ms: () => (/* binding */ popResultSelector)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8071);
/* harmony import */ var _isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9470);


function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
  return (0,_isScheduler__WEBPACK_IMPORTED_MODULE_1__/* .isScheduler */ .m)(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 9350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);

const EmptyError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .L)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ 9437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8750);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4360);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9974);



function catchError(selector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_2__/* .operate */ .N)((source, subscriber) => {
    let innerSub = null;
    let syncUnsub = false;
    let handledResult;
    innerSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, undefined, undefined, err => {
      handledResult = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_0__/* .innerFrom */ .Tg)(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 9470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8071);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .T)(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map

/***/ }),

/***/ 9901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ defaultIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9974);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4360);


function defaultIfEmpty(defaultValue) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .N)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ ._)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }
      subscriber.complete();
    }));
  });
}
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ })

}]);