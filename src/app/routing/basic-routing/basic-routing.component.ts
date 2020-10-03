import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-routing',
  templateUrl: './basic-routing.component.html',
  styleUrls: ['./basic-routing.component.scss'],
})
export class BasicRoutingComponent implements OnInit {
  dataHTML = `
  <a routerLink="/">Home</a> | <a routerLink="about">About</a> |
  <a routerLink="contact">Contact</a>
  <router-outlet></router-outlet>  `;
  dataTS = `
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { AboutComponent } from './basic-routing/about/about.component';
  import { ContactComponent } from './basic-routing/contact/contact.component';
  import { HomeComponent } from './basic-routing/home/home.component';

  const route: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
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
