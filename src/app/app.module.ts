import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { CodeComponent } from '../app/shared/component/code-component/code-component';
import { VisualComponent } from './shared/component/visual/visual.component';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';
import * as hljs from 'highlight.js';
import { ParallaxScrollingDirective } from './shared/directive/parallax-scrolling.directive';
import { PipeComponent } from './pipe/pipe.component';
import { BuildInPipesComponent } from './pipe/build-in-pipes/build-in-pipes.component';
import { DatePipeComponent } from './pipe/build-in-pipes/date-pipe/date-pipe.component';
import { UpperCasePipeComponent } from './pipe/build-in-pipes/upper-case-pipe/upper-case-pipe.component';
import { LowerCasePipeComponent } from './pipe/build-in-pipes/lower-case-pipe/lower-case-pipe.component';
import { CurrencyPipeComponent } from './pipe/build-in-pipes/currency-pipe/currency-pipe.component';
import { ComponentAndDatabindingModule } from './component-and-databinding-deep-dive/component-and-databinding-deep-dive.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
(document.defaultView as any).hljs = hljs;

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    PipeComponent,
    BuildInPipesComponent,
    DatePipeComponent,
    UpperCasePipeComponent,
    LowerCasePipeComponent,
    CurrencyPipeComponent,
    // ParallaxScrollingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HighlightModule,
    SharedModule,
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
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
