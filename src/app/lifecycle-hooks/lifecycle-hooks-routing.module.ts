import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleHooksComponent } from './lifecycle-hooks.component';

const route: Routes = [{ path: '', component: LifecycleHooksComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class LifecycleHooksRoutingModule {}
