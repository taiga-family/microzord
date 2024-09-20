import type {MicrozordMessageEvent} from '@microzord/core';
import {Application} from '@microzord/core';

export class ApplicationMock extends Application<any> {
    public async navigate(_url: string, _props?: unknown): Promise<void> {
        return Promise.resolve(undefined);
    }

    public async send(_msg: MicrozordMessageEvent | string): Promise<void> {
        return Promise.resolve(undefined);
    }
}
