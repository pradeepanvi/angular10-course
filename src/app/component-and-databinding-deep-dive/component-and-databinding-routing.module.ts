import { ComponentAndDatabindingDeepDiveComponent } from './component-and-databinding-deep-dive.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes = [
  { path: '', component: ComponentAndDatabindingDeepDiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ComponentAndDatabindingRoutingModule {}
