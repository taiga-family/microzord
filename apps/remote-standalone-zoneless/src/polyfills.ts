/**
 * Zoneless application: no zone.js polyfill.
 *
 * When this app runs inside a host that itself loads zone.js, the polyfill is still
 * present globally, but change detection of this app is driven by
 * provideExperimentalZonelessChangeDetection() and does not depend on it.
 **********************************************************************************************/
export {};
