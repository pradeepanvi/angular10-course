import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nesting-routes',
  templateUrl: './nesting-routes.component.html',
  styleUrls: ['./nesting-routes.component.scss'],
})
export class NestingRoutesComponent implements OnInit {
  dataHTML = `
  <a routerLink="/">Home</a> | <a routerLink="about">About</a> |
  <a routerLink="service">Service</a>
  <router-outlet></router-outlet>  `;

  dataChildHTML = `
  <a routerLink="serve1">Serve 1</a> | <a routerLink="serve2">Serve 2</a>
  <router-outlet></router-outlet>
  `;
  dataTS = `
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { HomeComponent } from './shared/component/home/home.component';
  import { AboutComponent } from './shared/component/about/about.component';
  import { ServiceComponent } from './shared/component/service/service.component';
  import { Serve1Component } from './shared/component/service/serve1/serve1.component';
  import { Serve2Component } from './shared/component/service/serve2/serve2.component';

  const route: Routes = [
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
  ];

  @NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}  
  `;
  dataModuleTS = `
  @NgModule({
    imports: [AppRoutingModule],
  })
  export class AppModule {}  
  `;

  constructor() {}

  ngOnInit(): void {}
}
