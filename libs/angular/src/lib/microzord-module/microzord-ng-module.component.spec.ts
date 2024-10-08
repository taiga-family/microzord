import {Component, NgModule, NgModuleRef, Type} from '@angular/core';
import {createDirectiveFactory, SpectatorDirective} from '@ngneat/spectator';
import {first} from 'rxjs/operators';

import {MicrozordHostModule} from '../microzord-host.module';
import {EntryPoint, MicrozordNgModule} from '../types/ng-module';
import {MicrozordNgModuleDirective} from './microzord-ng-module.directive';

@Component({standalone: true, selector: 'mock-component', template: ''})
class MockComponent implements EntryPoint {}

@NgModule({})
class MockModule implements MicrozordNgModule {
    public getEntryPoint(): Type<EntryPoint> {
        return MockComponent;
    }
}

describe('MicrozordModuleDirective', () => {
    let spectator: SpectatorDirective<
        MicrozordNgModuleDirective,
        {
            name: string;
        }
    >;
    const createDirective = createDirectiveFactory({
        directive: MicrozordNgModuleDirective,
        imports: [
            MicrozordHostModule.register({
                modules: [
                    {
                        name: 'name',
                        load: () => MockModule,
                    },
                ],
            }),
        ],
    });

    beforeEach(async () => {
        spectator = createDirective(`<div [microzordNgModule]='name'></div>`, {
            hostProps: {
                name: 'name',
            },
        });
    });

    it('should create', () => {
        expect(spectator.directive).toBeTruthy();
    });

    it('should destroy the previously created app', async () => {
        expect.assertions(2);

        const moduleRef = await spectator.directive.module.pipe(first()).toPromise();

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const destroySpy = jest.spyOn(moduleRef!, 'destroy');

        spectator.setHostInput('name', '');
        const newModuleRef = await spectator.directive.module.pipe(first()).toPromise();

        expect(newModuleRef).toBeNull();
        expect(destroySpy).toHaveBeenCalledTimes(1);
    });

    it('should complete the subject when the directive is destroyed', async () => {
        expect.assertions(1);

        const module = spectator.directive.module.toPromise();

        spectator.directive.ngOnDestroy();

        expect(await module).toEqual(expect.any(NgModuleRef));
    });
});
