import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'angular-course';
  routing = [
    {
      name: 'Basic',
      path: '/',
      children: [
        { name: 'String Interpolation', path: '#string_interpolation' },
        { name: 'Data Binding', path: '#data_binding' },
        { name: 'Event Binding', path: '#event_binding' },
        { name: 'Two-Way Binding', path: '#twoway_binding' },
        { name: 'Attribute Binding', path: '#attribute_binding' },
        { name: 'Class Binding', path: '#class_binding' },
        { name: 'Style Binding', path: '#style_binding' },
      ],
    },
    { name: 'Component and Databinding', path: 'component-and-databinding' },
    { name: 'Lifecyle Hooks', path: 'lifecycle-hooks' },
    { name: 'Directive', path: 'directive' },
  ];
}
