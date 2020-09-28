import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';
import { NgAfterContentInitComponent } from './ng-after-content-init/ng-after-content-init.component';
import { NgAfterContentCheckedComponent } from './ng-after-content-checked/ng-after-content-checked.component';
import { NgAfterViewInitComponent } from './ng-after-view-init/ng-after-view-init.component';
import { NgAfterViewCheckedComponent } from './ng-after-view-checked/ng-after-view-checked.component';
import { NgOnDestroyComponent } from './ng-on-destroy/ng-on-destroy.component';

import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LifecycleHooksComponent,
    NgOnChangesComponent,
    NgOnInitComponent,
    NgDoCheckComponent,
    NgAfterContentInitComponent,
    NgAfterContentCheckedComponent,
    NgAfterViewInitComponent,
    NgAfterViewCheckedComponent,
    NgOnDestroyComponent,
  ],
  imports: [CommonModule, LifecycleHooksRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LifecycleHooksModule {}
