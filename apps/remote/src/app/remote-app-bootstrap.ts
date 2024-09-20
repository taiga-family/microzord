import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {createApp} from '@microzord/angular/child';

import {AppModule} from './app.module';

export const remoteAppBootstrap = createApp(
    async (opts) => platformBrowserDynamic().bootstrapModule(AppModule, opts),
    'remote-app',
);
