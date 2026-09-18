"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[488],{

/***/ 3488:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   REACTIVE_NODE: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.pL),
/* harmony export */   SIGNAL: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.bh),
/* harmony export */   SIGNAL_NODE: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.s0),
/* harmony export */   consumerAfterComputation: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.Wu),
/* harmony export */   consumerBeforeComputation: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.Bg),
/* harmony export */   consumerDestroy: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.XR),
/* harmony export */   consumerMarkDirty: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.Mj),
/* harmony export */   consumerPollProducersForChange: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.si),
/* harmony export */   createComputed: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.KZ),
/* harmony export */   createLinkedSignal: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.Ej),
/* harmony export */   createSignal: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.n5),
/* harmony export */   createWatch: () => (/* binding */ createWatch),
/* harmony export */   defaultEquals: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.H8),
/* harmony export */   getActiveConsumer: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.nR),
/* harmony export */   isInNotificationPhase: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.KE),
/* harmony export */   isReactive: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.g8),
/* harmony export */   linkedSignalSetFn: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   linkedSignalUpdateFn: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.pG),
/* harmony export */   producerAccessed: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.mK),
/* harmony export */   producerIncrementEpoch: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.No),
/* harmony export */   producerMarkClean: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.TO),
/* harmony export */   producerNotifyConsumers: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.Bz),
/* harmony export */   producerUpdateValueVersion: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.JC),
/* harmony export */   producerUpdatesAllowed: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.zR),
/* harmony export */   runPostSignalSetFn: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.q2),
/* harmony export */   setActiveConsumer: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.Ht),
/* harmony export */   setAlternateWeakRefImpl: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   setPostSignalSetFn: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.dV),
/* harmony export */   setThrowInvalidWriteToSignalError: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.KO),
/* harmony export */   signalSetFn: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.j2),
/* harmony export */   signalUpdateFn: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.mC),
/* harmony export */   untracked: () => (/* reexport safe */ _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__.O8)
/* harmony export */ });
/* harmony import */ var _untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2353);
/**
 * @license Angular v19.2.9
 * (c) 2010-2025 Google LLC. https://angular.io/
 * License: MIT
 */



function createWatch(fn, schedule, allowSignalWrites) {
  const node = Object.create(WATCH_NODE);
  if (allowSignalWrites) {
    node.consumerAllowSignalWrites = true;
  }
  node.fn = fn;
  node.schedule = schedule;
  const registerOnCleanup = cleanupFn => {
    node.cleanupFn = cleanupFn;
  };
  function isWatchNodeDestroyed(node) {
    return node.fn === null && node.schedule === null;
  }
  function destroyWatchNode(node) {
    if (!isWatchNodeDestroyed(node)) {
      (0,_untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__/* .consumerDestroy */ .XR)(node); // disconnect watcher from the reactive graph
      node.cleanupFn();
      // nullify references to the integration functions to mark node as destroyed
      node.fn = null;
      node.schedule = null;
      node.cleanupFn = NOOP_CLEANUP_FN;
    }
  }
  const run = () => {
    if (node.fn === null) {
      // trying to run a destroyed watch is noop
      return;
    }
    if ((0,_untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isInNotificationPhase */ .KE)()) {
      throw new Error(`Schedulers cannot synchronously execute watches while scheduling.`);
    }
    node.dirty = false;
    if (node.hasRun && !(0,_untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__/* .consumerPollProducersForChange */ .si)(node)) {
      return;
    }
    node.hasRun = true;
    const prevConsumer = (0,_untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__/* .consumerBeforeComputation */ .Bg)(node);
    try {
      node.cleanupFn();
      node.cleanupFn = NOOP_CLEANUP_FN;
      node.fn(registerOnCleanup);
    } finally {
      (0,_untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__/* .consumerAfterComputation */ .Wu)(node, prevConsumer);
    }
  };
  node.ref = {
    notify: () => (0,_untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__/* .consumerMarkDirty */ .Mj)(node),
    run,
    cleanup: () => node.cleanupFn(),
    destroy: () => destroyWatchNode(node),
    [_untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__/* .SIGNAL */ .bh]: node
  };
  return node.ref;
}
const NOOP_CLEANUP_FN = () => {};
// Note: Using an IIFE here to ensure that the spread assignment is not considered
// a side-effect, ending up preserving `COMPUTED_NODE` and `REACTIVE_NODE`.
// TODO: remove when https://github.com/evanw/esbuild/issues/3392 is resolved.
const WATCH_NODE = /* @__PURE__ */(() => {
  return {
    ..._untracked_BKcld_ew_mjs__WEBPACK_IMPORTED_MODULE_0__/* .REACTIVE_NODE */ .pL,
    consumerIsAlwaysLive: true,
    consumerAllowSignalWrites: false,
    consumerMarkedDirty: node => {
      if (node.schedule !== null) {
        node.schedule(node.ref);
      }
    },
    hasRun: false,
    cleanupFn: NOOP_CLEANUP_FN
  };
})();

//# sourceMappingURL=signals.mjs.map

/***/ })

}]);