import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {TUI_DOC_LOGO, TUI_DOC_PAGES, TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';
import {HIGHLIGHT_OPTIONS, HighlightOptions} from 'ngx-highlightjs';

import {AppComponent} from './app.component';
import {GettingStartedModule} from './getting-started/getting-started.module';
import {LOGO_CONTENT} from './logo/logo.component';
import {pages} from './pages';
import {ROUTES} from './routes';

export const HIGHLIGHT_OPTIONS_VALUE: HighlightOptions = {
    coreLibraryLoader: async () => import('highlight.js/lib/core'),
    lineNumbersLoader: async () => import('highlightjs-line-numbers.js' as string),
    languages: {
        typescript: async () => import('highlight.js/lib/languages/typescript'),
        less: async () => import('highlight.js/lib/languages/less'),
        xml: async () => import('highlight.js/lib/languages/xml'),
    },
};

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ...TuiAddonDoc,
        TuiLink,
        GettingStartedModule,
        RouterModule.forRoot(ROUTES, {initialNavigation: 'enabledBlocking'}),
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: TUI_DOC_LOGO,
            useValue: LOGO_CONTENT,
        },
        {
            provide: TUI_DOC_PAGES,
            useValue: pages,
        },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: HIGHLIGHT_OPTIONS_VALUE,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    public getEntryPoint() {
        return AppComponent;
    }
}
