import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ComponentAndDatabindingDeepDiveComponent } from './component-and-databinding-deep-dive/component-and-databinding-deep-dive.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent
  },
  {
    path: 'component-and-databinding',
    component: ComponentAndDatabindingDeepDiveComponent
  },
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
