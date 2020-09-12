import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
  },
  {
    path: 'component-and-databinding',
    loadChildren: () =>
      import(
        './component-and-databinding-deep-dive/component-and-databinding-deep-dive.module'
      ).then((m) => m.ComponentAndDatabindingModule),
  },
  {
    path: 'lifecycle-hooks',
    loadChildren: () =>
      import('./lifecycle-hooks/lifecycle-hooks.module').then(
        (m) => m.LifecycleHooksModule
      ),
  },
  {
    path: 'directive',
    loadChildren: () => import('./directive-deep-drive/directive.module').then(m => m.DirectiveModule)
  },
  {
    path: 'pipe',
    loadChildren: () => import('./pipe/pipe.module').then(m => m.PipeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
