import {ChangeDetectionStrategy, Component} from '@angular/core';

const HOST_CONNECTION = `import {MicrozordHostModule} from '@microzord/angular';

@NgModule({
  imports: [
    MicrozordHostModule.register({
      apps: [
        {
          name: 'my-header',
          assetMap: '/react-header/microzord.json',
        },
        {
          name: 'new-footer',
          assetMap: '/vue-footer/microzord.json',
        },
      ],
    }),
  ],
})
export class AppModule {}`;

const ADDING_MODULE = `import {MicrozordModule} from '@microzord/angular';

@NgModule({
    imports: [
      MicrozordModule,
    ],
})
export class SomeModule {}`;

const ADDING_INTO_TEMPLATE = `<header microzord="my-header"></header>

<div>Any content</div>

<footer microzord="new-footer" (hook)="onFooterLifecycleEvent($event)"></footer>`;

@Component({
    selector: 'angular-host',
    templateUrl: './angular-host.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularHostComponent {
    public readonly hostConnection = HOST_CONNECTION;
    public readonly addingModule = ADDING_MODULE;
    public readonly addingIntoTemplate = ADDING_INTO_TEMPLATE;
}
