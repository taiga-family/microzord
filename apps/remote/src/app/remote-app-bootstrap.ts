import {platformBrowser} from '@angular/platform-browser';
import {createApp} from '@microzord/angular/child';

import {AppModule} from './app.module';

export const remoteAppBootstrap = createApp(
    async (opts) => platformBrowser().bootstrapModule(AppModule, opts),
    'remote-app',
);
