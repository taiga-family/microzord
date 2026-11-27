import {
    Compiler,
    ComponentFactoryResolver,
    ComponentRef,
    Injectable,
    Injector,
    NgModuleRef,
    NgZone,
    Optional,
    Type,
    ViewContainerRef,
} from '@angular/core';

import {EntryPoint, MicrozordNgModule} from '../types/ng-module';

@Injectable()
export class MicrozordNgCompilerService {
    constructor(
        private readonly compiler: Compiler,
        private readonly componentFactoryResolver: ComponentFactoryResolver,
        private readonly ngZone: NgZone,
        @Optional()
        private readonly injector: Injector,
        @Optional()
        private readonly viewContainerRef: ViewContainerRef,
    ) {}

    public async createModule<
        T extends EntryPoint = EntryPoint,
        M extends MicrozordNgModule<T> = MicrozordNgModule<T>,
    >(Module: Type<M>, injector: Injector = this.injector): Promise<NgModuleRef<M>> {
        const moduleFactory = await this.compiler.compileModuleAsync(Module);

        return moduleFactory.create(injector);
    }

    public async createEntryPoint<
        T extends EntryPoint = EntryPoint,
        M extends MicrozordNgModule<T> = MicrozordNgModule<T>,
    >(
        moduleRef: NgModuleRef<M>,
        injector: Injector = this.injector,
        viewContainerRef: ViewContainerRef = this.viewContainerRef,
    ): Promise<ComponentRef<T>> {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            moduleRef.instance.getEntryPoint(),
        );

        viewContainerRef.clear();

        // Creating the entry point inside the Angular zone (like bootstrapApplication
        // does internally) makes its event listeners register within the zone. Otherwise,
        // in zone change detection mode their notifications are dropped and the view
        // is never refreshed.
        return this.ngZone.run(() =>
            viewContainerRef.createComponent(
                componentFactory,
                undefined,
                injector,
                [],
                moduleRef,
            ),
        );
    }

    public async createEntryPointFromModule<
        T extends EntryPoint = EntryPoint,
        M extends MicrozordNgModule<T> = MicrozordNgModule<T>,
    >(
        Module: Type<M>,
        injector: Injector = this.injector,
        viewContainerRef: ViewContainerRef = this.viewContainerRef,
    ): Promise<ComponentRef<T>> {
        const moduleRef = await this.createModule(Module, injector);

        return this.createEntryPoint(moduleRef, injector, viewContainerRef);
    }
}
