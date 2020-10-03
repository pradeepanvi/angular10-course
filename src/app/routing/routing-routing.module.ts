import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './shared/component/about/about.component';
import { ContactComponent } from './shared/component/contact/contact.component';
import { HomeComponent } from './shared/component/home/home.component';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';
import { DesComponent } from './des/des.component';
import { RoutingComponent } from './routing.component';
import { WildcardRoutingComponent } from './wildcard-routing/wildcard-routing.component';
import { RedirectRoutingComponent } from './redirect-routing/redirect-routing.component';
import { NestingRoutesComponent } from './nesting-routes/nesting-routes.component';
import { ServiceComponent } from './shared/component/service/service.component';
import { Serve1Component } from './shared/component/service/serve1/serve1.component';
import { Serve2Component } from './shared/component/service/serve2/serve2.component';

const route: Routes = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      { path: '', component: DesComponent },
      {
        path: 'basic-routing',
        component: BasicRoutingComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'contact', component: ContactComponent },
        ],
      },
      { path: 'wildcard', component: WildcardRoutingComponent },
      { path: 'redirect', component: RedirectRoutingComponent },
      {
        path: 'nesting-routes',
        component: NestingRoutesComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'about', component: AboutComponent },
          {
            path: 'service',
            component: ServiceComponent,
            children: [
              { path: 'serve1', component: Serve1Component },
              { path: 'serve2', component: Serve2Component },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
