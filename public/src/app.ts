//our root app component
import {Component, NgModule, VERSION, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import 'my-thing';

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <p>The svelte custom element should be displayed below with text <strong>I'm a custom element.</strong> but there is the following error in the console instead -</p>
      <my-thing></my-thing>
      <pre><![CDATA[
Uncaught TypeError: Failed to construct 'HTMLElement': Please use the 'new' operator, this DOM object constructor cannot be called as a function.
  at new MyThing (:5000/svelte/bundle.js:208)
  at HTMLDocument.createElement (<anonymous>:1:1545)
  at DefaultDomRenderer2.createElement (unpkg.com/@angular/platform-browser@4.2.6/bundles/platform-browser.umd.js:2795)
  at DebugRenderer2.createElement (unpkg.com/@angular/core@4.2.6/bundles/core.umd.js:13584)
  at createElement (unpkg.com/@angular/core@4.2.6/bundles/core.umd.js:9191)
  at createViewNodes (unpkg.com/@angular/core@4.2.6/bundles/core.umd.js:12176)
  at callViewAction (unpkg.com/@angular/core@4.2.6/bundles/core.umd.js:12656)
  at execComponentViewsAction (unpkg.com/@angular/core@4.2.6/bundles/core.umd.js:12565)
  at createViewNodes (unpkg.com/@angular/core@4.2.6/bundles/core.umd.js:12237)
  at createRootView (unpkg.com/@angular/core@4.2.6/bundles/core.umd.js:12105)
]]></pre>
    </div>
  `,
})
export class App {
  name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
