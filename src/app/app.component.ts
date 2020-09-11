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
    {
      name: 'Component and Databinding',
      path: 'component-and-databinding',
      children: [
        { name: 'Custom Property Binding', path: '#custom_property_binding' },
        {
          name: 'Alias to Custom Properties',
          path: '#alias_custom_property_binding',
        },
        { name: 'Custom Event Binding', path: '#custom_event_binding' },
        { name: 'Alias to Custom Event', path: '#alias_custom_event_binding' },
        { name: 'Encapsulation None', path: '#encapsulation_none' },
        { name: 'Encapsulation Shadowdom', path: '#encapsulation_shadowdom' },
        { name: 'Encapsulation Emulated', path: '#encapsulation_emulated' },
        { name: 'Local Reference', path: '#local_reference' },
        { name: 'View Child', path: '#view_child' },
        { name: 'NG Content', path: '#ng_content' },
        { name: 'Content Child', path: '#content_child' },
      ],
    },
    { name: 'Lifecyle Hooks', path: 'lifecycle-hooks' },
    { name: 'Directive', path: 'directive' },
  ];
}
