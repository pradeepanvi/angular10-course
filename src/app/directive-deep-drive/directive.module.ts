import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DirectiveDeepDriveComponent } from './directive-deep-drive.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { CustomStructuralDirectiveComponent } from './custom-structural-directive/custom-structural-directive.component';
import { UnlessDirective } from './custom-structural-directive/unless.directive';
import { DirectiveRoutingModule } from "./directive-routing.module";

@NgModule({
  declarations: [
    DirectiveDeepDriveComponent,
    AttributeDirectiveComponent,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,
    CustomStructuralDirectiveComponent,
    UnlessDirective,
  ],
  imports: [CommonModule, DirectiveRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class DirectiveModule { }