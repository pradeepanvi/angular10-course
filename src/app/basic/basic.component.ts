import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { SideLinksService } from "../shared/service/side-links.service";

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
  actionNameAtr = 'Action Name';
  active = "btn btn-primary";
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
  classBinding = `
              <button [class]="active">Button</button>
            <p>Single class binding</p>
            <button [class.btn]="classState">Button</button>
  `;
  classBindingTS = `
    active = "btn btn-primary";
  classState = true;`;
  styleBinding = `
  <p>Single style binding</p>
            <button [style.width]="widthStr">Button</button>
            <p>Single style binding with units</p>
            <button [style.width.px]="widthUnit">Button</button>
            <p>Multi-style binding</p>
            <button [style]="styleMulti">Button</button>
            <p>You can also pass an object</p>
            <button [style]="styleObj">Button</button>
            <p>You can also pass an Array</p>
            <button [style]="styleArray">Button</button>`;
  styleBindingTS = `
    widthStr = "500px";
  widthUnit = 500;
  styleMulti = "width: 500px; height: 100px";
  styleObj = { width: '500px', height: '100px' };
  styleArray = ['width', '500px'];`;

  subLinks = [
    { name: 'String Interpolation', path: '#string_interpolation' },
    { name: 'Data Binding', path: '#data_binding' },
    { name: 'Event Binding', path: '#event_binding' },
    { name: 'Two-Way Binding', path: '#twoway_binding' },
    { name: 'Attribute Binding', path: '#attribute_binding' },
    { name: 'Class Binding', path: '#class_binding' },
    { name: 'Style Binding', path: '#style_binding' }
  ];

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
