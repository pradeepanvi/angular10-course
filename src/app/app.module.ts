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
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { NgOnChangesComponent } from './lifecycle-hooks/ng-on-changes/ng-on-changes.component';
import { NgOnInitComponent } from './lifecycle-hooks/ng-on-init/ng-on-init.component';
import { NgDoCheckComponent } from './lifecycle-hooks/ng-do-check/ng-do-check.component';
import { NgAfterContentInitComponent } from './lifecycle-hooks/ng-after-content-init/ng-after-content-init.component';
import { NgAfterContentCheckedComponent } from './lifecycle-hooks/ng-after-content-checked/ng-after-content-checked.component';
import { NgAfterViewInitComponent } from './lifecycle-hooks/ng-after-view-init/ng-after-view-init.component';
import { NgAfterViewCheckedComponent } from './lifecycle-hooks/ng-after-view-checked/ng-after-view-checked.component';
import { NgOnDestroyComponent } from './lifecycle-hooks/ng-on-destroy/ng-on-destroy.component';
import { DirectiveDeepDriveComponent } from './directive-deep-drive/directive-deep-drive.component';
import { AttributeDirectiveComponent } from './directive-deep-drive/attribute-directive/attribute-directive.component';
import { ComponentDirectiveComponent } from './directive-deep-drive/component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './directive-deep-drive/structural-directive/structural-directive.component';
import { CustomStructuralDirectiveComponent } from './directive-deep-drive/custom-structural-directive/custom-structural-directive.component';
import { UnlessDirective } from "./directive-deep-drive/custom-structural-directive/unless.directive";
import { ParallaxScrollingDirective } from "./shared/directive/parallax-scrolling.directive";
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
    ContentChildComponent,
    LifecycleHooksComponent,
    NgOnChangesComponent,
    NgOnInitComponent,
    NgDoCheckComponent,
    NgAfterContentInitComponent,
    NgAfterContentCheckedComponent,
    NgAfterViewInitComponent,
    NgAfterViewCheckedComponent,
    NgOnDestroyComponent,
    DirectiveDeepDriveComponent,
    AttributeDirectiveComponent,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,
    CustomStructuralDirectiveComponent,
    UnlessDirective,
    // ParallaxScrollingDirective
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
