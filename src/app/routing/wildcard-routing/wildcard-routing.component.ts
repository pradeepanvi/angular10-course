import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wildcard-routing',
  templateUrl: './wildcard-routing.component.html',
  styleUrls: ['./wildcard-routing.component.scss'],
})
export class WildcardRoutingComponent implements OnInit {
  dataTS = `
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';

  const route: Routes = [
    { path: '**', component: HomeComponent}
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
