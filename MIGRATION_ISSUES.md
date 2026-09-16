# Taiga UI migration notes (v3 → v5)

Record of the version strategy and the non-obvious decisions made while upgrading **Taiga UI v3.95 → v5.24**, **Angular
17 → 19**, **Nx 17 → 23**.

---

## Version strategy: Angular 19.2 + Nx 23.0 + Taiga 5

Taiga UI v5 requires **Angular ≥ 19** (`@taiga-ui/core@5` peer: `@angular/core >=19.0.0`). We deliberately stay on
**Angular 19.2** rather than 20/21, paired with **Nx 23.0** — which is the Nx-recommended pairing for Angular 19.2
(supported range `>=20.5.0 <23.1.0`).

**Why not Angular 20/21:** Angular 20 removed the private `ɵALLOW_MULTIPLE_PLATFORMS` token. Microzord's host/remote
bootstrap (`apps/host/src/bootstrap.ts`, `apps/*/…-bootstrap.ts`) relies on it to run multiple Angular platforms on one
page — the core micro-frontend mechanism. Moving to Angular ≥20 would require reworking that bootstrap (e.g. adopting
`@angular-architects/module-federation-tools`' `bootstrap()`), which changes the framework's documented usage and is
only verifiable at runtime. Staying on Angular 19 keeps that mechanism untouched. Angular 19 is still LTS and, with Nx
23.0, is a current supported stack.

**Why Nx 23 (not 20):** every stable `@nx/module-federation@20.x` (up to 20.8.4, the 20.x ceiling) has a bug where
`shareWorkspaceLibraries(...)` defaults `bundler` to `'rspack'` and the webpack MF variants never pass `'webpack'` — so
the rspack `NormalModuleReplacementPlugin` is applied to a webpack compiler and every MF build crashes with
`compiler.__internal__registerBuiltinPlugin is not a function`. It is fixed from Nx 21 onward (callers pass
`'webpack'`). Rather than carry a `patch-package` workaround on Nx 20, we move to Nx 23 where the bug is gone. Nx 19 is
also unusable here: its `@module-federation/manifest@0.6.16` fails the React remote build with
`no files found for remoteEntry chunk`.

---

## `webpack` pinned to 5.101.3 via `overrides`

**Files:** `package.json` (`devDependencies.webpack` + `overrides.webpack`)

Pairing Angular 19 (`@angular-devkit/build-angular@19.2` → webpack ~5.98/5.101 internals) with Nx 23 (`@nx/webpack@23` →
webpack `^5.101.3`, resolves to 5.111) produces **two incompatible webpack copies**. The symptoms were
`Cannot find module '.../@nx/webpack/node_modules/webpack/lib/util/create-schema-validation'` (host/react builds) and,
in the demo, `The 'compilation' argument must be an instance of Compilation` (the demo's community MF config `require`s
`webpack/lib/container/ModuleFederationPlugin` from the root copy).

**Fix:** `overrides: { "webpack": "5.101.3" }` forces a single webpack version that satisfies both `build-angular@19`
and `@nx/webpack@23`, so everything dedupes to one copy. This is standard npm version selection — no dependency source
is patched. Revisit/remove if the toolchain later aligns webpack on its own.

---

## `@ngneat/spectator` 17 → 19.6.2

**Files:** `libs/angular/**/*.spec.ts` (via the dependency)

In Angular 19 components are standalone by default. `@ngneat/spectator@17`'s internally-generated `_HostComponent` was
placed in a `TestBed` `declarations` array, which Angular 19 rejects
(`"_HostComponent" is marked as standalone and can't be declared in any NgModule`). Bumping spectator to the Angular-19
line (`19.6.2`) fixes all `@microzord/angular` unit tests.

---

## Remote import uses the dash form (`remote-react`, not `remote_react`)

**Files:** `apps/host/src/app/app.module.ts`, `apps/host/src/decl.d.ts`

Nx changed tuple-remote key handling between majors. On Nx 20 the container key was normalized to `remote_react`
(underscore); on **Nx 21+** `mapRemotes` keeps the raw project name `remote-react` (dash) as the import key and only
normalizes the container global. So the host imports `remote-react/remote-react-app`. The Nx project name in
`apps/host/module-federation.config.ts` stays `remote-react` regardless.

---

## Taiga v5 API changes (applied on top of the v5 schematic)

All verified against v5 `.d.ts` and a green build + test of all 7 projects.

- **`@taiga-ui/styles` added (`5.24.0`).** v5 moved global theme/fonts LESS and `utils.less` out of
  `@taiga-ui/core/styles` into the new `@taiga-ui/styles` package (referenced by `logo.style.less` and both apps'
  `project.json` style entries).
- **`ngx-highlightjs` 10 → 14** (peer of `@taiga-ui/addon-doc`); `HighlightOptions` → `HighlightJSOptions`. An ambient
  `declare module 'highlightjs-line-numbers.js'` (`apps/demo/src/decl.d.ts`) replaces the old `as string` import cast.
- **`TuiNotification` is a `readonly` tuple** → spread in NgModule `imports` (`...TuiNotification`).
- **`<table tuiDocAPI>` has no `showValues` input** (v4 `tui-doc-documentation` feature removed) — invalid binding
  dropped.
- **Alerts → Notifications (host):** `TuiAlertService` is now abstract; the concrete injectable is
  `TuiNotificationService`. `TuiAlert` → `...TuiNotification`. `provideEventPlugins()` → `provideTaiga()` (which
  provides the event plugins internally).
- **`tuiMode="onLight"` → `tuiTheme="light"`** on the doc-header link.
- `@tinkoff/ng-polymorpheus` → `@taiga-ui/polymorpheus`.

---

## Tooling bumps required by Nx 23

`@swc/core` → 1.15.8, `@swc/helpers` → 0.5.23, `@swc-node/register` → 1.12.1 (Nx 23 peer requirements). `@angular/cli`
stays on the `~19.2.0` line with the rest of Angular.

---

## Note: orphan CSS classes

`tui-island__title` / `tui-island__paragraph` remain in `getting-started.template.html` inside the migrated
`<div tuiCardLarge>`. Their v4 styling came from `@taiga-ui/legacy/styles/markup/tui-island.less`, which this app never
imported — so they were unstyled in v4 too and have no visual effect. Left as-is to keep the change minimal.
