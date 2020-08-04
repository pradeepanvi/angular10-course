import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ComponentAndDatabindingDeepDiveComponent } from './component-and-databinding-deep-dive/component-and-databinding-deep-dive.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { DirectivesDeepDriveComponent } from './directives-deep-drive/directives-deep-drive.component';

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
  },
  {
    path: 'directives',
    component: DirectivesDeepDriveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
