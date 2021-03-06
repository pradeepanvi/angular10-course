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
    {
      name: 'Lifecyle Hooks',
      path: 'lifecycle-hooks',
      children: [
        { name: 'ngOnChanges', path: '#ngOnChanges' },
        { name: 'ngOnInit', path: '#ngOnInit' },
        { name: 'ngDoCheck', path: '#ngDoCheck' },
        { name: 'ngAfterContentInit', path: '#ngAfterContentInit' },
        { name: 'ngAfterContentChecked', path: '#ngAfterContentChecked' },
        { name: 'ngAfterViewInit', path: '#ngAfterViewInit' },
        { name: 'ngAfterViewChecked', path: '#ngAfterViewChecked' },
        { name: 'ngOnDestroy', path: '#ngOnDestroy' },
      ],
    },
    {
      name: 'Directive',
      path: 'directive',
      children: [
        { name: 'Component Directive', path: '#componentDirective' },
        { name: 'Structural Directive', path: '#structuralDirective' },
        {
          name: 'Custom Structural Directive',
          path: '#customStructuralDirective',
        },
      ],
    },
    {
      name: 'Pipe',
      path: 'pipe',
      routingChildren: [
        {
          name: 'Date Pipe',
          path: 'date-pipe',
          children: [
            { name: 'Short', path: '#short' },
            { name: 'Medium', path: '#medium' },
            { name: 'Long', path: '#long' },
            { name: 'Full', path: '#full' },
            { name: 'Short Date', path: '#shortDate' },
            { name: 'Medium Date', path: '#mediumDate' },
            { name: 'Long Date', path: '#longDate' },
            { name: 'Full Date', path: '#fullDate' },
            { name: 'Short Time', path: '#shortTime' },
            { name: 'Medium Time', path: '#mediumTime' },
            { name: 'Long Time', path: '#longTime' },
            { name: 'Full Time', path: '#fullTime' },
          ],
        },
        {
          name: 'UpperCase Pipe',
          path: 'upper-case-pipe',
        },
        {
          name: 'LowerCase Pipe',
          path: 'lower-case-pipe',
        },
        {
          name: 'TitleCase Pipe',
          path: 'title-case-pipe',
        },
        {
          name: 'Currency Pipe',
          path: 'currency-pipe',
        },
        {
          name: 'Decimal Pipe',
          path: 'decimal-pipe',
        },
        {
          name: 'Percent Pipe',
          path: 'percent-pipe',
        },
        {
          name: 'Strength Custom Pipe',
          path: 'strengh-custom-pipe',
        },
        {
          name: 'Filter Custom Pipe',
          path: 'filter-custom-pipe',
        },
      ],
    },
  ];
}
