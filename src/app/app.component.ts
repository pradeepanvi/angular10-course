import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-course';
  routing = [
    { name: 'Basic', path: '/' },
    { name: 'Component and Databinding', path: 'component-and-databinding' },
    { name: 'Lifecyle Hooks', path: 'lifecycle-hooks' },
    { name: 'Directive', path: 'directive' },
  ]

}
