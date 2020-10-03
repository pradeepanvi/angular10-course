import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './basic-routing/about/about.component';
import { ContactComponent } from './basic-routing/contact/contact.component';
import { HomeComponent } from './basic-routing/home/home.component';
import { BasicRoutingComponent } from './basic-routing/basic-routing.component';
import { DesComponent } from './des/des.component';
import { RoutingComponent } from './routing.component';
import { WildcardRoutingComponent } from './wildcard-routing/wildcard-routing.component';
import { RedirectRoutingComponent } from './redirect-routing/redirect-routing.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class RoutingRoutingModule {}
