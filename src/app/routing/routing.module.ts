import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoutingRoutingModule } from './routing-routing.module';
import { DesComponent } from './des/des.component';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';

@NgModule({
  declarations: [DesComponent, BasicRoutingComponent],
  imports: [CommonModule, RoutingRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoutingModule {}
