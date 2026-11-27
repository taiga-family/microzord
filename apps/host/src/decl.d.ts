declare module 'remote/remote-module' {
    export const RemoteModule: import('@angular/core').Type<
        import('@microzord/angular').MicrozordNgModule
    >;
}
declare module 'remote/remote-app-bootstrap' {
    export const remoteAppBootstrap: import('@microzord/core').ApplicationConstructor<
        Record<string, unknown>
    >;
}
declare module 'remote-standalone/standalone-app-bootstrap' {
    export const standaloneAppBootstrap: import('@microzord/core').ApplicationConstructor<
        Record<string, unknown>
    >;
}
declare module 'remote-standalone-zoneless/standalone-app-bootstrap' {
    export const standaloneAppBootstrap: import('@microzord/core').ApplicationConstructor<
        Record<string, unknown>
    >;
}
declare module 'remote-react/remote-react-app' {
    const x: import('@microzord/core').ApplicationConstructor<Record<string, unknown>>;
    export default x;
}
