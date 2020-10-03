import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-routing',
  templateUrl: './redirect-routing.component.html',
  styleUrls: ['./redirect-routing.component.scss'],
})
export class RedirectRoutingComponent implements OnInit {
  dataTS = `
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';

  const route: Routes = [
    { path: 'home', component: HomeComponent}
    { path: '', redirectTo:'/home', pathMatch: 'full'}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}  
  `;

  constructor() {}

  ngOnInit(): void {}
}
