import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { ComponentAndDatabindingDeepDiveComponent } from './component-and-databinding-deep-dive/component-and-databinding-deep-dive.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { DirectiveDeepDriveComponent } from './directive-deep-drive/directive-deep-drive.component';
import { PipeComponent } from './pipe/pipe.component';
import { DatePipeComponent } from './pipe/build-in-pipes/date-pipe/date-pipe.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PipeComponent,
  //   children: [
  //     {
  //       path: 'date',
  //       component: DatePipeComponent,
  //     },
  //   ],
  // },
  {
    path: '',
    component: BasicComponent,
  },
  {
    path: 'component-and-databinding',
    component: ComponentAndDatabindingDeepDiveComponent,
  },
  {
    path: 'lifecycle-hooks',
    component: LifecycleHooksComponent,
  },
  {
    path: 'directive',
    component: DirectiveDeepDriveComponent,
  },
  // {
  //   path: 'pipe',
  //   component: PipeComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
