import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicComponent implements OnInit {
  title = 'This is Home Component!';
  titleC = '{{ title }}';
  newHtml = '<p>Hi This is <strong>inner HTML!</strong></p>';
  btnState = true;
  active = "btn btn-primary";
  actionNameAtr = 'Action Name';
  classState = true;

  //style
  widthStr = "500px";
  widthUnit = 500;
  styleMulti = "width: 500px; height: 100px";
  styleObj = { width: '500px', height: '100px' };
  styleArray = ['width', '500px'];

  dataBinding = `<div [innerHtml]="newHtml"></div>
  <hr>
  <button [disabled]="btnState">Button</button>
  <hr>
  <button [ngClass]="active">Active Class Button</button>`;
  dataBindingTS = `
  newHtml = '<p>Hi This is <strong>inner HTML!</strong></p>';
  btnState = true;
  active = "btn btn-primary";
  `;

  eventBinding = `
  <input type="text" (change)="changeVal($event)">
            <br>
            <button (click)="clickBtn($event)">Button</button>
  `;
  eventBindingTS = `
  changeVal(event: Event) {
    console.log(event);
  }

  clickBtn(event: Event) {
    console.log(event);
  }  
  `;
  twowayBinding = `<input [(ngModel)]="title" type="text">
            <p>{{ title }}</p>`;
  twowayBindingTS = `
  title = 'This is Home Component!';
  `;
  attrBinding = `
  <button [attr.aria-label]="actionNameAtr">Button</button>`;
  attrBindingTS = `
  actionNameAtr = 'Action Name';`;

  subLinks = [
    { name: 'String Interpolation', path: '#string_interpolation' },
    { name: 'Data Binding', path: '#data_binding' },
    { name: 'Event Binding', path: '#event_binding' },
    { name: 'Two-Way Binding', path: '#twoway_binding' },
    { name: 'Attribute Binding', path: '#attribute_binding' },
    { name: 'Class Binding', path: '#class_binding' },
    { name: 'Style Binding', path: '#style_binding' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeVal(event: Event) {
    console.log(event);
  }

  clickBtn(event: Event) {
    console.log(event);
  }

}
