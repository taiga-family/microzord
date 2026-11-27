import {Component, NgModule, NgZone, Type} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {registerEntity} from '@microzord/core';

import {EntryPoint, MicrozordNgModule} from '../types/ng-module';
import {MicrozordNgModuleDirective} from './microzord-ng-module.directive';

const zoneFlagsAtCreation: boolean[] = [];

@Component({
    standalone: true,
    template: '<button (click)="counter = counter + 1">Counter: {{ counter }}</button>',
})
class MockEntryComponent implements EntryPoint {
    public counter = 1;

    constructor() {
        zoneFlagsAtCreation.push(NgZone.isInAngularZone());
    }
}

@NgModule({})
class MockModule implements MicrozordNgModule {
    public getEntryPoint(): Type<EntryPoint> {
        return MockEntryComponent;
    }
}

@Component({
    standalone: false,
    template: '<ng-container [microzordNgModule]="moduleName">',
})
class HostComponent {
    public moduleName: string | null = null;
}

@NgModule({declarations: [HostComponent, MicrozordNgModuleDirective]})
class HostModule {}

describe('MicrozordNgModuleDirective', () => {
    beforeEach(() => {
        zoneFlagsAtCreation.length = 0;
        TestBed.configureTestingModule({imports: [HostModule]});
    });

    async function bootstrapModule(name: string) {
        registerEntity({name, load: () => MockModule});

        const fixture = TestBed.createComponent(HostComponent);

        fixture.componentInstance.moduleName = name;
        fixture.detectChanges();
        await fixture.whenStable();
        await new Promise((resolve) => {
            setTimeout(resolve);
        });
        await fixture.whenStable();
        // simulates the application tick that renders the dynamically created entry point
        fixture.detectChanges();

        return fixture;
    }

    it('should render the entry point of the loaded module', async () => {
        const fixture = await bootstrapModule('ng-module-render');

        expect(fixture.nativeElement.textContent).toContain('Counter: 1');
    });

    it('should create the entry point inside the Angular zone so that change detection can reach it', async () => {
        await bootstrapModule('ng-module-zone');

        expect(zoneFlagsAtCreation.at(-1)).toBe(true);
    });
});
