import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/material.module";
import { CodeComponent } from "../app/shared/component/code-component/code-component";
import { VisualComponent } from './shared/component/visual/visual.component';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from "ngx-highlightjs";
import * as hljs from "highlight.js";
import { ComponentAndDatabindingDeepDiveComponent } from './component-and-databinding-deep-dive/component-and-databinding-deep-dive.component';
import { DeepDiveComponent } from './component-and-databinding-deep-dive/deep-dive/deep-dive.component';
import { AliasCustomPropertyComponent } from './component-and-databinding-deep-dive/alias-custom-property/alias-custom-property.component';
import { CustomEventComponent } from './component-and-databinding-deep-dive/custom-event/custom-event.component';
import { AliasCustomEventComponent } from './component-and-databinding-deep-dive/alias-custom-event/alias-custom-event.component';
import { EncapsulationNoneComponent } from './component-and-databinding-deep-dive/encapsulation-none/encapsulation-none.component';
import { EncapsulationEmulatedComponent } from './component-and-databinding-deep-dive/encapsulation-emulated/encapsulation-emulated.component';
import { EncapsulationShadowdomComponent } from './component-and-databinding-deep-dive/encapsulation-shadowdom/encapsulation-shadowdom.component';
import { LocalReferenceComponent } from './component-and-databinding-deep-dive/local-reference/local-reference.component';
import { ViewchildComponent } from './component-and-databinding-deep-dive/viewchild/viewchild.component';
import { NgContentComponent } from './component-and-databinding-deep-dive/ng-content/ng-content.component';
import { ContentChildComponent } from './component-and-databinding-deep-dive/content-child/content-child.component';
(document.defaultView as any).hljs = hljs;

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    CodeComponent,
    VisualComponent,
    ComponentAndDatabindingDeepDiveComponent,
    DeepDiveComponent,
    AliasCustomPropertyComponent,
    CustomEventComponent,
    AliasCustomEventComponent,
    EncapsulationNoneComponent,
    EncapsulationEmulatedComponent,
    EncapsulationShadowdomComponent,
    LocalReferenceComponent,
    ViewchildComponent,
    NgContentComponent,
    ContentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
