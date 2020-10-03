import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RoutingRoutingModule } from './routing-routing.module';
import { DesComponent } from './des/des.component';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';
import { WildcardRoutingComponent } from './wildcard-routing/wildcard-routing.component';
import { RedirectRoutingComponent } from './redirect-routing/redirect-routing.component';
import { NestingRoutesComponent } from './nesting-routes/nesting-routes.component';
import { ServiceComponent } from './shared/component/service/service.component';
import { Serve1Component } from './shared/component/service/serve1/serve1.component';
import { Serve2Component } from './shared/component/service/serve2/serve2.component';

@NgModule({
  declarations: [
    DesComponent,
    BasicRoutingComponent,
    WildcardRoutingComponent,
    RedirectRoutingComponent,
    NestingRoutesComponent,
    ServiceComponent,
    Serve1Component,
    Serve2Component,
  ],
  imports: [CommonModule, RoutingRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RoutingModule {}
