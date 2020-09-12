import { ComponentAndDatabindingDeepDiveComponent } from './component-and-databinding-deep-dive.component';
import { DeepDiveComponent } from './deep-dive/deep-dive.component';
import { AliasCustomPropertyComponent } from './alias-custom-property/alias-custom-property.component';
import { CustomEventComponent } from './custom-event/custom-event.component';
import { AliasCustomEventComponent } from './alias-custom-event/alias-custom-event.component';
import { EncapsulationNoneComponent } from './encapsulation-none/encapsulation-none.component';
import { EncapsulationEmulatedComponent } from './encapsulation-emulated/encapsulation-emulated.component';
import { EncapsulationShadowdomComponent } from './encapsulation-shadowdom/encapsulation-shadowdom.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAndDatabindingRoutingModule } from './component-and-databinding-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
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
  ],
  imports: [CommonModule, ComponentAndDatabindingRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentAndDatabindingModule {}
